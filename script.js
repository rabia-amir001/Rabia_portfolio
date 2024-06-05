document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = form.elements["name"].value;
        const email = form.elements["email"].value;
        const message = form.elements["message"].value;

        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        
        alert("Your message has been sent!");
        
        form.reset();
    });
});
