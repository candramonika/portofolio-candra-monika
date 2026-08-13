/*=============== ACHIEVEMENTS ===============*/ 
function openCertificate(img) {
  const modal = document.getElementById("certificateModal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "flex";
  modalImage.src = img.src;
}

function closeCertificate(event) {
  const modal = document.getElementById("certificateModal");

  if (!event || event.target === modal || event.target.classList.contains("close")) {
    modal.style.display = "none";
  }
}


/*=============== PROJECTS ===============*/ 
function openProjects(img) {
  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("projectModalImage");

  modal.style.display = "flex";
  modalImage.src = img.src;
}

function closeProject() {
  const modal = document.getElementById("projectModal");

  modal.style.display = "none";
}


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

  //serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_md3g7qb','template_091hb0w','#contact-form','-sab0urCMyXrnDfky')

  .then(() =>{
    contactMessage.textContent = 'Message sent successfully ✅'

    setTimeout(() =>{
      contactMessage.textContent = ''
    }, 5000)

    contactForm.reset()
  })
}
contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.perfil, .contact__form')
sr.reveal('.info', {origin: 'left', delay: 800})
sr.reveal('.skills', {origin: 'left', delay: 1000})
sr.reveal('.projects', {interval: 100})