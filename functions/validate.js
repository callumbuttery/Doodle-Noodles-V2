exports.handler = async function(event, context) {
    let data = event.body;
    let verified = false;
    let confirmedHash = 'Not Whitelisted'
    let associatedAccounts = 
    [
        {metaMaskHash:'0x5916cbaF66a7bFa2B0F2bF60c05cb16763F051F8', whitelistHash:'0x1d34c1369e8fd1b4f32091949ea5826e96a66a3687df04808c71fbf52c574283271cd2c2fc02b9bf6a1f41b6427e6e741be221f4260252c89cf272e0f6851f591b'},
        {metaMaskHash:'0xfd20d452da9214c56641000d689da233b521cd1c', whitelistHash:'0xe090ec84dbb853c44aa6ebf0e67f673f4bc82fdfc4b83d482e3fb4b7b6fbaffe115ad5740897fb268be729bad0c3343633c331133b0928a2955be8a806a6473f1b'},
        {metaMaskHash:'0x1151D6Ae7235b14c9A6a47570aad16bCbe9c69dC', whitelistHash:'0xcefa62bd21359f7a508f7150040e9e8021f9c1c7b90a52500bb01ca88b99536b1ea3dc09cd8478f4841d6f4262682720b1b6007996469e0eb16aabe381ae6a531b'},
        {metaMaskHash:'0xD0498063e996a8D73F51fDfA507E3ecFb99a180a', whitelistHash:'0xcefa62bd21359f7a508f7150040e9e8021f9c1c7b90a52500bb01ca88b99536b1ea3dc09cd8478f4841d6f4262682720b1b6007996469e0eb16aabe381ae6a531b'},
    ]

    // if (associatedAccounts.metaMaskHash.includes(data)){
    //     verified = true;
    // }

    for (var i = 0; i < associatedAccounts.length; i++) {
        console.log(associatedAccounts[i]);
        if(associatedAccounts[i].metaMaskHash == data) {
            verified = true;
            confirmedHash = associatedAccounts[i].whitelistHash;
        }
        // ...
    }

    console.log(verified);

    return{
        statusCode: 200,
        body: JSON.stringify({verified: verified, confirmedHash: confirmedHash, metamask: data})
    }
}