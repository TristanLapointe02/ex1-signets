import { Avatar } from "@material-ui/core";
import "./Entete.scss";

export default function Entete(props) {
    return(
        <header>
          <p>Signets</p>
          <div className="utilisateur">
            <p>Tristan lapointe</p>
            <Avatar alt="Tristan Lapointe" src="image-avatar/img-moi.jpg"></Avatar>
          </div>
        </header>
    )
}