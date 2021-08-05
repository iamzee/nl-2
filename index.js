import React from 'react'
import ReactDOM from 'react-dom'

import FirstSection from './components/FirstSection';
import FourthSection from './components/FourthSection';
import Navbar from './components/Navbar';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import Footer from './components/Footer';

const App = () => {
    return <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));

