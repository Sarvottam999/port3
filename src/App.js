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
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="/blog/:id" element={<Blog_detail/>} />
blogs.json
        </Route>
      </Routes>
    </BrowserRouter>

      {/* <Home/> */}
       
    </div>
  );
}

export default App;
