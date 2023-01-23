import React from 'react';

import Hero from '../assets/bandpic.jpg'

function Home() {
    return(
        <section className='Body'>
        <img src={Hero} className='App-hero' alt='cowabunga dude live'/>
        <div className='Text'>
        <p>Cowabunga Dude is the #1 90's Alternative/Grunge cover band in the Kansas City area.   </p>
        <p>Throw on your favorite flannel and come relive your favorite decade of music. Now booking!</p>
        </div>
        </section>
    )
}

export default Home;