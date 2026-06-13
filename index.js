function rollAction() { return { actionType: Math.floor(Math.random() * 5) + 1, dmg: Math.floor(Math.random() * 121) + 20 }; }
module.exports = { rollAction };