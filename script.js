document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });
        window.scrollTo(0, 0); // Scroll to top of new page
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            showPage(pageId);
            // Update URL hash for direct linking (optional)
            // window.location.hash = pageId;
        });
    });

    // Function for CTA button on intro page
    window.navigateToPage = function(pageId) {
        showPage(pageId);
         // window.location.hash = pageId; // Optional: update hash
    }

    // Show intro page by default
    showPage('intro');

    // Optional: Handle hash on page load for direct linking
    // if (window.location.hash) {
    //     const initialPageId = window.location.hash.substring(1);
    //     const pageExists = Array.from(pages).some(page => page.id === initialPageId);
    //     if (pageExists) {
    //         showPage(initialPageId);
    //     }
    // }
});




















