let passwordLength = Math.floor(Math.random() * 13); 
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*+-<>?/";
let password = "";

if (passwordLength < 7) {
    passwordLength += 7;
}

for (let i = 0; i < passwordLength; i++) {
    let randomValue = Math.floor(Math.random() * characters.length);
    password += characters[randomValue];
}

console.log(`Password: ${password}`);