let data = JSON.parse(localStorage.getItem('myCrmData')) || [];

function renderPage(page) {
    const content = document.getElementById('content');
    const title = document.getElementById('title');
    
    title.innerText = page === 'sostav' ? 'Состав' : 'Настройки';
    
    if (page === 'sostav') {
        content.innerHTML = `
            <table class="w-full text-left">
                ${data.map(e => `
                    <tr class="border-b border-gray-800">
                        <td class="p-3">${e.name}</td>
                        <td class="p-3 text-gray-400">${e.role}</td>
                    </tr>
                `).join('')}
            </table>
        `;
    } else {
        content.innerHTML = `
            <div class="space-y-4">
                <input id="in-name" placeholder="Ник" class="block w-full p-2 bg-gray-900 border border-gray-700">
                <input id="in-role" placeholder="Роль" class="block w-full p-2 bg-gray-900 border border-gray-700">
                <button onclick="saveData()" class="bg-blue-600 px-4 py-2 rounded">Сохранить</button>
            </div>
        `;
    }
}

function saveData() {
    const name = document.getElementById('in-name').value;
    const role = document.getElementById('in-role').value;
    if(name) {
        data.push({ name, role });
        localStorage.setItem('myCrmData', JSON.stringify(data));
        alert('Сохранено!');
        renderPage('sostav');
    }
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', () => renderPage('sostav'));
