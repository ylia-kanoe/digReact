/* 
### Задача 2: Список пользователей
Создайте компонент UserList, который отображает список пользователей. Данные пользователей можно хранить в массиве объектов, 
каждый из которых включает id, name и email. Используйте метод map для вывода списка пользователей на экран.
Подсказка: Используйте ключи в списках, чтобы улучшить производительность рендеринга.
*/

let users = [
    {
        id: 1,
        name: "Миша",
        email: "incore55@gmail.com"
    }, 
    {
        id: 2,
        name: "Юля",
        email: "ylia.kano@gmail.com"
    },
]
let list = users.map((item) => (
    <li id={item.id}>{item.name}: <a href={"mailto:" + item.email}>{item.email}</a></li>
))   

function UserList(){
    return(
        <ul>{list}</ul>
    )
}

export default UserList