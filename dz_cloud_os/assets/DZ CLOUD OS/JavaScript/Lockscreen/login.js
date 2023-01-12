function loginpwd() {
    let password = document.getElementById('password').value;

    if (password == 'StrengGeheim!') {
        window.location.href = '/dz_cloud_os/welcome.html';
    } else {
        alert('Passwort falsch!');
    }

}