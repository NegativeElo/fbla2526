(function () {
    function readAxSettings() {
        try {
            return JSON.parse(localStorage.getItem('FBLA_AX_SETTINGS')) || {};
        } catch (error) {
            return {};
        }
    }

    function applySavedAccessibilityClasses() {
        const settings = readAxSettings();
        document.body.classList.toggle('ax-high-contrast', !!settings.contrast);
        document.body.classList.toggle('ax-readable-font', !!settings.readableFont);
        document.body.classList.toggle('ax-large-text', !!settings.largeText);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applySavedAccessibilityClasses);
    } else {
        applySavedAccessibilityClasses();
    }
})();