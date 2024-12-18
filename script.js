function btnSearch() {
    let clickFind = document.getElementById("onclick-find");
    let searchButton = document.getElementById("search-button");

    // Якщо інпут ще не з'явився
    if (!clickFind.querySelector("input")) {
        // Створюємо інпут
        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Пошук..."; 
        clickFind.appendChild(input);

        // Приховуємо стару кнопку і додаємо нову кнопку для закриття
        searchButton.style.display = "none";

        let closeButton = document.createElement("button");
        closeButton.classList.add("close");
        closeButton.innerHTML = "Закрити";
        closeButton.onclick = function() {
            input.remove(); // Видаляємо інпут
            closeButton.remove(); // Видаляємо кнопку закриття
            searchButton.style.display = "inline-block"; // Показуємо початкову кнопку
        };
        clickFind.appendChild(closeButton);
    }
}


// Що відбувається:

// Коли ти натискаєш на кнопку, викликається функція btnSearch().
// Функція перевіряє, чи є вже інпут в елементі #onclick-find. Якщо інпут відсутній, вона створює новий і додає його до цього елемента.
// Якщо інпут вже є, нічого не буде додано повторно.


// Приховування і заміна кнопки:

// Кнопка, що викликає пошук, стає невидимою після натискання через searchButton.style.display = "none";.
// Створюється нова кнопка для закриття, яка має клас close і текст "Закрити". Кнопка має червоний фон (це для стилізації).
// При натисканні на кнопку "Закрити" інпут та сама кнопка зникають, а стара кнопка знову стає видимою.
// Тепер при натисканні на кнопку з'явиться інпут для пошуку, а стара кнопка буде прихована, замінена кнопкою для закриття пошуку.