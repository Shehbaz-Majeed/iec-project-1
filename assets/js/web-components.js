// All webcomponents will goes here

// Theme Colors Switch
class PrefersColorTheme extends HTMLElement {
  constructor() {
    super();

    this.themeSwitcher = this;
    this.rootElement = document.documentElement;
    this.savedTheme = localStorage.getItem("theme");

    this.themeSwitcher.addEventListener('click', this.setTheme.bind(this));
    this.init();
  }
  init() {
    const defaultTheme = this.savedTheme || this.getSystemThemePreference();
    this.applyTheme(defaultTheme);
  }

  applyTheme(theme) {
    this.rootElement.classList.remove("light-theme", "dark-theme");
    this.rootElement.classList.add(`${theme}-theme`);
    this.themeSwitcher.setAttribute("data-color-scheme", theme);
  }

  setTheme(event) {
    let theme = event.currentTarget.getAttribute("data-color-scheme");
    let newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    this.applyTheme(newTheme);
  };

  getSystemThemePreference() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
}

customElements.define("prefers-color-scheme", PrefersColorTheme);
