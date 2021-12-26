exports.handler = async function(event, context) {
    const data = event.body;
    let verified = false;
    let confirmedHash = 'Not Whitelisted'
    const associatedAccounts = 
    [
        {metaMaskHash:'0xfd20d452da9214c56641000d689da233b521cd1c', whitelistHash:'0xe090ec84dbb853c44aa6ebf0e67f673f4bc82fdfc4b83d482e3fb4b7b6fbaffe115ad5740897fb268be729bad0c3343633c331133b0928a2955be8a806a6473f1b'},
        {metaMaskHash:'users account address goes here', whitelistHash:'whitelisted has goes here'}
    ]

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