const params =
    new URLSearchParams(
        window.location.search
    );

const index =
    params.get("index");

    let users =
    JSON.parse(
        localStorage.getItem("users")
    ) || [];

let user = users[index];

document.getElementById("name").value =
    user.name;

document.getElementById("surname").value =
    user.surname;

document.getElementById("email").value =
    user.email;

//document.getElementById("body").value =
    //user.biography;
    document
    .getElementById("editForm")
    .addEventListener(
        "submit",
        updateUser
    );

function updateUser(event){

    event.preventDefault();

    const name =
        document.getElementById("name")
        .value.trim();

    const surname =
        document.getElementById("surname")
        .value.trim();

    const email =
        document.getElementById("email")
        .value.trim();

   // const biography =
    //    document.getElementById("body")
    //    .value.trim();

    // Validation

    if(name.length < 2){

        alert(
            "Name must be at least 2 characters"
        );

        return;
    }

    if(surname.length < 2){

        alert(
            "Surname must be at least 2 characters"
        );

        return;
    }

    // if(biography.length < 10){

    //     alert(
    //         "Biography must be at least 10 characters"
    //     );

        //return;
    //}

    users[index] = {

        name: name,
        surname: surname,
        email: email,
        //biography: biography
    };

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert(
        "User Updated Successfully"
    );

    window.location.href =
        "UsersList.html";
}
output += `
<tr>

    <td>${user.name}</td>
    <td>${user.surname}</td>
    <td>${user.email}</td>

    <td>

        <button
            onclick="editUser(${index})">

            Edit

        </button>

        <button
            onclick="deleteUser(${index})">

            Delete

        </button>

    </td>

</tr>
`;