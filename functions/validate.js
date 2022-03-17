const { performance } = require("perf_hooks");

exports.handler = async function (event, context) {
  let data = event.body;
  let verified = false;
  let confirmedHash = "Not Whitelisted";
  const associatedAccounts = [];

  if (confirmedHash === "Not whitelisted") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        verified: verified,
        confirmedHash: confirmedHash,
      }),
    };
  }

  var startTime = performance.now();
  for (var i = 0; i < associatedAccounts.length; i++) {
    if (
      associatedAccounts[i].metaMaskHash.toLowerCase() === data.toLowerCase()
    ) {
      verified = true;
      confirmedHash = associatedAccounts[i].whitelistHash;
    }
  }
  var endTime = performance.now();
  var time = endTime - startTime;
  console.log("Execution time: " + time);

  return {
    statusCode: 200,
    body: JSON.stringify({ verified: verified, confirmedHash: confirmedHash }),
  };
};
