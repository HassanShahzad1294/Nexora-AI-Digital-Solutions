// Vercel discovers files in `api/` as serverless functions.
// Export the same Express app used by local development.
module.exports = require("../server");
