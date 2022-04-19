const users = [
    {
        login: 'user1',
        password:'user1',
        keepLogged: true,
    },{
        login: 'user2',
        password:'user2',
        keepLogged: false,
    },{
        login: 'admin',
        password: 'admin',
        keepLogged: false,
    }
];

document.getElementById("submit").onclick = () => {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let keepLogged = document.getElementById("keepLogged").checked;


    if (users.some(item => item.login === login && item.password === password)){
        alert('Successfuly logged in')
    }else{
        alert('Username or password is not valid')
    }
}