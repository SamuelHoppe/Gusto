// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-in animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Beta Form Submission (Google Forms) with Email Validation
const betaForm = document.getElementById('betaForm');
const emailInput = document.getElementById('emailInput');
const successMessage = document.getElementById('successMessage');
const betaNote = document.getElementById('betaNote');
const errorMessage = document.getElementById('errorMessage');
const inputWrapper = emailInput.closest('.input-wrapper');

// Strict email regex pattern
const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// Remove error state on input - Feld bleibt immer editierbar
emailInput.addEventListener('input', function() {
    inputWrapper.classList.remove('error');
    errorMessage.classList.remove('visible');
    // Stelle sicher dass das Feld nicht disabled ist
    emailInput.disabled = false;
});

betaForm.addEventListener('submit', function(e) {
    const email = emailInput.value.trim();
    
    // Validate email with regex
    if (!emailRegex.test(email)) {
        e.preventDefault();
        e.stopPropagation();
        inputWrapper.classList.add('error');
        errorMessage.classList.add('visible');
        // Feld bleibt editierbar und wird fokussiert
        emailInput.disabled = false;
        emailInput.focus();
        emailInput.select(); // Markiert den Text zum einfachen Überschreiben
        return false;
    }
    
    // Form submits to Google Forms via hidden iframe
    // Show success message after short delay
    setTimeout(() => {
        betaForm.style.display = 'none';
        betaNote.style.display = 'none';
        successMessage.style.display = 'flex';
    }, 500);
});

// Parallax effect for hero decorations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const decorations = document.querySelectorAll('.hero-decoration');
    decorations.forEach((dec, index) => {
        const speed = 0.1 + (index * 0.05);
        dec.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== LANGUAGE SWITCHER ====================
const translations = {
    de: {
        // Navigation
        'nav.cta': 'Jetzt laden',
        
        // Hero
        'hero.badge': 'Neu:',
        'hero.badgeText': 'Wochenplan-Kategorien verfügbar',
        'hero.title1': 'Plane deine Woche.',
        'hero.title2': 'Koche smarter.',
        'hero.description': 'Die intelligente App für alle, die ihre Mahlzeiten organisieren möchten. Entdecke hunderte Rezepte, plane deinen Wochenplan und generiere automatisch Einkaufslisten.',
        'hero.ctaPrimary': '📱 Kostenlos starten',
        'hero.ctaSecondary': 'Alle Features →',
        
        // Stats
        'stats.recipes': 'Rezepte',
        'stats.languages': 'Sprachen',
        'stats.free': 'Kostenlos',
        
        // Features
        'features.title': 'Alles was du brauchst',
        'features.subtitle': 'Dein persönlicher Kochassistent mit allem, was du für die perfekte Wochenplanung brauchst.',
        'features.languages.title': 'Mehrsprachig',
        'features.languages.description': 'Verfügbar auf Deutsch und Englisch – wechsle jederzeit die Sprache.',
        'features.planning.title': 'Wochenplaner',
        'features.planning.description': 'Plane alle Mahlzeiten im Voraus und behalte den Überblick über die ganze Woche.',
        'features.shopping.title': 'Zutaten-Einkaufsliste',
        'features.shopping.description': 'Generiere automatisch Einkaufslisten basierend auf deinen geplanten Rezepten.',
        'features.duration.title': 'Rezeptdauer',
        'features.duration.description': 'Sieh auf einen Blick, wie lange jedes Rezept dauert – perfekt für die Zeitplanung.',
        'features.share.title': 'Teilen Funktion',
        'features.share.description': 'Teile deine Lieblingsrezepte ganz einfach mit Freunden und Familie.',
        'features.barcode.title': 'Barcodescanner',
        'features.barcode.description': 'Scanne Produkte und finde passende Rezepte für deine Zutaten.',
        'features.tag.available': '✓ Verfügbar',
        'features.tag.development': '🚧 In Entwicklung',
        
        // Premium
        'premium.title': 'Upgrade dein Kocherlebnis',
        'premium.subtitle': 'Entdecke erweiterte Funktionen für noch mehr Möglichkeiten.',
        'premium.receipt.title': 'Kassenbonscanner',
        'premium.receipt.description': 'Scanne deinen Kassenbon und erfasse automatisch deinen Vorrat.',
        'premium.taste.title': 'Geschmackstuning',
        'premium.taste.description': 'Personalisierte Rezeptvorschläge basierend auf deinen Vorlieben.',
        'premium.substitute.title': 'Zutatenersatz',
        'premium.substitute.description': 'Intelligente Vorschläge für Ersatzzutaten bei Allergien oder fehlenden Zutaten.',
        'premium.autoplan.title': 'Plane für mich',
        'premium.autoplan.description': 'Lass die KI deinen perfekten Wochenplan automatisch erstellen.',
        
        // Preview
        'preview.title': 'Die App in Aktion',
        'preview.subtitle': 'Entdecke die intuitive Benutzeroberfläche von Gusto',
        'preview.shopping.title': 'Einkaufsliste',
        'preview.shopping.subtitle': 'Alle Zutaten auf einen Blick',
        'preview.weekplan.title': 'Wochenplan',
        'preview.weekplan.subtitle': 'Heute, Morgen, Diese Woche',
        'preview.recipe.title': 'Rezeptdetails',
        'preview.recipe.subtitle': 'Zutaten & Anleitung',
        
        // Testimonial
        'testimonial.quote': 'Nie wieder die Frage: Was koche ich heute? Gusto hat meine Woche revolutioniert.',
        
        // Beta
        'beta.title': 'Werde Beta-Tester',
        'beta.description': 'Sei einer der Ersten, die Gusto testen! Melde dich jetzt für die Testphase an und erhalte exklusiven Zugang zu neuen Features.',
        'beta.emailPlaceholder': 'deine@email.de',
        'beta.submit': 'Jetzt anmelden',
        'beta.error': '⚠️ Bitte gib eine gültige Email-Adresse ein.',
        'beta.success': 'Perfekt! Du bist für die Beta registriert.',
        'beta.privacy': '🔒 Wir respektieren deine Privatsphäre. Keine Spam-Mails.',
        'beta.early.title': 'Früher Zugang',
        'beta.early.description': 'Teste neue Features vor allen anderen',
        'beta.feedback.title': 'Direktes Feedback',
        'beta.feedback.description': 'Hilf uns, Gusto noch besser zu machen',
        'beta.exclusive.title': 'Exklusive Vorteile',
        'beta.exclusive.description': 'Beta-Tester erhalten besondere Extras',
        
        // Download
        'download.title': 'Bald verfügbar!',
        'download.description': 'Gusto befindet sich noch in der Entwicklung. Melde dich oben als Beta-Tester an, um als Erster zu erfahren, wenn die App erscheint!',
        'download.soonOn': 'Bald im',
        'download.soonAt': 'Bald bei',
        'download.release': '📅 Geplanter Release: März 2026',
        
        // Footer
        'footer.description': 'Die intelligente Meal-Planning App für alle, die gerne kochen und ihre Woche organisieren möchten.',
        'footer.legal': 'Rechtliches',
        'footer.privacy': 'Datenschutz',
        'footer.imprint': 'Impressum',
        'footer.terms': 'AGB',
        'footer.copyright': '© 2026 Gusto. Made with ❤️ for food lovers.'
    },
    en: {
        // Navigation
        'nav.cta': 'Download Now',
        
        // Hero
        'hero.badge': 'New:',
        'hero.badgeText': 'Weekly plan categories available',
        'hero.title1': 'Plan your week.',
        'hero.title2': 'Cook smarter.',
        'hero.description': 'The intelligent app for anyone who wants to organize their meals. Discover hundreds of recipes, plan your weekly menu, and automatically generate shopping lists.',
        'hero.ctaPrimary': '📱 Start for free',
        'hero.ctaSecondary': 'All Features →',
        
        // Stats
        'stats.recipes': 'Recipes',
        'stats.languages': 'Languages',
        'stats.free': 'Free',
        
        // Features
        'features.title': 'Everything you need',
        'features.subtitle': 'Your personal cooking assistant with everything you need for perfect weekly planning.',
        'features.languages.title': 'Multilingual',
        'features.languages.description': 'Available in German and English – switch languages anytime.',
        'features.planning.title': 'Weekly Planner',
        'features.planning.description': 'Plan all meals in advance and keep track of your entire week.',
        'features.shopping.title': 'Ingredient Shopping List',
        'features.shopping.description': 'Automatically generate shopping lists based on your planned recipes.',
        'features.duration.title': 'Recipe Duration',
        'features.duration.description': 'See at a glance how long each recipe takes – perfect for time planning.',
        'features.share.title': 'Sharing Feature',
        'features.share.description': 'Easily share your favorite recipes with friends and family.',
        'features.barcode.title': 'Barcode Scanner',
        'features.barcode.description': 'Scan products and find matching recipes for your ingredients.',
        'features.tag.available': '✓ Available',
        'features.tag.development': '🚧 In Development',
        
        // Premium
        'premium.title': 'Upgrade your cooking experience',
        'premium.subtitle': 'Discover advanced features for even more possibilities.',
        'premium.receipt.title': 'Receipt Scanner',
        'premium.receipt.description': 'Scan your receipt and automatically track your inventory.',
        'premium.taste.title': 'Taste Tuning',
        'premium.taste.description': 'Personalized recipe suggestions based on your preferences.',
        'premium.substitute.title': 'Ingredient Substitution',
        'premium.substitute.description': 'Smart suggestions for substitute ingredients for allergies or missing items.',
        'premium.autoplan.title': 'Plan for me',
        'premium.autoplan.description': 'Let AI automatically create your perfect weekly plan.',
        
        // Preview
        'preview.title': 'The App in Action',
        'preview.subtitle': 'Discover the intuitive user interface of Gusto',
        'preview.shopping.title': 'Shopping List',
        'preview.shopping.subtitle': 'All ingredients at a glance',
        'preview.weekplan.title': 'Weekly Plan',
        'preview.weekplan.subtitle': 'Today, Tomorrow, This Week',
        'preview.recipe.title': 'Recipe Details',
        'preview.recipe.subtitle': 'Ingredients & Instructions',
        
        // Testimonial
        'testimonial.quote': 'Never again the question: What should I cook today? Gusto has revolutionized my week.',
        
        // Beta
        'beta.title': 'Become a Beta Tester',
        'beta.description': 'Be one of the first to test Gusto! Sign up now for the beta phase and get exclusive access to new features.',
        'beta.emailPlaceholder': 'your@email.com',
        'beta.submit': 'Sign up now',
        'beta.error': '⚠️ Please enter a valid email address.',
        'beta.success': 'Perfect! You are registered for the beta.',
        'beta.privacy': '🔒 We respect your privacy. No spam emails.',
        'beta.early.title': 'Early Access',
        'beta.early.description': 'Test new features before everyone else',
        'beta.feedback.title': 'Direct Feedback',
        'beta.feedback.description': 'Help us make Gusto even better',
        'beta.exclusive.title': 'Exclusive Benefits',
        'beta.exclusive.description': 'Beta testers receive special extras',
        
        // Download
        'download.title': 'Coming Soon!',
        'download.description': 'Gusto is still in development. Sign up as a beta tester above to be the first to know when the app is released!',
        'download.soonOn': 'Soon on',
        'download.soonAt': 'Soon on',
        'download.release': '📅 Planned Release: March 2026',
        
        // Footer
        'footer.description': 'The intelligent meal planning app for anyone who loves cooking and wants to organize their week.',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.imprint': 'Imprint',
        'footer.terms': 'Terms',
        'footer.copyright': '© 2026 Gusto. Made with ❤️ for food lovers.'
    }
};

let currentLang = localStorage.getItem('gusto-lang') || 'de';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gusto-lang', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update links based on language
    document.querySelectorAll('[data-i18n-href-' + lang + ']').forEach(el => {
        const href = el.getAttribute('data-i18n-href-' + lang);
        if (href) {
            el.setAttribute('href', href);
        }
    });
    
    // Update image sources based on language
    document.querySelectorAll('[data-i18n-src-' + lang + ']').forEach(el => {
        const src = el.getAttribute('data-i18n-src-' + lang);
        if (src) {
            el.setAttribute('src', src);
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Initialize language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Set initial language
setLanguage(currentLang);
