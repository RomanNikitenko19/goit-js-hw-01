const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt(`Enter password`);

if (message === ADMIN_PASSWORD) {
    alert(`Добро пожаловать!`);
} else if (message === null) {
    alert(`Отменено пользователем!`);
} else {
    alert(`Доступ запрещен, неверный пароль!`);
}