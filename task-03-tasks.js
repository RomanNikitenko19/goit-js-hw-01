const ADMIN_PASSWORD = 'jqueryismyjam';
let massage = prompt(`Enter pasword`);

if(massage === ADMIN_PASSWORD) {
    alert (`Добро пожаловать!`);
} else if(massage === null) {
    alert (`Отменено пользователем!`)
} else (massage != ADMIN_PASSWORD) {
    alert (`Доступ запрещен, неверный пароль!`)
}
