const storageKey = 'theme-preference';
const themeColors = {
  dark: '{{ meta.themeDark }}',
  light: '{{ meta.themeLight }}'
};
const theme = {value: getColorPreference()};

function getStoredPreference() {
  try {
    const value = localStorage.getItem(storageKey);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function getColorPreference() {
  return getStoredPreference() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function reflectPreference() {
  document.documentElement.setAttribute('data-theme', theme.value);
  for (const value of ['light', 'dark']) {
    document.querySelector(`#${value}-theme-toggle`)?.setAttribute('aria-pressed', theme.value === value);
  }
  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => meta.setAttribute('content', themeColors[theme.value]));
}

function onClick(value) {
  theme.value = value;
  try {
    localStorage.setItem(storageKey, value);
  } catch {
    // The switch still works when browser privacy settings block storage.
  }
  reflectPreference();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#light-theme-toggle')?.addEventListener('click', () => onClick('light'));
  document.querySelector('#dark-theme-toggle')?.addEventListener('click', () => onClick('dark'));
  reflectPreference();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches}) => {
  if (getStoredPreference()) return;
  theme.value = matches ? 'dark' : 'light';
  reflectPreference();
});

// Apply the preference before the page paints.
reflectPreference();
