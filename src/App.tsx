
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer';
import Page1 from './Pages/Page1';
// import Page2 from './Pages/Page2';
// import Page3 from './Pages/Page3';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Page1/>} />
      <Route path="/page1" element={<Page1/>} />
      {/* <Route path="/page2" element={<Page2/>} />
      <Route path="/page3" element={<Page3/>} /> */}
     </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
