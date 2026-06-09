// ============================================================
//  ✍️ ১. গ্লোবাল কাস্টমাইজেশন প্যানেল (সব লেখা এখান থেকে পরিবর্তন করুন)
// ============================================================
var GLOBAL_UI_TEXT = {
  // নেভিগেশন বার
  navLogoIcon: "✚",
  navTitle: "পল্লী চিকিৎসা একাডেমি",
  navSub: "Palli Chikitsa Academy",
  navCta: "ভর্তি হন",

  // হিরো সেকশন
  heroBadge: "🏥 বাংলাদেশের বিশ্বস্ত মেডিকেল ট্রেনিং ইনস্টিটিউট",
  heroTitle: "দক্ষ হোন, মানুষের<br/><span class='highlight'>সেবা করুন</span>",
  heroDesc: "আধুনিক চিকিৎসা বিজ্ঞানের প্রশিক্ষণ নিন — গ্রামে-শহরে সুস্বাস্থ্য নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ।",
  stat1Num: "৫০০+", stat1Label: "সফল শিক্ষার্থী",
  stat2Num: "৫টি", stat2Label: "विशेष курс",
  stat3Num: "১০০%", stat3Label: "সার্টিফিকেট",
  heroBtn: "কোর্স দেখুন ↓",

  // курс সেকশন হেডার
  courseSecLabel: "আমাদের курсসমূহ",
  courseSecTitle: "আপনার পছন্দের курсটি বেছে নিন",
  courseSecDesc: "প্রতিটি курс তৈরি করা হয়েছে বাস্তব চিকিৎসা সেবার চাহিদা মাথায় রেখে",

  // টেস্টমোনিয়াল (মতামত) সেকশন হেডার
  testiLabel: "শিক্ষার্থীদের মতামত",
  testiTitle: "তারা কী বলছেন",

  // কন্টাক্ট (যোগাযোগ) সেকশন
  contactLabel: "যোগাযোগ করুন",
  contactTitle: "আমাদের সাথে কথা বলুন",
  contactDesc: "যেকোনো প্রশ্ন বা পরামর্শের জন্য আমরা সর্বদা প্রস্তুত।",
  contactPhone: "01700-000000",
  contactEmail: "info@pallichikitsa.com",
  contactArea: "ঢাকা, বাংলাদেশ",
  contactFormNote: "দ্রুত ভর্তির জন্য যেকোনো курс কার্ডে ক্লিক করুন ↑",
  contactFormBtn: "কোর্স দেখুন →",

  // ফুটার সেকশন
  footTitle: "পল্লী চিকিৎসা একাডেমি",
  footSub: "Palli Chikitsa Academy",
  footCopy: "© ২০২৫ পল্লী চিকিৎসা একাডেমি। সকল অধিকার সংরক্ষিত।",

  // মডাল ফর্মের লেবেলসমূহ
  formHeading: "ভর্তির আবেদন করুন",
  formName: "পূর্ণ নাম *",
  formPhone: "ফোন নম্বর *",
  formEmail: "ইমেইল ঠিকানা",
  formArea: "জেলা / এলাকা *",
  formMsg: "কোনো প্রশ্ন?",
  formBtnSubmit: "আবেদন জমা দিন →",
  formSecNote: "🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ ও গোপনীয়।",

  // সাকসেস মেসেজ ও বাটন
  successTitle: "আবেদন সফলভাবে জমা হয়েছে!",
  successDesc: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।<br/>ধন্যবাদ আপনার আগ্রহের জন্য।",
  successBtnClose: "বন্ধ করুন"
};

// 🏥 ২. আমাদের বৈশিষ্ট্যসমূহ (Why Choose Us) - পরিবর্তনযোগ্য
var whyUsData = [
  { icon: "🎓", title: "অভিজ্ঞ প্রশিক্ষক", desc: "অভিজ্ঞ ডাক্তার ও মেডিকেল विशेषज्ञोंের তত্ত্বাবধানে সরাসরি প্রশিক্ষণ।" },
  { icon: "📜", title: "সরকারি সার্টিফিকেট", desc: "কোর্স সম্পন্নে মান্যতাপ্রাপ্ত সার্টিফিকেট — চাকরি ও প্র্যাকটিসে গ্রহণযোগ্য।" },
  { icon: "📱", title: "অনলাইন + অফলাইন", desc: "ঘরে বসে অনলাইনে ক্লাস করুন বা সরাসরি কেন্দ্রে এসে শিখুন।" },
  { icon: "💰", title: "সাশ্রয়ী মূল্য", desc: "সহজ কিস্তিতে курс ফি পরিশোধের সুবিধা — সবার জন্য সুলভ।" }
];

// 💬 ৩. টেস্টমোনিয়ালস ডেটা (শিক্ষার্থীদের রিভিউ) - পরিবর্তনযোগ্য
var testimonialsData = [
  { avatar: "র", star: "★★★★★", name: "রহিমা বেগম", area: "কুমিল্লা", quote: '"পল্লী চিকিৎসা курсটি আমার জীবন বদলে দিয়েছে। এখন আমি গ্রামে প্রাথমিক চিকিৎসা দিতে পারি।"' },
  { avatar: "আ", star: "★★★★★", name: "আরিফুল ইসলাম", area: "সিলেট", quote: '"মাত্র ৩ মাসে ফার্মেসি курс শেষ করে এখন নিজের দোকান চালাচ্ছি। প্রশিক্ষকরা অসাধারণ।"' },
  { avatar: "স", star: "★★★★★", name: "সালমা খাতুন", area: "রাজশাহী", quote: '"ধাত্রীবিদ্যা курсটি করে আমি এখন মা ও শিশু স্বাস্থ্যসেবায় কাজ করছি। সার্টিফিকেট সবখানে গ্রাহ্য।"' }
];

// ============================================================
//  ⚙️ ৪. ব্যাকএন্ড লিংক কনফিগারেশন (আপনার দেওয়া নতুন লিংকটি এখানে আপডেট করা হয়েছে)
// ============================================================
var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxGP-er3KVFJfo9AjaxRoxoZjBCO5LoDKNk3ckhRJfVorWQzcndLL8MP62BHWYx-QhF/exec";
var REDIRECT_URL = "https://google.com"; // সফল সাবমিটের পর যে কাস্টম লিংকে যাবে, তা এখানে দিন

// ============================================================
//  📚 ৫. কোর্সের ডাইনামিক ডেটা (৩টি প্ল্যান সহ)
// ============================================================
var courses = [
  {
    name: "পল্লী চিকিৎসা курс",
    emoji: "🏥",
    iconBg: "#dcfce7",
    level: "সবার জন্য উপযুক্ত",
    seats: "৪০ আসন",
    desc: "গ্রামীণ জনগোষ্ঠীকে প্রাথমিক স্বাস্থ্যসেবা দেওয়ার জন্য এই курсটি বিশেষভাবে তৈরি। সাধারণ রোগ নির্ণয়, প্রাথমিক চিকিৎসা ও স্বাস্থ্য শিক্ষার ব্যাপারে হাতে-কলমে প্রশিক্ষণ দেওয়া হয়।",
    topics: "প্রাথমিক চিকিৎসা,জ্বর-ঠান্ডা,ডায়রিয়া ব্যবস্থাপনা,রক্তচাপ পরিমাপ,স্বাস্থ্য শিক্ষা",
    tagColor: "#166534",
    tagBg: "#dcfce7",
    plans: [
      { label: "৩ মাস", price: "৳২,৫০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৪,৫০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳১২,০০০", duration: "১ বছর" }
    ]
  },
  {
    name: "মানব চিকিৎসা সহকারী",
    emoji: "👨‍⚕️",
    iconBg: "#dbeafe",
    level: "বিগিনার থেকে অ্যাডভান্স",
    seats: "৩০ আসন",
    desc: "ডাক্তারের সহকারী হিসেবে কাজ করার জন্য সম্পূর্ণ প্রশিক্ষণ। রোগীর ইতিহাস সংগ্রহ, ওষুধ ব্যবস্থাপনা ও ক্লিনিক্যাল পদ্ধতি শেখানো হয়।",
    topics: "রোগী ব্যবস্থাপনা,ওষুধ পরিচিতি,ইনজেকশন প্রদান,ড্রেসিং,ECG পরিচিতি",
    tagColor: "#1e40af",
    tagBg: "#dbeafe",
    plans: [
      { label: "৩ মাস", price: "৳৩,৫০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৬,০০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳১৪,০০০", duration: "১ বছর" }
    ]
  },
  {
    name: "ফার্মেসি ও ওষুধ বিজ্ঞান",
    emoji: "💊",
    iconBg: "#fef9c3",
    level: "বিগিনার ফ্রেন্ডলি",
    seats: "৩৫ আসন",
    desc: "ফার্মেসি পরিচালনার সম্পূর্ণ জ্ঞান অর্জন করুন। ওষুধ সংরক্ষণ, বিতরণ, পার্শ্বপ্রতিক্রিয়া ও ফার্মেসি ব্যবসা পরিচালনা শিখুন।",
    topics: "ওষুধ পরিচিতি,ফার্মেসি আইন,স্টক ম্যানেজমেন্ট,প্রেসক্রিপশন পড়া,গ্রাহক সেবা",
    tagColor: "#854d0e",
    tagBg: "#fef9c3",
    plans: [
      { label: "৩ মাস", price: "৳৩,০০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৫,৫০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳১৩,০০০", duration: "১ বছর" }
    ]
  },
  {
    name: "ধাত্রীবিদ্যা ও মা-শিশু স্বাস্থ্য",
    emoji: "👶",
    iconBg: "#fce7f3",
    level: "মহিলাদের জন্য বিশেষ",
    seats: "২৫ আসন",
    desc: "মা ও শিশু স্বাস্থ্যসেবায় বিশেষজ্ঞ হোন। গর্ভকালীন সেবা, প্রসব সহযোগিতা, নবজাতক পরিচর্যা ও পরিবার পরিকল্পনা বিষয়ে প্রশিক্ষণ।",
    topics: "গর্ভকালীন সেবা,প্রসব সহযোগিতা,নবজাতক পরিচর্যা,স্তন্যদান পরামর্শ,টিকা কার্যক্রম",
    tagColor: "#9d174d",
    tagBg: "#fce7f3",
    plans: [
      { label: "৩ মাস", price: "৳২,৮০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৫,০০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳১১,০০০", duration: "১ বছর" }
    ]
  },
  {
    name: "প্যারামেডিক ও জরুরি সেবা",
    emoji: "🚑",
    iconBg: "#fee2e2",
    level: "ইন্টারমিডিয়েট",
    seats: "২০ আসন",
    desc: "জরুরি চিকিৎসা সেবায় দক্ষ হয়ে উঠুন। দুর্ঘটনা, হার্ট অ্যাটাক, স্ট্রোক ও জরুরি পরিস্থিতি মোকাবেলায় বিশেষ প্রশিক্ষণ।",
    topics: "CPR ও AED,ট্রমা ম্যানেজমেন্ট,অ্যাম্বুলেন্স সেবা,জরুরি ওষুধ,হাসপাতাল রেফারেল",
    tagColor: "#991b1b",
    tagBg: "#fee2e2",
    plans: [
      { label: "৩ মাস", price: "৳৪,০০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৭,৫০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳১৬,০০০", duration: "১ বছর" }
    ]
  }
];

// ============================================================
//  🚀 ৬. অ্যাপ্লিকেশন কোর ইঞ্জিন (লজিক প্রসেসিং)
// ============================================================

// গ্লোবাল টেক্সট রেন্ডারিং
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('txtNavLogoIcon').textContent = GLOBAL_UI_TEXT.navLogoIcon;
  document.getElementById('txtNavTitle').textContent = GLOBAL_UI_TEXT.navTitle;
  document.getElementById('txtNavSub').textContent = GLOBAL_UI_TEXT.navSub;
  document.getElementById('txtNavCta').textContent = GLOBAL_UI_TEXT.navCta;
  document.getElementById('txtHeroBadge').textContent = GLOBAL_UI_TEXT.heroBadge;
  document.getElementById('txtHeroTitle').innerHTML = GLOBAL_UI_TEXT.heroTitle;
  document.getElementById('txtHeroDesc').textContent = GLOBAL_UI_TEXT.heroDesc;
  document.getElementById('txtStat1Num').textContent = GLOBAL_UI_TEXT.stat1Num;
  document.getElementById('txtStat1Label').textContent = GLOBAL_UI_TEXT.stat1Label;
  document.getElementById('txtStat2Num').textContent = GLOBAL_UI_TEXT.stat2Num;
  document.getElementById('txtStat2Label').textContent = GLOBAL_UI_TEXT.stat2Label;
  document.getElementById('txtStat3Num').textContent = GLOBAL_UI_TEXT.stat3Num;
  document.getElementById('txtStat3Label').textContent = GLOBAL_UI_TEXT.stat3Label;
  document.getElementById('txtHeroBtn').innerHTML = GLOBAL_UI_TEXT.heroBtn;
  document.getElementById('txtCourseSecLabel').textContent = GLOBAL_UI_TEXT.courseSecLabel;
  document.getElementById('txtCourseSecTitle').textContent = GLOBAL_UI_TEXT.courseSecTitle;
  document.getElementById('txtCourseSecDesc').textContent = GLOBAL_UI_TEXT.courseSecDesc;
  document.getElementById('txtTestiLabel').textContent = GLOBAL_UI_TEXT.testiLabel;
  document.getElementById('txtTestiTitle').textContent = GLOBAL_UI_TEXT.testiTitle;
  document.getElementById('txtContactLabel').textContent = GLOBAL_UI_TEXT.contactLabel;
  document.getElementById('txtContactTitle').textContent = GLOBAL_UI_TEXT.contactTitle;
  document.getElementById('txtContactDesc').textContent = GLOBAL_UI_TEXT.contactDesc;
  document.getElementById('txtContactPhone').textContent = GLOBAL_UI_TEXT.contactPhone;
  document.getElementById('txtContactEmail').textContent = GLOBAL_UI_TEXT.contactEmail;
  document.getElementById('txtContactArea').textContent = GLOBAL_UI_TEXT.contactArea;
  document.getElementById('txtContactFormNote').textContent = GLOBAL_UI_TEXT.contactFormNote;
  document.getElementById('txtContactFormBtn').textContent = GLOBAL_UI_TEXT.contactFormBtn;
  document.getElementById('txtFootTitle').textContent = GLOBAL_UI_TEXT.footTitle;
  document.getElementById('txtFootSub').textContent = GLOBAL_UI_TEXT.footSub;
  document.getElementById('txtFootCopy').textContent = GLOBAL_UI_TEXT.footCopy;
  document.getElementById('txtFormHeading').textContent = GLOBAL_UI_TEXT.formHeading;
  document.getElementById('lblFormName').innerHTML = GLOBAL_UI_TEXT.formName;
  document.getElementById('lblFormPhone').innerHTML = GLOBAL_UI_TEXT.formPhone;
  document.getElementById('lblFormEmail').textContent = GLOBAL_UI_TEXT.formEmail;
  document.getElementById('lblFormArea').innerHTML = GLOBAL_UI_TEXT.formArea;
  document.getElementById('lblFormMsg').textContent = GLOBAL_UI_TEXT.formMsg;
  document.getElementById('txtFormSecNote').textContent = GLOBAL_UI_TEXT.formSecNote;
  document.getElementById('btnSubmit').textContent = GLOBAL_UI_TEXT.formBtnSubmit;

  // Why Us রেন্ডার
  var whyHtml = whyUsData.map(function(x) {
    return '<div class="why-card"><div class="why-icon">'+x.icon+'</div><h3>'+x.title+'</h3><p>'+x.desc+'</p></div>';
  }).join('');
  document.getElementById('whyGrid').innerHTML = whyHtml;

  // রিভিউ রেন্ডার
  var testiHtml = testimonialsData.map(function(x) {
    return '<div class="tcard"><div class="tcard-stars">'+x.star+'</div><p>'+x.quote+'</p><div class="tcard-author"><div class="tcard-avatar">'+x.avatar+'</div><div><b>'+x.name+'</b><span>'+x.area+'</span></div></div></div>';
  }).join('');
  document.getElementById('testimonialsGrid').innerHTML = testiHtml;
});

// курс গ্রিড বিল্ডআপ
var grid = document.getElementById('coursesGrid');
courses.forEach(function(c, i) {
  var topics = c.topics.split(',');
  var tagsHtml = topics.slice(0,4).map(function(t) {
    return '<span class="cc-tag" style="background:' + c.tagBg + ';color:' + c.tagColor + '">' + t.trim() + '</span>';
  }).join('');

  var minPrice = c.plans[0].price;
  var maxPrice = c.plans[c.plans.length - 1].price;
  var priceRange = minPrice + " - " + maxPrice.replace('৳', '');

  var card = document.createElement('div');
  card.className = 'course-card';
  card.innerHTML =
    '<div class="cc-top">' +
      '<div class="cc-icon" style="background:' + c.iconBg + '">' + c.emoji + '</div>' +
      '<div class="cc-info"><h3>' + c.name + '</h3><div class="cc-level">' + c.level + '</div></div>' +
    '</div>' +
    '<div class="cc-body">' +
      '<p class="cc-desc">' + c.desc.substring(0, 120) + '...</p>' +
      '<div class="cc-tags">' + tagsHtml + '</div>' +
    '</div>' +
    '<div class="cc-footer">' +
      '<div class="cc-price-wrap"><div class="cc-price">' + priceRange + '</div><div class="cc-dur">' + c.plans.length + 'টি প্ল্যান উপলব্ধ</div></div>' +
      '<button class="cc-enroll">ভর্তি হন</button>' +
    '</div>';

  card.addEventListener('click', function() { openModal(i); });
  grid.appendChild(card);
});

// মডাল ওপেন লজিক
function openModal(i) {
  var c = courses[i];
  document.getElementById('modalIcon').textContent = c.emoji;
  document.getElementById('modalIcon').style.background = c.iconBg;
  document.getElementById('modalTitle').textContent = c.name;
  document.getElementById('modalMeta').textContent = c.level + ' · ' + c.seats;

  // অটোমেটিক ব্যাকগ্রাউন্ড курс ভ্যালু অ্যাসাইনমেন্ট
  document.getElementById('fCourse').value = c.name;

  var topicsHtml = c.topics.split(',').map(function(t) { return '<span class="md-topic">' + t.trim() + '</span>'; }).join('');

  document.getElementById('modalDetail').innerHTML =
    '<p class="md-desc">' + c.desc + '</p>' +
    '<div class="plan-selector highlight-pulse" id="planSelectorContainer">' +
      '<label class="plan-label">⚠️ প্রথমে কোর্সের মেয়াদ ও মূল্য সিলেক্ট করুন (বাধ্যতামূলক)</label>' +
      '<div class="plan-cards">' +
        c.plans.map(function(p, idx) {
          return '<div class="plan-card" data-plan="' + idx + '" data-course="' + i + '">' +
            '<div class="plan-card-duration">' + p.label + '</div>' +
            '<div class="plan-card-price">' + p.price + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>' +
    '<div class="md-stats">' +
      '<div class="md-stat"><label>নির্বাচিত মূল্য</label><span id="selectedPrice" style="color:#ef4444">সিলেক্ট করুন</span></div>' +
      '<div class="md-stat"><label>মেয়াদ</label><span id="selectedDuration" style="color:#ef4444">সিলেক্ট করুন</span></div>' +
      '<div class="md-stat"><label>লেভেল</label><span>' + c.level + '</span></div>' +
      '<div class="md-stat"><label>আসন সংখ্যা</label><span>' + c.seats + '</span></div>' +
    '</div>' +
    '<div class="md-topics">' + topicsHtml + '</div>';

  // প্ল্যান কার্ড ট্রিপ ইভেন্ট
  setTimeout(function() {
    document.querySelectorAll('.plan-card').forEach(function(el) {
      el.addEventListener('click', function() {
        var courseIdx = parseInt(this.getAttribute('data-course'));
        var planIdx = parseInt(this.getAttribute('data-plan'));
        var plan = courses[courseIdx].plans[planIdx];

        document.querySelectorAll('.plan-card').forEach(function(p) { p.classList.remove('selected'); });
        this.classList.add('selected');
        document.getElementById('planSelectorContainer').classList.remove('highlight-pulse');

        var priceEl = document.getElementById('selectedPrice');
        var durEl = document.getElementById('selectedDuration');
        priceEl.textContent = plan.price; priceEl.style.color = '#047857';
        durEl.textContent = plan.duration; durEl.style.color = '#1e293b';

        document.getElementById('fCourse').setAttribute('data-selected-plan', planIdx);
        document.getElementById('fCourse').setAttribute('data-selected-price', plan.price);
        document.getElementById('fCourse').setAttribute('data-selected-duration', plan.duration);
      });
    });
  }, 50);

  // ক্লিনিং ফর্ম স্টেট
  document.getElementById('fCourse').removeAttribute('data-selected-plan');
  document.getElementById('fCourse').removeAttribute('data-selected-price');
  document.getElementById('fCourse').removeAttribute('data-selected-duration');
  document.getElementById('modalFormWrap').style.display = 'block';
  document.getElementById('modalSuccess').style.display = 'none';
  document.getElementById('btnSubmit').textContent = GLOBAL_UI_TEXT.formBtnSubmit;
  document.getElementById('btnSubmit').disabled = false;
  document.getElementById('fName').value = '';
  document.getElementById('fPhone').value = '';
  document.getElementById('fEmail').value = '';
  document.getElementById('fArea').value = '';
  document.getElementById('fMsg').value = '';

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', function(e) { if (e.target === this) closeModal(); });

// ============================================================
//  FORM SUBMISSION WITH VALIDATION
// ============================================================
document.getElementById('btnSubmit').addEventListener('click', function() {
  var name  = document.getElementById('fName').value.trim();
  var phone = document.getElementById('fPhone').value.trim();
  var area  = document.getElementById('fArea').value.trim();
  var course = document.getElementById('fCourse').value;
  var planCheck = document.getElementById('fCourse').getAttribute('data-selected-plan');
  var price  = document.getElementById('fCourse').getAttribute('data-selected-price') || '';
  var duration = document.getElementById('fCourse').getAttribute('data-selected-duration') || '';

  if (!planCheck) {
    alert('দয়া করে প্রথমে কোর্সের মেয়াদ ও মূল্য (Plan) সিলেক্ট করুন!');
    document.getElementById('planSelectorContainer').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  if (!name) { alert('অনুগ্রহ করে আপনার নাম লিখুন।'); document.getElementById('fName').focus(); return; }
  if (!phone || phone.length < 11) { alert('সঠিক ফোন নম্বর দিন।'); document.getElementById('fPhone').focus(); return; }
  if (!area) { alert('অনুগ্রহ করে আপনার জেলা বা এলাকার নাম লিখুন।'); document.getElementById('fArea').focus(); return; }

  var btn = this;
  btn.textContent = '⏳ পাঠানো হচ্ছে...';
  btn.disabled = true;

  var payload = {
    name:    name,
    phone:   phone,
    email:   document.getElementById('fEmail').value.trim(),
    course:  course,
    price:   price,
    duration: duration,
    area:    area,
    message: document.getElementById('fMsg').value.trim()
  };

  if (SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE" || !SCRIPT_URL) {
    setTimeout(function() { showSuccess(); }, 800);
    return;
  }

  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(function() { showSuccess(); }).catch(function() { showSuccess(); });
});

function showSuccess() {
  document.getElementById('modalFormWrap').style.display = 'none';
  var successBox = document.getElementById('modalSuccess');
  
  successBox.innerHTML = 
    '<div class="success-circle">✓</div>' +
    '<h3>' + GLOBAL_UI_TEXT.successTitle + '</h3>' +
    '<p>' + GLOBAL_UI_TEXT.successDesc + '</p>' +
    '<a href="' + REDIRECT_URL + '" class="btn-redirect" id="redirectBtn">' + GLOBAL_UI_TEXT.successBtnClose + '</a>';
    
  successBox.style.display = 'block';
  document.getElementById('redirectBtn').addEventListener('click', function() { closeModal(); });
}

window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  if (window.scrollY > 20) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
});
