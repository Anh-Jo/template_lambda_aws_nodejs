
exports.handler = async (event, context) => {
	console.log('Received event:', JSON.stringify(event, null, 2));
	return event
};
