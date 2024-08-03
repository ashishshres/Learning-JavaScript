const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        // let error = true;
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    // const response = await promiseFive;
    // console.log(response);
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
