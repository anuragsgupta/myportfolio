import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    
    <>
     <div className=" sm:flex sm:justify-center bg-gray-700">
     <div className="w-full  md:w-[68%]">
      <Header />
      {/* <Nav /> */}
      <Body />
      <Footer />
      </div>
      </div>

    </>
  );
}

export default App;
