// ===== كل ما تعدّله يكون هنا فقط =====
window.CONFIG = {
  siteName: "سرمد سبورت",
  tagline: "مباريات اليوم والبث المباشر",
  whatsapp: "967775393823",
  social: {
    telegram:  "https://t.me/YOUR_CHANNEL",      // غيّر الرابط
    instagram: "https://instagram.com/YOUR_ACCOUNT",
    facebook:  "https://facebook.com/YOUR_PAGE"
  },
  telegramChannel: "https://t.me/YOUR_CHANNEL",

  // صورة البطل (تظهر فقط عند وضع رابط الصورة)
  hero: {
    image: "",      // رابط صورتك
    title: "",      // مثال: الكلاسيكو
    kickoff: "",    // مثال: 2026-11-08T20:00:00Z  (للعدّاد التنازلي)
    matchId: ""     // رقم المباراة لزر التشغيل (يظهر بإضافة ?admin=1 لرابط الموقع)
  },

  // روابط البث: "رقم المباراة": "رابط .html"
  streams: {
    // "fd123456": "https://example.com/stream.html"
  },
  // إن كان مشغلك يستقبل الرابط كمعامل ضع قالبه هنا، مثال: "https://.../Live2.php?url={URL}"
  playerTemplate: "",
  // الرابط التلقائي عند غياب رابط المباراة
  fallbackStream: "https://tv1.dzmatch.site/p/elbarca.html",

  // الإعلانات لاحقاً: ألصق الكود بين علامتي الاقتباس المائلة `
  ads: { top: ``, middle: ``, watch: `` }
};
