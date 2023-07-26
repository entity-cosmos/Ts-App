import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list';
import AddToList from './components/addToList';

interface StateDef {
  people: {
    name: string,
    url: string,
    age: number,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<StateDef["people"]>([{
    name: 'Preethesh KS',
    url: "https://avatars.githubusercontent.com/u/59792388?v=4",
    age: 22,
    note: 'Team Lead'

  },
  {
    name: 'Srajan B Shetty',
    url: "https://media.licdn.com/dms/image/D5603AQFZaBuB4euwAA/profile-displayphoto-shrink_800_800/0/1675437623484?e=2147483647&v=beta&t=Ct3mXtEz5YLWooz31PsZqoXx49KXyCETDbMagDf0k1E",
    age: 21,
    note: 'Manager'
  }
  ])

  return (
    <div className="App">
      <h1>People Invited to my party.</h1>
      <List people={people} />
      <AddToList onSubmit={(input) => {
        if (input.name && input.age && input.img) {
          setPeople([
            ...people,
            {
              name: input.name,
              age: input.age,
              url: input.img,
              note: input.note
            }
          ])
        }
        else {
          alert("Please fill all the fields")
        }
      }} />
    </div>
  );
}

export default App;
