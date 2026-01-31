//import React, { useState } from 'react';
import { styles } from './styles';
import { Button, HeaderBar, Footer } from '../../components';
import mainImg from '../../assets/nappe-bleue.jpg';
import { useState } from "react";

function Recette1() {
    const [count, setCount] = useState(0);

    function handleClickBonus() {
        setCount(count + 1);
    }

    function handleClickMinus() {
        if ( count <= 0 )
            return
        setCount(count - 1);
    }

    return (
        <>

            <HeaderBar/>
            
            <section style={styles.hero}>
                <div style={styles.mainPage}>
                    <div style={{ backgroundColor: 'rgb(0, 0, 0, 0.5)', borderRadius: 50, padding: '20px', marginBottom: '20px',}}>
                        <h1>Recettes de Maju</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui quisquam numquam reprehenderit. Doloribus omnis veniam, nesciunt quae aliquam cum exercitationem distinctio, autem, amet molestias voluptas recusandae quod alias! Necessitatibus?</p>
                    </div>
                    <Button title="Decouvre maintenant" to="/home"/>
                </div>
            </section>

            <section style={styles.antagonist}>
                <div style={styles.recette}>
                    <div style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: 50, padding: '20px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.5)', }}>
                        <img src={mainImg} style={{ width:'100px', height:'100%', maxHeight:'150px'}} alt="MainImg" />
                        <h1>Recettes de Maju</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui quisquam numquam reprehenderit. Doloribus omnis veniam, nesciunt quae aliquam cum exercitationem distinctio, autem, amet molestias voluptas recusandae quod alias! Necessitatibus?</p>
                        <div>
                            <p>Nombre de personnes {count}</p>
                            <button onClick={handleClickBonus}> + </button>
                            <button onClick={handleClickMinus}> - </button>
                        </div> 
                        
                    </div>
                    
                </div>
            </section>

            <div style={styles.cardContainer}></div>

            <Footer />
        </>
    );

}

export default Recette1;