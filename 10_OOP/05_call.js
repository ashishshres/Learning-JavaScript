function setUserName(username) {
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    // setUserName(username); // not calling
    // setUserName.call(username);
    setUserName.call(this, username); // pass current context
    this.email = email;
    this.password = password;
}

const ashish = new createUser("ashish", "ashish@example.com", "123");
console.log(ashish);
