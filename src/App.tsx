import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Flowbutton from './Components/UI/Flowbutton'

function App() {
  return (
    <div className="text-[#1d4d85] app min-w-[280px] min-h-screen bg-background">
      <Header />
      <Main />
      <Footer />
      <Flowbutton/>
    </div>
  );
}

export default App;
