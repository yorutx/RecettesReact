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
            {/* <div>
                <p>This is Count: {count}</p>
                <button onClick={handleClick}>Increment Count</button>
            </div> */}

            <section style={styles.hero}>
                <div style={styles.mainPage}>
                    <h1>Recettes de Maju</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui quisquam numquam reprehenderit. Doloribus omnis veniam, nesciunt quae aliquam cum exercitationem distinctio, autem, amet molestias voluptas recusandae quod alias! Necessitatibus?</p>
                    <Button title="Decouvre maintenant" to="/home"/>
                    
                </div>
                    
                <HeaderBar/>
            </section>
            <div style={styles.cardContainer}></div>

            <Footer />
        </>
    );

}

export default Home;