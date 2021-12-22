exports.handler = async function(event, context) {
    const data = event.body;
    console.log(data);
    let verified = false;
    let confirmedHash = 'Not Whitelisted'
    const associatedAccounts = 
    [{metaMaskHash:'0xfd20d452da9214c56641000d689da233b521cd1c', whitelistHash:'0xfd20d452da9214c56641000d689da233b521cd1c'},
    {metaMaskHash:'0xfd20d452da9214c56641000d689da233a412bc2d', whitelistHash:'bob'}]

    // if (associatedAccounts.metaMaskHash.includes(data)){
    //     verified = true;
    // }

    for (var i = 0, l = associatedAccounts.length; i < l; i++) {
        if(associatedAccounts[i].metaMaskHash === data) {
            verified = true;
            confirmedHash = associatedAccounts[i].whitelistHash;
        }
        // ...
    }

    return{
        statusCode: 200,
        body: JSON.stringify({verified: verified, confirmedHash: confirmedHash})
    }
}