# SaladWrap 


A lightweight wrapper for the Salad.io API





![Logo](https://cdn.discordapp.com/attachments/448037810038112256/965180247727288381/wrapsalad.png)


 [![size](https://img.shields.io/github/repo-size/saladlink/saladwrap?color=red&label=SIZE)](https://img.shields.io/github/repo-size/saladlink/saladwrap?color=red&label=SIZE)

## Quick Links

- [Installation](#installation)
- [Code Example](#code-example)
- [Console Output](#console-output)
- [Maintainers](#Maintainers)
## Installation

Install saladwrap.js with npm

```bash
  npm install saladwrap.js
```
Install saladwrap.js with yarn
```bash
  yarn add saladwrap.js
```
    
## Code Example

```js
const { SaladWrapper } = require('saladwrap.js');
const prompt = require("prompt-sync")({ sigint: true });

(async () => {

const sw = new SaladWrapper();

await sw.connect(prompt('Please enter your email: ').toString());

await sw.verify(prompt("Enter passcode from email: ").toString());

console.log('Profile:', await sw.profile());
console.log('Balance:', await sw.balance())

})();
```
## Console output

```js
Profile: {
  email: 'Your Email',
  extensions: { minecraftUsername: 'M3zo' },
  id: 'Your account id,
  lastSeenApplicationVersion: '2021-09-24',
  username: 'Mezo',
  viewedReferralOnboarding: true
}
Balance: {
  currentBalance: 1.3076578183531435,
  lifetimeBalance: 1161.6255108303897
}
```
## Maintainers

- [SunkenSplash](https://github.com/SunkenSplash) - SunkenSplashGaming#4953
- [@Mezo](https://github.com/mezotv) - Mezo#0001

