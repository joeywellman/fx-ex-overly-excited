// // Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         // buildMeUp = buildMeUp + " " + theWordArray[i]
//         buildMeUp = `${buildMeUp} ${theWordArray[i]}`;
//         // Print buildMeUp to the console
//         console.log(buildMeUp);
//         // debugger;
//     }
// }

// // Invoke the function and pass in the array
// addExcitement(sentence)

// // console.log(theWordArray[i])



// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, punctuationParam, numberOfTimes) {

    // Each time the for loop executes, you're going to add one more word to this string
    let finalPunctuation = ""
    for(let i = 0; i < numberOfTimes; i++){
        finalPunctuation = finalPunctuation + punctuationParam;
    }

    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        let wordToAdd = theWordArray[i];

        // check to see if it's the third word
        if((i+1)%3 === 0 && i !== 0){
            wordToAdd = wordToAdd + finalPunctuation;
        }

        // Concatenate the new word onto buildMeUp
        // buildMeUp = buildMeUp + " " + theWordArray[i]
        buildMeUp = `${buildMeUp} ${wordToAdd}`;
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "$", 7);

// console.log(theWordArray[i])