<p align="center">
  <img src="./assets/header-sync.svg" alt="0xward Core Intelligence Sync Animation" width="120" height="120" />
</p>

# @0xward/nullstate-logic

<p align="center">
  <a href="https://www.npmjs.com/package/@0xward/nullstate-logic"><img src="https://img.shields.io/npm/v/@0xward/nullstate-logic?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/@0xward/nullstate-logic"><img src="https://img.shields.io/npm/dm/@0xward/nullstate-logic?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://www.npmjs.com/package/@0xward/nullstate-logic"><img src="https://img.shields.io/npm/l/@0xward/nullstate-logic?style=flat-square" alt="License" /></a>
</p>

NullState Celo RPG Core Logic—core computational logic for decentralized intelligence frameworks built on CELO ecosystems.

## Core Capabilities

* **Decentralized State Verification:** Validates multi-session variables natively within EVM compatibility rules.
* **Micro-payment Enforcement:** Structural checks to ensure compliance with the mandatory 0.01 CELO per transaction state transition.
* **Immutable Loss Logging:** Programmatic structures to commit permanent character state termination parameters to the blockchain.

---

## Quick Start

```javascript
const { NullStateEngine } = require("@0xward/nullstate-logic");
const engine = new NullStateEngine({ providerUrl: "https://forno.celo.org" });

async function run() {
    const state = await engine.getGameState("0x1234567890abcdef");
    console.log("Current Session State:", state);
}

run();
```

---

## API Reference

### Methods

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| `getGameState` | `playerAddress: string` | `Promise<Object>` | Fetches active dungeon parameters and health variables. |
| `submitAction` | `action: string`, `payment: string` | `Promise<Object>` | Dispatches player turns and returns transaction transaction hash properties. |

---

## License

This project is licensed under the terms of the MIT License.