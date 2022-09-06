export default async (req, res) => {
  try {
    const fileURL = req.body.fileURL;
    const fileName = fileURL.split('/')[3].split('.')[0];
    console.log(fileName);
  } catch (error) {
    console.log(error);
  }
};
