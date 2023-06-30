const data = document.getElementById("data-user");
const url = "http://localhost:8080/v1/users/auth";
const panel = document.getElementById("user-panel");

function userAuthInfo() {
    fetch(url)
        .then((res) => res.json())
        .then((u) => {
            let temp = '';
            temp += `<tr>
            <td>${u.id}</td>
            <td>${u.name}</td>
            <td>${u.surname}</td>
            <td>${u.age}</td>
            <td>${u.email}</td>
            <td>${u.role}</td>
            </tr>`;
            data.innerHTML = temp;

            panel.innerHTML = `<h5>${u.email} with roles: ${u.role}</h5>`
        });
}

userAuthInfo()