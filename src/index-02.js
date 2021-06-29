import React, {useEffect, useRef, useState} from 'react';
import ReactDom from 'react-dom';


/*
function App() {
    const [inputValue, setInputValue ] = useState('');
//    let value;
    function handleInputChange(event) {
//        const  inputValue = event.target.value;
//       value = event.target.value;
        setInputValue(event.target.value);
    }
    return (
        <div id = 'app'>
            <input onChange={handleInputChange}/>
            <p>{inputValue}</p>
        </div>
    )
}*/

/*function App() {
/!*    const [inputValue, setInputValue ] = useState('');
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }*!/
    const [language,setLanguage ] = useState('python');

    return (
        <div>
            <button onClick={() => setLanguage('javascript')}>Change language</button>
            <p>I am learning {language}</p>
        </div>
    )
}*/

/*
function App() {
    const [developer, setDeveloper ] = useState({
        name: '',
        language: 'python',
        yearsExperience: 0,
        isEmployed: false
    });
// new Hook
    useEffect( () => {
        document.title = developer.name;
        console.log('runs')
    },[])
    function handleChangeName(event) {
          setDeveloper({
              ...developer,
              name: event.target.value});
    }

    function handleChangeLanguage() {
        setDeveloper({
            language: 'JavaScript',
            yearsExperience: 0,
            isEmployed: false
        })
    }
    function handleChangeYearsExperience(event) {
        setDeveloper({
            ...developer,
            yearsExperience: event.target.value
        })
    }
    function handleToggleEmployment() {
        setDeveloper(prevState => ({
            ...prevState,
            isEmployed: !prevState.isEmployed
        }));
    }
    return (
      /!*  <div>
            <button onClick={() => setLanguage('javascript')}>Change language</button>
            <div>
                <input
                    type='number'
                    onChange={event => setYearExperience(event.target.value)}
                />
            </div>
            <p>I am learning {language}</p>
            <p>I have {yearExperience} years of experience</p>
        </div>*!/
        /!* <div>
            <button onClick={() => setDeveloper({
                language: 'javascript',
                yearsExperience: 0
            })}>Change language</button>
            <div>
                <input
                    type='number'
                    onChange={event => setDeveloper({
                        ...developer,
                        yearsExperience: event.target.value
                    })}
                />
            </div>
            <p>I am learning {developer.language}</p>
            <p>I have {developer.yearsExperience} years of experience</p>
        </div>*!/
        <div>
            <button onClick={handleToggleEmployment}>Toggle Employed Status</button>
            <button onClick={handleChangeLanguage}>Change language</button>
            <div>
                <input
                    type='number'
                    onChange={handleChangeYearsExperience}
                />
            </div>
            <div>
                <input
                    type='text'
                    onChange={handleChangeName}
                    placeholder='Change Name'
                />
            </div>
            <p>I am learning {developer.language}</p>
            <p>I have {developer.yearsExperience} years of experience</p>
            <p>Employment status: {developer.isEmployed ? 'Employed' : 'UnEmployed' }</p>
        </div>
    )
}
*/

/*
function App() {
    const [ mousePosition, setMousePosition ] = useState({x : 0, y: 0})

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, []);

    function handleMouseMove(event) {
        setMousePosition({x : event.pageX, y: event.pageY})
    }

    return (
        <div>
            <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </div>

    )
}

const rootNode = document.getElementById('root');
ReactDom.render(<App/>, rootNode)

function NewPage() {
    return <div>new page</div>
}

setTimeout(() => ReactDom.render(<NewPage/>, rootNode), 2000)*/



const baseUrl = "https://api.github.com/users/";

function App() {
    const [username, setUsername] = useState("codeartistryio");
    const [user, setUser] = useState(null);
    const searchInput =  useRef();

    useEffect(() => {
        getUser();
        // fetch(endpoint)
        //   .then(response => response.json())
        //   .then(data => setUser(data));
    }, []);

    function handleClearInput() {
        searchInput.current.value = "";
        searchInput.current.focus();
    }

    async function getUser() {
        const response = await fetch(`${baseUrl}${username}`);
        const data = await response.json();
        setUser(data);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Input username"
                onChange={event => setUsername(event.target.value)}
                ref={searchInput}
            />
            <button onClick={() => getUser(username)}>Search</button>
            <button onClick={handleClearInput}>Clear</button>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <img alt="avatar" src={user.avatar_url} style={{ height: 50 }} />
                </div>
            ) : (
                <p>loading</p>
            )}
        </div>
    );
}

const rootNode = document.getElementById('root');
ReactDom.render(<App/>, rootNode)


