function showSection(sectionId) {
    const sections = document.querySelectorAll('.catalogo');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  function showGallery(galleryId) {
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
      gallery.style.display = 'none';
    });
    document.getElementById(galleryId).style.display = 'block';
  }
  