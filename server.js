const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id' : 1,
            'image':'https://placeimg.com/64/64/1', //placeimg 는 랜덤으로 이미지를 보여주는 사이트이고 64/64 는 사이즈 이다.
            'name' : '최한솔',
            'birthday' : '970531',
            'gender' : '남자',
            'job' : '대학생'
          },{
            'id' : 2,
            'image':'https://placeimg.com/64/64/2', //placeimg 는 랜덤으로 이미지를 보여주는 사이트이고 64/64 는 사이즈 이다.
            'name' : '김고은',
            'birthday' : '960317',
            'gender' : '여자',
            'job' : '뉴스기자'
          },{
            'id' : 3,
            'image':'https://placeimg.com/64/64/3', //placeimg 는 랜덤으로 이미지를 보여주는 사이트이고 64/64 는 사이즈 이다.
            'name' : '김사또',
            'birthday' : '910914',
            'gender' : '남자',
            'job' : '공무원'
          },{
            'id' : 4,
            'image':'https://placeimg.com/64/64/4', //placeimg 는 랜덤으로 이미지를 보여주는 사이트이고 64/64 는 사이즈 이다.
            'name' : '김혜미',
            'birthday' : '190830',
            'gender' : '여자',
            'job' : '백수'
          }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));