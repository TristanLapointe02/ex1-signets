import Dossier from "./Dossier"
import "./ListeDossiers.scss"
import tabDossiers from "./data/dossiers.json"

export default function ListeDossiers(props) {
    return (
        <div className="ListeDossiers">
            <ul className="ul-dossiers">
            {
                //Utilisation d'une fonction fléchée
                tabDossiers.map(unDoss => <Dossier key={unDoss.id} titre={unDoss.titre} couleur={unDoss.couleur} date={unDoss.date} id={unDoss.id}/>)
            }
            </ul>
        </div>
    )
}