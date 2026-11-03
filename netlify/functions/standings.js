exports.handler = async (e) => {
  const c = (e.queryStringParameters || {}).comp || "PL";
  const h = (code, body, ttl = 3600) => ({
    statusCode: code,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60",
      "Netlify-CDN-Cache-Control": `public, s-maxage=${ttl}, stale-while-revalidate=7200`
    },
    body: JSON.stringify(body)
  });
  if (!/^[A-Z0-9]{2,4}$/.test(c)) return h(400, { error: "رمز الدوري غير صحيح" }, 0);
  try {
    const r = await fetch(`https://api.football-data.org/v4/competitions/${c}/scorers?limit=20`,
      { headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_KEY || "" } });
    const t = await r.json();
    if (!r.ok) throw new Error(t.message || r.status);
    const rows = (t.scorers || []).map(s => ({
      p: s.player.name, n: s.team.shortName || s.team.name, c: s.team.crest, t: s.team.tla, g: s.goals
    }));
    return h(200, { rows });
  } catch (err) { return h(502, { error: err.message }, 0); }
};
