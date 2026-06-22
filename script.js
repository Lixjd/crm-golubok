const tableBody = document.getElementById('data-body');

// Функция для отрисовки таблицы
function renderTable() {
    database.forEach(item => {
        const row = `
            <tr class="border-b border-gray-800 hover:bg-gray-800/50">
                <td class="p-4">${item.name}</td>
                <td class="p-4 text-gray-400">${item.role}</td>
                <td class="p-4 font-bold text-green-400">${item.points}</td>
                <td class="p-4 text-red-400">${item.warns}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Запускаем отрисовку
renderTable();