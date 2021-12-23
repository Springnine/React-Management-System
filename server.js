const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req,res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/1',
          'name': '강춘구',
          'birthday': '980428',
          'gender': '남자',
          'job': '대학생'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/2',
          'name': '놀부',
          'birthday': '910411',
          'gender': '남자',
          'job': '선비'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/3',
          'name': '흥부',
          'birthday': '941128',
          'gender': '남자',
          'job': '노비'
        }
        ]);

});

app.listen(port, () => console.log(`listening on port ${port}`));