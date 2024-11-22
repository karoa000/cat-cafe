document.addEventListener('DOMContentLoaded', function() {
    // 標籤頁切換功能
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活動狀態
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // 添加當前活動狀態
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            const targetPane = document.getElementById(tabId);
            targetPane.classList.add('active');

            // 平滑滾動到內容區
            targetPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // 處理錨點連結的平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 表單提交處理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的留言！我們會盡快回覆。');
            this.reset();
        });
    }

    // 滾動動畫
    const scrollElements = document.querySelectorAll('.menu-item, .cat-profile');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
});