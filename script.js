window.render = function(page) {
    const content = document.getElementById('content');
    const title = document.getElementById('title');
    title.innerText = page.charAt(0).toUpperCase() + page.slice(1);

    if (page === 'sostav') {
        content.innerHTML = `<div class="bg-gray-900 p-6 rounded">${db.employees.map(e => `<p class="border-b border-gray-800 py-2">${e.name} — ${e.role}</p>`).join('') || 'Список пуст'}</div>`;
    } 
    else if (page === 'settings') {
        content.innerHTML = `
            <div class="bg-gray-900 p-6 rounded space-y-3">
                <input id="name" placeholder="Ник" class="w-full p-2 bg-black border border-gray-700">
                <input id="discord" placeholder="Discord" class="w-full p-2 bg-black border border-gray-700">
                <select id="role" class="w-full p-2 bg-black border border-gray-700">${db.roles.map(r => `<option>${r}</option>`).join('')}</select>
                <button onclick="addEmp()" class="bg-blue-600 px-4 py-2 rounded">Добавить</button>
            </div>`;
    }
    else {
        content.innerHTML = `<div class="bg-gray-900 p-6 rounded">Раздел ${page} в разработке.</div>`;
    }
};

window.addEmp = function() {
    db.employees.push({ 
        name: document.getElementById('name').value, 
        discord: document.getElementById('discord').value,
        role: document.getElementById('role').value 
    });
    saveDb();
    render('sostav');
};

document.addEventListener('DOMContentLoaded', () => render('sostav'));