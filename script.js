/* =====================================================
   أكاديمية إتقان البيان — البرمجة التفاعلية
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollTopButton();
    initScrollSpy();
    initQuiz();
    initRegisterForm();
    document.getElementById('footer-year').textContent = new Date().getFullYear();
});

/* ===================== القائمة في الجوال ===================== */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(isHidden));
}
function initMobileMenu() {
    document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
}

/* ===================== زر العودة للأعلى ===================== */
function initScrollTopButton() {
    const btn = document.getElementById('scroll-top-btn');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    });
}

/* ===================== تمييز الرابط النشط أثناء التمرير ===================== */
function initScrollSpy() {
    const sections = ['hero', 'programs', 'quiz-section', 'faq', 'register']
        .map(id => document.getElementById(id))
        .filter(Boolean);
    const links = Array.from(document.querySelectorAll('.nav-link'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(section => observer.observe(section));
}

/* ===================== الأسئلة الشائعة (أكورديون) ===================== */
function toggleFaq(buttonEl) {
    const item = buttonEl.closest('.faq-item');
    const wasActive = item.classList.contains('faq-active');

    // إغلاق كل العناصر الأخرى (أكورديون بعنصر واحد مفتوح)
    document.querySelectorAll('.faq-item.faq-active').forEach(el => el.classList.remove('faq-active'));

    if (!wasActive) {
        item.classList.add('faq-active');
    }
}

/* ===================== أداة اختبار التجويد ===================== */
const quizData = [
    {
        q: { ar: 'ما حكم النون الساكنة إذا جاء بعدها حرف من حروف "يرملون"؟', en: 'What is the ruling when a silent noon is followed by one of the letters of "يرملون"?' },
        options: [
            { ar: 'الإظهار', en: 'Izhaar (clear pronunciation)' },
            { ar: 'الإدغام', en: 'Idghaam (merging)' },
            { ar: 'الإقلاب', en: 'Iqlaab (conversion)' },
            { ar: 'الإخفاء', en: 'Ikhfaa (concealment)' }
        ],
        correct: 1
    },
    {
        q: { ar: 'عدد حروف المد الأصلية هي:', en: 'The number of original madd (elongation) letters is:' },
        options: [
            { ar: 'حرفان', en: 'Two letters' },
            { ar: 'ثلاثة أحرف', en: 'Three letters' },
            { ar: 'أربعة أحرف', en: 'Four letters' },
            { ar: 'خمسة أحرف', en: 'Five letters' }
        ],
        correct: 1
    },
    {
        q: { ar: 'حكم الميم الساكنة إذا جاء بعدها حرف الباء يُسمى:', en: 'The ruling when a silent meem is followed by the letter baa is called:' },
        options: [
            { ar: 'الإظهار الشفوي', en: 'Labial Izhaar' },
            { ar: 'الإخفاء الشفوي', en: 'Labial Ikhfaa' },
            { ar: 'الإدغام الشفوي', en: 'Labial Idghaam' },
            { ar: 'القلقلة', en: 'Qalqalah' }
        ],
        correct: 1
    },
    {
        q: { ar: 'حروف القلقلة مجموعة في عبارة:', en: 'The Qalqalah letters are gathered in the phrase:' },
        options: [
            { ar: 'قطب جد', en: 'Qutb Jad' },
            { ar: 'يرملون', en: 'Yarmaloon' },
            { ar: 'حروف الحلق', en: 'Throat letters' },
            { ar: 'لام شمسية', en: 'Sun Laam' }
        ],
        correct: 0
    },
    {
        q: { ar: 'اللام الشمسية هي التي:', en: 'The "sun laam" is the one that:' },
        options: [
            { ar: 'تُنطق واضحة دائماً', en: 'Is always pronounced clearly' },
            { ar: 'تُكتب ولا تُنطق ويُدغم فيها الحرف التالي', en: 'Is written but not pronounced, merging into the next letter' },
            { ar: 'تُنطق مشددة فقط', en: 'Is pronounced only with shaddah' },
            { ar: 'لا علاقة لها بأحكام التجويد', en: 'Has no relation to tajweed rules' }
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function initQuiz() {
    document.getElementById('quiz-total').textContent = quizData.length;
    renderQuestion();
}

function renderQuestion() {
    const lang = currentLang;
    const data = quizData[currentQuestion];
    const box = document.getElementById('quiz-question-box');

    document.getElementById('quiz-current').textContent = currentQuestion + 1;
    document.getElementById('quiz-progress-bar').style.width = `${((currentQuestion) / quizData.length) * 100 + (100 / quizData.length)}%`;

    box.innerHTML = `
        <h3 class="text-lg md:text-xl font-bold text-slate-900 mb-5">${data.q[lang]}</h3>
        <div id="quiz-options-list"></div>
    `;

    const list = document.getElementById('quiz-options-list');
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-option';
        btn.textContent = opt[lang];
        btn.addEventListener('click', () => selectAnswer(idx, btn));
        list.appendChild(btn);
    });
}

function selectAnswer(idx, btnEl) {
    const data = quizData[currentQuestion];
    const allButtons = document.querySelectorAll('#quiz-options-list .quiz-option');

    allButtons.forEach((b, i) => {
        b.disabled = true;
        b.setAttribute('aria-disabled', 'true');
        if (i === data.correct) b.classList.add('correct');
        else if (i === idx) b.classList.add('incorrect');
    });

    if (idx === data.correct) score++;

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            renderQuestion();
        } else {
            showQuizResult();
        }
    }, 700);
}

function showQuizResult() {
    document.getElementById('quiz-questions').classList.add('hidden');
    const resultBox = document.getElementById('quiz-result');
    resultBox.classList.remove('hidden');

    const percent = Math.round((score / quizData.length) * 100);
    const lang = currentLang;

    let level;
    if (percent >= 80) {
        level = {
            emoji: '🏆',
            title: { ar: 'مستوى متقدم!', en: 'Advanced level!' },
            desc: { ar: `أحسنت! أجبت بشكل صحيح على ${score} من ${quizData.length}. أساسك في التجويد قوي، ويمكنك الانضمام مباشرة لمسار الإجازة والتخصص.`, en: `Great job! You got ${score} out of ${quizData.length} correct. Your tajweed foundation is strong — you can join our ijazah specialization track directly.` }
        };
    } else if (percent >= 40) {
        level = {
            emoji: '🌱',
            title: { ar: 'مستوى متوسط', en: 'Intermediate level' },
            desc: { ar: `أجبت بشكل صحيح على ${score} من ${quizData.length}. لديك أساس جيد، وبقليل من التدريب المنتظم مع معلم مختص ستتقن الأحكام سريعاً.`, en: `You got ${score} out of ${quizData.length} correct. You have a good base — with regular guided practice you'll master the rules quickly.` }
        };
    } else {
        level = {
            emoji: '📖',
            title: { ar: 'مستوى مبتدئ', en: 'Beginner level' },
            desc: { ar: `أجبت بشكل صحيح على ${score} من ${quizData.length}. لا بأس، فالبداية الصحيحة هي نصف الطريق، وبرنامجنا التأسيسي سيأخذ بيدك خطوة بخطوة.`, en: `You got ${score} out of ${quizData.length} correct. That's alright — a correct start is half the journey, and our foundational program will guide you step by step.` }
        };
    }

    document.getElementById('quiz-result-emoji').textContent = level.emoji;
    document.getElementById('quiz-result-title').textContent = level.title[lang];
    document.getElementById('quiz-result-desc').textContent = level.desc[lang];
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-questions').classList.remove('hidden');
    renderQuestion();
}

/* ===================== نموذج التسجيل ===================== */
function initRegisterForm() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // هنا يتم عادة إرسال البيانات إلى الخادم أو خدمة بريد؛
        // نعرض حالياً رسالة نجاح توضيحية في الواجهة.
        form.classList.add('hidden');
        document.getElementById('reg-success').classList.remove('hidden');
    });
}

/* ===================== تبديل اللغة (عربي / إنجليزي) ===================== */
let currentLang = 'ar';

const translations = {
    'nav-title':          { ar: 'إتقان البيان', en: 'Itqan Al-Bayan' },
    'nav-subtitle':       { ar: 'لعلوم القرآن واللغات', en: 'Quranic Sciences & Languages' },
    'link-home':          { ar: 'الرئيسية', en: 'Home' },
    'link-programs':      { ar: 'برامجنا', en: 'Programs' },
    'link-quiz':          { ar: 'اختبر تجويدك', en: 'Test Yourself' },
    'link-faq':           { ar: 'الأسئلة الشائعة', en: 'FAQ' },
    'link-reg':           { ar: 'التسجيل', en: 'Register' },
    'nav-register-btn':   { ar: 'سجل معنا الآن', en: 'Register Now' },

    'hero-tag':           { ar: 'مرحباً بكم في أكاديمية إتقان البيان', en: 'Welcome to Itqan Al-Bayan Academy' },
    'hero-desc':          { ar: 'منصة أكاديمية متخصصة في تعليم أحكام التجويد ومخارج الحروف بالطرق العلمية المؤصلة، بالإضافة إلى تمكين وتطوير مهارات اللغتين العربية والإنجليزية.', en: 'A specialized academic platform teaching tajweed rules and articulation points through rigorous, well-grounded methods, alongside developing Arabic and English language skills.' },
    'hero-btn-1':         { ar: 'ابدأ رحلتك التعليمية الآن', en: 'Start Your Learning Journey' },
    'hero-btn-2':         { ar: 'حدد مستواك في التجويد ثوانٍ', en: 'Find Your Tajweed Level' },
    'stat-1':             { ar: 'طالب وطالبة', en: 'Students' },
    'stat-2':             { ar: 'معلم مجاز', en: 'Certified Teachers' },
    'stat-3':             { ar: 'تقييم الطلاب', en: 'Student Rating' },

    'prog-title':         { ar: 'برامجنا ومساراتنا التعليمية', en: 'Our Programs & Tracks' },
    'prog-desc':          { ar: 'نقدم مناهج دراسية متكاملة مصممة لتناسب مختلف المستويات والأعمار تحت إشراف نخبة من المتخصصين.', en: 'We offer comprehensive curricula designed for all levels and ages, supervised by a team of specialists.' },
    'badge-main':         { ar: 'المسار الرئيسي', en: 'Main Track' },
    'card1-title':        { ar: 'علوم القرآن والتجويد', en: 'Quranic Sciences & Tajweed' },
    'card1-desc':         { ar: 'تصحيح التلاوة، وشرح مخارج الحروف وأحكام التجويد بدقة، مع الحصول على الإجازة بالسند المتصل.', en: 'Recitation correction and precise teaching of articulation points and tajweed rules, leading to a connected-chain ijazah.' },
    'card1-cta':          { ar: 'سجّل في هذا المسار', en: 'Join this track' },
    'card2-title':        { ar: 'اللغة العربية والبيان', en: 'Arabic Language & Rhetoric' },
    'card2-desc':         { ar: 'تعليم النحو، الصرف، والبلاغة للأقحاح والناطقين بغيرها، لتعزيز فصاحة اللسان وفهم معاني الخطاب العربي الفصيح.', en: 'Grammar, morphology and rhetoric for native and non-native speakers, to build eloquence and deep comprehension of classical Arabic.' },
    'card2-cta':          { ar: 'سجّل في هذا المسار', en: 'Join this track' },
    'card3-title':        { ar: 'اللغة الإنجليزية', en: 'English Language' },
    'card3-desc':         { ar: 'تطوير مهارات المحادثة والاستماع والقراءة باللغة الإنجليزية لفتح آفاق تواصل عالمية ونقل المعارف الإسلامية للخارج.', en: 'Developing speaking, listening and reading skills to open global communication and share Islamic knowledge abroad.' },
    'card3-cta':          { ar: 'سجّل في هذا المسار', en: 'Join this track' },

    'quiz-sec-title':     { ar: 'أداة تحديد المستوى السريع', en: 'Quick Level Assessment' },
    'quiz-sec-desc':      { ar: 'اختبر معلوماتك التجويدية الأساسية في دقيقة واحدة واكتشف ما تحتاجه للوصول إلى مرتبة المهرة بالقرآن.', en: 'Test your basic tajweed knowledge in one minute and discover what you need to master the recitation of the Quran.' },
    'quiz-restart-btn':   { ar: 'إعادة الاختبار', en: 'Retake Quiz' },
    'quiz-register-btn':  { ar: 'سجّل الآن وابدأ التعلم', en: 'Register & Start Learning' },

    'faq-title':          { ar: 'الأسئلة الشائعة', en: 'Frequently Asked Questions' },
    'faq-desc':           { ar: 'كل ما تحتاج معرفته قبل الانضمام إلى الأكاديمية', en: 'Everything you need to know before joining the academy' },

    'reg-title':          { ar: 'ابدأ رحلتك اليوم', en: 'Start Your Journey Today' },
    'reg-desc':           { ar: 'املأ بياناتك وسيتواصل معك فريقنا التعليمي خلال 24 ساعة لتحديد موعد حصتك التجريبية المجانية.', en: 'Fill in your details and our academic team will contact you within 24 hours to schedule your free trial class.' },
    'label-name':         { ar: 'الاسم الكامل', en: 'Full Name' },
    'label-phone':        { ar: 'رقم الجوال / واتساب', en: 'Phone / WhatsApp Number' },
    'label-email':        { ar: 'البريد الإلكتروني', en: 'Email Address' },
    'label-track':        { ar: 'المسار المطلوب', en: 'Preferred Track' },
    'label-age':          { ar: 'الفئة العمرية', en: 'Age Group' },
    'reg-submit-btn':     { ar: 'إرسال طلب التسجيل', en: 'Submit Registration' },
    'reg-privacy-note':   { ar: 'بياناتك محفوظة لدينا ولن يتم مشاركتها مع أي طرف ثالث.', en: 'Your data is kept private and never shared with third parties.' },
    'reg-success-title':  { ar: 'تم استلام طلبك بنجاح', en: 'Your request has been received' },
    'reg-success-desc':   { ar: 'سيتواصل معك فريقنا التعليمي قريباً عبر الجوال أو البريد الإلكتروني المسجّل.', en: 'Our academic team will reach out to you shortly via phone or the email you provided.' },

    'footer-about':       { ar: 'أكاديمية تعليمية متخصصة في تجويد القرآن الكريم ومخارج الحروف وعلوم اللغتين العربية والإنجليزية، تحت إشراف نخبة من المعلمين المجازين.', en: 'A specialized academy teaching Quranic tajweed, articulation points, and Arabic & English language sciences, under certified teachers.' },
    'footer-links-title': { ar: 'روابط سريعة', en: 'Quick Links' },
    'footer-contact-title': { ar: 'تواصل معنا', en: 'Contact Us' },
    'footer-hours':       { ar: '🕐 يومياً من 9 صباحاً حتى 10 مساءً', en: '🕐 Daily from 9 AM to 10 PM' }
};

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage();
}

function applyLanguage() {
    const html = document.getElementById('html-tag');
    const isEnglish = currentLang === 'en';

    html.lang = currentLang;
    html.dir = isEnglish ? 'ltr' : 'rtl';
    document.getElementById('lang-btn').textContent = isEnglish ? 'العربية' : 'English';

    // العنوان الرئيسي يحتوي وسوماً داخلية فيُعامل بشكل خاص
    const heroTitle = document.getElementById('hero-title');
    heroTitle.innerHTML = isEnglish
        ? 'Recite the Quran <span class="text-emerald-400">with mastery</span>, and step into the world of <span class="text-emerald-400">eloquence</span>'
        : 'رتّل القرآن <span class="text-emerald-400">بإتقان</span>، وانطلق في عالم <span class="text-emerald-400">البيان</span>';

    Object.keys(translations).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = translations[id][currentLang];
    });

    // إعادة رسم السؤال الحالي في الاختبار باللغة الجديدة
    if (document.getElementById('quiz-questions') && !document.getElementById('quiz-questions').classList.contains('hidden')) {
        renderQuestion();
    }

    document.title = isEnglish
        ? 'Itqan Al-Bayan Academy | Tajweed'
        : 'أكاديمية إتقان البيان | للتجويد';
}
