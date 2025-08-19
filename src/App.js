import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div>
      <Header />
      <main>
        <AboutUs />
        {/* Add more sections/components here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;