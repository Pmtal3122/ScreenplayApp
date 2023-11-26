// import './colorChange';
import React from 'react'
import { useEffect } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link,
  // Routes
} from "react-router-dom";

function Characters() {

  useEffect(() => {
    scrollToTop();
  }, []);

  let scrollToTop = function () {
    window.scrollTo(0, 0);
  }

  function scrollToTwo() {
    window.scrollTo(0, 500);
  }

  function scrollToThree() {
    window.scrollTo(0, 2100);
  }

  function scrollToFour() {
    window.scrollTo(0, 6000);
  }

  return (
    <>
      <div className="gettingStarted">
        {/* 1. What is the importance of stories? <br></br>
        2. Storytelling is everywhere! <br></br>
        3. Connecting people with storytelling <br></br>
        4. Become a better storyteller <br></br> */}
        <div className="GSContent">
          <h1 className="importanceOfStories">HOW DOES THEME RELATE TO CHARACTER?</h1>
          <div className="DOAText">
            We concluded the previous module by stating that theme was just the fundamental building block, and now we would start crafting an engaging story.
            <br /><br />
            Well, to put simply, interesting things happening to interesting people makes an engaging story.
            <br /><br />
            Hence, we get to the "interesting people" part, i.e. the Characters.
            <br /><br />
            The theme that you have picked can have various interpretations and opinions. So, instead of bluntly explaining each opinion, we can assign them to different people.
            <br /><br />
            <strong>Hence, a character is a tool for a writer to explore the various beliefs/ideologies regarding a particular topic.</strong>
          </div>
          <h1 className="importanceOfStories">THE FUNDAMENTAL COMPONENTS OF A CHARACTER</h1>
          <div className="IOS">
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Internal Components</h3>
              </div>
              <div className="DOAText">
                <strong>1. Belief: </strong>It essentially means what the character thinks about the given theme. A character's belief is the most important part of internal characterization, because <i>this will be the basis for all further character traits.</i> An example of a character with strong beliefs is Tyler Durden from the movie Fight Club. He has strong opposition to the consumerist society and believes that men should regain their masculinity through the medium of violence.
                <br /><br />
                <strong>2. Want: </strong>Want is a clear, achievable external goal that the character aims to achieve throughout the story. A clear goal helps move the story forward and is the primary element in keeping the audience engaged. An example of a clear want is present in the movie "The Terminator", where The Terminator wants to kill Sarah Connor, by any means necessary. Simple, clear and achievable; which the audience can easily follow.
                <br /><br />
                <strong>3. Need: </strong>A character tries to pursue an external goal, with the ultimate aim of internal satisfaction. However, most of the times, the methods or goals the character has chosen does not lead to his desired conclusion. Hence, finding the truth to that question, is the need of a character. Returning to Fight Club, the need of the narrator is to realize that he need not conform to the methods of Tyler Durden, and can make his own choices.
                <br /><br />
                <strong>4. Arc: </strong>Every character, through the journey of the story, changes in some or the other way. This change in the beliefs of the character is termed as Character Arc. The three main types of Character Arcs are Change Arc (Positive), Flat Arc (Neutral) and Fall Arc (Negative). Each character can have different elements to his arc, but the basic structure (will be discussed ahead) remains fairly similar.
              </div>
              <div className="imgBut">
                <img src="https://images.squarespace-cdn.com/content/5c55d8823560c36f7d9167ac/1553010628164-B4UNVZCX0T10P5BX5M18/Rules+of+Storytelling.jpg?format=1500w&content-type=image%2Fjpeg" alt="" width="75%" />
              </div>
            </div>
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>External Components</h3>
              </div>
              <div className="DOAText">
                External components include everything that the audience perceives physically about the character. This includes physical description, clothing, voice type, etc.
                <br /><br />
                Most beginning writers assume that the external characterization should ALWAYS align with the internal beliefs and the world view of the character. However, this can limit your creativity and squander your chances of creating truly interesting characters.
                <br /><br />
                One of the most interesting characters in modern cinema is Munna Bhai from MBBS. He is your typical goon, right from fashion sense, setting to language. However, despite his "profession", he is shown to be the most sympathetic and caring among all the civilized and trained doctors. This contrast has a big effect on the audience's mind, which makes him a memorable character.
                <br /><br />
                What are your favourite characters in modern cinema? How are they portrayed through their internal and external characterization?
              </div>
              {/* <div className="imgBut">
                <img src="https://www.securitymagazine.com/ext/resources/Issues/2022/july/SEC-0722-Leadership-Feat-Slide1-1170x658.jpg" alt="" width="75%" />
              </div> */}
            </div>
          </div>
          <h1 className="betterStoryTeller">DIFFERENT TYPES OF CHARACTERS</h1>
          <div className="imgBut">
            <img src="https://images.firstpost.com/wp-content/uploads/2018/07/Dark-Knight-opener-1200.jpg" alt="" width="75%" />
          </div>
          <div className="BST">
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Protagonist</h3>
              </div>
              <div className="DOAText">
                The Protagonist is the lead character of a story. It is this character who drives the plot, and the one though which the audience experiences the story.
                <br /><br />
                Protagonist is generally the most developed and complex character of the story. He is the one who goes through a proper character arc.
                <br /><br />
                Having a strong belief, want and need is extremely crucial for the protagonist. If any one of these is absent, it will be very difficult for you to create an engaging narrative.
              </div>
              <div className="imgBut">
                <img src="https://blog-cdn.reedsy.com/uploads/2018/08/hp-wand.jpg" alt="" width="75%" />
              </div>
            </div>
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Antagonist</h3>
              </div>
              <div className="DOAText">
                The villain, the monster, the antithesis to the Protagonist - The Antagonist.
                <br /><br />
                He is the main source of opposition to our Protagonist. This character is equally as important to develop because the tension and conflict caused by the Protagonist and antagonist will form the most exciting moments of the story.
                <br /><br />
                There are a few misconceptions regarding Antagonists. The first of them being Antagonism translates directly to evil; which is not true. Antagonist is just another character who has contrasting beliefs and wants to the Protagonist. It is benefitial for a writer if the audience understands clearly where the Antagonists' motivation comes from.
                <br /><br />
                Another one of the misconceptions is that Antagonist can only be a person. Antagonist can also be defined as the primary source of opposition, which can be anything; from society, harsh weather conditions, or even the thoughts of the Protagonist himself.
              </div>
              <div className="imgBut">
                <img src="https://startefacts.com/upload//upload/news/518197714096.jpg" alt="" width="75%" />
              </div>
            </div>
            <div className="drawingAttention">
              <div className="DA_Head">
                <h3>Supporting Characters</h3>
              </div>
              <div className="DOAText">
                The supporting characters make up for the nuances and intricacies in the perspectives of the theme. While the Protagonist is pure white and Antagonist is pure black, the supporting characters lie in the shades of grey.
                <br /><br />
                The main purpose of these characters is to show the Protagonist with various perspectives and push him to one side or the other.
              </div>
              <div className="imgBut">
                <img src="https://images.ctfassets.net/usf1vwtuqyxm/hbslDp18OW2Is8a8SGkca/56ca39ca3136c5676bfbf221bd2e2e35/RonWeasley_WB_F5_RonFredGeorgeGinnyGroupShot_Promo_080615_Land.jpg" alt="" width="75%" />
              </div>
            </div>
          </div>
          <h1 className="importanceOfStories">THE SACRED TRIAD</h1>
          <div className="DOAText">
            There are three components that we have to consider for (especially) the main character. They are the following:
            <br /><br />
            <strong>1. Skill: </strong>How good is the character at what they do?
            <br /><br />
            <strong>2. Likability: </strong>Social presence, personality and general Likability.
            <br /><br />
            <strong>3. Power: </strong>How much authority does the character have to make changes to the world around him?
            <br /><br />
            What's crucial to consider is that our characters should feel natural and human; and not all-knowing all-powerful gods. This is where the triad comes in.
            <br /><br />
            <i>A golden rule for constructing any character is that he should have TWO OF THREE elements in his arsenal, and should be weak in the third element.</i>
          </div>

          <div className="buttons">
            <div className="previous">
              <Link to="/learn/theme">
                <button>Prev</button>
              </Link>
            </div>
            <div className="next">
              <Link to="/learn/conflict">
                <button>Next</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="GSNav">
          <div className="pageNav">
            <a onClick={() => { scrollToTop() }}>How does theme relate to character?</a>
            {/* <div className="horBlueLine"></div> */}
            <a onClick={() => { scrollToTwo() }}>The fundamental Components of a character</a>
            <a onClick={() => { scrollToThree() }}>Different types of characters</a>
            <a onClick={() => { scrollToFour() }}>The Sacred Triad</a>
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
            <div className='learn-nav-active'>Characters</div>
            {/* <div className="horBlueLine"></div> */}
            <Link to='/learn/conflict'>
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

export default Characters
