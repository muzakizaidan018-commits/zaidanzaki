// ========================
// DATA TOOLS & PROJECTS
// ========================

// Data Tools
const toolsData = [
  { name: "VS Code", icon: "fas fa-code", color: "text-purple-600", desc: "Editor" },
  { name: "Python", icon: "fab fa-python", color: "text-blue-600", desc: "Language" },
  { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500", desc: "Language" },
  { name: "React", icon: "fab fa-react", color: "text-cyan-500", desc: "Framework" },
  { name: "Node.js", icon: "fab fa-node-js", color: "text-green-600", desc: "Runtime" },
  { name: "MySQL", icon: "fas fa-database", color: "text-gray-700", desc: "Database" },
  { name: "Git/GitHub", icon: "fab fa-git-alt", color: "text-orange-600", desc: "Version Control" },
  { name: "Arduino", icon: "fas fa-microchip", color: "text-indigo-600", desc: "IoT" },
  { name: "Figma", icon: "fab fa-figma", color: "text-pink-500", desc: "Design" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-700", desc: "CSS" },
  { name: "Tailwind", icon: "fab fa-tailwind", color: "text-sky-500", desc: "CSS" },
  { name: "Firebase", icon: "fas fa-cloud", color: "text-blue-500", desc: "BaaS" }
];

// Data Projects
const projectsData = [
  {
    title: "Sistem Informasi Sekolah",
    desc: "Platform manajemen data siswa, guru, dan nilai berbasis web dengan fitur laporan dinamis.",
    tech: "PHP & MySQL",
    icon: "fas fa-school",
    gradient: "from-purple-400 to-indigo-600"
  },
  {
    title: "IoT Smart Garden",
    desc: "Sistem penyiraman otomatis berbasis ESP8266 dengan monitoring kelembaban dan suhu via smartphone.",
    tech: "Arduino & Firebase",
    icon: "fas fa-microchip",
    gradient: "from-green-400 to-teal-600"
  },
  {
    title: "Dashboard Analitik UMKM",
    desc: "Aplikasi interaktif untuk visualisasi penjualan dan stok barang menggunakan React dan Chart.js.",
    tech: "React & Tailwind",
    icon: "fas fa-chart-line",
    gradient: "from-pink-400 to-rose-600"
  },
  {
    title: "E-Commerce Sederhana",
    desc: "Toko online dengan fitur keranjang belanja, payment gateway simulation, dan admin panel.",
    tech: "Laravel & Bootstrap",
    icon: "fas fa-store",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "Deteksi Penyakit Daun",
    desc: "Model CNN sederhana untuk klasifikasi penyakit tanaman tomat menggunakan TensorFlow.js.",
    tech: "Python & TensorFlow",
    icon: "fas fa-brain",
    gradient: "from-blue-400 to-cyan-600"
  },
  {
    title: "Blog Teknologi",
    desc: "Platform berbagi artikel tentang pemrograman dan IoT dengan sistem komentar.",
    tech: "Next.js & Markdown",
    icon: "fas fa-newspaper",
    gradient: "from-red-400 to-pink-600"
  }
];

// ========================
// RENDER FUNCTIONS
// ========================

// Render Tools
function renderTools() {
  const container = document.getElementById('tools-container');
  if (!container) return;
  
  container.innerHTML = toolsData.map(tool => `
    <div class="tool-card bg-white rounded-xl p-5 text-center shadow-md transition-all duration-300">
      <i class="${tool.icon} text-4xl ${tool.color} mb-3"></i>
      <p class="font-medium">${tool.name}</p>
      <p class="text-xs text-gray-500">${tool.desc}</p>
    </div>
  `).join('');
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  
  container.innerHTML = projectsData.map((project, index) => `
    <div class="project-card bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300" data-index="${index}">
      <div class="h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden">
        <i class="${project.icon} text-6xl text-white opacity-80 project-icon transition-transform duration-500"></i>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-gray-600 mb-4">${project.desc}</p>
        <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">${project.tech}</span>
      </div>
    </div>
  `).join('');
}

// ========================
// NAVBAR ACTIVE LINK & SCROLL SPY
// ========================

function updateActiveLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ========================
// SCROLL TO TOP BUTTON
// ========================

function createScrollTopButton() {
  const button = document.createElement('div');
  button.className = 'scroll-top';
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(button);
  
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  });
}

// ========================
// MOBILE MENU
// ========================

function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// ========================
// FORM HANDLER
// ========================

function initFormHandler() {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validasi sederhana
      if (!name || !email || !message) {
        showFormMessage('Harap isi semua field!', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showFormMessage('Masukkan alamat email yang valid!', 'error');
        return;
      }
      
      // Simulasi pengiriman (karena backend belum ada)
      showFormMessage('Mengirim pesan...', 'info', true);
      
      // Simulasi delay
      setTimeout(() => {
        showFormMessage('Pesan berhasil dikirim! Saya akan segera menghubungi Anda.', 'success');
        form.reset();
      }, 1500);
      
      // Untuk production, ganti dengan fetch ke backend API
      /*
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });
        if (response.ok) {
          showFormMessage('Pesan berhasil dikirim!', 'success');
          form.reset();
        } else {
          showFormMessage('Gagal mengirim pesan. Coba lagi nanti.', 'error');
        }
      } catch (error) {
        showFormMessage('Terjadi kesalahan. Coba lagi nanti.', 'error');
      }
      */
    });
  }
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showFormMessage(msg, type, isLoading = false) {
  const formMessage = document.getElementById('form-message');
  if (!formMessage) return;
  
  formMessage.classList.remove('hidden', 'bg-green-100', 'bg-red-100', 'bg-blue-100', 'text-green-700', 'text-red-700', 'text-blue-700');
  
  if (type === 'success') {
    formMessage.className = 'mt-4 p-3 rounded-lg bg-green-100 text-green-700 text-center';
    formMessage.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${msg}`;
  } else if (type === 'error') {
    formMessage.className = 'mt-4 p-3 rounded-lg bg-red-100 text-red-700 text-center';
    formMessage.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i>${msg}`;
  } else if (type === 'info') {
    formMessage.className = 'mt-4 p-3 rounded-lg bg-blue-100 text-blue-700 text-center';
    if (isLoading) {
      formMessage.innerHTML = `<div class="loading-spinner mr-2"></div>${msg}`;
    } else {
      formMessage.innerHTML = `<i class="fas fa-info-circle mr-2"></i>${msg}`;
    }
  }
  
  // Auto hide after 5 seconds for success/error
  if (type !== 'info') {
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 5000);
  }
}

// ========================
// SMOOTH SCROLL
// ========================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ========================
// ANIMATION ON SCROLL
// ========================

function initScrollAnimation() {
  const elements = document.querySelectorAll('.tool-card, .project-card, .social-icon');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  elements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ========================
// TYPING EFFECT (OPTIONAL)
// ========================

function initTypingEffect() {
  const heroText = document.querySelector('#home h1');
  if (!heroText) return;
  
  // Simple typing effect for hero section
  const originalText = heroText.innerHTML;
  const textToType = "Halo! Saya Muzaki Zaidan";
  const gradientSpan = heroText.querySelector('.text-gradient');
  
  // Only apply if we want to override (optional, comment out if not needed)
  // This is just a decorative effect
}

// ========================
// INITIALIZE ALL
// ========================

document.addEventListener('DOMContentLoaded', () => {
  renderTools();
  renderProjects();
  initMobileMenu();
  initSmoothScroll();
  initFormHandler();
  createScrollTopButton();
  initScrollAnimation();
  updateActiveLink();
  
  // Scroll event listener untuk update active link
  window.addEventListener('scroll', () => {
    updateActiveLink();
  });
  
  // Add year to footer dynamically
  const footer = document.querySelector('footer p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2025', year);
  }
  
  console.log('Portfolio Muzaki Zaidan - Siap digunakan!');
});