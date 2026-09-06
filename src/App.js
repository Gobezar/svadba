import './App.css';
import Hero from './components/Hero';
import Story from './components/Story';
import DateSection from './components/DateSection';
import Venue from './components/Venue';
import Timeline from './components/Timeline';
import DressCode from './components/DressCode';
import Details from './components/Details';
import RsvpForm from './components/RsvpForm';
import Footer from './components/Footer';

function App() {
  return (
    <main className="invite">
      <Hero />
      <Story />
      <DateSection />
      <Venue />
      <Timeline />
      <DressCode />
      <Details />
      <RsvpForm />
      <Footer />
    </main>
  );
}

export default App;
