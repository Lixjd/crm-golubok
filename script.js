function render(page) {
    console.log("Вызов render:", page); // Проверка в консоли
    const content = document.getElementById('content');
    const title = document.getElementById('page-title');
    
    // Безопасная проверка: если элементов нет, не выполняем код
    if (!content || !title) return; 
    
    title.innerText = page.charAt(0).toUpperCase() + page.slice(1);
    
    if (page === 'sostav') {
        content.innerHTML = `<div class="bg-gray-900 p-6 rounded">Список сотрудников пуст</div>`;
    } else if (page === 'settings') {
        content.innerHTML = `<div class="bg-gray-900 p-6 rounded">Настройки...</div>`;
    } else {
        content.innerHTML = `<div class="bg-gray-900 p-6 rounded">Раздел ${page}</div>`;
    }
}

// Запускаем отрисовку сразу после загрузки всех файлов
document.addEventListener('DOMContentLoaded', () => {
    render('sostav');
});
