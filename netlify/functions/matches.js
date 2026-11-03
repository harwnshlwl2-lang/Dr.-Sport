const FD = "https://api.football-data.org/v4";
const CODES = "PL,PD,SA,BL1,FL1,CL";
const reply = (c, b, ttl = 120) => ({
  statusCode: c,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "public, max-age=30",
    "Netlify-CDN-Cache-Control": `public, s-maxage=${ttl}, stale-while-revalidate=300`
  },
  body: JSON.stringify(b)
});
const team = (n, c, t) => ({ n, c, t });

exports.handler = async (e) => {
  const d = (e.queryStringParameters || {}).date || new Date().toISOString().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) return reply(400, { error: "التاريخ غير صحيح" }, 0);
  const out = [], notes = [];

  try {
    const r = await fetch(`${FD}/matches?dateFrom=${d}&dateTo=${d}&competitions=${CODES}`,
      { headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_KEY || "" } });
    const t = await r.json();
    if (!r.ok) throw new Error(t.message || r.status);
    for (const m of t.matches || []) out.push({
      id: "fd" + m.id, comp: m.competition.code, utc: m.utcDate, status: m.status,
      minute: m.minute ?? null, hs: m.score?.fullTime?.home ?? null, as: m.score?.fullTime?.away ?? null,
      home: team(m.homeTeam.shortName || m.homeTeam.name, m.homeTeam.crest, m.homeTeam.tla),
      away: team(m.awayTeam.shortName || m.awayTeam.name, m.awayTeam.crest, m.awayTeam.tla)
    });
  } catch (err) { notes.push("football-data: " + err.message); }

  // دوري أبطال آسيا من OpenFootAPI (اختياري)
  if (process.env.OPENFOOT_API_KEY) {
    try {
      const r = await fetch(`https://openfootapi.com/v1/matches?date=${d}&competition=comp_afc_champions_league`,
        { headers: { Accept: "application/json", Authorization: "Bearer " + process.env.OPENFOOT_API_KEY } });
      const t = await r.json();
      if (!r.ok) throw new Error(t.error?.message || r.status);
      for (const m of t.data || []) {
        if (m.competitionId !== "comp_afc_champions_league") continue;
        const s = (m.status || "").toLowerCase();
        const st = /fin|^ft/.test(s) ? "FINISHED" : (s === "live" || (m.period && !/ft/i.test(m.period))) ? "IN_PLAY" : "TIMED";
        out.push({
          id: "of_" + m.id, comp: "ACL", utc: m.kickoffAt, status: st, minute: m.minute ?? null,
          hs: m.score?.home ?? null, as: m.score?.away ?? null,
          home: team(m.homeTeam.shortName || m.homeTeam.name, m.homeTeam.logoUrl, m.homeTeam.code),
          away: team(m.awayTeam.shortName || m.awayTeam.name, m.awayTeam.logoUrl, m.awayTeam.code)
        });
      }
    } catch (err) { notes.push("openfoot: " + err.message); }
  }
  out.sort((a, b) => a.utc.localeCompare(b.utc));
  return reply(200, { matches: out, notes });
};
