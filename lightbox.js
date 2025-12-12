// handle images
document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const imgEl = document.getElementById('lightbox-img');
    const videoEl = document.getElementById('lightbox-video');

    videoEl.pause();
    videoEl.style.display = 'none';
    imgEl.style.display = 'block';

    imgEl.src = img.src;
    lightbox.classList.remove('hidden');
  });
});

// handle videos
document.querySelectorAll('.card video').forEach(video => {
  video.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const imgEl = document.getElementById('lightbox-img');
    const videoEl = document.getElementById('lightbox-video');

    imgEl.style.display = 'none';
    videoEl.style.display = 'block';

    videoEl.src = video.currentSrc || video.src;
    videoEl.currentTime = 0;
    lightbox.classList.remove('hidden');
    videoEl.play();
  });
});

// close on X or background click
const lightbox = document.getElementById('lightbox');
const closeBtn = document.querySelector('.lightbox-close');

function closeLightbox() {
  const videoEl = document.getElementById('lightbox-video');
  videoEl.pause();
  lightbox.classList.add('hidden');
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
