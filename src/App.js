import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div className='page-container'>
        <div className='header-container'>
            <Header />
                <div className='nav-container'>
                    <Navigation />
                </div>
        </div>

        <div className='portfolio-container'>
            <PortfolioContainer />
        </div>

        <div className='footer-container'>
            <Footer />
        </div>

    </div>
  );
}

export default App;