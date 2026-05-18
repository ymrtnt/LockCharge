const form = document.getElementById("lockerForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(event){

    event.preventDefault();

    confirmation.textContent =
    "Votre réservation de casier a bien été enregistrée !";

    form.reset();
});