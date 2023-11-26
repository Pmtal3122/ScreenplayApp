// import './colorChange';s
import React from 'react'
import {
  // BrowserRouter as Router,
  // Route,
  Link,
  // Routes
} from "react-router-dom";
import { useEffect } from 'react'

function Conflict() {

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
          <h1 className="importanceOfStories">TYING IT ALL TOGETHER</h1>
          <div className="IOS">
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>The Basic Template of Any Story</h3>
              </div>
              <div className="DOAText">
                Stories largely follow a similar template. A character wants something, a force of opposition tries to stop him from getting it, the main character defeats the opposition; while learning something new about himself or the world in the process.
                <br /><br />
                Let's see a basic story which follows this template.
              </div>
            </div>
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>The Purpose of Conflict</h3>
              </div>
              <div className="DOAText">
                A detective has been on the trail of a dreaded criminal for a long time.
                <br />
                One day, he sees the criminal in a restaurant, just in front of him. Here's his chance to arrest the criminal.
                <br />
                One hand reaching for his gun, he walks towards the criminal; who does not seem to notice him.
                <br />
                On reaching, the detective says, <i>"Come with me quietly"</i>
                <br />
                The criminal turns his head, and with a stoic face, he says, <i>"Ok."</i>
                <br />
                The detective handcuffs him and takes him out.
                <br /><br />
                Boring right! But it sufficiently follows the template... Then what is missing?
                <br /><br />
                <i><strong>CONFLICT</strong></i>
              </div>
              <div className="imgBut">
                <img src="https://www.thoughtco.com/thmb/WbTDIIjUwkuN92ogiShsdXOKPoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-158675348-56a4b9c13df78cf77283f4a1.jpg" alt="" width="75%" />
              </div>
            </div>
          </div>
          <h1 className="betterStoryTeller">WHAT IS CONFLICT?</h1>
          <div className="DOAText">
            <i><strong>Conflict can be defined as the struggle between two opposing forces that prevent them from reaching an endpoint.</strong></i>
          </div>
          <div className="BST">
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Types of Conflict</h3>
              </div>
              <div className="DOAText">
                <strong>1. Philosophical Conflict: </strong> An ideological contrast to the existing belief system of the Protagonist.
                <br /><br />
                <strong>2. External Conflict: </strong> Opposition provided against the external want of the Protagonist.
                <br /><br />
                <strong>3. Internal Conflict: </strong> Protagonist's desire conflicting with his own innate fears.
              </div>
              {/* <div className="imgBut">
                <img src="https://images.alphacoders.com/144/144563.jpg" alt="" width="75%" />
              </div> */}
            </div><div className="drawingAttention">
              <div className="DA_Head">
                <h3>Stakes</h3>
              </div>
              <div className="DOAText">
                Just having opposition to the Protagonist solves half the problem. What if the actual action which the Protagonist performs has no meaning or consequences? Then the opposition makes no sense.
                <br /><br />
                To solve this problem, we introduce the concept of stakes.
                <br /><br />
                <strong><i>Stakes are basically the consequences that can probably occur in case the Protagonist is unable to achieve his goal.</i></strong>
                <br /><br />
                Creatively fusing conflict and stakes will spike the engagement of a scene.
              </div>
            </div>
            
          </div>
          <div className="buttons">
            <div className="previous">
              <Link to="/learn/Characters">
                <button>Prev</button>
              </Link>
            </div>
            <div className="next">
              <Link to="/learn/structure">
                <button>Next</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="GSNav">
          <div className="pageNav">
            <a onClick={() => { scrollToTop() }}>Tying it all together</a>
            {/* <div className="horBlueLine"></div> */}
            <a onClick={() => { scrollToTwo() }}>What is conflict?</a>
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
            <div className='learn-nav-active'>Conflict</div>
            {/* <div className="horBlueLine"></div> */}
            <Link to="/learn/structure">
              <a href="">Structure</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Conflict
