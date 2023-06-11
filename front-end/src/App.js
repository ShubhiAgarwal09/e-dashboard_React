//import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav'
import Footer from './component/Footer';
import SignUp from './component/SignUp';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>Product Listing Component</h1>}></Route>
        <Route path="/add" element={<h1>Add Listing Component</h1>}></Route>
        <Route path="/update" element={<h1>Update Listing Component</h1>}></Route>
        <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
        <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
export default App;
