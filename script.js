const btnAbrir = document.getElementById("bntAbrir");
const cancelButton = document.getElementById("cancelButton");
const modal = document.getElementById("modal-container");
modal.returnValue = "modal-container";

function openCheck(modal) {
    if (modal.open) {
        console.log("Dialog open");
    } else {
        console.log("Dialog closed");
    }
}

// Update button opens a modal dialog
btnAbrir.addEventListener("click", () => {
    modal.showModal();
    openCheck(modal);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
    modal.close("animalNotChosen");
    openCheck(modal);
});
