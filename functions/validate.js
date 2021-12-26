exports.handler = async function(event, context) {
    const data = event.body;
    let verified = false;
    let confirmedHash = 'Not Whitelisted'
    const associatedAccounts = 
    [
        {metaMaskHash:'0xfd20d452da9214c56641000d689da233b521cd1c', whitelistHash:'0xe090ec84dbb853c44aa6ebf0e67f673f4bc82fdfc4b83d482e3fb4b7b6fbaffe115ad5740897fb268be729bad0c3343633c331133b0928a2955be8a806a6473f1b'},
        {metaMaskHash:'0x5916cbaF66a7bFa2B0F2bF60c05cb16763F051F8', whitelistHash:'0x1d34c1369e8fd1b4f32091949ea5826e96a66a3687df04808c71fbf52c574283271cd2c2fc02b9bf6a1f41b6427e6e741be221f4260252c89cf272e0f6851f591b'},
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