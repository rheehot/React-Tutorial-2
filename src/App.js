import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
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
}
]

class App extends Component {
  render() {
    return (
      <div>{customers.map(c=>{return (<Customer key={c.id} id = {c.id} image ={c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>)})}</div>
    );
  }
}

export default App;
