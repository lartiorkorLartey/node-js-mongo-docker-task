const express = require ('express');
const {connectDB} = require('./connect');
const User = require('./schema');
const Redis = require("ioredis");

const app = express();
const PORT = process.env.PORT || 4000;
// const REDIS_PORT = process.env.PORT || 6379;
// const client = redis.createClient(REDIS_PORT)

app.use(express.json());
const redis = new Redis();

connectDB();

// const setResponse = (newUser, user) => {
//   console.log(`user details: ${user}`)
// }
const key1=2
const keys= {
  "users": 232323,
  "userww": "sjhsjdjsdjd"
}
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

  app.get('/', (req, res) => {
    res.send('Home')
  })

  app.get('/static-users', (req, res) => {
    const response = {
        status: "success",
        src: "hard-coded",
        data: users
    }
    res.end(JSON.stringify(response));
  });

  app.get('/dynamic-users', async (req, res) => {
    let users
    const cachedUsers= await redis.get("Users")
   console.log("hey", cachedUsers)
    if (!cachedUsers) {
      console.log("does not find it so hit db")
      users = await User.find();
      await redis.set("Users", JSON.stringify(users))
      return res.json(users)
    }
    console.log("found cached data")
    res.json(JSON.parse(cachedUsers))
  })

    app.post('/dynamic-users', async (req, res) => {
        const {firstName, lastName, age, email} = req.body;

        console.log(req.body);
       
        
        const user = await User.create({
          age: age,
	        email: email,
          firstName: firstName,
	        lastName: lastName
        })
        redis.del("Users")
        res.json(user);

// redis
  //   client.setex(newUser, 3600, user)
  //   res.send(setResponse(newUser, user))
  });

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))