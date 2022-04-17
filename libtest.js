const { SaladWrapper } = require('/home/runner/SaladWrap/src/wrapper.js');
const prompt = require("prompt-sync")({ sigint: true });

(async () => {

const sw = new SaladWrapper();

await sw.connect(prompt('Please enter your email: ').toString());

await sw.verify(prompt("Enter passcode from email: ").toString());

console.log('Profile:', await sw.profile());
console.log('Balance:', await sw.balance())

})();