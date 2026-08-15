const cards = document.querySelectorAll('.movie-card');
const player = document.getElementById('featuredPlayer');
const title = document.getElementById('nowPlayingTitle');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const videoId = card.dataset.video;
    const videoTitle = card.dataset.title;

    cards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');

    player.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
    title.textContent = videoTitle;

    document.getElementById('player').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
