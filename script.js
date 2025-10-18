// Sidebar toggle
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Change image on district click
const districtLinks = document.querySelectorAll('.sidebar a');
const districtImage = document.getElementById('districtImage');

districtLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const imageName = link.getAttribute('data-image');
    districtImage.src = imageName;
  });
});
