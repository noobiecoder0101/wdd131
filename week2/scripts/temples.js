const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});


const currentYear = document.querySelector('.currentyear');
const lastModified = document.querySelector('#lastmodified');

const today = new Date();

currentYear.textContent = today.getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;