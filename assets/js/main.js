(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');

  if (toggle && menu) {
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      menu.hidden = true;
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      menu.hidden = isOpen;
    });

    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) close();
    });
  }

  document.querySelectorAll('[data-placeholder-link]').forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
  });

  // Datas aproximadas das avaliações: exibidas de forma relativa e atualizadas no navegador.
  const relativeDate = (dateString, approximate = false) => {
    const date = new Date(`${dateString}T12:00:00`);
    if (Number.isNaN(date.getTime())) return '';
    const now = new Date();
    let months = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
    if (now.getDate() < date.getDate()) months -= 1;
    months = Math.max(0, months);

    let label;
    if (months < 1) label = 'há menos de 1 mês';
    else if (months < 12) label = `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
    else {
      const years = Math.floor(months / 12);
      const remainder = months % 12;
      if (remainder === 0) label = `há ${years} ${years === 1 ? 'ano' : 'anos'}`;
      else if (remainder <= 2) label = `há pouco mais de ${years} ${years === 1 ? 'ano' : 'anos'}`;
      else if (remainder >= 10) label = `há quase ${years + 1} anos`;
      else label = `há cerca de ${years} ${years === 1 ? 'ano' : 'anos'} e ${remainder} meses`;
    }
    return approximate && !label.includes('cerca de') ? label.replace(/^há /, 'há cerca de ') : label;
  };

  document.querySelectorAll('[data-relative-date]').forEach(el => {
    const date = el.getAttribute('datetime');
    const label = relativeDate(date, el.dataset.approximate === 'true');
    if (label) el.textContent = label;
  });
})();
