// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏功能
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    // 移动端菜单切换
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接时关闭移动端菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(16, 18, 24, 0.98)';
            navbar.style.borderBottom = '1px solid rgba(102, 126, 234, 0.2)';
        } else {
            navbar.style.background = 'rgba(16, 18, 24, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // 考虑固定导航栏的高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 为需要动画的元素添加观察
    document.querySelectorAll('.service-card, .portfolio-item, .team-member, .hero-stat-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 数字计数动画
    function animateNumbers() {
        const statItems = document.querySelectorAll('.hero-stat-item h3');
        
        statItems.forEach(stat => {
            const text = stat.textContent;
            let target;
            
            if (text.includes('+')) {
                target = parseInt(text.replace('+', ''));
            } else if (text.includes('年')) {
                target = parseInt(text.replace('年', ''));
            } else if (text.includes('%')) {
                target = parseInt(text.replace('%', ''));
            } else {
                target = parseInt(text);
            }
            
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                if (text.includes('+')) {
                    stat.textContent = Math.floor(current) + '+';
                } else if (text.includes('年')) {
                    stat.textContent = Math.floor(current) + '年';
                } else if (text.includes('%')) {
                    stat.textContent = Math.floor(current) + '%';
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 20);
        });
    }

    // 当统计部分进入视口时触发数字动画
    const heroSection = document.querySelector('.hero');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (heroSection) {
        statsObserver.observe(heroSection);
    }

    // 通知显示函数
    function showNotification(message, type = 'info') {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // 添加样式
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#667eea'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
            backdrop-filter: blur(10px);
        `;

        // 添加到页面
        document.body.appendChild(notification);

        // 显示动画
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // 关闭按钮事件
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            hideNotification(notification);
        });

        // 自动隐藏
        setTimeout(() => {
            hideNotification(notification);
        }, 5000);
    }

    // 隐藏通知函数
    function hideNotification(notification) {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // 作品展示悬停效果增强
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) scale(1.02)';
            this.style.borderColor = 'rgba(102, 126, 234, 0.5)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // 服务卡片悬停效果增强
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) scale(1.02)';
            this.style.borderColor = 'rgba(102, 126, 234, 0.5)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // 团队成员卡片悬停效果
    document.querySelectorAll('.team-member').forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) scale(1.02)';
            this.style.borderColor = 'rgba(102, 126, 234, 0.5)';
        });

        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // 统计数据卡片悬停效果
    document.querySelectorAll('.hero-stat-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 二维码悬停效果
    document.querySelectorAll('.qrcode-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 添加页面加载动画
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.8s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // 添加滚动进度条
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    // 更新滚动进度条
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // 添加返回顶部按钮
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 55px;
        height: 55px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.3rem;
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
        backdrop-filter: blur(10px);
    `;
    document.body.appendChild(backToTop);

    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    // 返回顶部功能
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 悬停效果
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
    });

    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        // ESC键关闭移动端菜单
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }

        // 方向键导航
        if (e.key === 'ArrowUp' && window.pageYOffset > 0) {
            e.preventDefault();
            window.scrollBy(0, -100);
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            window.scrollBy(0, 100);
        }
    });

    // 添加触摸手势支持（移动端）
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 向上滑动
                window.scrollBy(0, 100);
            } else {
                // 向下滑动
                window.scrollBy(0, -100);
            }
        }
    }

    // 性能优化：节流滚动事件
    let ticking = false;
    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                // 滚动相关的更新逻辑
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', updateOnScroll);

    // 案例筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前按钮添加active类
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 联系表单处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // 简单的表单验证
            if (!name || !email || !message) {
                showNotification('请填写所有必填字段', 'error');
                return;
            }
            
            // 模拟表单提交
            showNotification('消息发送成功！我们会尽快与您联系。', 'success');
            this.reset();
        });
    }

    // 案例详情页面动态加载
    function loadCaseDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const caseId = urlParams.get('id');
        
        if (caseId && typeof getCaseById === 'function') {
            const caseData = getCaseById(caseId);
            if (caseData) {
                updateCaseDetailPage(caseData);
            } else {
                showNotification('案例不存在', 'error');
            }
        }
    }

    function updateCaseDetailPage(caseData) {
        // 更新页面标题
        document.title = `${caseData.title} - 创意无限广告公司`;
        
        // 更新案例头部信息
        const categoryElement = document.querySelector('.case-category');
        const titleElement = document.querySelector('.case-title');
        const subtitleElement = document.querySelector('.case-subtitle');
        
        if (categoryElement) categoryElement.textContent = caseData.categoryName;
        if (titleElement) titleElement.textContent = caseData.title;
        if (subtitleElement) subtitleElement.textContent = caseData.subtitle;
        
        // 更新案例元信息
        const metaItems = document.querySelectorAll('.meta-item span');
        if (metaItems.length >= 3) {
            metaItems[0].textContent = `项目时间：${caseData.date}`;
            metaItems[1].textContent = `服务类型：${caseData.services.join('、')}`;
            metaItems[2].textContent = `团队规模：${caseData.teamSize}`;
        }
        
        // 更新案例概览
        const overviewText = document.querySelector('.case-overview-text');
        if (overviewText) {
            const backgroundSection = overviewText.querySelector('h2:contains("项目背景") + p');
            const goalsSection = overviewText.querySelector('h2:contains("项目目标") + ul');
            const solutionSection = overviewText.querySelector('h2:contains("解决方案") + p');
            
            if (backgroundSection) backgroundSection.textContent = caseData.background;
            if (solutionSection) solutionSection.textContent = caseData.solution;
            
            if (goalsSection && caseData.goals) {
                goalsSection.innerHTML = caseData.goals.map(goal => `<li>${goal}</li>`).join('');
            }
        }
        
        // 更新项目成果
        const statsItems = document.querySelectorAll('.case-stats .stat-item h4');
        if (statsItems.length >= 4 && caseData.results) {
            statsItems[0].textContent = caseData.results.brandAwareness;
            statsItems[1].textContent = caseData.results.socialGrowth;
            statsItems[2].textContent = caseData.results.websiteTraffic;
            statsItems[3].textContent = caseData.results.satisfaction;
        }
        
        // 更新客户评价
        const testimonialQuote = document.querySelector('.testimonial-content blockquote');
        const clientName = document.querySelector('.client-details h4');
        const clientPosition = document.querySelector('.client-details p');
        
        if (testimonialQuote && caseData.testimonial) {
            testimonialQuote.textContent = caseData.testimonial.quote;
        }
        if (clientName && caseData.testimonial) {
            clientName.textContent = caseData.testimonial.client;
        }
        if (clientPosition && caseData.testimonial) {
            clientPosition.textContent = caseData.testimonial.position;
        }
        
        // 更新相关案例
        if (typeof getRelatedCases === 'function') {
            const relatedCases = getRelatedCases(caseData.id);
            const relatedCasesGrid = document.querySelector('.related-cases-grid');
            
            if (relatedCasesGrid && relatedCases.length > 0) {
                relatedCasesGrid.innerHTML = relatedCases.map(relatedCase => `
                    <div class="related-case">
                        <div class="case-image">
                            <div class="image-placeholder">
                                <i class="fas fa-image"></i>
                            </div>
                        </div>
                        <h3>${relatedCase.title}</h3>
                        <p>${relatedCase.subtitle}</p>
                        <a href="case-detail.html?id=${relatedCase.id}" class="case-link">查看详情 →</a>
                    </div>
                `).join('');
            }
        }
    }

    // 在案例详情页面加载时执行
    if (window.location.pathname.includes('case-detail.html')) {
        loadCaseDetail();
    }

    // Portfolio页面动态加载案例
    function loadPortfolioCases() {
        const portfolioGrid = document.getElementById('portfolioGrid');
        if (portfolioGrid && typeof getAllCases === 'function') {
            const allCases = getAllCases();
            portfolioGrid.innerHTML = allCases.map(caseItem => `
                <div class="portfolio-item" data-category="${caseItem.category}">
                    <div class="portfolio-image">
                        <div class="portfolio-category">${caseItem.categoryName}</div>
                        <i class="fas fa-image"></i>
                    </div>
                    <div class="portfolio-overlay">
                        <h3>${caseItem.title}</h3>
                        <p>${caseItem.subtitle}</p>
                        <a href="case-detail.html?id=${caseItem.id}" class="portfolio-link">查看详情 →</a>
                    </div>
                </div>
            `).join('');
        }
    }

    // 首页案例随机选择
    function loadHomePageCases() {
        const homePortfolioGrid = document.querySelector('.portfolio-grid');
        if (homePortfolioGrid && typeof getAllCases === 'function') {
            const allCases = getAllCases();
            // 随机选择9个案例
            const shuffled = allCases.sort(() => 0.5 - Math.random());
            const selectedCases = shuffled.slice(0, 9);
            
            homePortfolioGrid.innerHTML = selectedCases.map(caseItem => `
                <div class="portfolio-item" data-category="${caseItem.category}">
                    <div class="portfolio-image">
                        <div class="portfolio-category">${caseItem.categoryName}</div>
                        <i class="fas fa-image"></i>
                    </div>
                    <div class="portfolio-overlay">
                        <h3>${caseItem.title}</h3>
                        <p>${caseItem.subtitle}</p>
                        <a href="case-detail.html?id=${caseItem.id}" class="portfolio-link">查看详情 →</a>
                    </div>
                </div>
            `).join('');
        }
    }

    // 在portfolio页面加载时执行
    if (window.location.pathname.includes('portfolio.html')) {
        // 等待DOM加载完成后再执行
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadPortfolioCases);
        } else {
            loadPortfolioCases();
        }
    }

    // 在首页加载时执行
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        // 等待DOM加载完成后再执行
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadHomePageCases);
        } else {
            loadHomePageCases();
        }
    }

    // 图片轮播功能
    const carouselStates = {};

    function changeSlide(carouselId, direction) {
        if (!carouselStates[carouselId]) {
            carouselStates[carouselId] = { currentSlide: 0, totalSlides: 3 };
        }
        
        const state = carouselStates[carouselId];
        const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
        const dots = document.querySelectorAll(`#${carouselId} .dot`);
        
        if (slides.length === 0) return;
        
        // 隐藏当前幻灯片
        slides[state.currentSlide].classList.remove('active');
        dots[state.currentSlide].classList.remove('active');
        
        // 计算新的幻灯片索引
        state.currentSlide += direction;
        if (state.currentSlide >= slides.length) {
            state.currentSlide = 0;
        } else if (state.currentSlide < 0) {
            state.currentSlide = slides.length - 1;
        }
        
        // 显示新的幻灯片
        slides[state.currentSlide].classList.add('active');
        dots[state.currentSlide].classList.add('active');
    }

    function currentSlide(carouselId, slideIndex) {
        if (!carouselStates[carouselId]) {
            carouselStates[carouselId] = { currentSlide: 0, totalSlides: 3 };
        }
        
        const state = carouselStates[carouselId];
        const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
        const dots = document.querySelectorAll(`#${carouselId} .dot`);
        
        if (slides.length === 0) return;
        
        // 隐藏当前幻灯片
        slides[state.currentSlide].classList.remove('active');
        dots[state.currentSlide].classList.remove('active');
        
        // 设置新的幻灯片
        state.currentSlide = slideIndex;
        
        // 显示新的幻灯片
        slides[state.currentSlide].classList.add('active');
        dots[state.currentSlide].classList.add('active');
    }

    // 自动轮播功能
    function startAutoCarousel(carouselId) {
        setInterval(() => {
            changeSlide(carouselId, 1);
        }, 5000); // 每5秒切换一次
    }

    // 在services页面启动自动轮播
    if (window.location.pathname.includes('services.html')) {
        setTimeout(() => {
            startAutoCarousel('brand-strategy');
            startAutoCarousel('visual-design');
            startAutoCarousel('digital-marketing');
            startAutoCarousel('event-planning');
            startAutoCarousel('public-relations');
            startAutoCarousel('video-production');
        }, 1000);

        // 添加触摸支持
        const carousels = document.querySelectorAll('.image-carousel');
        carousels.forEach(carousel => {
            let startX = 0;
            let endX = 0;

            carousel.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });

            carousel.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                const diff = startX - endX;
                
                if (Math.abs(diff) > 50) { // 最小滑动距离
                    const carouselId = carousel.closest('section').id;
                    if (diff > 0) {
                        changeSlide(carouselId, 1); // 向左滑动，下一张
                    } else {
                        changeSlide(carouselId, -1); // 向右滑动，上一张
                    }
                }
            });
        });
    }

    // 添加鼠标跟随效果（可选）
    document.addEventListener('mousemove', function(e) {
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.6;
            transform: translate(-50%, -50%);
            transition: all 0.1s ease;
        `;
        
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        document.body.appendChild(cursor);
        
        setTimeout(() => {
            if (cursor.parentNode) {
                cursor.parentNode.removeChild(cursor);
            }
        }, 100);
    });


});
