import "./App.css";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./page/News";
function App() {
  return (
    <>
     <Navbar />
     <Category/>
     <Page/>
     <Footer/>
    </>
  );
}

export default App;
