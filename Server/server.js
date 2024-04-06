const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  const randomName = faker.person.firstName() + ' ' + faker.person.lastName();
  const name = faker.person.firstName();
  const surname = faker.person.lastName();
  const sex = faker.person.gender();
  const favoriteMusic = faker.music.songName();
  const dislikeMusic = faker.music.genre();
  const indirizzoIp4 = faker.internet.ipv4();
  const indirizzoIp6 = faker.internet.ipv6();
  const birthdate = faker.date.birthdate()

  const data = {
    birthdate,
    randomName,
    name,
    surname,
    sex,
    favoriteMusic,
    dislikeMusic,
    indirizzoIp4,
    indirizzoIp6
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
