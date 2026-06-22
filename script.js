// База данных в браузере
let state = JSON.parse(localStorage.getItem('crmData')) || {
    employees: [],
    roles: ['Куратор', 'Инструктор', 'Стажер'],
    tasks: ['Проверка', 'Выдача лиц', 'Патруль']
};

function save() { localStorage.setItem('crmData', JSON.stringify(state)); }

function showPage(page) {
    const body = document.getElementById('page-body');
    const title = document.getElementById('page-title');
    title.innerText = page.charAt(0).toUpperCase() + page.slice(1);
    
    body.innerHTML = ''; // Очистка
    
    if (page === 'settings') {
        body.innerHTML = `
            <div class="space-y-4">
                <input id="name" placeholder="Ник" class="bg-gray-800 p-2 block w-full">
                <input id="role" placeholder="Роль" class="bg-gray-800 p-2 block w-full">
                <button onclick="addEmployee()" class="bg-blue-600 p-2">Добавить сотрудника</button>
            </div>
        `;
    } else if (page === 'sostav') {
        state.employees.forEach(e => {
            body.innerHTML += `<div class="p-4 border-b border-gray-800">${e.name} - ${e.role}</div>`;
        });
    }
}

function addEmployee() {
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    state.employees.push({ name, role });
    save();
    alert('Сотрудник добавлен!');
}

showPage('sostav');
