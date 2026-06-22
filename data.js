let db = JSON.parse(localStorage.getItem('crmData')) || {
    employees: [],
    roles: ['Куратор', 'Инструктор', 'Стажер'],
    warnings: []
};

function saveDb() {
    localStorage.setItem('crmData', JSON.stringify(db));
}