// Predefined credentials for admins and students
const users = {
    admin: { username: "admin", password: "admin123" },
    student: { username: "student", password: "student123" }
};

// Function to handle login
function login() {
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorDiv = document.getElementById("error");

    // Validate role selection
    if (!role) {
        errorDiv.textContent = "Please select a role.";
        return;
    }

    // Validate credentials
    if (
        role === "admin" &&
        username === users.admin.username &&
        password === users.admin.password
    ) {
        // Redirect to admin panel
        window.location.href = "admin.html";
    } else if (
        role === "student" &&
        username === users.student.username &&
        password === users.student.password
    ) {
        // Redirect to student view
        window.location.href = "student.html";
    } else {
        // Display error message
        errorDiv.textContent = "Invalid username or password for the selected role.";
    }
}