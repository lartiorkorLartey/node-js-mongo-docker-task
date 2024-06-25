const express = require ('express');
const app = express();
const PORT = process.env.PORT || 4000;
const users = [
    {
      firstName: "User1",
      lastName: "Name1",
      age: "1",
      email: "abc1@gmail.com"
    },
    {
      firstName: "User2",
      lastName: "Name2",
      age: "2",
      email: "abc2@gmail.com"
    },
    {
      firstName: "User3",
      lastName: "Name3",
      age: "3",
      email: "abc3@gmail.com"
    },
    {
        firstName: "User4",
        lastName: "Name4",
        age: "4",
        email: "abc4@gmail.com"
      },
      {
        firstName: "User5",
        lastName: "Name5",
        age: "5",
        email: "abc5@gmail.com"
      }
  ];
  app.get('/static-users', (req, res) => {
    const response = {
        status: "success",
        src: "hard-coded",
        data: users
    }
    res.end(JSON.stringify(response));
  });
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))