function register() {
    var data = new FormData();
    data.append('username', document.getElementById("inputUsername").value);
    data.append('password', document.getElementById("inputPassword").value);
    data.append("email", document.getElementById("inputEmail").value);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', "register.php");
    xhr.onload = function() {
        console.log(this.response);
    };
    xhr.send(data);
    return false;
}