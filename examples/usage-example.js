// Example usage of the ToxaDex SDK.
const ToxaDex = require("../src/index");

// Connect wallet
ToxaDex.wallet.connectWallet();

// Send a transaction
ToxaDex.transactions.sendTransaction({ to: "address", amount: 100 });

// Analyze an image
const fs = require("fs");
const imageBuffer = fs.readFileSync("path/to/image.jpg");
ToxaDex.analytics.analyzeImage(imageBuffer);
