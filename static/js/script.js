document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Navigation Logic ---
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (navToggle && navMenu) {
    // Toggle menu on hamburger click
    navToggle.addEventListener("click", () => {
      const isActive = navMenu.classList.toggle("active")
      navToggle.setAttribute("aria-expanded", isActive)
    })

    // Close menu automatically when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Check if the menu is active before trying to close it
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
          // **THE FIX**: Update the button's state to "closed"
          navToggle.setAttribute("aria-expanded", "false")
        }
      })
    })

    const mediaQuery = window.matchMedia("(min-width: 769px)")

    const handleScreenChange = (e) => {
      if (e.matches) {
        // Screen is now desktop size, close mobile menu
        navMenu.classList.remove("active")
        navToggle.setAttribute("aria-expanded", "false")
      }
    }

    // Listen for screen size changes
    mediaQuery.addListener(handleScreenChange)

    // Also close menu when clicking outside of it
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
          navToggle.setAttribute("aria-expanded", "false")
        }
      }
    })
  }

  // --- Theme Toggler Logic ---
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body

  // This function applies the correct theme on page load
  const applyTheme = () => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      if (savedTheme === "dark") {
        body.classList.add("dark-mode")
        body.classList.remove("light-mode")
      } else {
        body.classList.add("light-mode")
        body.classList.remove("dark-mode")
      }
    } else if (prefersDark) {
      body.classList.add("dark-mode")
    } else {
      body.classList.add("light-mode")
    }
  }

  // Add the click event listener to the button
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode")
        localStorage.setItem("theme", "light")
      } else {
        body.classList.replace("light-mode", "dark-mode")
        localStorage.setItem("theme", "dark")
      }
    })
  }

  // Run the function to set the theme as soon as the page loads
  applyTheme()
})
