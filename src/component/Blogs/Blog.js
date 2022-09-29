import React from 'react';
import './Blogs.css'

const Blog = () => {
    return (
        <div className='main-blog'>
            <div className='blog-container'>
            <h2 className='blog-heading'>My Blogs</h2>
            <div className="blog">
               <h4 className='blog-qsn'>how does react work?</h4>
               <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className="blog">
            <h4 className='blog-qsn'>difference between props and state.</h4>
               <p><span>Props</span>: The Data is passed from one component to another.
                  It is Immutable (cannot be modified).
                  Props can be used with state and functional components.
                  Props are read-only.
                  <br />
                  <br />
                  <span>State</span>: The Data is passed within the component only.
                  It is Mutable ( can be modified).
                  State can be used only with the state components/class component (Before 16.0).
                  State is both read and write.
               </p>
            </div>
            <div className="blog">
            <h4 className='blog-qsn'>what do useEffect used for other than api load?</h4>
               <p>
                <span>useEffect use cases: </span>
                Running on state change: validating input field
                Running on state change: live filtering
                Running on state change: trigger animation on new array value
                Running on props change: update paragraph list on fetched API data update
                Running on props change: updating fetched API data to get BTC updated price
               </p>
            </div>
        </div>
        </div>
    );
};

export default Blog;