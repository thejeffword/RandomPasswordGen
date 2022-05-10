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

//this is really hacky. there's a better way to run the function 9 different times without writing it 9 times.


//displays generated passwords on page
function displayPasswords() {
    let elements = ["pw-1", "pw-2", "pw-3", "pw-4"]

    elements.forEach((id) => {
        document.getElementById(id).innerHTML = generatePassword()
    })
}

