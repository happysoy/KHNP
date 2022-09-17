export default async (req, res) => {
  try {
    res.send([
      { ID: 1, age: 2, firstName: 'Oh', lastName: 'sehun', music: 'Metal ' },
      { ID: 2, age: 2, firstName: 'Oh', lastName: 'sehun', music: 'Metal' },
      { ID: 3, age: 2, firstName: 'Oh', lastName: 'sehun', music: 'Metal' },
      { ID: 4, age: 2, firstName: 'Oh', lastName: 'sehun', music: 'Metal' },
    ]);
  } catch (error) {
    console.log(error);
  }
};
