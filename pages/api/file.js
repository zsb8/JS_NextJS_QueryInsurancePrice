import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    // console.log("这里files==：", files);
    await saveFile(files.file);
    res.statusCode = 201;
    res.json({
      fileName: files.file.originalFilename,
    });
    return res;
  });
};

const saveFile = async (file) => {
  // console.log("这里file.path===:", file.filepath);
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public_data/${file.originalFilename}`, data);
  // console.log("这里file.originalFilename===:", file.originalFilename);
  await fs.unlinkSync(file.filepath);
  return file.originalFilename;
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
