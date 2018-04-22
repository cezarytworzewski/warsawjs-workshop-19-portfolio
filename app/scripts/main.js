// window.name = {
//     imie: 'Czarek'
// };
//
// window.name = 102;
// console.log(typeof window.name);
// console.log(typeof 102);
//
// const czolg = 102;
// console.log(typeof czolg);
const $form = document.querySelector('form');

    function displayMessage(message) {
        alert(`Na ten email ${name} ${message} został wysłany kupon rabatowy`);
    };
$form.addEventListener('submit', function(evt) { //na formularzu
    evt.preventDefault();
    const data = new FormData($form); //przekopiowuje z formularza pola imie kontakt, to w date będziemy mieć strukturę w której będzie para wartość, klucz email, wwartosc nazwa maila
    const map = new Map(data);
    const email = map.get('email');//nie musi być email, a skrzynka pocztowa
    // Map jest prostym obiektem mapującym klucze na wartości. Każdy element (zarówno obiekt jak i wartości proste) mogą być użyte zarówno jako klucz jak i wartość.
displayMessage(email);

});

// function(evt) { //na formularzu
//     evt.preventDefault();
// } to jest funkcja anonimowa
//jeśli nie zrobie funkcji preventDeault() to strona będę się odświeźać

