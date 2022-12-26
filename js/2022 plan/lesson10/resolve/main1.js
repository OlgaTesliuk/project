let url = new URL(location.href);
let id = url.searchParams.get(`data`);
fetch(`https://jsonplaceholder.typicode.com/users/` + id)
    .then(response => response.json())
    .then(value => {
        for (const item in value) {
            let divU = document.createElement(`div`);

            if (typeof value[item] !== `object`) {
                divU.innerTextd = `${item}--${value[item]}`;
            } else {
                divU.innerTextd = `${item}`
                for (const key in value[item]) {
                    let userInnerDiv = document.createElement(`div`);

                    if (typeof value[item][key] !== `object`) {
                        userInnerDiv.innerText = `${key}---${value[item][key]}`
                    } else {
                        userInnerDiv.innerText = `${key}:`
                        for (const element in value[item][key]) {
                            let divElement = document.createElement(`div`);
                            if (typeof value[item][key] !== `object`) {
                                divElement.innerText = `${element}-----${value[item][key]}`;
                                userInnerDiv.append(divElement)
                            }
                        }
                    }
                    divU.append(userInnerDiv);
                }
            }

            document.body.append(divU);
        }
    });
