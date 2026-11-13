const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length,characters) {
    let result = ""
    let i = 0;
    while(i < length){
        let putwords = characters[Math.floor(Math.random() * characters.length)]
        result += putwords;
        i++
    }
    return result
    }


const key = generateKey(16, characters);
console.log(key);