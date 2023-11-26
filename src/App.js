import './App.css';
import './colorChange';
import NoteState from './context/notes/NoteState';
import GettingStarted from './GettingStarted';
import Homepage from './Homepage';
import LearnPage from './LearnPage';
import Navbar from './Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Theme from './Theme';
import Characters from './Characters';
import Conflict from './Conflict';
import Structure from './Structure';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import TextEditor from './TextEditor';
import { useState } from 'react';
import { useContext } from 'react';
import noteContext from './context/notes/noteContext';
import axios from 'axios';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        {/* <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsum, explicabo eius ea quibusdam consectetur voluptates praesentium vitae repellat fugit in perspiciatis excepturi quis eum reiciendis, suscipit odit et placeat ex rem eaque numquam officiis at. Hic voluptatum facilis ipsum praesentium! Perspiciatis voluptas ducimus quas facere consectetur accusamus temporibus, voluptatum necessitatibus optio doloremque nesciunt labore, doloribus vero ullam nostrum illo assumenda, minus eveniet cum. Maiores incidunt totam possimus ratione aperiam repellendus architecto inventore, quisquam maxime aliquid. Corporis ex temporibus sapiente quasi alias assumenda ea eaque error sit laboriosam ullam ipsa consequatur minus, nulla veniam voluptates numquam, vero ad incidunt, perspiciatis facere totam? Perspiciatis earum fugiat velit dolorem consequatur? Aut officia facilis illum cum ducimus quod. Ab qui asperiores, eaque dolor necessitatibus quas cum commodi ad perspiciatis illum, voluptas officia vitae ipsam nam et laudantium temporibus alias incidunt saepe culpa facere autem debitis. Rem consequatur ipsum, possimus animi alias fugit reprehenderit quam. Laboriosam illum velit consequatur placeat tenetur delectus, ratione libero ad ullam quod distinctio suscipit vero fuga? Aperiam, quod aliquid consequuntur molestias placeat impedit, voluptatibus dolorum quia voluptatum eius ipsam veniam sint inventore amet magnam illo facere perferendis hic iste excepturi obcaecati! Enim exercitationem est quisquam dolore. Accusantium, ex voluptatum in quia, officia error quam autem, corrupti eligendi quis reprehenderit alias sed fugit. Officia sequi incidunt sit architecto iure in unde perferendis a omnis corrupti quam dolore quis nihil aperiam molestiae debitis pariatur, obcaecati tempora cupiditate totam? Animi velit corrupti recusandae sequi reprehenderit quas quaerat sed! Architecto distinctio recusandae quasi iusto quae, eius eos quidem dignissimos nobis sequi? Amet beatae laudantium necessitatibus et reiciendis. Totam earum ipsum cumque animi quam repellendus quae, quas possimus. Accusantium saepe magni corrupti, quisquam voluptatum, similique quod assumenda totam, consectetur possimus esse qui error ad ut omnis mollitia libero enim nisi perspiciatis. Consectetur, expedita voluptatibus! </div> */}
        {/* <Homepage/> */}
        {/* <LearnPage/> */}
        {/* <GettingStarted/> */}
        <Routes>
          {/* <Navbar/> */}
          {/* <Route path='*' element={<Navbar />}></Route> */}
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/editor' element={<TextEditor />}></Route>
          <Route path="/learn" element={<LearnPage />}>
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
          <Route path="/learn/gettingStarted" element={<GettingStarted />}></Route>
          <Route path="/learn/theme" element={<Theme />}></Route>
          <Route path="/learn/Characters" element={<Characters />}></Route>
          <Route path="/learn/conflict" element={<Conflict />}></Route>
          <Route path="/learn/structure" element={<Structure />}></Route>
          <Route path="/SignUp" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>

          
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
