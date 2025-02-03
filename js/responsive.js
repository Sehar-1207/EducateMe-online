document.addEventListener("DOMContentLoaded", function () {
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.2 && // Trigger animation slightly before fully in view
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        const sections = document.querySelectorAll(".section");
        const courses = document.querySelectorAll(".course");

        sections.forEach((section) => {
            if (isInViewport(section)) {
                setTimeout(() => {
                    section.classList.add("animate");
                }, 200); 
            }
        });

        courses.forEach((course) => {
            if (isInViewport(course)) {
                setTimeout(() => {
                    course.classList.add("animate");
                }, 200); // Slight delay for smoother animation
            }
        });
    }

    // Add event listener for scroll
    window.addEventListener("scroll", animateOnScroll);

    // Trigger once on page load
    animateOnScroll();
});








const burger = document.querySelector('.burger');
let navbar =document.querySelector('.navbar');
let navlist =document.querySelector('.navlist');
let navright =document.querySelector('.navright');

burger.addEventListener('click',()=>{
   navbar.classList.toggle('navheight');
   navlist.classList.toggle('vresp');
   navright.classList.toggle('vresp');
});

const sections = document.querySelectorAll('.section, .course');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});