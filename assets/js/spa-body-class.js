// Функция для обновления класса body на основе URL
function updateBodyClass(urlPath) {
    // Убираем слеши и получаем имя страницы
    let pageName = urlPath.replace(/^\/+|\/+$/g, ''); // убираем слеши в начале и конце
    if (pageName === '') pageName = 'page1'; // если корневой URL, то page1
    
    // Убираем расширение .php если есть
    pageName = pageName.replace(/\.php$/, '');
    
    // Убираем все классы страниц
    document.body.classList.remove('page1', 'page2', 'page3', 'page4');
    
    // Добавляем нужный класс
    document.body.classList.add(pageName);
}

// Слушаем событие end_load_spa от axnikitaJS
document.addEventListener('end_load_spa', function(event) {
    // Получаем текущий URL
    let currentUrl = window.location.pathname;
    updateBodyClass(currentUrl);
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    let currentUrl = window.location.pathname;
    updateBodyClass(currentUrl);
});
