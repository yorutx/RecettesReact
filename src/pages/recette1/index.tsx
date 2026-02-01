import { styles } from './styles';
import mainImg from '../../assets/poulet-champi.webp';
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
            <section style={styles.antagonist}>
                <div style={styles.recette}>
                    <img src={mainImg} style={{ width:'150px', height:'100%', maxHeight:'500px', borderRadius:20}} alt="MainImg" />
                    <h1>Poulet à la crème champignon ˙⋆✮</h1>
                    
                    <div style={styles.ingredients}>
                        <div>
                            <p>Nombre de personnes {count}</p>
                            <button onClick={handleClickBonus}> + </button>
                            <button onClick={handleClickMinus}> - </button>
                        </div> 
                        <p>
                            Poulet aux champignons
                            200g de Poulet
                            200g de champignons
                            150ml de crème
                            de la matière grasse
                            150g de rix par personne
                        </p>
                    </div>
                    <h2>Etape 1</h2>
                    <p>
                        Lancez la cuisson du rix (en fonction du riz que vous utilisez, la cuisson peu varier, mais si vous le faites à l’eau, il vous suffit de d’abord le nettoyer, puis mesurer l’eau et la quantité de riz avec la méthode de la phalange, puis de lancer la cuisson a feu moyen pendant 10 à 12 minutes.)
                        Pendant ce temps, nettoyez les champignons, puis eplucher / couper les champignons et le poulet. 
                    </p>
                    <h2>Etape 2</h2>
                    Mettre de la matière grasse dans deux poeles, puis cuire séparément le poulet et les champignons. 
                    <h2>Etape 3</h2>
                    <p>
                        Rassembler dans la même poele et y verser la crème. Assaisonnez avec sel, poive etc. 
                    </p>
                    <h2>Etape 4</h2>
                    <p>
                        Laisser cuire encore jusqu’à ce que la crème soit colorée.
                    </p>
                    <h2>Etape 1</h2>
                    <p>Servez et dégustez !</p>
                        
                </div>
            </section>

            <div style={styles.cardContainer}></div>
        </>
    );

}

export default Recette1;