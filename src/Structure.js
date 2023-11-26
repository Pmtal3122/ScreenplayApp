import React from 'react'
import {
    // BrowserRouter as Router,
    // Route,
    Link,
    // Routes
} from "react-router-dom";
import { useEffect } from 'react'

function Structure() {

    useEffect(() => {
        scrollToTop();
    }, []);

    let scrollToTop = function () {
        window.scrollTo(0, 0);
    }

    function scrollToTwo() {
        window.scrollTo(0, 1350);
    }

    return (
        <>
            <div className="gettingStarted">
                {/* 1. What is the importance of stories? <br></br>
        2. Storytelling is everywhere! <br></br>
        3. Connecting people with storytelling <br></br>
        4. Become a better storyteller <br></br> */}
                <div className="GSContent">
                    <h1 className="importanceOfStories">3-ACT STRUCTURE</h1>
                    <div className="imgBut">
                        <img src="https://s.studiobinder.com/wp-content/uploads/2019/08/What-is-The-Three-Act-Structure-Plot-Diagram.jpg?resolution=1680,1.600000023841858" alt="" width="75%" />
                    </div>
                    <h1 className="betterStoryTeller">DAN HARMON STORY CIRCLE</h1>
                        <div className="imgBut">
                            <img src="https://images.ctfassets.net/ccli4xdzdc9p/koxl6UnXFWkLIHPKZOjZC/198238d35a4a6c46fa2c4fc7f04a3ddb/dan-harmon-story-circle.jpg?w=768&fm=webp" alt="" width="75%" />
                        </div>
                    <div className="buttons">
                        <div className="previous">
                            <Link to="/learn/conflict">
                                <button>Prev</button>
                            </Link>
                        </div>
                        <div className="next">
                            <Link to="/learn">
                                <button>Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="GSNav">
                    <div className="pageNav">
                        <a onClick={() => { scrollToTop() }}>3-Act Structure</a>
                        {/* <div className="horBlueLine"></div> */}
                        <a onClick={() => { scrollToTwo() }}>Dan Harmon Story Circle</a>
                    </div>
                    <div className="learnNav">
                        <Link to='/learn/gettingStarted'>
                            <a href="">Getting Started</a>
                        </Link>
                        <Link to='/learn/theme'>
                            <a href="">Theme</a>
                        </Link>
                        {/* <div className="horBlueLine"></div> */}
                        {/* <div className="horBlueLine"></div> */}
                        <Link to="/learn/Characters">
                            <a href="">Characters</a>
                        </Link>
                        {/* <div className="horBlueLine"></div> */}
                        <Link to="/learn/conflict">
                            <a href="">Conflict</a>
                        </Link>
                        {/* <div className="horBlueLine"></div> */}
                        <div className='learn-nav-active'>Structure</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Structure
