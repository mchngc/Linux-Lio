document.addEventListener('DOMContentLoaded', function() {
    

    
// Sidebar dropdowns
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const dropdown = document.getElementById(targetId);
    dropdown.classList.toggle('open');
  });
});

// Header "Code ▾" dropdown
const codeToggle = document.getElementById('code-toggle');
const codeDropdown = document.querySelector('header nav .dropdown');
document.addEventListener('click', (e) => {
  if (codeToggle && codeToggle.contains(e.target)) {
    e.preventDefault();
    codeDropdown.classList.toggle('open');
  } else if (codeDropdown && !codeDropdown.contains(e.target)) {
    codeDropdown.classList.remove('open');
  }
});

// Dark mode toggle with sun/moon icon
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const prismLight = document.getElementById('prism-light');
const prismDark = document.getElementById('prism-dark');

function setTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i data-lucide="sun"></i>';
    prismLight.disabled = true;
    prismDark.disabled = false;
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i data-lucide="moon"></i>';
    prismLight.disabled = false;
    prismDark.disabled = true;
  }
  lucide.createIcons(); // refresh icon
}

// Load theme: prefer saved choice, else system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
} else {
  setTheme('light');
}

// Toggle on click
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});
// Back to Top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Sidebar dropdowns
  

  

  
 // Hamburger menu
const menuToggle = document.getElementById('menu-toggle');
const menuDropdown = document.getElementById('menu-dropdown');
const fontSizeToggle = document.getElementById('font-size-toggle');

// Open/close menu
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  menuDropdown.classList.toggle('open');
  
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!menuDropdown.contains(e.target) && !menuToggle.contains(e.target)) {
    menuDropdown.classList.remove('open');
  }
});

// Load theme: prefer saved choice, else system preference


// Dark mode toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  menuDropdown.classList.remove('open');
});

// Font size toggle
fontSizeToggle.addEventListener('click', () => {
  if (body.classList.contains('large-text')) {
    body.classList.remove('large-text');
    fontSizeToggle.textContent = "Increase font size";
    localStorage.removeItem('font-size');
  } else {
    body.classList.add('large-text');
    fontSizeToggle.textContent = "Reset font size";
    localStorage.setItem('font-size', 'large');
  }
  menuDropdown.classList.remove('open');
});

// Load font size preference
if (localStorage.getItem('font-size') === 'large') {
  body.classList.add('large-text');
  fontSizeToggle.textContent = "Reset font size";
}



  
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  const updateVisibility = () => {
    backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
  };

  updateVisibility(); // set initial state
  window.addEventListener('scroll', updateVisibility);

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
    
// Open/close menu
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  menuDropdown.classList.toggle('open');
  
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!menuDropdown.contains(e.target) && !menuToggle.contains(e.target)) {
    menuDropdown.classList.remove('open');
  }
});

// Load theme: prefer saved choice, else system preference


// Dark mode toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  menuDropdown.classList.remove('open');
});

// Font size toggle
fontSizeToggle.addEventListener('click', () => {
  if (body.classList.contains('large-text')) {
    body.classList.remove('large-text');
    fontSizeToggle.textContent = "Increase font size";
    localStorage.removeItem('font-size');
  } else {
    body.classList.add('large-text');
    fontSizeToggle.textContent = "Reset font size";
    localStorage.setItem('font-size', 'large');
  }
  menuDropdown.classList.remove('open');
});

// Load font size preference
if (localStorage.getItem('font-size') === 'large') {
  body.classList.add('large-text');
  fontSizeToggle.textContent = "Reset font size";
}



document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  const updateVisibility = () => {
    backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
  };

  updateVisibility(); // set initial state
  window.addEventListener('scroll', updateVisibility);

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Initialise highlight.js on all code blocks
  hljs.highlightAll();

  const body = document.body;
  const darkThemeLink = document.getElementById('hljs-theme-dark');
  const lightThemeLink = document.getElementById('hljs-theme-light');

  // Whenever dark mode toggles, swap the highlight theme
  const syncHighlightTheme = () => {
    if (body.classList.contains('dark-mode')) {
      darkThemeLink.removeAttribute('disabled');
      lightThemeLink.setAttribute('disabled','');
    } else {
      lightThemeLink.removeAttribute('disabled');
      darkThemeLink.setAttribute('disabled','');
    }
  };

  // Call once on page load
  syncHighlightTheme();

  // Hook into your existing dark-mode button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // your code already toggles dark-mode on body
      // just wait a tick then sync highlight theme
      setTimeout(syncHighlightTheme, 0);
    });
  }
});

   
// Open/close menu
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  menuDropdown.classList.toggle('open');
  
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!menuDropdown.contains(e.target) && !menuToggle.contains(e.target)) {
    menuDropdown.classList.remove('open');
  }
});

// Load theme: prefer saved choice, else system preference

// Dark mode toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  menuDropdown.classList.remove('open');
});

// Font size toggle
fontSizeToggle.addEventListener('click', () => {
  if (body.classList.contains('large-text')) {
    body.classList.remove('large-text');
    fontSizeToggle.textContent = "Increase font size";
    localStorage.removeItem('font-size');
  } else {
    body.classList.add('large-text');
    fontSizeToggle.textContent = "Reset font size";
    localStorage.setItem('font-size', 'large');
  }
  menuDropdown.classList.remove('open');
});

// Load font size preference
if (localStorage.getItem('font-size') === 'large') {
  body.classList.add('large-text');
  fontSizeToggle.textContent = "Reset font size";
}


document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  const updateVisibility = () => {
    backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
  };

  updateVisibility(); // set initial state
  window.addEventListener('scroll', updateVisibility);

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Initialise highlight.js on all code blocks
  hljs.highlightAll();

  const body = document.body;
  const darkThemeLink = document.getElementById('hljs-theme-dark');
  const lightThemeLink = document.getElementById('hljs-theme-light');

  // Whenever dark mode toggles, swap the highlight theme
  const syncHighlightTheme = () => {
    if (body.classList.contains('dark-mode')) {
      darkThemeLink.removeAttribute('disabled');
      lightThemeLink.setAttribute('disabled','');
    } else {
      lightThemeLink.removeAttribute('disabled');
      darkThemeLink.setAttribute('disabled','');
    }
  };

  // Call once on page load
  syncHighlightTheme();

  // Hook into your existing dark-mode button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // your code already toggles dark-mode on body
      // just wait a tick then sync highlight theme
      setTimeout(syncHighlightTheme, 0);
    });
  }
});
 document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', id);
      }
    });
  });
// Sidebar toggle (mobile drawer)
const sidebarToggle = document.getElementById('sidebar-toggle');
const jumpLinks = document.querySelector('.jump-links');

if (sidebarToggle && jumpLinks) {
  sidebarToggle.addEventListener('click', () => {
    jumpLinks.classList.toggle('open');
  });
}

});
