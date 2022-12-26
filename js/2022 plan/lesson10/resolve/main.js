const div = document.createElement(`div`);
document.body.append(div);

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response=> response.json())
    .then(value => {
        for (const user of value) {
            let divUsers = document.createElement(`div`);
            divUsers.innerText = `${user.id}  ${user.name}`;
            let a = document.createElement(`a`);
            a.innerText= `click me`;
            a.href = `details.html?data=${user.id}`;
            divUsers.append(a);

            div.append(divUsers);

        }
    })