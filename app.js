// scroll transition js
// runs any time visibility of an element changes
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // conditional check to check if entry is intersecting view port
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // makes element visible
        } else {
            entry.target.classList.remove('show'); // makes element disappear again
        }
    });
});

// observer loops over each element
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


