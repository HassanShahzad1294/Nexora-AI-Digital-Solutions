/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const sections = document.querySelectorAll(
    ".solutions, .projects, .about, .stats, .testimonials, .contact"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});



/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});



const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const formData = {
            name: contactForm.querySelector(
                'input[placeholder="Enter your name"]'
            ).value,

            email: contactForm.querySelector(
                'input[placeholder="Enter your email"]'
            ).value,

            subject: contactForm.querySelector(
                'input[placeholder="Project subject"]'
            ).value,

            message: contactForm.querySelector("textarea").value
        };


        try {

            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(formData)
                }
            );


            const data = await response.json();


            if (data.success) {

                alert("Message sent successfully! ✅");

                contactForm.reset();

            } else {

                alert("Something went wrong ❌");

            }


        } catch (error) {

            console.log("Error:", error);

            alert(
                "Server se connection nahi ho raha ❌"
            );

        }

    });

}