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
const themeHint = document.getElementById("themeHint");
const themeHintClose = document.getElementById("themeHintClose");
const themeToggle = document.getElementById("themeToggle");

if (themeHint && themeHintClose && themeToggle) {
  const hintWasClosed = sessionStorage.getItem("themeHintClosed");

  if (!hintWasClosed) {
    setTimeout(() => {
      themeHint.classList.add("is-visible");
      themeToggle.classList.add("theme-switcher__toggle--highlight");
    }, 900);
  }

  themeHintClose.addEventListener("click", () => {
    themeHint.classList.remove("is-visible");
    themeToggle.classList.remove("theme-switcher__toggle--highlight");
    sessionStorage.setItem("themeHintClosed", "true");
  });

  themeToggle.addEventListener("click", () => {
    themeHint.classList.remove("is-visible");
    themeToggle.classList.remove("theme-switcher__toggle--highlight");
    sessionStorage.setItem("themeHintClosed", "true");
  });

  setTimeout(() => {
    themeToggle.classList.remove("theme-switcher__toggle--highlight");
  }, 5000); // nach 5 Sekunden

  const hasSeenHint = localStorage.getItem('seenThemeHint');

  if (!hasSeenHint) {
    setTimeout(() => {
      themeHint.classList.add('is-visible');
      themeToggle.classList.add('theme-switcher__toggle--highlight');
    }, 800);

    setTimeout(() => {
      themeToggle.classList.remove('theme-switcher__toggle--highlight');
    }, 5000);

    localStorage.setItem('seenThemeHint', 'true');
  }

  const data = {
    process: {
      title: "Requirements & Prozesse",
      content: `
            <ul>
                <li>Requirements Engineering → Strukturierung von Anforderungen</li>
                <li>Digitale Business Processes → Prozessoptimierung</li>
                <li>Transformation & Organisation</li>
            </ul>
        `
    },
    data: {
      title: "Data, AI & Analytics",
      content: `
            <ul>
                <li>Daten bereinigen & klassifizieren</li>
                <li>Insights ableiten</li>
                <li>Grundlagen AI / LLM</li>
            </ul>
        `
    },
    tech: {
      title: "Technology & Programming",
      content: `
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Systemverständnis</li>
                <li>Web & Netzwerk</li>
            </ul>
        `
    },
    product: {
      title: "Digital Products & Services",
      content: `
            <ul>
                <li>Digitale Produkte</li>
                <li>Service Engineering</li>
                <li>Business Innovation</li>
            </ul>
        `
    }
  };

  function showCluster(key) {
    document.getElementById("state-overview").classList.add("hidden");
    document.getElementById("state-detail").classList.remove("hidden");

    document.getElementById("detail-title").innerText = data[key].title;
    document.getElementById("detail-content").innerHTML = data[key].content;
  }

  function goBack() {
    document.getElementById("state-overview").classList.remove("hidden");
    document.getElementById("state-detail").classList.add("hidden");
  }
}