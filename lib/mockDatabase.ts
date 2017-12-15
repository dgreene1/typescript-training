export const theDB = {
    save: function(input: any){
        safeConsole(input);
        return true;
    }
}

function safeConsole(input: any){
    if (typeof input === 'object'){
        console.log("Saved this: " + JSON.stringify(input, null, 4));
    } else {
        console.log("Saving this: " + input);
    }
}