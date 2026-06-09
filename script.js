// ============================================================
//  ⚠️ Google Apps Script URL 
// ============================================================
var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxatzLUpR9g3ZgvQcpYGd19xH7xtbZ4Nf_wexyV7Odp6CdUUq6Izsm3ApyEGz9Awl4H/exec";

// 🔗 ফর্ম সাবমিট হওয়ার পর "বন্ধ করুন" বাটনে ক্লিক করলে যে লিংকে যাবে তা এখানে দিন:
var REDIRECT_URL = "YOUR_CUSTOM_LINK_HERE"; 

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

  // 🔄 আপডেট: সর্বনিম্ন এবং সর্বোচ্চ প্রাইস রেঞ্জ বের করা হচ্ছে
  var minPrice = c.plans[0].price;
  var maxPrice = c.plans[c.plans.length - 1].price;
  var priceRange = minPrice.replace('৳', '') + ' - ' + maxPrice;

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
        '<div class="cc-price">৳' + priceRange + '</div>' + // রেঞ্জ অনুযায়ী প্রাইস শো করবে
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

  var topics = c.topics.split(',');
  var topicsHtml = topics.map(function(t) {
    return '<span class="md-topic">' + t.trim() + '</span>';
  }).join('');

  document.getElementById('modalDetail').innerHTML =
    '<p class="md-desc">' + c.desc + '</p>' +

    // 🔄 আপডেট: প্ল্যান সিলেক্টর সেকশনে অ্যানিমেশন ক্লাস (highlight-pulse) যুক্ত করা হয়েছে
    '<div class="plan-selector highlight-pulse" id="planSelectorContainer">' +
      '<label class="plan-label">⚠️ প্রথমে কোর্সের মেয়াদ ও মূল্য সিলেক্ট করুন (বাধ্যতামূলক)</label>' +
      '<div class="plan-cards" id="planCards">' +
        c.plans.map(function(p, idx) {
          // ডিফল্ট কোনোটিই সিলেক্টেড থাকবে না, ইউজারকে ক্লিক করতে হবে
          return '<div class="plan-card" data-plan="' + idx + '" data-course="' + i + '">' +
            '<div class="plan-card-duration">' + p.label + '</div>' +
            '<div class="plan-card-price">' + p.price + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>' +

    '<div class="md-stats">' +
      '<div class="md-stat"><label>নির্ধারিত মূল্য</label><span id="selectedPrice">সিলেক্ট করুন</span></div>' +
      '<div class="md-stat"><label>মেয়াদ</label><span id="selectedDuration">সিলেক্ট করুন</span></div>' +
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

        // সিলেক্ট করার পর অ্যানিমেশন বন্ধ হয়ে যাবে
        document.getElementById('planSelectorContainer').classList.remove('highlight-pulse');

        document.getElementById('selectedPrice').textContent = plan.price;
        document.getElementById('selectedDuration').textContent = plan.duration;

        // ফর্মে সিলেক্টেড প্ল্যান ডাটা সেভ
        document.getElementById('fCourse').setAttribute('data-selected-plan', planIdx);
        document.getElementById('fCourse').setAttribute('data-selected-price', plan.price);
        document.getElementById('fCourse').setAttribute('data-selected-duration', plan.duration);
      });
    });
  }, 50);

  // শুরুতে কোনো প্ল্যান সিলেক্টেড থাকবে না
  document.getElementById('fCourse').value = c.name;
  document.getElementById('fCourse').removeAttribute('data-selected-plan');
  document.getElementById('fCourse').removeAttribute('data-selected-price');
  document.getElementById('fCourse').removeAttribute('data-selected-duration');

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
  var planCheck = document.getElementById('fCourse').getAttribute('data-selected-plan');
  var price  = document.getElementById('fCourse').getAttribute('data-selected-price') || '';
  var duration = document.getElementById('fCourse').getAttribute('data-selected-duration') || '';

  // ⚠️ ভ্যালিডেশন: প্ল্যান সিলেক্ট না করলে ফর্ম সাবমিট হবে না
  if (!planCheck) {
    alert('দয়া করে প্রথমে কোর্সের মেয়াদ ও মূল্য (Plan) সিলেক্ট করুন!');
    document.getElementById('planSelectorContainer').scrollIntoView({ behavior: 'smooth' });
    return;
  }
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

// 🔄 আপডেট: সাকসেস মেসেজ ও কাস্টম রিডাইরেক্ট বাটন জেনারেট করা
function showSuccess() {
  document.getElementById('modalFormWrap').style.display = 'none';
  
  // সাকসেস বক্স এর HTML কাস্টমাইজেশন (লিংক বাটনসহ)
  var successContainer = document.getElementById('modalSuccess');
  successContainer.innerHTML = `
    <div style="text-align:center; padding: 20px;">
      <span style="font-size: 50px;">✅</span>
      <h3 style="color: #059669; margin-top: 10px;">আপনার আবেদনটি সফলভাবে জমা হয়েছে!</h3>
      <p style="color: #64748b; font-size: 14px;">আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
      <a href="${REDIRECT_URL}" class="btn-redirect" id="redirectBtn">বন্ধ করুন ও মূল পেজে যান</a>
    </div>
  `;
  
  successContainer.style.display = 'block';
  
  // "বন্ধ করুন" বাটনে ক্লিক করলে কাস্টম লিংকে রিডাইরেক্ট ও মডাল ক্লোজ হবে
  document.getElementById('redirectBtn').addEventListener('click', function(e) {
    closeModal();
  });
}

// ============================================================
//  NAV SCROLL EFFECT
// ============================================================
window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  if (nav && window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else if (nav) {
    nav.classList.remove('scrolled');
  }
});
