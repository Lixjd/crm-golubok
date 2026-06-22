function render(page) {
    const content = document.getElementById('content');
    const title = document.getElementById('page-title');
    content.classList.remove('fade-in');
    void content.offsetWidth; // Трюк для перезапуска анимации
    content.classList.add('fade-in');
    
    title.innerText = page.charAt(0).toUpperCase() + page.slice(1);

    if (page === 'sostav') {
        content.innerHTML = `<div class="bg-gray-900 p-6 rounded border border-gray-800">
            ${db.employees.map(e => `<p class="border-b border-gray-800 py-2">${e.name} — ${e.role}</p>`).join('')}
        </div>`;
    } 
    else if (page === 'settings') {
        content.innerHTML = `
            <div class="space-y-4 bg-gray-900 p-6 rounded">
                <input id="name" placeholder="Ник" class="block w-full p-2 bg-black border border-gray-700">
                <button onclick="addEmp()" class="bg-blue-600 px-4 py-2 rounded">Добавить сотрудника</button>
            </div>`;
    }
}

function addEmp() {
    const name = document.getElementById('name').value;
    db.employees.push({ name: name, role: 'Стажер' });
    saveDb();
    alert('Добавлено!');
    render('sostav');
}

// Запуск при старте
document.addEventListener('DOMContentLoaded', () => render('sostav'));
