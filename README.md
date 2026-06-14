<p align="center">
</p>

# @0xward/nullstate-logic

<p align="center">
</p>

The core execution state machine and cryptographic inventory management logic for the NullState decentralized role-playing game sub-layer on the Celo network.

---

## Installation

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0 (or yarn >= 1.22.0 / pnpm >= 8.0.0)

### Package Deployment
Execute the targeted acquisition command matching your production environment package manager setup:

```bash
# Using Node Package Manager (Default)
npm install @0xward/nullstate-logic

# Using Yarn Package Manager
yarn add @0xward/nullstate-logic

# Using PNPM Package Manager
pnpm add @0xward/nullstate-logic
```

### Peer Dependencies
For secure runtime cryptographic executions and ledger state mutations, ensure your runtime container establishes communication boundaries with the primary network bindings if processing on-chain blocks:
- For Celo EVM networks: viem (>= 2.x) or ethers (>= 6.x) for advanced RPC transaction routing.

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