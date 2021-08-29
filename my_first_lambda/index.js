
exports.handler = async (event, context) => {
	console.log('Coucou ! ')
	console.log('Received event:', JSON.stringify(event, null, 2));
	return event
};
