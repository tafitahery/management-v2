import './account.scss';

export default function Account() {
  return (
    <div className="account">
      <label htmlFor="">Choisir une compte</label>
      <select name="" id="">
        <option value=""> --- </option>
        <option value=""> caisse1 </option>
        <option value=""> caisse2 </option>
      </select>
      <form>
        <label htmlFor="">Nouveau compte</label>
        <input type="text" placeholder="Nouveau compte..." />
        <button>Creer</button>
      </form>
    </div>
  );
}
