import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
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

  },
]
class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c=> { return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birth={c.birth} gender={c.gender} job={c.job}/> ); })
        }
      </div>
    );
  }
}

// class 
export default App;
