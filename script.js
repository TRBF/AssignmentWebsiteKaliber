        var navLinks = document.querySelectorAll(".nav-link");
        function checkScrollPos() {
            var ids = ["section_2", "section_3", "section_4", "section_7"], scrolls = [];
            ids.forEach(id => scrolls.push(document.getElementById(id).offsetTop));
            scrolls[0] = 0;
            scrolls.forEach((scroll, counter) => {
                var scrollTop = window.scrollY;
                if (Math.abs(scrollTop - scroll) < 50) {
                    navLinks[counter].parentElement.classList.add("active");
                }
            });
        }
        window.addEventListener("scroll", () => {
            navLinks.forEach(el => el.parentElement.classList.remove("active"));
            checkScrollPos();
        });