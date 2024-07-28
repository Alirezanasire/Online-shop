import Header from './components/header'
import Banner from './components/banner';
import Container from './components/container';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';


const App = () => {

    return (
        <div>
          <Header />
          <Banner />
          <Container />
          <Contact />
          <Footer /> 
        </div>
    );
};

export default App;