import { useState } from "react";

/*
### Задача 3: Обратная связь с формой
Создайте компонент FeedbackForm, который включает форму для сбора отзыва. Форма должна содержать поля для имени, email и 
текста отзыва. Используйте useState для управления состоянием формы и обработчик для отправки данных.
Подсказка: Добавьте валидацию для ввода данных.
*/

function FeedbackForm(){

    const[feedForm, setFeedForm] = useState({
        name: '',
        email: '',
        review: ''
    })

    function checkEmail(email){
        let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
        if (!emailPattern.test(email)) {
            alert("Некорректный email-адрес");
            return false
        } 
        return true
    }

    function alertForm(){
        if(checkEmail(feedForm.email)){
            alert('Имя:' + feedForm.name + 'Email:' + feedForm.email+  'Отзыв:' + feedForm.review)
        }
        
    }

    return(
        <form className="form-feedback" onSubmit={alertForm}>
            <input placeholder="Имя" name="name" value={feedForm.name} onChange={(event) => setFeedForm((item) => ({...item, name: event.target.value}))}/>
            <input placeholder="email" name="email"  value={feedForm.email} onChange={(event) => setFeedForm((item) => ({...item, email: event.target.value}))}/>
            <textarea placeholder="текста отзыва" name="review"  value={feedForm.review} onChange={(event) => setFeedForm((item) => ({...item, review: event.target.value}))}></textarea>
            <button type="submit">Отправить</button>
        </form>
    )
}

export {FeedbackForm}
