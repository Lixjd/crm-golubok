let db = JSON.parse(localStorage.getItem('crmData')) || {
    employees: [],
    roles: ['Куратор', 'Инструктор', 'Стажер'],
    tasks: ['Патруль', 'Проверка', 'Собеседование'],
    warnings: []
};

function saveDb() {
    localStorage.setItem('crmData', JSON.stringify(db));
}
