import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/Main";
import SingUp from "./Pages/Ragister/SingUp/SingUp";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
       <Header></Header>
    <Routes>

{/* <Home></Home> */}
<Route path="/" element={<Home />} />
        <Route path="singUp" element={<SingUp />} />

</Routes>
<Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
