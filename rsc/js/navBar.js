document.addEventListener("DOMContentLoaded", () => {
    // check what li in the nav bar got pressed
    const navBar = document.getElementById("navBar");
    const navItems = navBar.getElementsByTagName("li");
    // if the navItems get pressed get there id name and cahnge the window location to the id name

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", () => {
            // check if class is empty and put to active
            for(let j = 0; j < navItems.length; j++) {
                if (navItems[j].classList.contains("activePage")) {
                    navItems[j].classList.toggle("activePage");
                }
            }

            if (navItems[i].id !== "") {
                window.location.href = `/${navItems[i].id}`;
                navItems[i].classList.toggle("activePage");
            }
        }
        );
    }
});