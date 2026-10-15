const projects = [
    {
        title: "Product Review Form",
        category: "WDD 131",
        description: "A dynamic HTML/CSS form utilizing JavaScript and LocalStorage to track user review submissions.",
        techStack: "HTML, CSS, JavaScript",
        link: "https://noobiecoder0101.github.io/wdd131/week5a/form.html",
        imageUrl: "images/project-form.jpg"
    },
    {
        title: "Dynamic Temple Gallery",
        category: "WDD 131",
        description: "A responsive image gallery that dynamically renders HTML cards from a JavaScript array and filters results.",
        techStack: "HTML, CSS, JavaScript (Array Methods)",
        link: "#",
        imageUrl: "images/project-temples.jpg"
    },
    {
        title: "Future React App",
        category: "Personal Project",
        description: "A placeholder for a future software engineering project I am building.",
        techStack: "React, Node.js",
        link: "#",
        imageUrl: "images/placeholder.jpg"
    }
];

const gallery = document.getElementById("project-gallery");

function displayProjects(projectList) {
    gallery.innerHTML = "";

    projectList.forEach(project => {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        let title = document.createElement("h3");
        let category = document.createElement("span");
        let desc = document.createElement("p");
        let stack = document.createElement("p");
        let link = document.createElement("a");

        img.setAttribute("src", project.imageUrl);
        img.setAttribute("alt", `Screenshot of ${project.title}`);
        img.setAttribute("loading", "lazy");
        img.style.width = "100%";
        img.style.borderRadius = "4px";

        title.textContent = project.title;
        category.innerHTML = `<em>${project.category}</em>`;
        desc.textContent = project.description;
        stack.innerHTML = `<strong>Tech:</strong> ${project.techStack}`;
        
        link.setAttribute("href", project.link);
        link.setAttribute("target", "_blank");
        link.classList.add("card-link");
        link.textContent = "View Live Project \u2192";

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(desc);
        card.appendChild(stack);
        card.appendChild(link);

        gallery.appendChild(card);
    });
}

if (gallery) {
    displayProjects(projects);
}



const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastmodified');

const today = new Date();

if (currentYear) {
    currentYear.textContent = today.getFullYear();
}

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

function trackVisits() {
    let visits = Number(window.localStorage.getItem("portfolioVisits")) || 0;

    if (visits === 0) {
        console.log("Welcome to my portfolio! This is your first time here.");
    } else {
        console.log(`Welcome back! You have visited ${visits} times.`);
    }

    visits++;
    window.localStorage.setItem("portfolioVisits", visits);
}

trackVisits();