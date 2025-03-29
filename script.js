const menuToggle = document.getElementById("mobile-menu");
        const burgerMenu = document.getElementById("burger-menu");
        let menuOpen = false;
        
        menuToggle.addEventListener("click", () => {
            menuOpen = !menuOpen;
            burgerMenu.style.left = menuOpen ? "0" : "-250px";
        });