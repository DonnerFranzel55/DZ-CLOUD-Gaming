window.onload = function dialog() {



  // use fetch to read json
  fetch('./../info/accounts/dzaccin.json')
    .then(res => res.json())
    .then(data => {
      console.log("from fetch", data)
      localStorage.setItem("accounts", JSON.stringify(data));
      [...data.user].forEach(user => {
        if (user.name === "Devin") {
          fillUserDialog(user)
        }
      });

    })
    .catch(err => console.error(err));

}

function fillUserDialog(user) {
  let friends = user.friends;
  let nameof = user.name + " " + user.last_name;
  let gametag = user.gamertag;
  let firstfriend = user.friend_with[0];
  let secondfriend = user.friend_with[1];
  let thirdfriend = user.friend_with[2];
  let points = user.playpoints;
  document.getElementById("friendnr"); 
  document.getElementById("friendone");  
  document.getElementById("friendtwo");  
  document.getElementById("friendtre");
  document.getElementById("username");
  document.getElementById("gamertag");  
  document.getElementById("playpoints");
  friendnr.innerHTML = friends;
  username.innerHTML = nameof;
  gamertag.innerHTML = gametag;
  friendone.innerHTML = firstfriend;
  friendtwo.innerHTML = secondfriend;
  friendtre.innerHTML = thirdfriend;
  playpoints.innerHTML = points;
}

function mria() {
  alert("Das Spiel ist gerade nicht verfügbar.");
}
