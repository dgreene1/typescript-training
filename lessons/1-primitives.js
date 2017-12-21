
function startPrimitivesRun(){
    const myString = "hello";

    const myNumber = 7;

    const myObject = {
        title: myString,
        myFavoriteNumber: myNumber
    }

    // Step #1: change the file extension from '.js' to '.ts'
    // Step #2: if you're in Visual Studio Code (VSCode) you'll start to see TypeScript errors
    // Step #3: run 'npm run 1' to see the result. The goal is to produce no errors and to have the console show the expected number
    function doSomeMath(aNumber, anotherNumber){
        const result = aNumber * anotherNumber / arguments.length;
        if(isNaN(result)){
            throw new Error("Shoudn't be NaN");
        }
        return result;
    }

    const output = doSomeMath(myNumber, myString);  // <-- hint: someone made a boo-boo

    console.log("doSomeMath resulted in: " + output);
}

startPrimitivesRun();