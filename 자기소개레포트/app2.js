function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('bg-gray-900', 'text-white', 'p-4', 'shadow-lg');
    
    const navContent = `
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <div class="text-lg font-semibold">내 소개</div>
                <div>
                    <a href="#about" class="text-white hover:text-gray-400 mx-2">소개</a>
                    <a href="#skills" class="text-white hover:text-gray-400 mx-2">기술</a>
                    <a href="#contact" class="text-white hover:text-gray-400 mx-2">연락처</a>
                </div>
            </div>
        </div>
    `;
    navbar.innerHTML = navContent;
    return navbar;
}

function createAboutSection() {
    const section = document.createElement('section');
    section.id = 'about';
    section.classList.add('bg-gray-800', 'p-8', 'rounded-lg', 'shadow-lg', 'my-8', 'container', 'mx-auto');
    
    const content = `
        <div class="flex items-center text-white">
            <div class="mr-6">
                <i class="fas fa-user-circle fa-5x text-indigo-500"></i>
            </div>
            <div>
                <h2 class="text-3xl font-semibold">안녕하세요, 저는 최원욱 입니다!</h2>
                <p class="mt-4">웹 프로그램을 이수하는 학생이며 HTML, CSS, JavaScript를 비롯한 다양한 언어와 프레임워크를 공부하여 멋진 웹사이트를 만들고 싶습니다.</p>
            </div>
        </div>
    `;
    section.innerHTML = content;
    return section;
}

function createSkillsSection() {
    const section = document.createElement('section');
    section.id = 'skills';
    section.classList.add('container', 'mx-auto', 'my-8');
    
    const content = `
        <h3 class="text-center text-2xl font-semibold text-indigo-500 mb-8">공부해야 할 기술들</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
                <i class="fab fa-html5 fa-4x text-orange-500 mb-2"></i>
                <p class="text-white">HTML</p>
            </div>
            <div class="text-center">
                <i class="fab fa-css3-alt fa-4x text-blue-500 mb-2"></i>
                <p class="text-white">CSS</p>
            </div>
            <div class="text-center">
                <i class="fab fa-js-square fa-4x text-yellow-500 mb-2"></i>
                <p class="text-white">JavaScript</p>
            </div>
            <div class="text-center">
                <i class="fab fa-react fa-4x text-cyan-500 mb-2"></i>
                <p class="text-white">React</p>
            </div>
        </div>
    `;
    section.innerHTML = content;
    return section;
}

function createContactSection() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.classList.add('bg-gray-800', 'p-8', 'rounded-lg', 'shadow-lg', 'my-8', 'container', 'mx-auto');
    
    const content = `
        <h3 class="text-center text-2xl font-semibold text-indigo-500 mb-8">연락처</h3>
        <form>
            <div class="mb-4">
                <label for="name" class="block text-lg text-white">이름</label>
                <input type="text" id="name" class="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="이름을 입력하세요">
            </div>
            <div class="mb-4">
                <label for="email" class="block text-lg text-white">이메일</label>
                <input type="email" id="email" class="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="이메일을 입력하세요">
            </div>
            <div class="mb-4">
                <label for="message" class="block text-lg text-white">메시지</label>
                <textarea id="message" class="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400" rows="4" placeholder="메시지를 작성하세요"></textarea>
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-all duration-300">보내기</button>
        </form>
    `;
    section.innerHTML = content;
    return section;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('bg-gray-900', 'text-white', 'text-center', 'py-4', 'mt-8');
    
    const content = `
        <p>&copy; 2024 최원욱. 모든 권리 보유.</p>
    `;
    footer.innerHTML = content;
    return footer;
}

// 앱을 시작하는 함수
function init() {
    const app = document.getElementById('app');
    
    app.appendChild(createNavbar());
    app.appendChild(createAboutSection());
    app.appendChild(createSkillsSection());
    app.appendChild(createContactSection());
    app.appendChild(createFooter());
}

// 페이지가 로드되면 init() 함수 실행
window.onload = init;