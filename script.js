const addForm = document.querySelector('.add-form');
const list = document.querySelector('.todo');
const searchInput = document.querySelector('.search input');
console.log(searchInput);

searchInput.addEventListener('keyup', e => {
    const expo = searchInput.value.trim().toLowerCase();
    // toLowerCase büyük/küçük harf
    createFilter(expo);

});

// arama işlemi-filtre
const createFilter = (expo) => {

    // console.log(Array.from(list.children));
    Array.from(list.children).filter((thingsToDo) => {
        console.log(thingsToDo.textContent.includes(expo));
        return !thingsToDo.textContent.toLowerCase().includes(expo);
    }).forEach((thingsToDo) => {
        thingsToDo.classList.add('filtered');
        // arama dışında kalanları yok etmiş sadece metni sağlayanlar
    });


    Array.from(list.children).filter((thingsToDo) => {
        console.log(thingsToDo.textContent.includes(expo));
        return thingsToDo.textContent.toLowerCase().includes(expo);
    }).forEach((thingsToDo) => {
        thingsToDo.classList.remove('filtered');
       
    });
}


function templateOlustur(toDo) {
    let html =` 
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span> ${toDo}</span >
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML +=html;

}
addForm.addEventListener('submit', e => {
    e.preventDefault();

    const toDo = addForm.add.value.trim().toLowerCase();
    // trim sağdaki ve soldaki boşlukları yok eder görev olarak boşluk girilmemiş olur
    // console.log(toDo);
    // templateOlustur(toDo) 
    if (toDo.length) {
        templateOlustur(toDo);
        form.reset();
    }
});

// delete
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
     }
});












