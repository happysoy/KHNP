const db = require("src/common/config/db/db");

export default function test(req, res) {
  db.query("SELECT * FROM DATA", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
}
