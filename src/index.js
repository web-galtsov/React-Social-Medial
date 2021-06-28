import React from 'react';
import ReactDom from 'react-dom';

/*function Header(props) {
    if (true) {
        return  <h1>Hello! {props.userName}</h1>;
    } else {
        return  <h1>Hello guest</h1>;
    }
}*/
function Header(props) {
        return  <h1>Hello! {props.userName}</h1>;
}



function Layout(props) {
     return <div style={{background: 'palegoldenrod'}}>
               {props.children}
            </div>
 }

function Login() {
    return <p> Please Login !</p>
}
function Signout() {
    return <button>Signout</button>
}

const rootNode = document.getElementById('root');
const isAuthenticated = true;

  ReactDom.render(
     <Layout>
         {isAuthenticated ?  (
             <React.Fragment>
                 <Header userName = 'Jane'/>
                 <Signout/>
             </React.Fragment>
         ) : <Login /> }
         <footer>Copyright 2020</footer>
     </Layout>,
     rootNode)


/*
const year = 2020;
 const greeting = (
     <div>
             <h1>Hello!</h1>
             <p>Hello React in {year}</p>
             <button style={{background: "red"}}>Submit</button>
     </div>);*/

 /*const greeting = (
     <div>
      <h1>Hello!</h1>
         <p>Hello React in {year}</p>

     </div>);*/

// const greeting = <div>Hello React in {year}</div>;
//const greeting = <div>Hello React1</div>;

//const isReactUser = true;
//const rootNode = document.getElementById('root');

/*
function sayGreeting() {
    if (isReactUser) {
        return greeting;
    } else {
        return <div>Hello Python</div>;
    }
}
ReactDom.render(sayGreeting(), rootNode)*/
// ReactDom.render(greeting, rootNode)