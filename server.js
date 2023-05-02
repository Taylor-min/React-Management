const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) =>{
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': 'min',
            'birth': '950930',
            'gender': '남',
            'job': '개발자'
        
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/any',
            'name': 'yomi',
            'birth': '930208',
            'gender': '여',
            'job': '스타강사'
        
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '모름',
            'birth': '모름',
            'gender': '모름',
            'job': '모름'
        
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
