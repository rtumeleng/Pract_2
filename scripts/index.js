const user = {
    name: name,
    surname: surname,
    email: email,
    biography: body
};

// Get existing users
let users =
    JSON.parse(localStorage.getItem("users")) || [];

// Add new user
users.push(user);

// Save back to local storage
localStorage.setItem(
    "users",
    JSON.stringify(users)
);

alert("User Created Successfully!");

document.getElementById("postForm").reset();