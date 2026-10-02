/* =====================================================
   أكاديمية إتقان البيان — البرمجة التفاعلية
   ===================================================== */

/* ╔═══════════════════════════════════════════════════╗
   ║  ضع مفتاح Web3Forms (Access Key) هنا بين علامتي   ║
   ║  الاقتباس بدل YOUR_ACCESS_KEY_HERE                ║
   ╚═══════════════════════════════════════════════════╝ */
const WEB3FORMS_ACCESS_KEY = 'c607f429-ad87-4a67-a4e4-868eb59eb7a0';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const LANGS = ['ar', 'en', 'de'];
let currentLang = 'ar';

/* ===================== الترجمات ===================== */
const I18N = {
    'meta.title': { ar: 'أكاديمية إتقان البيان | للتجويد', en: 'Itqan Al-Bayan Academy | Tajweed', de: 'Itqan Al-Bayan Akademie | Tadschwid' },
    'meta.desc': {
        ar: 'أكاديمية إتقان البيان لتعليم أحكام التجويد ومخارج الحروف بالطرق العلمية المؤصلة، بالإضافة إلى دورات تمكين مهارات اللغتين العربية والإنجليزية تحت إشراف معلمين مجازين.',
        en: 'Itqan Al-Bayan Academy teaches tajweed rules and letter articulation through well-grounded scientific methods, plus Arabic and English language courses under certified teachers.',
        de: 'Die Itqan Al-Bayan Akademie vermittelt Tadschwid-Regeln und Artikulationsorte der Buchstaben nach fundierten Methoden – dazu Arabisch- und Englischkurse bei Lehrkräften mit Idschaza.'
    },

    'nav.brand':   { ar: 'إتقان البيان', en: 'Itqan Al-Bayan', de: 'Itqan Al-Bayan' },
    'nav.tagline': { ar: 'لعلوم القرآن واللغات', en: 'Quranic Sciences & Languages', de: 'Koranwissenschaften & Sprachen' },
    'nav.home':    { ar: 'الرئيسية', en: 'Home', de: 'Startseite' },
    'nav.about':   { ar: 'من نحن', en: 'About Us', de: 'Über uns' },
    'nav.programs':{ ar: 'برامجنا', en: 'Programs', de: 'Programme' },
    'nav.quiz':    { ar: 'اختبر تجويدك', en: 'Test Yourself', de: 'Tadschwid-Test' },
    'nav.faq':     { ar: 'الأسئلة الشائعة', en: 'FAQ', de: 'Häufige Fragen' },
    'nav.reg':     { ar: 'التسجيل', en: 'Register', de: 'Anmeldung' },
    'nav.cta':     { ar: 'سجل معنا الآن', en: 'Register Now', de: 'Jetzt anmelden' },
    'nav.menu':    { ar: 'فتح القائمة', en: 'Open menu', de: 'Menü öffnen' },
    'top':         { ar: 'العودة للأعلى', en: 'Back to top', de: 'Nach oben' },

    'hero.tag':  { ar: 'مرحباً بكم في أكاديمية إتقان البيان', en: 'Welcome to Itqan Al-Bayan Academy', de: 'Willkommen an der Itqan Al-Bayan Akademie' },
    'hero.title': {
        ar: 'رتّل القرآن <span class="text-emerald-400">بإتقان</span>، وانطلق في عالم <span class="text-emerald-400">البيان</span>',
        en: 'Recite the Quran <span class="text-emerald-400">with mastery</span>, and step into the world of <span class="text-emerald-400">eloquence</span>',
        de: 'Rezitiere den Koran <span class="text-emerald-400">mit Meisterschaft</span> und entdecke die Welt der <span class="text-emerald-400">Beredsamkeit</span>'
    },
    'hero.desc': {
        ar: 'منصة أكاديمية متخصصة في تعليم أحكام التجويد ومخارج الحروف بالطرق العلمية المؤصلة، بالإضافة إلى تمكين وتطوير مهارات اللغتين العربية والإنجليزية.',
        en: 'A specialized academic platform teaching tajweed rules and letter articulation through well-grounded methods, alongside developing Arabic and English language skills.',
        de: 'Eine spezialisierte Bildungsplattform für die Tadschwid-Regeln und die Artikulationsorte der arabischen Buchstaben nach fundierten wissenschaftlichen Methoden – ergänzt durch die Förderung von Arabisch- und Englischkenntnissen.'
    },
    'hero.btn1': { ar: 'ابدأ رحلتك التعليمية الآن', en: 'Start Your Learning Journey', de: 'Starte jetzt deine Lernreise' },
    'hero.btn2': { ar: 'حدد مستواك في التجويد في ثوانٍ', en: 'Find Your Tajweed Level in Seconds', de: 'Finde in Sekunden dein Tadschwid-Niveau' },
    'stat.1': { ar: 'طالب وطالبة', en: 'Students', de: 'Lernende' },
    'stat.2': { ar: 'معلم مجاز', en: 'Certified Teachers', de: 'Lehrkräfte mit Idschaza' },
    'stat.3': { ar: 'تقييم الطلاب', en: 'Student Rating', de: 'Bewertung' },

    'about.title': { ar: 'من نحن', en: 'About Us', de: 'Über uns' },
    'about.lead': {
        ar: 'أكاديمية إتقان البيان منصة تعليمية متخصصة في علوم القرآن الكريم واللغات، تجمع بين الأصالة العلمية وأساليب التعليم الحديثة عن بعد، بإشراف معلمين مجازين.',
        en: 'Itqan Al-Bayan Academy is a specialized educational platform for Quranic sciences and languages, combining scholarly authenticity with modern online teaching, under certified (ijazah-holding) teachers.',
        de: 'Die Itqan Al-Bayan Akademie ist eine spezialisierte Bildungsplattform für Koranwissenschaften und Sprachen. Sie verbindet wissenschaftliche Tradition mit modernem Online-Unterricht unter Anleitung von Lehrkräften mit Idschaza.'
    },
    'about.mission.title': { ar: 'رسالتنا', en: 'Our Mission', de: 'Unsere Mission' },
    'about.mission.text': {
        ar: 'تعليم أحكام التجويد ومخارج الحروف بمنهج علمي مؤصَّل، وتمكين الدارسين من اللغتين العربية والإنجليزية، لنُخرّج قارئاً متقناً ولساناً فصيحاً.',
        en: 'To teach tajweed rules and letter articulation through a well-grounded scientific method, and to empower learners in Arabic and English — nurturing precise reciters and eloquent speakers.',
        de: 'Die Regeln des Tadschwid und die Artikulationsorte der Buchstaben nach einer fundierten Methode zu vermitteln und Lernende in Arabisch und Englisch zu stärken – für präzise Rezitation und gewandten Ausdruck.'
    },
    'about.vision.title': { ar: 'رؤيتنا', en: 'Our Vision', de: 'Unsere Vision' },
    'about.vision.text': {
        ar: 'أن نكون وجهة تعليمية موثوقة في إتقان تلاوة القرآن الكريم وتعلّم اللغات، نصل بكل متعلّم، أينما كان، إلى الإتقان بالسند المتصل.',
        en: 'To be a trusted educational destination for mastering Quran recitation and learning languages, guiding every learner, wherever they are, to mastery with a connected chain of transmission.',
        de: 'Eine vertrauenswürdige Bildungsadresse für die Beherrschung der Koranrezitation und das Erlernen von Sprachen zu sein – und jede lernende Person, wo auch immer sie ist, zur Meisterschaft mit durchgehender Überlieferungskette (Sanad) zu führen.'
    },
    'about.identity.title': { ar: 'هويتنا', en: 'Our Identity', de: 'Unsere Identität' },
    'about.identity.text': {
        ar: 'هوية تقوم على الأصالة والسند المتصل، والإتقان في التعليم، والأمانة العلمية، والعناية بكل متعلّم بحسب عمره ومستواه.',
        en: 'An identity built on authenticity and a connected chain of transmission, excellence in teaching, scholarly integrity, and care for every learner according to their age and level.',
        de: 'Eine Identität, die auf Authentizität und durchgehender Überlieferungskette, Exzellenz in der Lehre, wissenschaftlicher Redlichkeit und Fürsorge für jede lernende Person entsprechend Alter und Niveau beruht.'
    },

    'prog.title': { ar: 'برامجنا ومساراتنا التعليمية', en: 'Our Programs & Tracks', de: 'Unsere Programme und Lernpfade' },
    'prog.desc': {
        ar: 'نقدم مناهج دراسية متكاملة مصممة لتناسب مختلف المستويات والأعمار تحت إشراف نخبة من المتخصصين.',
        en: 'We offer comprehensive curricula designed for all levels and ages, supervised by a team of specialists.',
        de: 'Wir bieten umfassende Lehrpläne für alle Niveaus und Altersgruppen, betreut von einem Team aus Fachleuten.'
    },
    'prog.badge': { ar: 'المسار الرئيسي', en: 'Main Track', de: 'Hauptpfad' },
    'prog.cta':   { ar: 'سجّل في هذا المسار', en: 'Join this track', de: 'Für diesen Pfad anmelden' },
    'card1.title': { ar: 'علوم القرآن والتجويد', en: 'Quranic Sciences & Tajweed', de: 'Koranwissenschaften & Tadschwid' },
    'card1.desc': {
        ar: 'تصحيح التلاوة، وشرح مخارج الحروف وأحكام التجويد بدقة، مع الحصول على الإجازة بالسند المتصل.',
        en: 'Recitation correction and precise teaching of letter articulation and tajweed rules, leading to an ijazah with a connected chain.',
        de: 'Korrektur der Rezitation und präzise Vermittlung der Artikulationsorte und Tadschwid-Regeln – mit der Möglichkeit, die Idschaza mit durchgehender Überlieferungskette zu erhalten.'
    },
    'card2.title': { ar: 'اللغة العربية والبيان', en: 'Arabic Language & Rhetoric', de: 'Arabische Sprache & Rhetorik' },
    'card2.desc': {
        ar: 'تعليم النحو، الصرف، والبلاغة للأقحاح والناطقين بغيرها، لتعزيز فصاحة اللسان وفهم معاني الخطاب العربي الفصيح.',
        en: 'Grammar, morphology and rhetoric for native and non-native speakers, to build eloquence and a deep understanding of classical Arabic.',
        de: 'Grammatik, Morphologie und Rhetorik für Muttersprachler und Nicht-Muttersprachler – für sprachliche Gewandtheit und ein tiefes Verständnis des klassischen Arabisch.'
    },
    'card3.title': { ar: 'اللغة الإنجليزية', en: 'English Language', de: 'Englische Sprache' },
    'card3.desc': {
        ar: 'تطوير مهارات المحادثة والاستماع والقراءة باللغة الإنجليزية لفتح آفاق تواصل عالمية ونقل المعارف الإسلامية للخارج.',
        en: 'Developing speaking, listening and reading skills to open global communication and share Islamic knowledge abroad.',
        de: 'Sprechen, Hören und Lesen auf Englisch – für weltweite Kommunikation und die Weitergabe islamischen Wissens ins Ausland.'
    },

    'quiz.title': { ar: 'أداة تحديد المستوى السريع', en: 'Quick Level Assessment', de: 'Schnelltest zur Niveaubestimmung' },
    'quiz.desc': {
        ar: 'اختبر معلوماتك التجويدية الأساسية في دقيقة واحدة واكتشف ما تحتاجه للوصول إلى مرتبة المهرة بالقرآن.',
        en: 'Test your basic tajweed knowledge in one minute and discover what you need to master the recitation of the Quran.',
        de: 'Teste dein Tadschwid-Grundwissen in einer Minute und finde heraus, was du brauchst, um die Koranrezitation zu meistern.'
    },
    'quiz.progress': { ar: 'السؤال {n} من {total}', en: 'Question {n} of {total}', de: 'Frage {n} von {total}' },
    'quiz.restart':  { ar: 'إعادة الاختبار', en: 'Retake Quiz', de: 'Test wiederholen' },
    'quiz.register': { ar: 'سجّل الآن وابدأ التعلم', en: 'Register & Start Learning', de: 'Jetzt anmelden und loslegen' },
    'quiz.adv.title': { ar: 'مستوى متقدم!', en: 'Advanced level!', de: 'Fortgeschrittenes Niveau!' },
    'quiz.adv.desc': {
        ar: 'أحسنت! أجبت بشكل صحيح على {score} من {total}. أساسك في التجويد قوي، ويمكنك الانضمام مباشرة لمسار الإجازة والتخصص.',
        en: 'Great job! You got {score} out of {total} correct. Your tajweed foundation is strong — you can join our ijazah specialization track directly.',
        de: 'Sehr gut! Du hast {score} von {total} Fragen richtig beantwortet. Dein Tadschwid-Fundament ist stark – du kannst direkt in den Idschaza- und Spezialisierungspfad einsteigen.'
    },
    'quiz.mid.title': { ar: 'مستوى متوسط', en: 'Intermediate level', de: 'Mittleres Niveau' },
    'quiz.mid.desc': {
        ar: 'أجبت بشكل صحيح على {score} من {total}. لديك أساس جيد، وبقليل من التدريب المنتظم مع معلم مختص ستتقن الأحكام سريعاً.',
        en: 'You got {score} out of {total} correct. You have a good base — with regular guided practice you will master the rules quickly.',
        de: 'Du hast {score} von {total} richtig. Du hast eine gute Basis – mit regelmäßigem Üben unter Anleitung beherrschst du die Regeln bald.'
    },
    'quiz.beg.title': { ar: 'مستوى مبتدئ', en: 'Beginner level', de: 'Anfängerniveau' },
    'quiz.beg.desc': {
        ar: 'أجبت بشكل صحيح على {score} من {total}. لا بأس، فالبداية الصحيحة هي نصف الطريق، وبرنامجنا التأسيسي سيأخذ بيدك خطوة بخطوة.',
        en: 'You got {score} out of {total} correct. That is fine — a correct start is half the journey, and our foundational program will guide you step by step.',
        de: 'Du hast {score} von {total} richtig. Kein Problem – ein guter Start ist der halbe Weg, und unser Grundlagenprogramm begleitet dich Schritt für Schritt.'
    },

    'faq.title': { ar: 'الأسئلة الشائعة', en: 'Frequently Asked Questions', de: 'Häufig gestellte Fragen' },
    'faq.desc':  { ar: 'كل ما تحتاج معرفته قبل الانضمام إلى الأكاديمية', en: 'Everything you need to know before joining the academy', de: 'Alles, was du vor dem Beitritt zur Akademie wissen musst' },
    'faq.q1': { ar: 'هل الدورات مناسبة للمبتدئين تماماً؟', en: 'Are the courses suitable for complete beginners?', de: 'Sind die Kurse auch für absolute Anfänger geeignet?' },
    'faq.a1': {
        ar: 'نعم، نستقبل المبتدئين والمتقدمين، ويُحدَّد المستوى بتقييم مبدئي ثم تُوضع خطة مناسبة لك.',
        en: 'Yes, we welcome beginners and advanced learners. Your level is determined by an initial assessment, then a suitable plan is set for you.',
        de: 'Ja, wir nehmen Anfänger und Fortgeschrittene auf. Nach einer ersten Einstufung wird ein Plan passend zu deinem Niveau erstellt.'
    },
    'faq.q2': { ar: 'كيف تتم الدروس؟', en: 'How are the lessons delivered?', de: 'Wie finden die Kurse statt?' },
    'faq.a2': {
        ar: 'تُقدَّم الدروس عن بعد عبر الإنترنت، وسيتواصل معك فريقنا لتحديد الصيغة الأنسب لك.',
        en: 'Lessons are delivered online, and our team will contact you to determine the format that suits you best.',
        de: 'Der Unterricht wird online angeboten. Unser Team meldet sich bei dir, um das passende Format für dich festzulegen.'
    },
    'faq.q3': { ar: 'هل أحصل على إجازة بسند متصل بعد إتمام البرنامج؟', en: 'Do I receive an ijazah with a connected chain after completing the program?', de: 'Erhalte ich nach Abschluss eine Idschaza mit durchgehender Überlieferungskette?' },
    'faq.a3': {
        ar: 'نعم، عند إتمام المسار المحدد للإجازة بنجاح تحت إشراف معلم مجاز، تُمنح إجازة قرآنية بسند متصل.',
        en: 'Yes, upon successfully completing the designated ijazah track under a certified teacher, a Quranic ijazah with a connected chain is granted.',
        de: 'Ja, nach erfolgreichem Abschluss des entsprechenden Pfades unter Anleitung einer Lehrkraft mit Idschaza wird eine koranische Idschaza mit durchgehender Überlieferungskette erteilt.'
    },
    'faq.q4': { ar: 'هل الدورات متاحة لجميع الأعمار؟', en: 'Are the courses available for all ages?', de: 'Sind die Kurse für alle Altersgruppen verfügbar?' },
    'faq.a4': {
        ar: 'نعم، لدينا مسارات للأطفال والناشئين والبالغين، ويُراعى في كل مسار الأسلوب التعليمي المناسب للفئة العمرية.',
        en: 'Yes, we have tracks for children, teens and adults, each using a teaching approach suited to the age group.',
        de: 'Ja, wir bieten Pfade für Kinder, Jugendliche und Erwachsene an – jeweils mit einer zur Altersgruppe passenden Lehrmethode.'
    },
    'faq.q5': { ar: 'ما الرسوم وطرق الدفع المتاحة؟', en: 'What are the fees and available payment methods?', de: 'Wie sind die Gebühren und Zahlungsmöglichkeiten?' },
    'faq.a5': {
        ar: 'بعد التسجيل سيتواصل معك فريقنا لتزويدك بتفاصيل الرسوم وطرق الدفع المتاحة.',
        en: 'After you register, our team will contact you with the fee details and available payment methods.',
        de: 'Nach der Anmeldung nimmt unser Team Kontakt mit dir auf und informiert dich über Gebühren und verfügbare Zahlungsmethoden.'
    },

    'reg.title': { ar: 'ابدأ رحلتك اليوم', en: 'Start Your Journey Today', de: 'Starte noch heute' },
    'reg.desc': {
        ar: 'املأ بياناتك وسيتواصل معك فريقنا التعليمي لتحديد الموعد المناسب.',
        en: 'Fill in your details and our academic team will get in touch to arrange a suitable time.',
        de: 'Fülle das Formular aus – unser Team meldet sich bei dir, um einen passenden Termin zu vereinbaren.'
    },
    'reg.name':  { ar: 'الاسم الكامل', en: 'Full name', de: 'Vollständiger Name' },
    'reg.name.ph': { ar: 'مثال: محمد أحمد', en: 'e.g. Mohammed Ahmed', de: 'z. B. Mohammed Ahmed' },
    'reg.email': { ar: 'البريد الإلكتروني', en: 'Email address', de: 'E-Mail-Adresse' },
    'reg.phone': { ar: 'رقم الجوال / واتساب', en: 'Phone / WhatsApp number', de: 'Handy- / WhatsApp-Nummer' },
    'reg.phone.hint': {
        ar: 'اختر رمز البلد ثم أدخل رقمك (7 أرقام على الأقل)',
        en: 'Choose your country code, then enter your number (at least 7 digits)',
        de: 'Wähle die Landesvorwahl und gib deine Nummer ein (mindestens 7 Ziffern)'
    },
    'reg.track': { ar: 'المسار المطلوب', en: 'Preferred track', de: 'Gewünschter Pfad' },
    'reg.age':   { ar: 'الفئة العمرية', en: 'Age group', de: 'Altersgruppe' },
    'track.tajweed': { ar: 'علوم القرآن والتجويد', en: 'Quranic Sciences & Tajweed', de: 'Koranwissenschaften & Tadschwid' },
    'track.arabic':  { ar: 'اللغة العربية والبيان', en: 'Arabic Language & Rhetoric', de: 'Arabische Sprache & Rhetorik' },
    'track.english': { ar: 'اللغة الإنجليزية', en: 'English Language', de: 'Englische Sprache' },
    'age.child': { ar: 'أطفال (أقل من 12)', en: 'Children (under 12)', de: 'Kinder (unter 12)' },
    'age.teen':  { ar: 'ناشئة (12 - 17)', en: 'Teens (12–17)', de: 'Jugendliche (12–17)' },
    'age.adult': { ar: 'بالغون (18+)', en: 'Adults (18+)', de: 'Erwachsene (ab 18)' },
    'reg.submit':  { ar: 'إرسال طلب التسجيل', en: 'Submit registration', de: 'Anmeldung absenden' },
    'reg.sending': { ar: 'جارٍ الإرسال...', en: 'Sending...', de: 'Wird gesendet …' },
    'reg.privacy': {
        ar: 'نستخدم بياناتك للتواصل معك بخصوص التسجيل فقط.',
        en: 'We use your details only to contact you about your registration.',
        de: 'Wir verwenden deine Angaben ausschließlich, um dich zu deiner Anmeldung zu kontaktieren.'
    },
    'reg.success.title': { ar: 'تم استلام طلبك بنجاح', en: 'Your request has been received', de: 'Deine Anfrage ist eingegangen' },
    'reg.success.desc': {
        ar: 'سيتواصل معك فريقنا التعليمي قريباً عبر الجوال أو البريد الإلكتروني المسجّل.',
        en: 'Our academic team will reach out shortly via the phone number or email you provided.',
        de: 'Unser Team meldet sich in Kürze per Telefon oder über die angegebene E-Mail-Adresse bei dir.'
    },
    'err.name':  { ar: 'يرجى إدخال اسمك الكامل.', en: 'Please enter your full name.', de: 'Bitte gib deinen vollständigen Namen ein.' },
    'err.email': {
        ar: 'يرجى إدخال بريد إلكتروني صحيح، مثل name@example.com',
        en: 'Please enter a valid email address, e.g. name@example.com',
        de: 'Bitte gib eine gültige E-Mail-Adresse ein, z. B. name@example.com'
    },
    'err.phone': {
        ar: 'يرجى إدخال رقم صحيح مكوّن من 7 أرقام على الأقل (أرقام فقط، بدون رمز البلد).',
        en: 'Please enter a valid number with at least 7 digits (digits only, without the country code).',
        de: 'Bitte gib eine gültige Nummer mit mindestens 7 Ziffern ein (nur Ziffern, ohne Landesvorwahl).'
    },
    'err.send': {
        ar: 'تعذّر إرسال الطلب. يرجى المحاولة لاحقاً أو التواصل معنا مباشرة.',
        en: 'We could not send your request. Please try again later or contact us directly.',
        de: 'Die Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut oder kontaktiere uns direkt.'
    },

    'footer.about': {
        ar: 'أكاديمية تعليمية متخصصة في تجويد القرآن الكريم ومخارج الحروف وعلوم اللغتين العربية والإنجليزية، تحت إشراف نخبة من المعلمين المجازين.',
        en: 'An academy specialized in Quranic tajweed, letter articulation, and Arabic & English language sciences, under certified teachers.',
        de: 'Eine Akademie für Koran-Tadschwid, Artikulationsorte und die Sprachwissenschaften Arabisch und Englisch – unter Lehrkräften mit Idschaza.'
    },
    'footer.links':   { ar: 'روابط سريعة', en: 'Quick Links', de: 'Schnellzugriff' },
    'footer.contact': { ar: 'تواصل معنا', en: 'Contact Us', de: 'Kontakt' },
    'footer.copy': {
        ar: '© {year} أكاديمية إتقان البيان. جميع الحقوق محفوظة.',
        en: '© {year} Itqan Al-Bayan Academy. All rights reserved.',
        de: '© {year} Itqan Al-Bayan Akademie. Alle Rechte vorbehalten.'
    }
};

/* رموز الدول (الاسم بالثلاث لغات) */
const COUNTRIES = [
    { code: '+962', ar: 'الأردن', en: 'Jordan', de: 'Jordanien' },
    { code: '+966', ar: 'السعودية', en: 'Saudi Arabia', de: 'Saudi-Arabien' },
    { code: '+971', ar: 'الإمارات', en: 'UAE', de: 'VAE' },
    { code: '+965', ar: 'الكويت', en: 'Kuwait', de: 'Kuwait' },
    { code: '+974', ar: 'قطر', en: 'Qatar', de: 'Katar' },
    { code: '+973', ar: 'البحرين', en: 'Bahrain', de: 'Bahrain' },
    { code: '+968', ar: 'عُمان', en: 'Oman', de: 'Oman' },
    { code: '+20',  ar: 'مصر', en: 'Egypt', de: 'Ägypten' },
    { code: '+963', ar: 'سوريا', en: 'Syria', de: 'Syrien' },
    { code: '+961', ar: 'لبنان', en: 'Lebanon', de: 'Libanon' },
    { code: '+964', ar: 'العراق', en: 'Iraq', de: 'Irak' },
    { code: '+970', ar: 'فلسطين', en: 'Palestine', de: 'Palästina' },
    { code: '+967', ar: 'اليمن', en: 'Yemen', de: 'Jemen' },
    { code: '+212', ar: 'المغرب', en: 'Morocco', de: 'Marokko' },
    { code: '+213', ar: 'الجزائر', en: 'Algeria', de: 'Algerien' },
    { code: '+216', ar: 'تونس', en: 'Tunisia', de: 'Tunesien' },
    { code: '+218', ar: 'ليبيا', en: 'Libya', de: 'Libyen' },
    { code: '+249', ar: 'السودان', en: 'Sudan', de: 'Sudan' },
    { code: '+90',  ar: 'تركيا', en: 'Türkiye', de: 'Türkei' },
    { code: '+49',  ar: 'ألمانيا', en: 'Germany', de: 'Deutschland' },
    { code: '+43',  ar: 'النمسا', en: 'Austria', de: 'Österreich' },
    { code: '+41',  ar: 'سويسرا', en: 'Switzerland', de: 'Schweiz' },
    { code: '+31',  ar: 'هولندا', en: 'Netherlands', de: 'Niederlande' },
    { code: '+33',  ar: 'فرنسا', en: 'France', de: 'Frankreich' },
    { code: '+44',  ar: 'بريطانيا', en: 'United Kingdom', de: 'Vereinigtes Königreich' },
    { code: '+1',   ar: 'أمريكا الشمالية', en: 'USA / Canada', de: 'USA / Kanada' },
    { code: '+61',  ar: 'أستراليا', en: 'Australia', de: 'Australien' },
    { code: '+92',  ar: 'باكستان', en: 'Pakistan', de: 'Pakistan' },
    { code: '+60',  ar: 'ماليزيا', en: 'Malaysia', de: 'Malaysia' },
    { code: '+62',  ar: 'إندونيسيا', en: 'Indonesia', de: 'Indonesien' }
];

/* تسميات تصل إلى بريدك دائماً بالعربية بغض النظر عن لغة الزائر */
const TRACK_LABELS_AR = { tajweed: 'علوم القرآن والتجويد', arabic: 'اللغة العربية والبيان', english: 'اللغة الإنجليزية' };
const AGE_LABELS_AR = { child: 'أطفال (أقل من 12)', teen: 'ناشئة (12 - 17)', adult: 'بالغون (18+)' };

function t(key, vars) {
    const entry = I18N[key];
    const str = entry ? (entry[currentLang] || entry.ar || key) : key;
    const all = Object.assign({ year: new Date().getFullYear() }, vars || {});
    return str.replace(/\{(\w+)\}/g, (m, k) => (k in all ? all[k] : m));
}

const $ = (id) => document.getElementById(id);

/* ===================== التهيئة ===================== */
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollTopButton();
    initScrollSpy();
    initLogoSlots();
    initQuiz();
    initRegisterForm();
    initLanguage();
});

/* ===================== القائمة في الجوال ===================== */
function toggleMobileMenu() {
    const menu = $('mobile-menu');
    const btn = $('mobile-menu-btn');
    const willOpen = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(willOpen));
}

function initMobileMenu() {
    $('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
    // إغلاق القائمة عند اختيار رابط
    document.querySelectorAll('#mobile-menu a').forEach(a => {
        a.addEventListener('click', () => {
            $('mobile-menu').classList.add('hidden');
            $('mobile-menu-btn').setAttribute('aria-expanded', 'false');
        });
    });
}

/* ===================== زر العودة للأعلى ===================== */
function initScrollTopButton() {
    const btn = $('scroll-top-btn');
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 500), { passive: true });
}

/* ===================== تمييز الرابط النشط ===================== */
function initScrollSpy() {
    const ids = ['hero', 'about', 'programs', 'quiz-section', 'faq', 'register'];
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
            }
        });
    }, { rootMargin: '-45% 0px -45% 0px' });
    ids.map($).filter(Boolean).forEach(el => observer.observe(el));
}

/* ===================== الشعار (احتياط للصور المخزنة مؤقتاً) ===================== */
function initLogoSlots() {
    document.querySelectorAll('.logo-slot .logo-img').forEach(img => {
        if (img.complete && img.naturalWidth > 0) img.parentElement.classList.add('has-logo');
    });
}

/* ===================== الأسئلة الشائعة ===================== */
function toggleFaq(buttonEl) {
    const item = buttonEl.closest('.faq-item');
    const wasActive = item.classList.contains('faq-active');
    document.querySelectorAll('.faq-item.faq-active').forEach(el => {
        el.classList.remove('faq-active');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    if (!wasActive) {
        item.classList.add('faq-active');
        buttonEl.setAttribute('aria-expanded', 'true');
    }
}

/* ===================== اختبار التجويد ===================== */
const quizData = [
    {
        q: { ar: 'ما حكم النون الساكنة إذا جاء بعدها حرف من حروف "يرملون"؟', en: 'What is the ruling when a silent noon is followed by one of the letters of "يرملون"?', de: 'Welche Regel gilt, wenn auf ein Nūn sākin ein Buchstabe aus „يرملون“ folgt?' },
        options: [
            { ar: 'الإظهار', en: 'Izhaar (clear pronunciation)', de: 'Izhar (deutliche Aussprache)' },
            { ar: 'الإدغام', en: 'Idghaam (merging)', de: 'Idgham (Verschmelzung)' },
            { ar: 'الإقلاب', en: 'Iqlaab (conversion)', de: 'Iqlab (Umwandlung)' },
            { ar: 'الإخفاء', en: 'Ikhfaa (concealment)', de: 'Ikhfa (Verbergen)' }
        ],
        correct: 1
    },
    {
        q: { ar: 'عدد حروف المد الأصلية هي:', en: 'The number of original madd (elongation) letters is:', de: 'Wie viele ursprüngliche Dehnungsbuchstaben (Madd) gibt es?' },
        options: [
            { ar: 'حرفان', en: 'Two letters', de: 'Zwei' },
            { ar: 'ثلاثة أحرف', en: 'Three letters', de: 'Drei' },
            { ar: 'أربعة أحرف', en: 'Four letters', de: 'Vier' },
            { ar: 'خمسة أحرف', en: 'Five letters', de: 'Fünf' }
        ],
        correct: 1
    },
    {
        q: { ar: 'حكم الميم الساكنة إذا جاء بعدها حرف الباء يُسمى:', en: 'The ruling when a silent meem is followed by the letter baa is called:', de: 'Wie heißt die Regel, wenn auf ein Mīm sākin der Buchstabe Bā folgt?' },
        options: [
            { ar: 'الإظهار الشفوي', en: 'Labial Izhaar', de: 'Labialer Izhar' },
            { ar: 'الإخفاء الشفوي', en: 'Labial Ikhfaa', de: 'Labialer Ikhfa' },
            { ar: 'الإدغام الشفوي', en: 'Labial Idghaam', de: 'Labialer Idgham' },
            { ar: 'القلقلة', en: 'Qalqalah', de: 'Qalqala' }
        ],
        correct: 1
    },
    {
        q: { ar: 'حروف القلقلة مجموعة في عبارة:', en: 'The Qalqalah letters are gathered in the phrase:', de: 'In welcher Formel sind die Qalqala-Buchstaben zusammengefasst?' },
        options: [
            { ar: 'قطب جد', en: 'Qutb Jad', de: 'Qutb Dschad' },
            { ar: 'يرملون', en: 'Yarmaloon', de: 'Yarmaloon' },
            { ar: 'حروف الحلق', en: 'Throat letters', de: 'Kehlbuchstaben' },
            { ar: 'لام شمسية', en: 'Sun Laam', de: 'Sonnen-Lām' }
        ],
        correct: 0
    },
    {
        q: { ar: 'اللام الشمسية هي التي:', en: 'The "sun laam" is the one that:', de: 'Das „Sonnen-Lām“ ist dasjenige, das …' },
        options: [
            { ar: 'تُنطق واضحة دائماً', en: 'Is always pronounced clearly', de: 'immer deutlich ausgesprochen wird' },
            { ar: 'تُكتب ولا تُنطق ويُدغم فيها الحرف التالي', en: 'Is written but not pronounced, merging into the next letter', de: 'geschrieben, aber nicht ausgesprochen wird und mit dem folgenden Buchstaben verschmilzt' },
            { ar: 'تُنطق مشددة فقط', en: 'Is pronounced only with shaddah', de: 'nur mit Schadda ausgesprochen wird' },
            { ar: 'لا علاقة لها بأحكام التجويد', en: 'Has no relation to tajweed rules', de: 'nichts mit Tadschwid-Regeln zu tun hat' }
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function initQuiz() {
    $('quiz-restart-btn').addEventListener('click', restartQuiz);
    renderQuestion();
}

function renderQuestion() {
    const data = quizData[currentQuestion];
    if (!data) return;
    const lang = currentLang;

    $('quiz-progress-text').textContent = t('quiz.progress', { n: currentQuestion + 1, total: quizData.length });
    $('quiz-progress-bar').style.width = ((currentQuestion + 1) / quizData.length * 100) + '%';

    const box = $('quiz-question-box');
    box.replaceChildren();

    const h3 = document.createElement('h3');
    h3.className = 'text-lg md:text-xl font-bold text-slate-900 mb-5';
    h3.textContent = data.q[lang];
    box.appendChild(h3);

    const list = document.createElement('div');
    list.id = 'quiz-options-list';
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-option';
        btn.textContent = opt[lang];
        btn.addEventListener('click', () => selectAnswer(idx));
        list.appendChild(btn);
    });
    box.appendChild(list);
}

function selectAnswer(idx) {
    const data = quizData[currentQuestion];
    document.querySelectorAll('#quiz-options-list .quiz-option').forEach((b, i) => {
        b.disabled = true;
        if (i === data.correct) b.classList.add('correct');
        else if (i === idx) b.classList.add('incorrect');
    });
    if (idx === data.correct) score++;

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) renderQuestion();
        else showQuizResult();
    }, 700);
}

function showQuizResult() {
    $('quiz-questions').classList.add('hidden');
    $('quiz-result').classList.remove('hidden');
    renderQuizResult();
}

function renderQuizResult() {
    const percent = Math.round((score / quizData.length) * 100);
    let level, emoji;
    if (percent >= 80) { level = 'adv'; emoji = '🏆'; }
    else if (percent >= 40) { level = 'mid'; emoji = '🌱'; }
    else { level = 'beg'; emoji = '📖'; }

    const vars = { score: score, total: quizData.length };
    $('quiz-result-emoji').textContent = emoji;
    $('quiz-result-title').textContent = t('quiz.' + level + '.title');
    $('quiz-result-desc').textContent = t('quiz.' + level + '.desc', vars);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    $('quiz-result').classList.add('hidden');
    $('quiz-questions').classList.remove('hidden');
    renderQuestion();
}

/* ===================== نموذج التسجيل + Web3Forms ===================== */
function normalizeDigits(str) {
    // تحويل الأرقام العربية-الهندية والفارسية إلى أرقام لاتينية
    return str
        .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
        .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
}

function getPhoneDigits(value) {
    return normalizeDigits(value).replace(/[\s\-()]/g, '');
}

function isValidPhone(value) {
    const cleaned = getPhoneDigits(value);
    if (!/^\d+$/.test(cleaned)) return false;          // أرقام فقط
    if (cleaned.length < 7 || cleaned.length > 15) return false;   // 7 أرقام على الأقل
    if (/^0+$/.test(cleaned)) return false;            // يرفض 0000000
    return true;
}

function isValidEmail(value) {
    const email = value.trim();
    if (email.length > 254 || email.includes('..')) return false;
    const pattern = /^[A-Za-z0-9](?:[A-Za-z0-9._%+\-]*[A-Za-z0-9])?@(?:[A-Za-z0-9](?:[A-Za-z0-9\-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
    return pattern.test(email);
}

const FIELD_RULES = {
    name:  { input: 'reg-name',  error: 'err-name',  key: 'err.name',  valid: v => v.trim().length >= 2 },
    email: { input: 'reg-email', error: 'err-email', key: 'err.email', valid: v => isValidEmail(v) },
    phone: { input: 'reg-phone', error: 'err-phone', key: 'err.phone', valid: v => isValidPhone(v) }
};

function setFieldError(field, show) {
    const rule = FIELD_RULES[field];
    const input = $(rule.input);
    const err = $(rule.error);
    input.classList.toggle('input-invalid', show);
    input.setAttribute('aria-invalid', String(show));
    if (show) {
        err.dataset.i18n = rule.key;           // يُترجم تلقائياً عند تغيير اللغة
        err.textContent = t(rule.key);
        err.hidden = false;
    } else {
        err.hidden = true;
        err.textContent = '';
        delete err.dataset.i18n;
    }
}

function validateField(field) {
    const ok = FIELD_RULES[field].valid($(FIELD_RULES[field].input).value);
    setFieldError(field, !ok);
    return ok;
}

function showFormError(show) {
    const el = $('reg-form-error');
    if (show) {
        el.dataset.i18n = 'err.send';
        el.textContent = t('err.send');
        el.hidden = false;
    } else {
        el.hidden = true;
        delete el.dataset.i18n;
    }
}

function initRegisterForm() {
    const form = $('register-form');

    Object.keys(FIELD_RULES).forEach(field => {
        const input = $(FIELD_RULES[field].input);
        input.addEventListener('blur', () => { if (input.value.trim() !== '') validateField(field); });
        input.addEventListener('input', () => {
            // إعادة التحقق مباشرة فقط إذا كان الحقل معلَّماً بالخطأ
            if (input.getAttribute('aria-invalid') === 'true') validateField(field);
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        showFormError(false);

        // فخ الروبوتات: الإنسان لا يرى هذا الحقل فلا يحدّده
        if (form.elements['botcheck'] && form.elements['botcheck'].checked) return;

        // تحقق من كل الحقول ليظهر كل الأخطاء معاً
        const results = Object.keys(FIELD_RULES).map(validateField);
        if (!results.every(Boolean)) {
            const firstBad = Object.keys(FIELD_RULES).find(f => $(FIELD_RULES[f].input).getAttribute('aria-invalid') === 'true');
            if (firstBad) $(FIELD_RULES[firstBad].input).focus();
            return;
        }

        if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
            console.error('Web3Forms: ضع مفتاح الوصول في أعلى ملف script.js (WEB3FORMS_ACCESS_KEY).');
            showFormError(true);
            return;
        }

        const code = $('reg-country').value;
        const localNumber = getPhoneDigits($('reg-phone').value).replace(/^0+/, ''); // حذف الصفر الأول المحلي
        const submitBtn = $('reg-submit-btn');

        const payload = {
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: 'طلب تسجيل جديد - أكاديمية إتقان البيان',
            from_name: 'موقع أكاديمية إتقان البيان',
            name: $('reg-name').value.trim(),
            email: $('reg-email').value.trim(),
            phone: code + localNumber,
            track: TRACK_LABELS_AR[$('reg-track').value],
            age_group: AGE_LABELS_AR[$('reg-age').value],
            site_language: currentLang
        };

        submitBtn.disabled = true;
        submitBtn.dataset.i18n = 'reg.sending';
        submitBtn.textContent = t('reg.sending');

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!response.ok || !data.success) throw new Error(data.message || 'Request failed');

            form.reset();
            form.classList.add('hidden');
            $('reg-success').classList.remove('hidden');
            $('reg-success').scrollIntoView({ behavior: 'smooth', block: 'center' });
        } catch (err) {
            console.error('Web3Forms error:', err);
            showFormError(true);
        } finally {
            submitBtn.disabled = false;
            submitBtn.dataset.i18n = 'reg.submit';
            submitBtn.textContent = t('reg.submit');
        }
    });
}

/* ===================== اللغات (عربي / English / Deutsch) ===================== */
function renderCountryOptions() {
    const select = $('reg-country');
    const previous = select.value || '+962';
    select.replaceChildren();
    COUNTRIES.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.code;
        opt.textContent = c.code + '  ' + c[currentLang];
        select.appendChild(opt);
    });
    select.value = previous;
}

function applyLanguage(lang) {
    if (!LANGS.includes(lang)) lang = 'ar';
    currentLang = lang;

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });

    renderCountryOptions();

    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));

    // إعادة رسم الاختبار باللغة الجديدة
    if (!$('quiz-result').classList.contains('hidden')) renderQuizResult();
    else renderQuestion();
}

function initLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyLanguage(btn.dataset.lang);
            try { localStorage.setItem('site-lang', btn.dataset.lang); } catch (e) { /* التخزين غير متاح */ }
        });
    });

    let saved = 'ar';
    try { saved = localStorage.getItem('site-lang') || 'ar'; } catch (e) { /* التخزين غير متاح */ }
    applyLanguage(saved);
}
