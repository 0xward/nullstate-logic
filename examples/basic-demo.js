const { NullStateEngine } = require("../index.js");
const engine = new NullStateEngine();
console.log("🎮 Initializing NullState AI Dungeon Master on Celo...");
engine.getGameState("0x1234567890abcdef").then(state => console.log("State:", state));
console.log("✅ [nullstate-logic] Demo running successfully!");