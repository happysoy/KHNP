export default async (req, res) => {
  try {
    const axisData = await fetch('http://localhost:8000/getdata', {
      method: 'GET',
      headers: {
        'User-Agent': '*',
        Accept: 'application/json; charset=UTF-8',
      },
    });

    let data = await axisData.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
