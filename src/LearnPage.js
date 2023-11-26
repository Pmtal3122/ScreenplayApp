import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

function LearnPage() {
    return (
        <>
            <div className="learnPage">
                {/* 1. Getting Started
      2. Theme
      3. Conflict 
      4. Characters 
      5. Structure  */}
                <div className="modules">
                    <div className="moduleHead">Getting Started</div>
                    <div className="moduleImage">
                        <img width="100%" src="https://previews.123rf.com/images/rashadashurov/rashadashurov1911/rashadashurov191100759/133748615-storytelling-base-icon-simple-sign-illustration-storytelling-symbol-design-can-be-used-for-web-and-m.jpg" alt="" />
                    </div>
                    <div className="goToModule">
                        <Link to="/learn/gettingStarted" className='links'>
                            <button>
                                <span>Learn More</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="modules">
                    <div className="moduleHead">Theme</div>
                    <div className="moduleImage">
                        <img width="100%" src="https://m.media-amazon.com/images/I/41gJWaEBHML.jpg" alt="" />
                    </div>
                    <div className="goToModule">
                        <Link to="/learn/theme" className='links'>
                            <button>
                                <span>Learn More</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="modules">
                    <div className="moduleHead">Characters</div>
                    <div className="moduleImage">
                        <img width="100%" src="https://icon-library.com/images/2018/1262130_toy-story-characters-toy-story-woody-icon-hd.png" alt="" />
                    </div>
                    <div className="goToModule">
                        <Link to="/learn/Characters" className='links'>
                            <button>
                                <span>Learn More</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="learnPage">
                <div className="modules">
                    <div className="moduleHead">Conflict</div>
                    <div className="moduleImage">
                        <img width="100%" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594864826i/54547798.jpg" alt="" />
                    </div>
                    <div className="goToModule">
                    <Link to="/learn/conflict" className='links'>
                            <button>
                                <span>Learn More</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="modules">
                    <div className="moduleHead">Structure</div>
                    <div className="moduleImage">
                        <img width="100%" src="https://logopond.com/logos/70ab1caa769ddbc130674c9ad4a29f9e.png" alt="" />
                    </div>
                    <div className="goToModule">
                    <Link to="/learn/structure" className='links'>
                            <button>
                                <span>Learn More</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LearnPage
