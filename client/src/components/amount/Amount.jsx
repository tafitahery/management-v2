import './amount.scss';

export default function Amount() {
  return (
    <div className="amount">
      <form>
        <div className="formInput">
          <label htmlFor="">Type</label>
          <select>
            <option value="in">Entrée</option>
            <option value="out">Sortie</option>
          </select>
        </div>
        <div className="formInput">
          <label htmlFor=""></label>
          <input type="number" placeholder="Montant en Ar" />
          <input type="text" placeholder="motifs..." />
        </div>
        <button>Valider</button>
      </form>
    </div>
  );
}
