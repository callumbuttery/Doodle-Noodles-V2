exports.handler = async function(event, context) {
    const data = event.body;
    return{
        statusCode: 200,
        body: JSON.stringify({message: data})
    }
}