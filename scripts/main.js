const $form = document.querySelector('form');

$form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let $logDate = new FormData($form);
    let test = new Map($logDate);
    console.log(test);
});
