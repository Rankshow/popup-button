// sore and get the id

const popup = document.getElementById("open-popup");
// const closeModal = document.getElementById("close-popup")

// function to call the popup
const displaypopup = () => {
  popup.classList.add("open-popup");
}
// close popup
const closepopup = () => {
    popup.classList.remove("open-popup");
}