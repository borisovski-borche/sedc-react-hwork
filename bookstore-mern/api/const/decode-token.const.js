const admin = require("firebase-admin");
const serviceAccount = require("../service-account-file.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const decodeToken = async (req, res, next) => {
  const header = req.headers?.authorization;
  if (
    header !== "Bearer null" &&
    req.headers?.authorization?.startsWith("Bearer ")
  ) {
    const idToken = req.headers.authorization.split("Bearer ")[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);

      req.current = decodedToken;
      req.admin = decodedToken.admin;
    } catch (err) {
      console.log(err);
    }
  }
  next();
};

module.exports = decodeToken;
