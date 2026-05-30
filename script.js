const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  en: {
    "meta.description":
      "Lean is an independent game studio and app developer creating atmospheric games, useful apps, and polished digital experiences.",
    "brand.aria": "Lean home",
    "nav.aria": "Main navigation",
    "nav.open": "Open menu",
    "nav.home": "Home",
    "nav.games": "Games",
    "nav.apps": "Apps",
    "nav.about": "About",
    "nav.contact": "Contact",
    "language.aria": "Language selection",
    "cta.contact": "Contact us",
    "hero.title": "We create games and apps.",
    "hero.body":
      "Lean is an independent game studio and app developer. We build high-quality digital experiences people actually want to use.",
    "hero.games": "See our games",
    "hero.apps": "Explore our apps",
    "games.title": "Games",
    "games.all": "View all games",
    "games.gearhollow": "Action, Adventure",
    "games.neon": "Action, Rogue-like",
    "games.ember": "Adventure, Puzzle",
    "games.vessel": "Action, Story-driven",
    "platforms.aria": "Platforms",
    "apps.title": "Apps",
    "apps.all": "View all apps",
    "apps.flowdesk": "A focused workspace app for teams.",
    "apps.taskly": "Simple and beautiful task management.",
    "apps.statsive": "Track and analyze your performance.",
    "apps.nimbus": "Cloud-based file synchronization.",
    "about.title": "About",
    "about.body":
      "Lean is a small and passionate team that believes in creativity, quality, and respect for players. We build our own projects and help others bring their ideas to life.",
    "about.team": "Meet the team",
    "team.aria": "Team",
    "contact.title": "Contact us",
    "contact.body": "Want to collaborate or have a question? Reach out and tell us what you are building.",
    "contact.email": "Send email",
    "footer.aria": "Footer",
    "footer.copy": "&copy; <span id=\"year\"></span> Lean. All rights reserved.",
    title: "Lean - Games and Apps Studio",
    lang: "en",
  },
  fi: {
    "meta.description":
      "Lean on moderni pelistudio ja sovelluskehittäjä, joka rakentaa tunnelmallisia pelejä ja sulavia digitaalisia tuotteita.",
    "brand.aria": "Lean etusivu",
    "nav.aria": "Päävalikko",
    "nav.open": "Avaa valikko",
    "nav.home": "Etusivu",
    "nav.games": "Pelit",
    "nav.apps": "Sovellukset",
    "nav.about": "Meistä",
    "nav.contact": "Yhteys",
    "language.aria": "Kielivalinta",
    "cta.contact": "Ota yhteyttä",
    "hero.title": "Luomme pelejä ja sovelluksia.",
    "hero.body":
      "Lean on itsenäinen pelistudio ja sovelluskehittäjä. Teemme laadukkaita digitaalisia kokemuksia, joita ihmiset haluavat käyttää.",
    "hero.games": "Katso pelimme",
    "hero.apps": "Tutustu sovelluksiimme",
    "games.title": "Pelit",
    "games.all": "Katso kaikki pelit",
    "games.gearhollow": "Toiminta, Seikkailu",
    "games.neon": "Toiminta, Rogue-like",
    "games.ember": "Seikkailu, Pulma",
    "games.vessel": "Toiminta, Tarinavetoinen",
    "platforms.aria": "Alustat",
    "apps.title": "Sovellukset",
    "apps.all": "Katso kaikki sovellukset",
    "apps.flowdesk": "Tehokas työtilasovellus tiimeille.",
    "apps.taskly": "Yksinkertainen ja kaunis tehtävienhallinta.",
    "apps.statsive": "Seuraa ja analysoi suoritustasi.",
    "apps.nimbus": "Pilvipohjainen tiedostojen synkronointi.",
    "about.title": "Meistä",
    "about.body":
      "Lean on pieni ja intohimoinen tiimi, joka uskoo luovuuteen, laatuun ja pelaajien kunnioittamiseen. Teemme omia projektejamme ja autamme myös muita toteuttamaan ideoitaan.",
    "about.team": "Tapaa tiimi",
    "team.aria": "Tiimi",
    "contact.title": "Ota yhteyttä",
    "contact.body": "Haluatko tehdä yhteistyötä tai sinulla on kysyttävää? Ota rohkeasti yhteyttä.",
    "contact.email": "Lähetä sähköposti",
    "footer.aria": "Alatunniste",
    "footer.copy": "&copy; <span id=\"year\"></span> Lean. Kaikki oikeudet pidätetään.",
    title: "Lean - Pelit ja sovellukset",
    lang: "fi",
  },
};

function refreshYear() {
  const currentYear = document.querySelector("#year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = dictionary.lang;
  document.title = dictionary.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (key && dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const pairs = element.dataset.i18nAttr.split(" ");

    pairs.forEach((pair) => {
      const [attribute, key] = pair.split(":");

      if (attribute && key && dictionary[key]) {
        element.setAttribute(attribute, dictionary[key]);
      }
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  refreshYear();
}

setLanguage("en");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang === "fi" ? "fi" : "en";
    setLanguage(language);
  });
});
