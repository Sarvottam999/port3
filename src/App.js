import logo from './logo.svg';
import './App.css';
import Home from './features/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './features/blog/blog';
import Contact from './features/contact/contact';
import About from './features/about/about';
import Blog_detail from './features/blog-detail/blog-detail';

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
        <Route  >
          <Route path="/port3" element={<Home />} />
          <Route path="/port3/blog" element={<Blog />} />
          <Route path="/port3/contact" element={<Contact />} />
          <Route path="/port3/about" element={<About />} />
          <Route path="/port3/blog/:id" element={<Blog_detail/>} />
blogs.json
        </Route>
      </Routes>
    </BrowserRouter>

      {/* <Home/> */}
       
    </div>
  );
}

export default App;
