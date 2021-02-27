import "./PiedDePage.scss"
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import grey from '@material-ui/core/colors/grey';

export default function PiedDePage(props) {
    return (
        <footer>
            <Fab style={{ backgroundColor: grey[900], color: grey[100]}} aria-label="add">
                <AddIcon />
            </Fab>
        </footer>
    )
}