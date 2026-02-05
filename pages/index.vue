<template>
  <div class="app-wrapper">
    <canvas ref="matrixCanvas" id="matrix"></canvas>
    <ClientOnly>
      <ThreeScene />
    </ClientOnly>

    <Navbar />

    <div class="content">
      <main class="home">
        <Jumbotron />

        <About class="home__section fade-in-up" />

        <!-- Brands section -->
        <section class="home__section brands_section fade-in-up" id="brands">
          <Heading text="Brands" />

          <p class="section-description">
            This is a pretty detailed list of the brands I've worked with during my career up until now.
          </p>

          <div class="brands-slider">
            <div class="brands-track">
              <BrandCard v-for="(brand, index) in brands" :key="index" :brand="brand" />
              <BrandCard v-for="(brand, index) in brands" :key="'duplicate-' + index" :brand="brand" />
            </div>
          </div>
        </section>

        <!-- Projects section -->
        <section class="home__section project_section fade-in-up" id="projects">
          <Heading text="Projects" />

          <p class="section-description">
            Most of the projects I've worked on during my career are covered by non-disclosure agreements. 
            Here are some <strong>personal</strong> samples.
          </p>

          <div class="project_section__content projects__content">
            <ProjectCard 
              v-for="(project, index) in projects" 
              :key="index" 
              :project="project"
              :class="['fade-in-up', `stagger-${index + 1}`]"
            />
          </div>
        </section>

        <!-- Contact section -->
        <section class="home__section contact_section fade-in-up" id="contact">
          <Heading text="Let's Connect" />

          <div class="contact__wrapper">
            <div class="contact__card">
              <div class="contact__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h3>Get In Touch</h3>
              <p>
                Feel free to send me an e-mail regarding everything from business
                enquiries to feedback about my portfolio site. I will also consider freelance opportunities.
              </p>

              <a class="contact__cta" href="mailto:eduardo.mecchia.dev@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Send an Email
              </a>

              <div class="contact__divider">
                <span>or connect on social media</span>
              </div>

              <div class="social-media">
                <a href="https://linkedin.com/in/eduardomecchiafernandez" target="_blank" class="social-icon" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/eduardomecchiafernandez" target="_blank" class="social-icon" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://instagram.com/eduardomecchiafernandez" target="_blank" class="social-icon" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://twitter.com/eduardomecchiafernandez" target="_blank" class="social-icon" aria-label="X/Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createBrand, createProject } from '~/types'
import type { Brand, Project } from '~/types'

const matrixCanvas = ref<HTMLCanvasElement | null>(null)

const brands: Brand[] = [
  createBrand("IndieGala", "Gaming platform", "assets/images/brands/indiegala.png", "https://indiegala.com", "https://indiegala.com"),
  createBrand("Accenture", "Global consulting", "assets/svg/brands/accenture.svg", "https://accenture.com", "https://accenture.com"),
  createBrand("Prada", "Luxury fashion", "assets/svg/brands/prada.svg", "https://prada.com", "https://prada.com"),
  createBrand("ALTEN", "Engineering services", "assets/svg/brands/ALTEN.svg", "https://alten.com", "https://alten.com"),
  createBrand("Aruba", "Cloud services", "assets/svg/brands/aruba-it.svg", "https://aruba.it", "https://aruba.it"),
  createBrand("Business Integration Partners", "Consulting", "assets/images/brands/bip.jpg", "https://bip.it", "https://bip.it", false),
  createBrand("Sellouter", "E-commerce", "assets/images/brands/sellouter.webp", "https://sellouter.it", "https://sellouter.it", false),
  createBrand("Octostar", "AI Investigation", "assets/images/brands/octostar.jpg", "https://octostar.com", "https://octostar.com"),
]

const projects: Project[] = [
  createProject("Akuzaer", "Dark, immersive portfolio for a sound engineer featuring audio player, music library, and contact form", "akuzaer.png", "https://akuzaer.com/", ["HTML", "SCSS", "JavaScript"], "https://github.com/eduardomecchiafernandez/akuzaer"),
  createProject("Livia Regoli", "Modern portfolio with 3D effects for an aspiring computer engineer, blending philosophy and technology", "liviaregoli.png", "https://liviaregoli.netlify.app/", ["HTML", "SCSS", "JavaScript", "Three.js"], "https://github.com/eduardomecchiafernandez/liviaregoli"),
  createProject("Cantata Anarchica", "A tribute website for the self-organized gatherings where thousands sing Fabrizio De André's songs in public squares across Italy and beyond", "cantata-anarchica.png", "https://cantataanarchica.it/", ["HTML", "SCSS", "JavaScript"], "https://github.com/eduardomecchiafernandez/cantata-anarchica"),
  createProject("Birreria Marconi 2", "Bilingual website for a cozy pub in Zagarolo, featuring gallery, reviews integration, and interactive map", "birreria-marconi.png", "https://birreriamarconi2.it/", ["HTML", "SCSS", "JavaScript"], "https://github.com/eduardomecchiafernandez/birreria-marconi-2"),
  createProject("Peremptory Poetry", "Minimalist landing page for a multilingual poetry project with newsletter integration", "peremptory-poetry.png", "https://www.peremptorypoetry.com/", ["HTML", "CSS", "JavaScript"], "https://github.com/eduardomecchiafernandez/peremptory-poetry"),
  createProject("Guess the Number", "Desktop application built with Electron for an HR coding challenge", "guess-the-number.png", "https://drive.google.com/file/d/1USGqq7_gAJyrzaA-ZlHqvfnMFe_EG9gd/view?usp=sharing", ["HTML", "CSS", "Electron"], "https://github.com/eduardomecchiafernandez/guess-the-number"),
]

function initScrollObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.fade-in-up, .fade-in-scale').forEach(el => {
    observer.observe(el)
  })
}

function initMatrix() {
  const canvas = matrixCanvas.value
  if (!canvas) return

  const context = canvas.getContext('2d')
  if (!context) return

  canvas.height = window.innerHeight
  canvas.width = window.innerWidth

  context.fillStyle = '#000000'
  context.fillRect(0, 0, canvas.width, canvas.height)

  window.addEventListener('resize', () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    context.fillStyle = '#000000'
    context.fillRect(0, 0, canvas.width, canvas.height)
  })

  const matrix = 'אבגדהוזחטיכלמנסעפצקרשת'.split('')
  const fontSize = 16
  const columnWidth = 12
  const columns = canvas.width / columnWidth

  const drops: number[] = []
  for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * (canvas.height / fontSize))
  }

  function draw() {
    if (!canvas || !context) return

    context.fillStyle = 'rgba(0, 0, 0, 0.04)'
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = '#4000ac'
    context.font = fontSize + 'px arial'

    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)]
      context.fillText(text, i * columnWidth, drops[i] * fontSize)

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    }
  }

  setInterval(draw, 35)
}

onMounted(() => {
  initMatrix()
  initScrollObserver()
})
</script>

<style lang="scss" scoped>
body { background: black; }

.app-wrapper {
  position: relative;
  min-height: 100vh;
}

canvas {
  display: block;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  pointer-events: none;
}

.home {
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  &__section {
    margin-top: 120px;
    margin-bottom: 80px;

    @media screen and (max-width: 768px) {
      margin-top: 80px;
      margin-bottom: 60px;
    }
  }

  .section-description {
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto 40px;
    line-height: 1.7;

    strong {
      color: white;
      font-size: inherit;
    }
  }

  // Contact section
  .contact {
    &__wrapper {
      display: flex;
      justify-content: center;
    }

    &__card {
      max-width: 500px;
      width: 100%;
      background: rgba(10, 10, 30, 0.6);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 48px;
      text-align: center;

      @media screen and (max-width: 768px) {
        padding: 32px 24px;
      }
    }

    &__icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(139, 92, 246, 0.2));
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      color: #8b5cf6;
    }

    &__card h3 {
      font-family: var(--font-heading);
      font-size: 28px;
      font-weight: 700;
      color: white;
      margin: 0 0 16px;
    }

    &__card p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      line-height: 1.7;
      margin: 0 0 32px;
    }

    &__cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 16px 32px;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 16px;
      color: white;
      background: linear-gradient(135deg, #0066ff 0%, #0048c5 100%);
      border: none;
      border-radius: 50px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(0, 102, 255, 0.4);
      }
    }

    &__divider {
      display: flex;
      align-items: center;
      margin: 32px 0;
      gap: 16px;

      &::before,
      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: rgba(255, 255, 255, 0.1);
      }

      span {
        color: rgba(255, 255, 255, 0.4);
        font-size: 14px;
      }
    }
  }

  .social-media {
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 102, 255, 0.2);
      border-color: rgba(0, 102, 255, 0.4);
      color: white;
      transform: translateY(-4px);
    }
  }

  // Brands slider
  .brands-slider {
    width: 100%;
    overflow: hidden;
    position: relative;
    margin-top: 30px;
    padding: 30px 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 150px;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, rgba(10, 10, 15, 1), transparent);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, rgba(10, 10, 15, 1), transparent);
    }
  }

  .brands-track {
    display: flex;
    align-items: center;
    animation: slide 45s linear infinite;
    width: fit-content;

    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  // Projects section
  .projects {
    &__content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 32px;
      margin-top: 30px;
      justify-items: center;
      
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
      }
    }
  }
}

.content {
  position: relative;
  z-index: 10;
  color: white;
  background: transparent;
}
</style>
