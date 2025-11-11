(function () {
  const serviceSections = document.querySelectorAll('.service');

  if (!serviceSections.length) return;

  function closeService(section) {
    const trigger = section.querySelector('.service__trigger');
    const content = section.querySelector('.service__content');
    const icon = section.querySelector('.service__icon');

    section.classList.remove('service--active');
    trigger?.setAttribute('aria-expanded', 'false');
    if (content) {
      content.hidden = true;
    }
    if (icon) {
      icon.textContent = '+';
    }
  }

  function openService(section) {
    const trigger = section.querySelector('.service__trigger');
    const content = section.querySelector('.service__content');
    const icon = section.querySelector('.service__icon');

    section.classList.add('service--active');
    trigger?.setAttribute('aria-expanded', 'true');
    if (content) {
      content.hidden = false;
    }
    if (icon) {
      icon.textContent = '−';
    }
  }

  // Normalize initial state
  serviceSections.forEach((section) => {
    const content = section.querySelector('.service__content');
    const trigger = section.querySelector('.service__trigger');
    const icon = section.querySelector('.service__icon');
    const isActive = section.classList.contains('service--active');

    if (isActive) {
      trigger?.setAttribute('aria-expanded', 'true');
      if (content) {
        content.hidden = false;
      }
      if (icon) {
        icon.textContent = '−';
      }
    } else {
      trigger?.setAttribute('aria-expanded', 'false');
      if (content) {
        content.hidden = true;
      }
      if (icon) {
        icon.textContent = '+';
      }
    }
  });

  serviceSections.forEach((section) => {
    const trigger = section.querySelector('.service__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isExpanded = section.classList.contains('service--active');

      serviceSections.forEach((otherSection) => {
        if (otherSection !== section) {
          closeService(otherSection);
        }
      });

      if (isExpanded) {
        closeService(section);
      } else {
        openService(section);
      }
    });
  });
})();
