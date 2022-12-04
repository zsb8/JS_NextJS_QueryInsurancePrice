import backMain from "../../lib/backMain";

export default async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        const payload = req.body;
        let ary;
        switch (payload.type) {
          case "saveCharityCSV": {
            // const {
            //   fileName,
            //   userName,
            //   password,
            //   server,
            //   database,
            //   collection,
            // } = payload;
            const result = await backMain.saveCharityCSV(payload);
            ary = result;
            break;
          }
          default:
            break;
        }
        const results = ary;
        if (results) {
          res.statusCode = 200;
          res.json({ results });
        } else {
          res.statusCode = 404;
          res.json({ error: "APi error" });
        }
        break;
      }
      default: {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
      }
    }
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};
