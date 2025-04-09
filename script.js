const menuToggle = document.getElementById("mobile-menu");
    const burgerMenu = document.getElementById("burger-menu");
    let menuOpen = false;
        
    menuToggle.addEventListener("click", () => {
        menuOpen = !menuOpen;
        burgerMenu.style.left = menuOpen ? "0" : "-250px";
    });

function filterPlaylists(category) {
    const allTiles = document.querySelectorAll('.playlist-tile');
    allTiles.forEach(tile => {
    if (category === 'all' || tile.dataset.category === category) {
        tile.classList.remove('hidden');
    } else {
        tile.classList.add('hidden');
    }
});