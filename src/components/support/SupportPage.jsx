import React from 'react';
import Hero from './Hero';
import NavBar from '../Navbar';
import Footer from '../Footer';
import CreateTicket from './CreateTicket';


function SupportPage() {
    return ( 
        <>
            <NavBar/>
            <Hero/>
            <CreateTicket/>
            <Footer/>
        </>
     );
}

export default SupportPage;