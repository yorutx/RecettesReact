import { styles } from './styles';
import mainImg from '../../assets/poulet-champi.webp';
import { useMemo, useState } from "react";

type Ingredient = {
    name: string;
    qte: number | null;
    unit: string | null;
};

export default function Recette1() {
    const baseServings = 4;
    const [servings, setServings] = useState(4);

    const ingredients: Ingredient[] = [
        { name: "champignon", qte: 100, unit: "g" },
        { name: "poulet", qte: 200, unit: "g" },
        { name: "crème", qte: 25, unit: "cl" },
        { name: "matière grasse", qte: null, unit: null },
        { name: "riz", qte: 200, unit: "g" },
    ];

    const factor = servings / baseServings;

    const scaledIngredients = useMemo(() => {
        return ingredients.map((ing) => ({
            ...ing,
            scaledQte: ing.qte === null ? null : ing.qte * factor,
        }));
    }, [factor]);

    function handleClickBonus() {
        setServings((s) => s + 1);
    }

    function handleClickMinus() {
        setServings((s) => Math.max(1, s - 1));
    }


    return (
        <>
            <section style={styles.antagonist}>
                <div style={styles.recette}>
                    <img src={mainImg} style={{ width:'300px', height:'100%', maxHeight:'1000px', borderRadius:20}} alt="MainImg" />
                    <h1>Poulet à la crème champignon ˙⋆✮</h1>
                    <div style={styles.contenu}>
                        <div style={styles.steps}>
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
                        <div style={styles.ingredients}>
                            <div>
                                <p>Nombre de personnes : {servings}</p>
                                <button onClick={handleClickBonus}> + </button>
                                <button onClick={handleClickMinus}> - </button>
                            </div> 
                            <p>Liste des ingrédients</p>
                            <ul>
                                {scaledIngredients.map((ingredient) => (
                                    <li key={ingredient.name}>
                                        {ingredient.name} :{" "}
                                        {ingredient.scaledQte === null ? ("à volonté") : ( 
                                            <> {ingredient.scaledQte} {ingredient.unit ?? ""} </> 
                                            )
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div style={styles.cardContainer}></div>
        </>
    );

}