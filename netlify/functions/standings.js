const reply = (c, b, ttl = 3600) => ({
  statusCode: c,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "public, max-age=60",
    "Netlify-CDN-Cache-Control": `public, s-maxage=${ttl}, stale-while-revalidate=7200`
  },
  body: JSON.stringify(b)
});
exports.handler = async (e) => {
  const c = (e.queryStringParameters || {}).comp || "PL";
  if (!/^[A-Z0-9]{2,4}$/.test(c)) return reply(400, { error: "رمز الدوري غير صحيح" }, 0);
  try {
    const r = await fetch(`https://api.football-data.org/v4/competitions/${c}/standings`,
      { headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_KEY || "" } });
    const t = await r.json();
    if (!r.ok) throw new Error(t.message || r.status);
    const groups = (t.standings || []).filter(s => s.type === "TOTAL").map(s => ({
      name: s.group || "",
      rows: s.table.map(x => ({
        p: x.position, n: x.team.shortName || x.team.name, c: x.team.crest, t: x.team.tla,
        pl: x.playedGames, gd: x.goalDifference, pts: x.points
      }))
    }));
    return reply(200, { groups });
  } catch (err) { return reply(502, { error: err.message }, 0); }
};
