// import changeColor from './colorChange';
import React from 'react'
import { useEffect } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link,
  // Routes
} from "react-router-dom";
import './imgScroll';

function GettingStarted() {

  useEffect(() => {
    scrollToTop();
    // changeColor();
  }, []);

  let scrollToTop = function () {
    window.scrollTo(0, 0);
  }

  function scrollToTwo() {
    window.scrollTo(0, 2800);
  }

  return (
    <>
      <div className="gettingStarted">
        {/* 1. What is the importance of stories? <br></br>
        2. Storytelling is everywhere! <br></br>
        3. Connecting people with storytelling <br></br>
        4. Become a better storyteller <br></br> */}
        <div className="GSContent">
          <h1 className="importanceOfStories">WHAT IS THE IMPORTANCE OF STORIES?</h1>
          <div className="IOS">
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Drawing Our Attention</h3>
              </div>
              <div className="DOAText">
                We've all been there, at those boring events, conferences and presentations where we hope dearly that it gets over soon!
                <br /><br />
                All those monotonous speeches with a plethora of facts, figures and knowledge, but lacking a soul.
                <br /><br />
                Then comes a random speaker who... Just seems to connect! Each and every word that leaves his mouth feels like a breeze of fresh air waiting to purify our ears.
                <br /><br />
                <strong>But what's so different about this speaker?</strong>
                <br />
                <i>HE HAS MASTERED THE SKILL OF STORYTELLING!</i>
              </div>
              <div className="imgBut">
                <img src="https://jjlyonsmarketing-18a33.kxcdn.com/wp-content/uploads/2021/07/Storytelling-for-Marketing-Concept.jpg" alt="" width="75%" />
              </div>
            </div>
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Teaches People to be more Empathetic</h3>
              </div>
              <div className="DOAText">
                One of the most fundamental human need is <strong>to connect with other humans.</strong>
                <br /><br />
                Stories give us that avenue where we can experience empathy for all sorts of people.
              </div>
              <div className="imgBut">
                <img src="https://www.amacad.org/sites/default/files/styles/article_image_1x/public/media/images/empathy.jpg?itok=ZkpK4Slw" alt="" width="75%" />
              </div>
            </div>
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Gives us a way to live</h3>
              </div>
              <div className="DOAText">
                <strong>Ever asked yourself any of there questions?</strong><br />
                <i>What is the meaning of life?</i><br />
                <i>What is my purpose in this world?</i><br />
                <i>Who am I?</i>
                <br /><br />
                Don't Worry! You're not the only one.
                <br /><br />
                In fact, at some point of our lives, <strong>we all have pondered on such thoughts.</strong>
                <br /><br />
                All of us inherently want to know the best way to live in this world. Stories offer us a way to understand different perspectives to this question.
              </div>
              <div className="imgBut">
                <img src="https://qph.cf2.quoracdn.net/main-qimg-0477f22968e8f7a57d78e091a979f0e0-lq" alt="" width="75%" />
              </div>
            </div>
          </div>
          <h1 className="betterStoryTeller">Become a better Storyteller</h1>
          <div className="BST">
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Art and Technicalities</h3>
              </div>
              <div className="DOAText">
                Storytelling is most widely regarded as a form of art. However, <strong>it is much more than that!</strong>
                <br /><br />
                It is true that stories contain the artistic expression of the writer. Like any other art form, it relies heavily on creativity and novelty. A great story contains your ideas, which surprise you as well!
                <br /><br />
                The other aspect which most writers ignore about storytelling, is <strong>the technical aspect of writing.</strong> It includes various theoretical concepts, tools, tips and tricks which are useful in crafting a narrative story.
                <br /><br />
                <strong>To become a great writer, you have to nail both the aspects of storytelling.</strong>
              </div>
              <div className="imgBut">
                <img src="https://www.weareteachers.com/wp-content/uploads/Story-Elements-Anchor-Charts.jpg" alt="" width="75%" />
              </div>
            </div><div className="drawingAttention">
              <div className="DA_Head">
                <h3>Practice, Practice... And Practice</h3>
              </div>
              <div className="DOAText">
                Simply knowing the technicalities and artistic qualities is not enough to make you an amazing storyteller. A lot of beginner writers complain that their stories are not being up to the mark.
                <br /><br />
                Imagine yourself as a sculptor. <i>Do you really think that your first statue will be your masterpiece?</i>
                <br />
                <strong>Of Course Not!</strong>
                <br />
                You would have to learn all the nitty-gritties, go through various failures, and only then can you expect a decent piece of creation.
                <br /><br />
                <strong>THEN WHY NOT HAVE THE SAME EXPECTATIONS WITH STORYTELLING?</strong>
              </div>
              <div className="imgBut">
                <img src="https://media.istockphoto.com/id/680735792/photo/learn-practice-improve-drawn-on-white-wall.jpg?s=612x612&w=0&k=20&c=Xp6tEUIXtEXaM17fz91Vq1zsepaRtZG6s2H3zZ80Yno=" alt="" width="75%" />
              </div>
              <div className="DOAText">
                In the upcoming modules, we will look at the various aspects which define a great story which everyone would love to hear!
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="previous">
              <Link to="/learn">
                <button>Prev</button>
              </Link>
            </div>
            <div className="next">
              <Link to="/learn/theme">
                <button>Next</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="GSNav">
          <div className="pageNav">
            <a onClick={() => { scrollToTop() }}>What is the importance of stories?</a>
            {/* <div className="horBlueLine"></div> */}
            <a onClick={() => { scrollToTwo() }}>Become a better storyteller</a>
          </div>
          <div className="learnNav">
            <div className='learn-nav-active'>Getting Started</div>
            {/* <div className="horBlueLine"></div> */}
            <Link to='/learn/theme'>
              <a href="">Theme</a>
            </Link>
            {/* <div className="horBlueLine"></div> */}
            <Link to="/learn/Characters">
              <a href="">Characters</a>
            </Link>
            <Link to="/learn/conflict">
              <a href="">Conflict</a>
            </Link>
            {/* <div className="horBlueLine"></div> */}
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

export default GettingStarted
