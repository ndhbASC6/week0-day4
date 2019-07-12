
const rawText = 
    "Judge connected on the first pitch from Ryne Stanek (0-2) to give him nine career multihomer games. ";

    function singlearray (str){
        const result = []
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        let stringLower = str .toLowerCase()
        for (let i=0; i< str.length ; i++){
            const char = str [i]
            //if (char.isInteger()){str.replace (char ,  " ") 
             if (alphabet.includes(char)){str.replace (char ,  " ")}
        }
        for(let i = 0; i< str.length; i++) {
            if(str[i] === " ") {
                str.replace(str[i], "")
            }
        }

        for(let i = 0; i< str.length; i++) {
            result.push(str[i])
        }

return result

    }

    console.log(singlearray(rawText));

