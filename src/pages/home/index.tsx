//import React, { useState } from 'react';
import { styles } from './styles';
import { Button } from '../../components';

function Home() {

    return (
        <>           
            <section style={styles.hero}>
                <div style={styles.mainPage}>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 100, padding: '20px', marginBottom: '20px' }}>
                        <h1>Recettes de Maju</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui quisquam numquam reprehenderit. Doloribus omnis veniam, nesciunt quae aliquam cum exercitationem distinctio, autem, amet molestias voluptas recusandae quod alias! Necessitatibus?</p>
                    </div>
                    <Button title="WORK IN PROGRESS" to="/home"/>
                </div>
            </section>
            <div style={styles.cardContainer}></div>
        </>
    );

}

export default Home;