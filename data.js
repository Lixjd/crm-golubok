let db = JSON.parse(localStorage.getItem('crmData')) || { employees: [] };

function saveDb() {
    localStorage.setItem('crmData', JSON.stringify(db));
}
