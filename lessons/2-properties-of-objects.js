
const myObject = {
    title: myString,
    preferences: {
        myFavoriteNumber: myNumber
    }
}

// Step #1: change the file extension from '.js' to '.ts'
// Step #2: Try making "me" of type any
// Step #3: run 'npm run 1' to see the result.
// Step #4: can you use interfaces to ensure that the input is of the expected type?
function addMyTwoFavoriteNumbers(me){
    return me.preferences.myFavoriteNumber +  me.secondaryPreference.myOtherFavoriteNumber;
}

const output = addMyTwoFavoriteNumbers(myObject)

console.log("output of addMyTwoFavoriteNumbers was: " + output);

