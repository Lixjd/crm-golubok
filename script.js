// База данных
let state = JSON.parse(localStorage.getItem('crmData')) || {
    employees: [], // Список людей
    roles: ['Куратор', 'Инструктор', 'Стажер'] // Начальные роли
};

function save() { localStorage.setItem('crmData', JSON.stringify(state)); }

// Функция отображения страниц
function showPage(page) {
    const body = document.getElementById('page-body');
    const title = document.getElementById('page-title');
    title.innerText = page === 'sostav' ? 'Состав' : page === 'settings' ? 'Настройки' : page;
    
    body.innerHTML = ''; 

    if (page === 'settings') {
        body.innerHTML = `
            <div class="space-y-4 bg-gray-900 p-6 rounded">
                <input id="name" placeholder="Никнейм" class="bg-black border border-gray-700 p-2 w-full">
                <input id="discord" placeholder="Дискорд тег" class="bg-black border border-gray-700 p-2 w-full">
                <select id="role" class="bg-black border border-gray-700 p-2 w-full">
                    ${state.roles.map(r => `<option>${r}</option>`).join('')}
                </select>
                <button onclick="addEmployee()" class="bg-blue-600 px-4 py-2 rounded">Добавить сотрудника</button>
            </div>
        `;
    } 
    else if (page === 'sostav') {
        body.innerHTML = `
            <table class="w-full text-left">
                ${state.employees.map(e => `
                    <tr class="border-b border-gray-800">
                        <td class="p-3">${e.name}</td>
                        <td class="p-3 text-gray-400">${e.discord}</td>
                        <td class="p-3 text-blue-400">${e.role}</td>
                    </tr>
                `).join('')}
            </table>
        `;
    }
}

// Функция добавления
function addEmployee() {
    const name = document.getElementById('name').value;
    const discord = document.getElementById('discord').value;
    const role = document.getElementById('role').value;
    
    if(!name) return alert('Введите ник!');
    
    state.employees.push({ name, discord, role });
    save();
    alert('Готово!');
    showPage('sostav'); // Автоматом перекидываем в состав
}

// Запуск
showPage('sostav');
