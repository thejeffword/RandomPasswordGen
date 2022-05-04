//defining html variables in js
// let passWord1 = document.getElementById("pw-1")
// let passWord2 = document.getElementById("pw-2")
// let passWord3 = document.getElementById("pw-3")
// let passWord4 = document.getElementById("pw-4")
//unused right now because couldn't get textContent to properly replace.  ended up just directly referencing the html element ids instead of assigning them.

//catalog of characters for generation
let bank = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","?","+","1","2","3","4","5","6","7","8","9","0"];

//gives random number (based on number of elements in bank)
function getRandom() {
    return Math.floor(Math.random() * bank.length)
}

//generates individual passwords
function generatePassword() {
    let value = []
    for (var count=1; count<=9; count++) {
        value.push(bank[getRandom()])
    }

    return value.join("")
}


//displays generated passwords on page
function displayPasswords() {
    document.getElementById("pw-1").innerHTML = generatePassword()
    document.getElementById("pw-2").innerHTML = generatePassword()
    document.getElementById("pw-3").innerHTML = generatePassword()
    document.getElementById("pw-4").innerHTML = generatePassword()

    // passWord1.textContent = "Poop"
    // passWord2.textContent = "Fart"
    // passWord3.textContent = "Shit"
    // passWord4.textContent = "Ass"
    //unused right now because couldn't get textContent to properly replace.  ended up just directly referencing the html element ids instead of assigning them.
}

