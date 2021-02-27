import "./Dossier.scss"
import Sort from "@material-ui/icons/Sort";
import MoreVert from "@material-ui/icons/MoreVert";

export default function Dossier(props) {
    return(
        <li style={{backgroundColor: props.couleur}}>
            <img src={"images-dossiers/" + props.id + ".png"} alt={props.titre}/>
            <div className="info">
                <div className="tri"><Sort /></div>
                <h3 className="titre">{props.titre}</h3>
                <p className="date">{props.date}</p>
                <div className="plus"><MoreVert /></div>
            </div>
        </li>
    )
}