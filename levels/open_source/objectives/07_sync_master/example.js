// Replace the string below with the encoded message from the tutorial!
// If you forgot to copy it, it's "S2V2aW4gaXMgYXdlc29tZQ=="
const ENCODED_MESSAGE = 'replace me!';

// Next, use secret monkey science to decode the encoded message
const decodedMessage = Buffer.from(ENCODED_MESSAGE, 'base64').toString('ascii');

// Print the decoded message to the console!
console.log('Here is the decoded message - paste it in the text field:');
console.log(decodedMessage);
