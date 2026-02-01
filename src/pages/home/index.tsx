//import React, { useState } from 'react';
import { styles } from './styles';
import { RecetteCard, Template } from '../../components';
import mainImg from '../../assets/poulet-champi.webp';

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
                        <div>
                            <RecetteCard titre="Poulet à la crème champignon" imageUrl={mainImg} toGo="/recette1"/>
                            <RecetteCard titre="Poulet à la crème champignon" imageUrl={mainImg} toGo="/recette1"/>
                            <RecetteCard titre="Poulet à la crème champignon" imageUrl={mainImg} toGo="/recette1"/>
                            <RecetteCard titre="Poulet à la crème champignon" imageUrl={mainImg} toGo="/recette1"/>
                            <RecetteCard titre="Poulet à la crème champignon" imageUrl={mainImg} toGo="/recette1"/>
                        </div>
                    </div>
                </div>
            </section>
            <div style={styles.cardContainer}></div>
        </Template>
    );

}

export default Home;