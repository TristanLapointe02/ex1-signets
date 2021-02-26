import './ConteneurGlobal.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import PiedDePage from './PiedDePage';

export default function ConteneurGlobal() {
  return (
    <div className="ConteneurGlobal">
        <Entete />

          <section className="ConteneurPrincipal">
            <ListeDossiers />
          </section>

          <PiedDePage />

    </div>
  );
}
