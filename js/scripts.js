/*!
 * Deep Space Resume — Scripts
 * Gabriel Urrutigaray · 2026
 */

window.addEventListener('DOMContentLoaded', () => {

    // ── Bootstrap ScrollSpy ──────────────────────────────────
    const sideNav = document.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // ── Collapse navbar on mobile nav-link click ─────────────
    const navbarToggler = document.querySelector('.navbar-toggler');
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ── Scroll progress bar ───────────────────────────────────
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        const updateProgress = () => {
            const scrollTop    = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress     = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
            progressBar.style.transform = `scaleX(${progress})`;
        };
        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    // ── Scroll-reveal (IntersectionObserver) ─────────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after reveal so it stays visible
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
    });

    document.querySelectorAll('.section-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // ── Trigger About section immediately (it's visible on load) ─
    const aboutReveal = document.querySelector('#about .section-reveal');
    if (aboutReveal) {
        // Small delay so the sidebar entrance animation plays first
        setTimeout(() => aboutReveal.classList.add('visible'), 400);
    }

});
