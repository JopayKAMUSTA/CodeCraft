
const projectSlides = [
  {
    image: "Images/Adobe_Photoshop_Icon_PNG-removebg-preview.png",
    title: "Pixellated design systems",
    description: "Modern UI kits and launch-ready style guides for marketing and product teams.",
    alt: "Colorful abstract render of design system assets"
  },
  {
    image: "Images/AI_Logo__Adobe_Illustrator_-removebg-preview.png",
    title: "Illustrative toolkit",
    description: "Custom vector illustrations, icons, and interaction states crafted in Illustrator.",
    alt: "Illustrator icon floating above a warm gradient"
  },
  {
    image: "Images/Figma__The_Collaborative_Interface_Design_Tool-removebg-preview.png",
    title: "Collaborative prototyping",
    description: "Figma workspaces that keep product, design, and engineering aligned on every sprint.",
    alt: "Figma workspace showcasing collaborative design"
  },
  {
    image: "Images/Python_Programming_Language_Icon_PNG___SVG_Design_For_T-Shirts-removebg-preview.png",
    title: "Platform automation",
    description: "Resilient data tooling and developer workflows shipped with Python and Go.",
    alt: "Python icon representing automation"
  },
  {
    image: "Images/Multimedia_Android__Visual_System__Sign_In_Boihasbullah_9-removebg-preview.png"
  },
  {
    image:"Imag   es/Microsoft_Visual_Studio_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png"
  }
];

const sliderEl = document.querySelector(".hero-slider");
const titleEl = document.querySelector(".slider-details__title");
const copyEl = document.querySelector(".slider-details__copy");
const circleLabel = document.querySelector(".slider-circle__label");
const prevBtn = document.querySelector(".slider-control--left");
const nextBtn = document.querySelector(".slider-control--right");

let currentSlide = 0;
let autoPlayId = null;

function renderSlide(index) {
  const normalized = ((index % projectSlides.length) + projectSlides.length) % projectSlides.length;
  const slide = projectSlides[normalized];

  if (!slide || !sliderEl) {
    return;
  }

  sliderEl.style.backgroundImage = "linear-gradient(180deg, rgba(2, 6, 23, 0) 30%, rgba(2, 6, 23, 0.85)), url('" + slide.image + "')";
  sliderEl.setAttribute("aria-label", slide.alt);
  titleEl.textContent = slide.title;
  copyEl.textContent = slide.description;
  circleLabel.textContent = normalized + 1 + " / " + projectSlides.length;

  currentSlide = normalized;
}

function goToSlide(offset, resetTimer = true) {
  renderSlide(currentSlide + offset);
  if (resetTimer) {
    startAutoPlay();
  }
}

function startAutoPlay() {
  stopAutoPlay();
  autoPlayId = setInterval(() => renderSlide(currentSlide + 1), 5500);
}

function stopAutoPlay() {
  if (autoPlayId) {
    clearInterval(autoPlayId);
    autoPlayId = null;
  }
}

if (sliderEl) {
  renderSlide(0);
  startAutoPlay();

  prevBtn?.addEventListener("click", () => goToSlide(-1));
  nextBtn?.addEventListener("click", () => goToSlide(1));

  sliderEl.addEventListener("mouseenter", stopAutoPlay);
  sliderEl.addEventListener("focusin", stopAutoPlay);
  sliderEl.addEventListener("mouseleave", startAutoPlay);
  sliderEl.addEventListener("focusout", startAutoPlay);
}
