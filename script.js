function render(page) {
    const content = document.getElementById('content');
    const title = document.getElementById('page-title');
    
    // Анимация
    content.classList.remove('fade-in');
    void content.offsetWidth;
    content.classList.add('fade-in');
    
    title.innerText = page.charAt(0).toUpperCase() + page.slice(1);
    
    if (page === 'sostav') {
        content.innerHTML = `<div class="bg-gray-900 p-6 rounded border border-gray-800">
            ${db.employees.length ? db.employees.map(e => `<p class="border-b border-gray-800 py-2">${e.name}</p>`).join('') : 'Список пуст'}
        </div>`;
    } 
    else if (page === 'settings') {
        content.innerHTML = `
            <div class="space-y-4 bg-gray-900 p-6 rounded">
                <input id="nameInput" placeholder="Введите имя" class="block w-full p-2 bg-black border border-gray-700">
                <button onclick="addEmp()" class="bg-blue-600 px-4 py-2 rounded">Добавить</button>
            </div>`;
    }
    else if (page === 'warnings') {
        content.innerHTML = `<p class="text-gray-400">Выберите сотрудника, чтобы выдать выговор.</p>
            <div class="mt-4">${db.employees.map(e => `<button onclick="alert('Выговор ${e.name}')" class="block w-full text-left p-2 border-b border-gray-800">${e.name} (Выдать)</button>`).join('')}</div>`;
    }
}

function addEmp() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        db.employees.push({ name: name });
        saveDb();
        render('sostav');
    }
}

// Запуск при открытии
document.addEventListener('DOMContentLoaded', () => render('sostav'));
