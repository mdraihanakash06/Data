// ============================================================
//  ⚠️ Google Apps Script URL
// ============================================================
var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxatzLUpR9g3ZgvQcpYGd19xH7xtbZ4Nf_wexyV7Odp6CdUUq6Izsm3ApyEGz9Awl4H/exec";

// ============================================================
//  কোর্সের ডেটা — এখানে এডিট করুন
// ============================================================
var courses = [
  {
    name: "পল্লী চিকিৎসা কোর্স",
    emoji: "🏥",
    iconBg: "#dcfce7",
    tagColor: "#166534",
    tagBg: "#dcfce7",
    shortDesc: "গ্রামীণ জনগোষ্ঠীকে প্রাথমিক স্বাস্থ্যসেবা দেওয়ার সম্পূর্ণ প্রশিক্ষণ।",
    desc: "গ্রামীণ জনগোষ্ঠীকে প্রাথমিক স্বাস্থ্যসেবা দেওয়ার জন্য এই কোর্সটি বিশেষভাবে তৈরি। সাধারণ রোগ নির্ণয়, প্রাথমিক চিকিৎসা ও স্বাস্থ্য শিক্ষার ব্যাপারে হাতে-কলমে প্রশিক্ষণ দেওয়া হয়।",
    topics: "প্রাথমিক চিকিৎসা,জ্বর-ঠান্ডা,ডায়রিয়া ব্যবস্থাপনা,রক্তচাপ পরিমাপ,স্বাস্থ্য শিক্ষা",
    seats: "৪০ আসন",
    plans: [
      { label: "৩ মাস", price: "৳২,৫০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৪,৫০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳৮,০০০", duration: "১ বছর" }
    ]
  },
  {
    name: "মানব চিকিৎসা সহকারী",
    emoji: "👨‍⚕️",
    iconBg: "#dbeafe",
    tagColor: "#1e40af",
    tagBg: "#dbeafe",
    shortDesc: "ডাক্তারের সহকারী হিসেবে কাজ করার পূর্ণ প্রশিক্ষণ কোর্স।",
    desc: "ডাক্তারের সহকারী হিসেবে কাজ করার জন্য সম্পূর্ণ প্রশিক্ষণ। রোগীর ইতিহাস সংগ্রহ, ওষুধ ব্যবস্থাপনা ও ক্লিনিক্যাল পদ্ধতি শেখানো হয়।",
    topics: "রোগী ব্যবস্থাপনা,ওষুধ পরিচিতি,ইনজেকশন প্রদান,ড্রেসিং,ECG পরিচিতি",
    seats: "৩০ আসন",
    plans: [
      { label: "৩ মাস", price: "৳২,৮০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৫,০০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳৯,০০০", duration: "১ বছর" }
    ]
  },
  {
    name: "ফার্মেসি ও ওষুধ বিজ্ঞান",
    emoji: "💊",
    iconBg: "#fef9c3",
    tagColor: "#854d0e",
    tagBg: "#fef9c3",
    shortDesc: "ফার্মেসি পরিচালনা ও ওষুধ বিজ্ঞানের হাতে-কলমে কোর্স।",
    desc: "ফার্মেসি পরিচালনার সম্পূর্ণ জ্ঞান অর্জন করুন। ওষুধ সংরক্ষণ, বিতরণ, পার্শ্বপ্রতিক্রিয়া ও ফার্মেসি ব্যবসা পরিচালনা শিখুন।",
    topics: "ওষুধ পরিচিতি,ফার্মেসি আইন,স্টক ম্যানেজমেন্ট,প্রেসক্রিপশন পড়া,গ্রাহক সেবা",
    seats: "৩৫ আসন",
    plans: [
      { label: "৩ মাস", price: "৳৩,০০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৫,৫০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳৯,৫০০", duration: "১ বছর" }
    ]
  },
  {
    name: "ধাত্রীবিদ্যা ও মা-শিশু স্বাস্থ্য",
    emoji: "👶",
    iconBg: "#fce7f3",
    tagColor: "#9d174d",
    tagBg: "#fce7f3",
    shortDesc: "মা ও শিশু স্বাস্থ্যসেবায় বিশেষজ্ঞ হওয়ার বিশেষ কোর্স।",
    desc: "মা ও শিশু স্বাস্থ্যসেবায় বিশেষজ্ঞ হোন। গর্ভকালীন সেবা, প্রসব সহযোগিতা, নবজাতক পরিচর্যা ও পরিবার পরিকল্পনা বিষয়ে প্রশিক্ষণ।",
    topics: "গর্ভকালীন সেবা,প্রসব সহযোগিতা,নবজাতক পরিচর্যা,স্তন্যদান পরামর্শ,টিকা কার্যক্রম",
    seats: "২৫ আসন",
    plans: [
      { label: "৩ মাস", price: "৳২,৮০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৫,০০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳৮,৫০০", duration: "১ বছর" }
    ]
  },
  {
    name: "প্যারামেডিক ও জরুরি সেবা",
    emoji: "🚑",
    iconBg: "#fee2e2",
    tagColor: "#991b1b",
    tagBg: "#fee2e2",
    shortDesc: "জরুরি চিকিৎসা ও দুর্ঘটনা মোকাবেলায় বিশেষ প্রশিক্ষণ কোর্স।",
    desc: "জরুরি চিকিৎসা সেবায় দক্ষ হয়ে উঠুন। দুর্ঘটনা, হার্ট অ্যাটাক, স্ট্রোক ও জরুরি পরিস্থিতি মোকাবেলায় বিশেষ প্রশিক্ষণ।",
    topics: "CPR ও AED,ট্রমা ম্যানেজমেন্ট,অ্যাম্বুলেন্স সেবা,জরুরি ওষুধ,হাসপাতাল রেফারেল",
    seats: "২০ আসন",
    plans: [
      { label: "৩ মাস", price: "৳৩,৫০০", duration: "৩ মাস" },
      { label: "৬ মাস", price: "৳৬,০০০", duration: "৬ মাস" },
      { label: "১ বছর", price: "৳১০,০০০", duration: "১ বছর" }
    ]
  }
];

// ============================================================
//  কোর্স কার্ড রেন্ডার
// ============================================================
var grid = document.getElementById('coursesGrid');
var courseSelect = document.getElementById('fCourse');

courses.forEach(function(c, i) {
  var topics = c.topics.split(',');
  var tagsHtml = topics.slice(0,4).map(function(t) {
    return '<span class="cc-tag" style="background:' + c.tagBg + ';color:' + c.tagColor + '">' + t.trim() + '</span>';
  }).join('');

  // কার্ডে প্রথম plan এর প্রাইস দেখাবে
  var startPrice = c.plans[0].price;

  var card = document.createElement('div');
  card.className = 'course-card';
  card.setAttribute('data-index', i);
  card.innerHTML =
    '<div class="cc-top">' +
      '<div class="cc-icon" style="background:' + c.iconBg + '">' + c.emoji + '</div>' +
      '<div class="cc-info"><h3>' + c.name + '</h3><div class="cc-level">' + c.shortDesc + '</div></div>' +
    '</div>' +
    '<div class="cc-body">' +
      '<p class="cc-desc">' + c.desc.substring(0, 110) + '...</p>' +
      '<div class="cc-tags">' + tagsHtml + '</div>' +
    '</div>' +
    '<div class="cc-footer">' +
      '<div class="cc-price-wrap">' +
        '<div class="cc-price">' + startPrice + ' থেকে</div>' +
        '<div class="cc-dur">' + c.plans.length + 'টি প্ল্যান উপলব্ধ</div>' +
      '</div>' +
      '<button class="cc-enroll" data-index="' + i + '">ভর্তি হন</button>' +
    '</div>';

  card.querySelector('.cc-enroll').addEventListener('click', function(e) {
    e.stopPropagation();
    openModal(i);
  });
  card.addEventListener('click', function() { openModal(i); });
  grid.appendChild(card);

  var opt = document.createElement('option');
  opt.value = c.name;
  opt.textContent = c.name;
  courseSelect.appendChild(opt);
});

// ============================================================
//  MODAL
// ============================================================
function openModal(i) {
  var c = courses[i];

  document.getElementById('modalIcon').textContent = c.emoji;
  document.getElementById('modalIcon').style.background = c.iconBg;
  document.getElementById('modalTitle').textContent = c.name;
  document.getElementById('modalMeta').textContent = c.seats + ' · ' + c.plans.length + 'টি প্ল্যান';

  // Topics
  var topics = c.topics.split(',');
  var topicsHtml = topics.map(function(t) {
    return '<span class="md-topic">' + t.trim() + '</span>';
  }).join('');

  // Plan Dropdown বানাও
  var planOptions = c.plans.map(function(p, idx) {
    return '<option value="' + idx + '">' + p.label + ' — ' + p.price + '</option>';
  }).join('');

  document.getElementById('modalDetail').innerHTML =
    '<p class="md-desc">' + c.desc + '</p>' +

    // প্ল্যান সিলেক্টর
    '<div class="plan-selector">' +
      '<label class="plan-label">📅 কোর্সের মেয়াদ ও মূল্য বেছে নিন</label>' +
      '<div class="plan-cards" id="planCards">' +
        c.plans.map(function(p, idx) {
          return '<div class="plan-card' + (idx === 0 ? ' selected' : '') + '" data-plan="' + idx + '" data-course="' + i + '">' +
            '<div class="plan-card-duration">' + p.label + '</div>' +
            '<div class="plan-card-price">' + p.price + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>' +

    '<div class="md-stats">' +
      '<div class="md-stat"><label>নির্বাচিত মূল্য</label><span id="selectedPrice">' + c.plans[0].price + '</span></div>' +
      '<div class="md-stat"><label>মেয়াদ</label><span id="selectedDuration">' + c.plans[0].duration + '</span></div>' +
      '<div class="md-stat"><label>লেভেল</label><span>' + (c.level || 'সবার জন্য') + '</span></div>' +
      '<div class="md-stat"><label>আসন সংখ্যা</label><span>' + c.seats + '</span></div>' +
    '</div>' +

    '<div class="md-topics">' + topicsHtml + '</div>';

  // Plan Card ক্লিক ইভেন্ট
  setTimeout(function() {
    document.querySelectorAll('.plan-card').forEach(function(el) {
      el.addEventListener('click', function() {
        var courseIdx = parseInt(this.getAttribute('data-course'));
        var planIdx = parseInt(this.getAttribute('data-plan'));
        var plan = courses[courseIdx].plans[planIdx];

        document.querySelectorAll('.plan-card').forEach(function(p) { p.classList.remove('selected'); });
        this.classList.add('selected');

        document.getElementById('selectedPrice').textContent = plan.price;
        document.getElementById('selectedDuration').textContent = plan.duration;

        // ফর্মে সিলেক্টেড প্ল্যান সেভ করো
        document.getElementById('fCourse').setAttribute('data-selected-plan', planIdx);
        document.getElementById('fCourse').setAttribute('data-selected-price', plan.price);
        document.getElementById('fCourse').setAttribute('data-selected-duration', plan.duration);
      });
    });
  }, 50);

  // ডিফল্ট সিলেক্টেড প্ল্যান
  document.getElementById('fCourse').value = c.name;
  document.getElementById('fCourse').setAttribute('data-selected-plan', '0');
  document.getElementById('fCourse').setAttribute('data-selected-price', c.plans[0].price);
  document.getElementById('fCourse').setAttribute('data-selected-duration', c.plans[0].duration);

  document.getElementById('modalFormWrap').style.display = 'block';
  document.getElementById('modalSuccess').style.display = 'none';
  document.getElementById('btnSubmit').textContent = 'আবেদন জমা দিন →';
  document.getElementById('btnSubmit').disabled = false;
  document.getElementById('fName').value = '';
  document.getElementById('fPhone').value = '';
  document.getElementById('fEmail').value = '';
  document.getElementById('fArea').value = '';
  document.getElementById('fMsg').value = '';

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  document.querySelector('.modal-box').scrollTop = 0;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// ============================================================
//  FORM SUBMIT → Google Sheets
// ============================================================
document.getElementById('btnSubmit').addEventListener('click', function() {
  var name   = document.getElementById('fName').value.trim();
  var phone  = document.getElementById('fPhone').value.trim();
  var course = document.getElementById('fCourse').value;
  var price  = document.getElementById('fCourse').getAttribute('data-selected-price') || '';
  var duration = document.getElementById('fCourse').getAttribute('data-selected-duration') || '';

  if (!name)  { alert('অনুগ্রহ করে আপনার নাম লিখুন।'); document.getElementById('fName').focus(); return; }
  if (!phone || phone.length < 11) { alert('সঠিক ফোন নম্বর দিন।'); document.getElementById('fPhone').focus(); return; }
  if (!course) { alert('একটি কোর্স বেছে নিন।'); return; }

  var btn = this;
  btn.textContent = '⏳ পাঠানো হচ্ছে...';
  btn.disabled = true;

  var payload = {
    name:     name,
    phone:    phone,
    email:    document.getElementById('fEmail').value.trim(),
    course:   course,
    price:    price,
    duration: duration,
    area:     document.getElementById('fArea').value.trim(),
    message:  document.getElementById('fMsg').value.trim()
  };

  if (!SCRIPT_URL || SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE") {
    setTimeout(function() { showSuccess(); }, 800);
    return;
  }

  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(function() {
    showSuccess();
  }).catch(function() {
    showSuccess();
  });
});

function showSuccess() {
  document.getElementById('modalFormWrap').style.display = 'none';
  document.getElementById('modalSuccess').style.display = 'block';
}

// ============================================================
//  NAV SCROLL EFFECT
// ============================================================
window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
