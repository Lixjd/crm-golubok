window.render = function(page) {
    const title = document.getElementById('page-title');
    const content = document.getElementById('content');
    
    if (!title || !content) return; // Защита от ошибок

    title.innerText = page.charAt(0).toUpperCase() + page.slice(1);
    
    if (page === 'sostav') {
        content.innerHTML = `<div class="bg-gray-900 p-6 rounded">${db.employees.map(e => `<p class="py-2 border-b border-gray-800">${e.name}</p>`).join('') || 'Список пуст'}</div>`;
    } 
    else if (page === 'settings') {
        content.innerHTML = `
            <div class="bg-gray-900 p-6 rounded">
                <input id="nameInput" placeholder="Никнейм" class="w-full p-2 bg-black border border-gray-700 mb-2">
                <button onclick="addEmp()" class="bg-blue-600 px-4 py-2 rounded">Добавить</button>
            </div>`;
    }
    else {
        content.innerHTML = `<div class="bg-gray-900 p-6 rounded">Раздел ${page} в разработке</div>`;
    }
};

window.addEmp = function() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        db.employees.push({ name: name });
        saveDb();
        render('sostav');
    }
};

// Первый запуск при загрузке
document.addEventListener('DOMContentLoaded', () => render('sostav'));
