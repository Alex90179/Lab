import 'regenerator-runtime/runtime';
import React from 'react'; // https://ru.reactjs.org
import ReactDOM from 'react-dom'; // https://ru.reactjs.org/docs/react-dom.html

import App from './app';

// TODO, YELLOW TEAM 
async function getData () {
    try {
        // https://learn.javascript.ru/fetch
        // https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
        const response  = await fetch('http://localhost:3000/courses');
        const courses = await response.json();
        console.log(courses);
        return { 
            something: "Строчка из пропсов",
            courses   
        }
    } catch(error) { 
        return { 
            something: "Строчка из пропсов",
            courses: { error, entries: [] }   
        }
    }
};

const data = getData();



// React-Router, may be

data.then((value) => {
    const el = document.getElementById('app');
    const reactApp = React.createElement(App, value);
    ReactDOM.render(
        reactApp,
        el
    );
})