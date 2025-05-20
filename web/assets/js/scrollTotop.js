// انتخاب همه‌ی المان‌هایی که باید انیمیشن بخورن
const elements = document.querySelectorAll('.scrollTop');

// ساخت Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      // اضافه کردن کلاس‌های انیمیشن
      el.classList.add('visible', 'animate');

      // فقط یک بار انیمیشن اجرا بشه
      observer.unobserve(el);
    }
  });
}, {
  threshold: 0.01 // یعنی فقط کمی از المان دیده بشه کافیه
});

// فعال‌سازی Observer برای هر المان
elements.forEach(el => observer.observe(el));
