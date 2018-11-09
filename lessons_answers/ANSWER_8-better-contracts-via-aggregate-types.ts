(()=>{  // <-- we use an Immediately Invoked Function Expression (IIFE) so that the types and functions don't bleed into the other lessons

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

    type IPaidTimeOffVerified = IPaidTimeOff & IVerifiedByEmployee;

    function PostAnAbsence(pto: IPaidTimeOff, bearerToken: string) : IPaidTimeOff {
        SaveToDb(pto);
        return pto;
    }

    function PostAnVerifiedAbsence(pto: IPaidTimeOff, bearerToken: string) : IPaidTimeOffVerified {
        var verifierInfo = GetVerifierFromBearerToken(bearerToken);
        if(verifierInfo == undefined){
            throw new Error("This user is not authorized to verify");
        }
        // Now that we know that we have verifier information, let's copy the original object and assign the new information
        var verifiedPto = Object.assign({}, pto, verifierInfo);

        SaveToDb(verifiedPto);
        return verifiedPto;
    }

    function GetVerifierFromBearerToken(bearerToken: string) : IVerifiedByEmployee | undefined {
        // In the real world, this would be hitting an external service to look up the "claims" to check
        //      does this user have a claim that states that they can verify?
        //      if so, let's return who they are and stamp the time they opted to verify
        if(bearerToken === "785a31de-2df8-455b-b661-57618e9b9f32"){
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