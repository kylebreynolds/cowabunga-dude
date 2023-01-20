import React from 'react';

import Hero from '../assets/bandpic.jpg'

function Home() {
    return(
        <section>
        <img src={Hero} className='App-hero' alt='cowabunga dude live'/>
        </section>
    )
}

export default Home;