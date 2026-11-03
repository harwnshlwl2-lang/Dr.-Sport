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
  // رابط خاص لكل مباريات بطولة (يُستخدم إن لم يوجد رابط للمباراة نفسها). مثال: CL: "https://.../live.m3u8"
  compStreams: { CL: "", PL: "", PD: "", SA: "", BL1: "", FL1: "", ACL: "" },

  // الروابط التي تنتهي بـ .m3u8 تعمل في المشغل الخاص بالموقع تلقائياً، وغيرها (.html) في إطار

  // إن كان مشغلك يستقبل الرابط كمعامل ضع قالبه هنا، مثال: "https://.../Live2.php?url={URL}"
  playerTemplate: "",
  // الرابط التلقائي عند غياب رابط المباراة
  fallbackStream: "https://tv1.dzmatch.site/p/elbarca.html",

  // أسماء عربية (الاسم الإنجليزي كما يظهر: الاسم العربي) — أضف ما تشاء
  names: {
    "Real Madrid":"ريال مدريد","Barça":"برشلونة","Barcelona":"برشلونة","Atleti":"أتلتيكو مدريد","Man City":"مانشستر سيتي",
    "Man United":"مانشستر يونايتد","Liverpool":"ليفربول","Arsenal":"أرسنال","Chelsea":"تشيلسي","Tottenham":"توتنهام",
    "Newcastle":"نيوكاسل","Everton":"إيفرتون","Bayern":"بايرن ميونخ","Dortmund":"دورتموند","Leverkusen":"ليفركوزن",
    "PSG":"باريس سان جيرمان","Marseille":"مارسيليا","Monaco":"موناكو","Juventus":"يوفنتوس","Milan":"ميلان","Inter":"إنتر",
    "Napoli":"نابولي","Roma":"روما","Lazio":"لاتسيو","Atalanta":"أتالانتا","Sevilla":"إشبيلية","Valencia":"فالنسيا",
    "Villarreal":"فياريال","Athletic":"أتلتيك بلباو","Benfica":"بنفيكا","Porto":"بورتو","Ajax":"أياكس","PSV":"آيندهوفن",
    "Galatasaray":"غلطة سراي","Al Nassr FC":"النصر","Al Ahli":"الأهلي","Al Ittihad":"الاتحاد","Al Hilal":"الهلال",
    "Al Qadsiah":"القادسية","Al-Sadd":"السد","Al-Gharafa":"الغرافة","Al-Ain":"العين","Al-Wasl":"الوصل",
    "Al Quwa Al Jawiya":"القوة الجوية","Pakhtakor Tashkent":"باختاكور","Tractor":"تراكتور","Neftchi Fargona":"نفتشي فرغانة"
  },
  // شعارات: "الاسم الإنجليزي": "رابط صورة الشعار" (للفرق التي لا شعار لها، خاصة دوري آسيا)
  crests: {
    // "Al Nassr FC": "https://.../nassr.png"
  },

  // الإعلانات لاحقاً: ألصق الكود بين علامتي الاقتباس المائلة `
  ads: { top: ``, middle: ``, watch: ``, player: `` }
};
