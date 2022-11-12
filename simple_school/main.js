window.onload= function dialog() {



    // use fetch to read json
    fetch('./../../info/accounts/dzaccin.json')
    .then(res => res.json())
    .then(data => {
      console.log("from fetch", data)
      localStorage.setItem("accounts", JSON.stringify(data));
      [...data.user].forEach( user => {
        if(user.name === "Devin") {
            fillUserDialog(user)
        }
      });

    })
    .catch(err => console.error(err));
    
}

function fillUserDialog(user) {
  let name = user.name + " " + user.last_name;
  let lessons = user.lessons;
  document.getElementById("username");
  document.getElementById("lesson");
  username.innerHTML = name;
  lesson.innerHTML = lessons;
    
}