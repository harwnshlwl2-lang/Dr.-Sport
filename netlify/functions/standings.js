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
  try {
    const r = await fetch(`https://api.football-data.org/v4/competitions/${c}/scorers?limit=20`,
      { headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_KEY || "" } });
    const t = await r.json();
    if (!r.ok) throw new Error(t.message || r.status);
    return reply(200, { scorers: t.scorers || [] });
  } catch (err) { return reply(502, { error: err.message }, 0); }
};
