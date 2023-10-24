import jwt from "jsonwebtoken";

const secretKey = "lafkjl342jklfsdoikljlker3454";

function createToken(data: Record<string, unknown>) {
  return jwt.sign(data, secretKey, { expiresIn: "1h" }); // '1h' for 1 hour
}

function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
}

module.exports = { createToken, verifyToken };
