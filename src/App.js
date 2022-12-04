import './App.css';
import { Header, Items, Footer } from "./Components/index";

function App() {
  return (
    <div className='w-screen h-screen bg-slate-200 pt-16 px-4 md:px-0'>
      <div className='w-full md:w-3/4 lg:w-2/3 2xl:w-1/2 mx-auto rounded-lg shadow-custom-shadow bg-slate-50'>
        <Header />
        <Items />
        <Footer />
      </div>
    </div>
  );
}

export default App;