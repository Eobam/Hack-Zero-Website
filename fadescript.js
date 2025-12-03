document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-section');
  
    sections.forEach(sec => sec.dataset.justReset = "false");
  
    window.addEventListener("scroll", () => {
      sections.forEach(section => {
  
        if (section.classList.contains('no-fade')) {
          section.style.opacity = 1;
          section.classList.remove("fade-scroll");
          return;
        }
  
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        const fadeStart = windowHeight * 0.15;
        const minOpacity = 0.4;
  
        if (section.dataset.justReset === "true") return;
  
        if (rect.top < -150) {
          section.style.opacity = 1;
          section.classList.remove("fade-scroll");
  
          section.dataset.justReset = "true";
          setTimeout(() => {
            section.dataset.justReset = "false";
          }, 120);
  
          return;
        }
  
        if (rect.top < fadeStart) {
          const progress = Math.max(minOpacity, Math.min(1, rect.top / fadeStart));
          section.style.opacity = progress;
          section.classList.add("fade-scroll");
        } else {
          section.style.opacity = 1;
          section.classList.remove("fade-scroll");
        }
      });
    });
  
    window.dispatchEvent(new Event('scroll'));
  });
  