
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <article className='blogs-container'>
            <h1>simple question on react</h1>
            <div className='question-section'>
                <h3>1. how does react work ?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>

            <div className='question-section'>
                <h3>difference between probs and useState</h3>
                <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
            </div>

            <div className='question-section'>
                <h3>3. What else can be done other than loading data with useEffect</h3>
                <p>Running once on mount: fetch API data.
                    Running on state change: validating input field.
                    Running on state change: live filtering.
                    Running on state change: trigger animation on new array value.
                    Running on props change: update paragraph list on fetched API data update</p>
            </div>

        </article>
    );
};

export default Blogs;