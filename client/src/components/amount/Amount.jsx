import './amount.scss';

export default function Amount() {
  return (
    <div className="amount">
      <h1>ENTRE / SORTIE</h1>
      <form>
        <div className="formInput">
          <label htmlFor="">Date</label>
          <input type="date" />
        </div>
        <div className="formInput">
          <label htmlFor="">Type</label>
          <select>
            <option value="in">Entrée</option>
            <option value="out">Sortie</option>
          </select>
        </div>
        <div className="formInput">
          <label htmlFor="Montant">Montant</label>
          <input type="number" placeholder="Montant en Ar" />
        </div>
        <div className="formInput">
          <label htmlFor="Motifs">Motifs</label>
          <input type="number" placeholder="Motifs" />
        </div>
        <button>Valider</button>
      </form>
    </div>
  );
}
