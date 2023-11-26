import React from 'react'
import {
  // BrowserRouter as Router,
  // Route,
  Link,
  // Routes
} from "react-router-dom";
import { useEffect } from 'react'

function Theme() {

  useEffect(() => {
    scrollToTop();
  }, []);

  let scrollToTop = function () {
    window.scrollTo(0, 0);
  }

  function scrollToTwo() {
    window.scrollTo(0, 1600);
  }

  return (
    <>
      <div className="gettingStarted">
        {/* 1. What is the importance of stories? <br></br>
        2. Storytelling is everywhere! <br></br>
        3. Connecting people with storytelling <br></br>
        4. Become a better storyteller <br></br> */}
        <div className="GSContent">
          <h1 className="importanceOfStories">MEANING IN STORY</h1>
          <div className="IOS">
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>The First Question asked about any story</h3>
              </div>
              <div className="DOAText">
                We watch movies, read novels or engage in various forms of storytelling for different reasons. These include entertainment, relaxation, escapism and even inspiration.
                <br /><br />
                But there are only few timeless classics which we remember long after the experience.
                <br /><br />
                This is related to the value which a story provides - <strong>What is it about?</strong>
              </div>
              <div className="imgBut">
                <img src="https://pbblogassets.s3.amazonaws.com/uploads/2014/11/interstellar-33.jpg" alt="" width="75%" />
              </div>
            </div>
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Mirror to the society</h3>
              </div>
              <div className="DOAText">
                You must have often heard the phrase - <i>"Stories should show a mirror to the society."</i> But what does it mean exactly?
                <br /><br />
                Stories allow us to examine the world from the perspective of the storyteller.
              </div>
              <div className="imgBut">
                <img src="https://www.securitymagazine.com/ext/resources/Issues/2022/july/SEC-0722-Leadership-Feat-Slide1-1170x658.jpg" alt="" width="75%" />
              </div>
            </div>
          </div>
          <h1 className="betterStoryTeller">WHAT IS THEME?</h1>
          <div className="DOAText">
            <i><strong>Theme is the central idea of a story. It can also be understood as an interpretation of the storyteller on a topic. For example, Justice can be a topic, but "Is justice achieved through violence?" can be a theme.</strong></i>
          </div>
          <div className="imgBut">
            <img src="https://www.securitymagazine.com/ext/resources/Issues/2022/july/SEC-0722-Leadership-Feat-Slide1-1170x658.jpg" alt="" width="75%" />
          </div>
          <div className="BST">
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Some examples of Themes in popular movies/stories.</h3>
              </div>
              <div className="DOAText">
                Ramayan - <i>"Good Vs. Evil</i>
                <br /><br />
                There will be blood - <i>Greed</i>
                <br /><br />
                The Dark Knight - <i>Chaos</i>
              </div>
              <div className="imgBut">
                <img src="https://images.alphacoders.com/144/144563.jpg" alt="" width="75%" />
              </div>
            </div><div className="drawingAttention">
              <div className="DA_Head">
                <h3>Criterias of a powerful theme</h3>
              </div>
              <div className="DOAText">
                <strong>Novelty: </strong> Although we know that for every topic, there have been multiple stories which are popular. Moreover, if you are an amateur writer, it is unlikely that the quality of your storytelling will be close to the ones that are popular. However, having a new idea for a theme will automatically put you ahead of majority of the writers. This is because a new idea has a great chance of engaging the audience irrespective of the technicalities (not to say that it isn't important)
                <br /><br />
                <strong>Universally Appealing: </strong>Although, there is nothing wrong with picking a theme relatable to a specific section of people, you are putting yourself at risk by limiting your target audience. Even if the characters and setting are localized, the theme and the message to be conveyed should be universally appealing.
                <br /><br />
                <strong>Depth: </strong>A topic which has various perspectives and interpretations to ponder upon, will result in an overall interesting theme. Ideally, any topic should be explored psychologically, morally, legally and practically; to form a concrete interpretation through your story.
              </div>
            </div>
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Theme, not Thesis!</h3>
              </div>
              <div className="DOAText">
                We have discussed a lot about the philosophical and thematic aspects of a story. If a writer would follow just the above parts, he would end up with a thesis report of a topic rather than an engaging narrative.
                <br /><br />
                This would be similar to the boring speech which we talked about earlier. <i>So what's the catch?</i>
                <br /><br />
                Explaining a theme out loud is a bad method for engagement, but <strong>a fundamental step of building the foundation for your story!</strong>
                <br /><br />
                Now that we have the foundation covered, it is now time to begin with the fun part - Crafting the story!
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="previous">
              <Link to="/learn/gettingStarted">
                <button>Prev</button>
              </Link>
            </div>
            <div className="next">
              <Link to="/learn/Characters">
                <button>Next</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="GSNav">
          <div className="pageNav">
            <a onClick={() => { scrollToTop() }}>Meaning in story</a>
            {/* <div className="horBlueLine"></div> */}
            <a onClick={() => { scrollToTwo() }}>What is theme?</a>
          </div>
          <div className="learnNav">
            <Link to='/learn/gettingStarted'>
              <a href="">Getting Started</a>
            </Link>
            <div className='learn-nav-active'>Theme</div>
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
            <Link to="/learn/structure">
              <a href="">Structure</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Theme
