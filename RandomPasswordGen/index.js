//catalog of characters for generation
let bank = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","?","+","1","2","3","4","5","6","7","8","9","0"];

//gives random number (based on number of elements in bank)
function getRandom() {
    return Math.floor(Math.random() * bank.length)
}

//generates individual passwords
function generatePassword() {
    // console.log(bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()])    

    return [bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()], bank[getRandom()]]
}

//this is really hacky. there's a better way to run the function 9 different times without writing it 9 times.


//displays generated passwords on page
function displayPasswords() {
    let generatedPWcommas = generatePassword()
    let generatedPW = generatedPWcommas.join("")
    let generatedPWcommas2 = generatePassword()
    let generatedPW2 = generatedPWcommas2.join("")
    let generatedPWcommas3 = generatePassword()
    let generatedPW3 = generatedPWcommas3.join("")
    let generatedPWcommas4 = generatePassword()
    let generatedPW4 = generatedPWcommas4.join("")

    document.getElementById("pw-1").innerHTML = generatedPW
    document.getElementById("pw-2").innerHTML = generatedPW2
    document.getElementById("pw-3").innerHTML = generatedPW3
    document.getElementById("pw-4").innerHTML = generatedPW4
}

