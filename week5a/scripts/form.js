const products = [
  { id: "fc-1888", name: "yams", averagerating: 4.5 },
  { id: "fc-2050", name: "potatoes", averagerating: 4.7 },
  { id: "fs-1987", name: "camoflague", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "antimatter", averagerating: 5.0 }
];

// Populate the Product Name dropdown
const productSelect = document.getElementById("product");

products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id; // The ID goes to the server
    option.textContent = product.name; // The Name is what the user sees
    productSelect.appendChild(option);
});

// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;