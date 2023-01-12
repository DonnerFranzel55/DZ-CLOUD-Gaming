



function datapolicy() {
    confirm("Beim zurückkerhren zur Homepage stimmen sie die DSE zu.");

    if(confirm(true)){
        console.log("Datenschutzerklärung wurde akteptiert.");
        console.log("Data Policy granded!");
        window.location.href="/";
    }else{
        console.log("Datenschutzerklärung wurde abgelehnt.");
        console.log("Data Policy denied Error-Code: 571");
        datapolicy();
    }
}

function vnf() {
    let vnr = document.getElementById('vf59').value;

    if (vnr == "fNSMEgWixwZJ*Bq4yGp4E17?T") {
        alert("Your is Product verifyed!");
    } else {
        alert("Can't verify product! Error-Code: 590");
    }

}

function vpnf() {
    let vpnr = document.getElementById('vpf59').value;

    if (vpnr == "8080") {
        console.log("Your code " + vpnr +" is valid")
        window.location.href = "/#14a055cdf5c3c8206c9019c33d98a75f6ed999b5b1af6ebe245f16cb1fe6583224dc3c0d04cd4a8909661b85f191a2f05728b4675a525dc6b5526fcf592d730e"
    } else {
        alert("Can't verify parentkey! Error-Code: 790");
    }

}