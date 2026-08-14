// FormValidation.js
// The script creates the form, validates user input, and displays validation messages.

document.body.innerHTML = `
    <div id="registration">
        <h2>User Registration</h2>

        <form id="registrationForm">

            <label>Name:</label>
            <input type="text" id="name">

            <br><br>

            <label>Email:</label>
            <input type="text" id="email">

            <br><br>

            <label>Password:</label>
            <input type="password" id="password">

            <br><br>

            <button type="submit">
                Register
            </button>

        </form>

        <div id="message"></div>
    </div>
`;


const form =
    document.getElementById("registrationForm");

const message =
    document.getElementById("message");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const errors = [];


    // Validate name
    if (name.length < 3) {

        errors.push(
            "Name must contain at least 3 characters."
        );
    }


    // Validate email
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        errors.push(
            "Please enter a valid email address."
        );
    }


    // Validate password
    if (password.length < 8) {

        errors.push(
            "Password must contain at least 8 characters."
        );
    }


    // Display validation result
    if (errors.length > 0) {

        message.innerHTML = `
            <p>Please fix the following errors:</p>
            <ul>
                ${errors.map(error =>
                    `<li>${error}</li>`
                ).join("")}
            </ul>
        `;

    } else {

        message.innerHTML =
            "<p>Registration successful!</p>";

        form.reset();
    }

});
