function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'Reiner Zufall' && password == 'StrengGeheim!') {
        window.location.href = '/dz_cloud_os/lockscreen.html';
    } else {
        alert('Passwort falsch!');
    }

}