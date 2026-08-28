/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check fields
        if (!name || !email || !subject || !message) {
            formMessage.textContent = "Please fill all fields.";
            return;
        }

        // Button loading
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        try {

            const response = await fetch(
                "https://nexora-backend-smoky.vercel.app/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        subject: subject,
                        message: message
                    })
                }
            );

            const data = await response.json();

            if (response.ok && data.success) {

                formMessage.textContent =
                    "Message sent successfully! ";

                contactForm.reset();

            } else {

                formMessage.textContent =
                    data.message || "Message could not be sent.";

            }

        } catch (error) {

            console.error("Error:", error);

            formMessage.textContent =
                "Backend server is not connected ";
        }

        // Button normal
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message →";

    });

}