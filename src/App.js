import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Add from './pages/Add';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import BlogView from './components/BlogView';


function App() {
  // const [blogsList, setBlogsList] = useState([]);

  // const handleAddBlog = (newBlog) => {
  //     setBlogsList((blogsList) => [...blogsList, newBlog]);
  // }
  return (
    <Router>
      <NavBar/>
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new" element={<Add/>}/>
          <Route path="/blog/:id" element={ <BlogView /> } />
        </Routes>
      </>
    </Router>
  );
}

export default App;
