import "./Dossier.scss"

export default function Dossier(props) {
    return(
        <li>
            <img src={"images-dossiers/" + props.id + ".png"} alt={props.titre}/>
            <div className="info">
                <h3 className="titre">{props.titre}</h3>
                <p className="date">{props.date}</p>
            </div>
        </li>
    )
}