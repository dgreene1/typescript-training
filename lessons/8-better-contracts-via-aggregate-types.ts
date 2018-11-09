(()=>{  // <-- for this demo, we are using an Immediately Invoked Function Expression (IIFE) so that the types and functions don't bleed into the other lessons

    interface IPaidTimeOff {
        reason: string,
        employeeId: string,
        startDate: Date,
        endDate: Date
        employeeIdOfVerifier: string | undefined,
        verifiedDate: Date | undefined,
    }

    // Step #1: Can you find what's wrong with this function?
    //      Hint: if a consumer of this function is expecting to get back every property, they will get strange results
    function PostAnVerifiedAbsence(pto: IPaidTimeOff, bearerToken: string, verify: boolean) : IPaidTimeOff {
        var allowedToVerify = CanVerify(bearerToken);
        if(allowedToVerify){
            throw new Error("This user is not authorized to verify");
        }
        if(verify){
            var employeeName = GetEmployeeName(bearerToken);

            pto.verifiedDate = new Date();
        }

        SaveToDb(pto);
        return pto;
    }

    function CanVerify(bearerToken: string) : boolean {
        // In the real world, this would be hitting an external service to look up the "claims" to check
        //      does this user have a claim that states that they can verify?
        //      if so, let's return who they are and stamp the time they opted to verify
        if(bearerToken === "785a31de-2df8-455b-b661-57618e9b9f32"){
            return true;
        } else {
            return false;
        }
    }

    function GetEmployeeName(bearerToken: string): string {
        // Pretend that it gets the name from the DB
        if(bearerToken === "785a31de-2df8-455b-b661-57618e9b9f32"){
            return "George Smith";
        } else {
            throw new Error("Could not find an employee for that bearer token");
        }
    }

    function SaveToDb(input: object): void {
        // let's pretend this saves to a database
    }

})() // <-- for this demo, we are using an Immediately Invoked Function Expression (IIFE) so that the types and functions don't bleed into the other lessons