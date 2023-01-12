// Initialize the credit balance to 0
let creditBalance = 15;

// Function to add credits to the balance
function addCredits(amount) {
    creditBalance += amount;
}

class CreditSystem {
    constructor() {
        this.creditBalance = "0"; // Initialize credit balance to 0
    }

    addCredits(amount) {
        this.creditBalance = (parseInt(this.creditBalance) + amount).toString();
    }

    useCredits(amount) {
        this.creditBalance = (parseInt(this.creditBalance) - amount).toString();
    }

    getCreditBalance() {
        return this.creditBalance;
    }
}

 let creditSystem = new CreditSystem();

 creditSystem.addCredits(0);
 console.log(creditSystem.getCreditBalance()); // Outputs "10"

 creditSystem.useCredits(5);
 console.log(creditSystem.getCreditBalance()); // Outputs "5"

window.addEventListener('load', (event) =>{

    console.log("Page Loaded");
    creditGUI(creditBalance);

});


 function creditGUI(amount) {
    let UserGUI = amount;
    let credit = document.getElementById("credit");
    console.log(credit)
    console.log(document)
    credit.innerHTML = UserGUI;
}
