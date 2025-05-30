
// Объявление переменных
const myBtn = document.querySelector('#btn');
const nameInput = document.querySelector('#name');
const list = document.querySelector('#list');
const sum = document.querySelector('#sum');
const category = document.querySelector('#category');
const sumAll = document.querySelector('.sumAll');
const price = document.querySelector('#sum');

let total = 0;

// Обработчик события кнопки
myBtn.addEventListener('click', () => {
    // Создание элемента "li" в памяти (на странице его пока что нет)
    const newItem = document.createElement('li');
    // Добавить элементу newItem класс item (элемент еще не на странице)
    newItem.classList.add('item');
    // Добавить элементу текстовое содержимое из поля вводаs
    newItem.innerHTML = `
                <h2 class="name">${nameInput.value}</h2>
                <p class="price">${price.value}</p>
                 <p class="category">${category.value}</p>`

    console.log(category.value);
    // Добавить элемент в список
    list.appendChild(newItem);
    total = total + +sum.value;
    sumAll.textContent = total
    // Отчистить поле ввода
    nameInput.value = '';

    // Создаем кнопку для удаления элемента списка
    const deleteButton = document.createElement('button')
    // Добавляем текст к нопке 
    deleteButton.textContent = 'Удалить';
    // Добавить кнопку в элемент списка
    newItem.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
        total = total - +newItem.querySelector('.price').textContent;
        // Удаление элемента из списка
        list.removeChild(newItem);
    })

})


