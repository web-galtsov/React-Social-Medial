import React from 'react';
import ReactDom from 'react-dom';

function App() {
    // const person = 'Jane';
    const people = ['Jane','Oxana', 'Peter'];

    function handleInputChange(event) {
        const  inputValue = event.target.value;
        console.log(inputValue);
    }

    return (
        /*<p>{people}</p>*/
        <ul>
            {
                people.map((person, index) => (
                    <Person key ={index} person = {person}/>
                    ))
            }
            <input onChange={handleInputChange}/>
        </ul>
  /*      people.map(person => <p>{person}</p> )  // list*/
    )
}
 function Person(props) {
    function handlePersonClick() {
        alert(props.person)
    }
    return (
        <li onClick={handlePersonClick}>{props.person}</li>
    )
 }
 const rootNode = document.getElementById('root');
 ReactDom.render(<App/>, rootNode)

