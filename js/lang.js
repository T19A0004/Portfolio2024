const translations = {
    en: {
        about: "About",
        projects: "Projects",
        contact: "Contact",
        heroSubheading: "Crafting experiences through design & code.",
        aboutHeading: "About Me",
        introText: {
            name: "Hi, I'm Komiljon",
            intro: "A passionate Frontend Developer who loves to bring ideas to life through code and design.",
            origin: "From Uzbekistan, I'm always eager to learn, create, and collaborate on exciting projects. Outside of coding, you'll find me traveling, gaming, or cooking.",
            lets: "Let’s create something amazing together!"
        },
        funFacts: [
            "😸 Love Cats",
            "🍣 Love Sushi",
            "🎨 Creative Coder"
        ],
        projectsHeading: "Projects",
        project1Title: "JDU Community",
        project1Description: "JDU Community is a place where students can share ideas and support each other.",
        project2Title: "Suits Store Project",
        project2Description: "Suits that exude elegance and comfort. From business to special occasions, exude confidence and sophisticated style.",
        project3Title: "Prompt Sharing Project",
        project3Description: "Promptopia is a prompting tool for modern world to discover, create and share creative prompts.",
        viewProject: "View Project",
        contactHeading: "Get in Touch",
        sendMessage: "Send Me a Message",
        // Contact section translations
        contactHeading: "Get in Touch",
        contactDescription: "If you have any questions or just want to say hello, feel free to reach out to me!",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        sendButton: "Send Message"
    },
    jp: {
        about: "私について",
        projects: "プロジェクト",
        contact: "連絡先",
        heroSubheading: "デザインとコードを通じた体験の創造。",
        aboutHeading: "私について",
        introText: {
            name: "こんにちは、コミルジョンです",
            intro: "アイデアをコードとデザインで実現することが好きな情熱的なフロントエンド開発者です。",
            origin: "ウズベキスタン出身で、常に学び、創造し、エキサイティングなプロジェクトに協力することに熱心です。コーディング以外では、旅行、ゲーム、料理を楽しんでいます。",
            lets: "一緒に素晴らしいものを作りましょう！"
        },
        funFacts: [
            "😸 猫が好き",
            "🍣 寿司が好き",
            "🎨 創造的なコーダー"
        ],
        projectsHeading: "プロジェクト",
        project1Title: "JDUコミュニティ",
        project1Description: "学生がアイデアを共有し、お互いをサポートできる場所です。",
        project2Title: "スーツストアプロジェクト",
        project2Description: "ビジネスから特別な機会まで、自信と洗練されたスタイルを演出します。",
        project3Title: "プロンプト共有プロジェクト",
        project3Description: "Promptopiaは、クリエイティブなプロンプトを発見、作成、共有するためのツールです。",
        viewProject: "プロジェクトを見る",
        contactHeading: "お問い合わせ",
        sendMessage: "メッセージを送信",
        // Contact section translations
        contactHeading: "お問い合わせ",
        contactDescription: "質問がある場合や挨拶したい場合は、お気軽にご連絡ください。",
        nameLabel: "名前",
        emailLabel: "メール",
        messageLabel: "メッセージ",
        sendButton: "メッセージを送信"
    }
};

// Language switcher buttons
const englishButton = document.getElementById('english-button');
const japaneseButton = document.getElementById('japanese-button');

let currentLanguage = 'en'; // Default language is English

function updateContent(language) {
    currentLanguage = language; 

    // Update navbar translations
    document.querySelector('nav ul li:nth-child(1) a').textContent = translations[language].about;
    document.querySelector('nav ul li:nth-child(2) a').textContent = translations[language].projects;
    document.querySelector('nav ul li:nth-child(3) a').textContent = translations[language].contact;

    // Update hero section
    document.getElementById('hero-subheading').textContent = translations[language].heroSubheading;

    // Update about section
    document.querySelector('#about h2').textContent = translations[language].aboutHeading;
    document.querySelector('.intro-text h3').textContent = translations[language].introText.name;
    document.querySelector('.intro-text p:nth-child(2)').textContent = translations[language].introText.intro;
    document.querySelector('.intro-text p:nth-child(3)').textContent = translations[language].introText.origin;
    document.querySelector('.intro-text .lets').textContent = translations[language].introText.lets;

    // Update fun facts
    const funFactsList = document.querySelector('.fun-facts');
    funFactsList.innerHTML = ''; // Clear previous fun facts
    translations[language].funFacts.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        funFactsList.appendChild(li);
    });

    // Update projects section
    document.querySelector('#projects h2').textContent = translations[language].projectsHeading;
    document.querySelectorAll('.project-card')[0].querySelector('h3').textContent = translations[language].project1Title;
    document.querySelectorAll('.project-card')[0].querySelector('p').textContent = translations[language].project1Description;
    document.querySelectorAll('.project-card')[1].querySelector('h3').textContent = translations[language].project2Title;
    document.querySelectorAll('.project-card')[1].querySelector('p').textContent = translations[language].project2Description;
    document.querySelectorAll('.project-card')[2].querySelector('h3').textContent = translations[language].project3Title;
    document.querySelectorAll('.project-card')[2].querySelector('p').textContent = translations[language].project3Description;
    // Update all "View Project" links
    document.querySelectorAll('.project-card a').forEach(a => a.textContent = translations[language].viewProject); 

    // Update contact section
    document.querySelector('#contact h2').textContent = translations[language].contactHeading;
    document.querySelector('.contact-form h3').textContent = translations[language].sendMessage;
    document.querySelector('.contact-info h3').textContent = translations[language].contactHeading;
    document.querySelector('.contact-info p').textContent = translations[language].contactDescription;
    document.querySelector('label[for="name"]').textContent = translations[language].nameLabel;
    document.querySelector('label[for="email"]').textContent = translations[language].emailLabel;
    document.querySelector('label[for="message"]').textContent = translations[language].messageLabel;
    document.querySelector('.contact-form button').textContent = translations[language].sendButton;
}

// Event listeners for buttons
englishButton.addEventListener('click', () => {
    updateContent('en');
    englishButton.classList.add('active');
    japaneseButton.classList.remove('active');
});

japaneseButton.addEventListener('click', () => {
    updateContent('jp');
    japaneseButton.classList.add('active');
    englishButton.classList.remove('active');
});
