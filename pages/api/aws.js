/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  try {
    const { method, body } = req;
    switch (method) {
      case "POST": {
        let results;
        const symbol = [1];
        await Promise.all(
          symbol.map(async (value, i) => {
            const url = new URL(
              `http://ItIsPrivacy.amazonaws.com:ItIsPrivacy/v1/jf/canadian_abroad/`
            );
            const response = await fetch(url, {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              },
            });
            results = await response.json();
          })
        );
        if (results) {
          res.statusCode = 200;
          res.json(results);
        } else {
          res.statusCode = 404;
          res.json({ error: "availableTime not found" });
        }
        break;
      }
      default: {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
};
