/*=============== EMAIL JS ===============*/


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



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

