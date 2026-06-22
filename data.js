const db = JSON.parse(localStorage.getItem('crmData')) || {
    employees: [],
    roles: ['Куратор', 'Инструктор', 'Стажер']
};

function saveDb() { localStorage.setItem('crmData', JSON.stringify(db)); }
