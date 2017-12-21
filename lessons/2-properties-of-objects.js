function startPropertyOfObjectRun(){
    const myObject = {
        title: myString, // <-- hint: sometimes people forget that they deleted a variable. But not in TypeScript! ;)
        preferences: {
            myFavoriteNumber: 4
        }
    }

    // Step #1: change the file extension from '.js' to '.ts'
    // Step #2: Try making "me" of type any as a way of seeing how TypeScript works when you tell it to stop helping you
    // Step #3: run 'npm run 2' to see the result.
    // Step #4: can you create a TypeScript interface and set 'me' to that interface to ensure that the input is of the expected type?
    function addMyTwoFavoriteNumbers(me){
        // Extra-Credit Step: See if you can modify this function and the interface to make "myOtherFavoriteNumber" optional. How does that encourage you to refactor this function?
        return me.preferences.myFavoriteNumber +  me.preferences.myOtherFavoriteNumber;
    }

    // Step #5: does "myObject" satisfy the interface that "addMyTwoFavoriteNumbers" requires?
    //      Step #5b: Hover over "myObject" for TypeScript's helpful advice
    const output = addMyTwoFavoriteNumbers(myObject)

    console.log("output of addMyTwoFavoriteNumbers was: " + output);
}

startPropertyOfObjectRun();