
import "./App.css";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm";
// import Navbar from "./componants/Navbar";
function App() {
  return (
    <>
      <Navbar/>
        <div className="container">
        <TextForm heading="Enter the text to analyze below"/>
        </div>
    </>
  );
}

export default App;
