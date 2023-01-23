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
import Packages from "./Pages/Packages/Packages";
import Chackout from "./Pages/Chackout/Chackout";
import TransPaymentForm from "./Pages/Chackout/TransPaymentForm";
// import ParentPackage from "./Pages/Packages/ParentPackage";

function App() {
  return (
    <BrowserRouter>
       <Header></Header>
    <Routes>

{/* <Home></Home> */}
{/* <Route path="/" element={<Main />} /> */}
<Route path="/" element={<Home />} />
        <Route path="singUp" element={<SingUp />} />
        <Route path="package" element={<Packages />} />
        {/* <Route path="package" element={<ParentPackage />} /> */}
        <Route path="chackout" element={<Chackout />} />
        <Route path="payment" element={<TransPaymentForm />} />

</Routes>
<Footer></Footer>
    </BrowserRouter>
 
  );
}

export default App;
