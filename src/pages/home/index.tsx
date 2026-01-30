import React, { useState } from 'react';
import { styles } from './styles';
import { Button, HeaderBar, Footer } from '../../components';

function Home() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <div>
                <p>This is Count: {count}</p>
                <button onClick={handleClick}>Increment Count</button>
            </div>

            <h1>Recettes de Maju</h1>
                
            <HeaderBar/>

            <div style={styles.cardContainer}></div>

            <Footer />
        </>
    );

}

export default Home;