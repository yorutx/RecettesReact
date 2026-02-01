//import React, { useState } from 'react';
import { styles } from './styles';
import { Button, Template } from '../../components';

function Home() {

    return (
        <Template>
            <section>
                <div>
                    <div>
                        <h1>Recettes de Maju</h1>
                        <p>Un site de cuisine personnel dont l'ingrédient principal est l'amour.</p>
                    </div>

                    <div>
                        <h1>Decouvre des recettes</h1>
                        <Button title="Recette 1" to="/recette1"/>
                    </div>
                </div>
            </section>
            <div style={styles.cardContainer}></div>
        </Template>
    );

}

export default Home;