# @0xward/nullstate-logic

[![NPM Version](https://img.shields.io/npm/v/@0xward/nullstate-logic)](https://www.npmjs.com/package/@0xward/nullstate-logic)
[![NPM Downloads](https://img.shields.io/npm/dm/@0xward/nullstate-logic)](https://www.npmjs.com/package/@0xward/nullstate-logic)
[![License](https://img.shields.io/npm/l/@0xward/nullstate-logic)](https://opensource.org/licenses/MIT)

The @0xward/nullstate-logic package provides the core execution state machine and cryptographic inventory management logic for the NullState decentralized role-playing game sub-layer on the Celo network.

---

## Installation

Install the package via the npm package manager:

```bash
npm install @0xward/nullstate-logic
```

---

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