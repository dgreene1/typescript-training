(()=>{  // <-- we use an Immediately Invoked Function Expression (IIFE) so that the types and functions don't bleed into the other lessons

    const mockBearerTokenWeExpect = "785a31de-2df8-455b-b661-57618e9b9f32";

    interface IPaidTimeOff {
        reason: string,
        employeeId: string,
        startDate: Date,
        endDate: Date
    }

    interface IVerifiedByEmployee {
        verifierEmployeeId: string,
        verifiedDate: Date,
    }

    // So here's the cool thing: We're going to reuse the original type, but then we'll utilize the aggregation operator to add new properties
    //      ...But, more importantly, we will provide two functions so that it's clear which ones will stamp/verify the paid time off
    type IPaidTimeOffVerified = IPaidTimeOff & IVerifiedByEmployee;

    function PostAnAbsence(pto: IPaidTimeOff, bearerToken: string) : IPaidTimeOff {
        SaveToDb(pto);
        return pto;
    }

    function PostAVerifiedAbsence(pto: IPaidTimeOff, bearerToken: string) : IPaidTimeOffVerified {
        var verifierInfo = GetVerifierFromBearerToken(bearerToken);
        if(verifierInfo == undefined){
            throw new Error("This user is not authorized to verify");
        }
        // Now that we know that we have verifier information, let's copy the original object and assign the new information
        var verifiedPto = Object.assign({}, pto, verifierInfo);

        SaveToDb(verifiedPto);
        return verifiedPto;
    }

    // Let's test the output of the newly improved version
    var verifiedPto = PostAVerifiedAbsence({
        reason: "I was sick",
        employeeId: "1234567",
        startDate: new Date(),
        endDate: new Date("9999-12-31T00:00.000Z")
    }, mockBearerTokenWeExpect)
    console.log("This PTO was verified by " + verifiedPto.verifierEmployeeId + " on " + verifiedPto.verifiedDate); // No longer prints undefined

    function GetVerifierFromBearerToken(bearerToken: string) : IVerifiedByEmployee | undefined {
        // In the real world, this would be hitting an external service to look up the "claims" to check
        //      does this user have a claim that states that they can verify?
        //      if so, let's return who they are and stamp the time they opted to verify
        if(bearerToken === mockBearerTokenWeExpect){
            return {
                verifierEmployeeId: "George Smith",
                verifiedDate: new Date(),
            };
        } else {
            return undefined
        }
    }

    function SaveToDb(input: object): void {
        // let's pretend this saves to a database
    }

})() // <-- we use an Immediately Invoked Function Expression (IIFE) so that the types and functions don't bleed into the other lessons