const admin = require("../../config/firebase-config");

class Middleware {
  async decodeToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = await admin.auth().verifyIdToken(token);
      if (decoded) {
        req.user = decoded;
        
        return next();
      }

      return res.json({ message: "Unauthorized" });
    } catch (err) {
      return res.json({ message: "Internal Error"});
    }
  }
}

module.exports = new Middleware();
