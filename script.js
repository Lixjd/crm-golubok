window.render = function(page) {
    const content = document.getElementById('content');
    const title = document.getElementById('title');
    title.innerText = page.charAt(0).toUpperCase() + page.slice(1);
    
    if (page === 'sostav') {
        content.innerHTML = `<div class="bg-gray-900 p-4 rounded">${db.employees.map(e => `<p class="border-b border-gray-800 py-2">${e.name} | ${e.role} | ${e.discord}</p>`).join('') || 'Пусто'}</div>`;
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
    else if (page === 'warnings') {
        content.innerHTML = db.employees.map(e => `
            <div class="bg-gray-900 p-4 mb-2 flex justify-between">
                <span>${e.name}</span>
                <div>
                    <button onclick="addWarning('${e.name}', 'Устный')" class="bg-yellow-600 px-2 rounded">Устный</button>
                    <button onclick="addWarning('${e.name}', 'Строгий')" class="bg-red-600 px-2 rounded">Строгий</button>
                </div>
            </div>`).join('');
    }
    else {
        content.innerHTML = `<p>Раздел ${page} в разработке.</p>`;
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

window.addWarning = function(name, type) {
    db.warnings.push({ name, type, date: new Date().toLocaleDateString() });
    saveDb();
    alert(`Выговор выдан: ${name} (${type})`);
};

document.addEventListener('DOMContentLoaded', () => render('sostav'));
