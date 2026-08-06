(function () {
    var pathname = window.location.pathname;
    if (/\/404$/i.test(pathname)) {
        return;
    }

    if (!/\.[a-zA-Z0-9]+$/i.test(pathname)) {
        var cleanPath = pathname;

        if (/\/index$/i.test(cleanPath)) {
            cleanPath = cleanPath.replace(/\/index$/i, '/');
        } else if (/\/(?:Resources|blog)$/i.test(cleanPath)) {
            cleanPath = cleanPath.replace(/\/(?:Resources|blog)$/i, '/blog/');
        } else if (cleanPath !== '/' && !/\/$/.test(cleanPath)) {
            cleanPath = cleanPath + '/';
        }

        if (cleanPath !== pathname) {
            try {
                window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
            } catch (error) {
                // Ignore history normalization failures so menu behavior still initializes.
            }
        }
    }

    var navMenus = document.querySelectorAll('.nav-menu');
    if (!navMenus.length) {
        return;
    }

    navMenus.forEach(function (navMenu) {
        var programsItem = navMenu.querySelector('.has-dropdown');
        var programsToggle = navMenu.querySelector('.dropdown-toggle');
        var domainButtons = programsItem ? programsItem.querySelectorAll('[data-program-target]') : [];
        var panels = programsItem ? programsItem.querySelectorAll('[data-program-panel]') : [];

        if (!programsItem || !programsToggle) {
            return;
        }

        function setActiveProgramPanel(target) {
            if (!domainButtons.length || !panels.length) {
                return;
            }

            domainButtons.forEach(function (button) {
                var isActive = button.getAttribute('data-program-target') === target;
                button.classList.toggle('active', isActive);
                button.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            panels.forEach(function (panel) {
                var isActive = panel.getAttribute('data-program-panel') === target;
                panel.classList.toggle('active', isActive);
            });
        }

        function closeProgramsMenu() {
            programsItem.classList.remove('open');
            programsToggle.setAttribute('aria-expanded', 'false');
        }

        setActiveProgramPanel('programming');

        domainButtons.forEach(function (button) {
            var target = button.getAttribute('data-program-target');

            button.addEventListener('mouseenter', function () {
                setActiveProgramPanel(target);
            });

            button.addEventListener('focus', function () {
                setActiveProgramPanel(target);
            });

            button.addEventListener('click', function (event) {
                event.preventDefault();
                setActiveProgramPanel(target);
            });
        });

        programsToggle.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            var isOpen = programsItem.classList.toggle('open');
            programsToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                closeProgramsMenu();
            });
        });

        document.addEventListener('click', function (event) {
            if (!programsItem.contains(event.target)) {
                closeProgramsMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeProgramsMenu();
            }
        });
    });
})();
