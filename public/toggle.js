document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;

  const applyTheme = (theme) => {
    body.classList.remove('themeswiss', 'themelhg');
    body.classList.add(theme);

    const isLhg = theme === 'themelhg';
    toggle.setAttribute('aria-pressed', isLhg);

    localStorage.setItem('cv-theme', theme);
  };

  // Default = SWISS
  const savedTheme = localStorage.getItem('cv-theme');

  if (savedTheme === 'themelhg') {
    applyTheme('themelhg');
  } else {
    applyTheme('themeswiss');
  }

  toggle.addEventListener('click', () => {
    const nextTheme = body.classList.contains('themelhg')
      ? 'themeswiss'
      : 'themelhg';

    applyTheme(nextTheme);
  });
});
