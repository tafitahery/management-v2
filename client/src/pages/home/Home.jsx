import './home.scss';

import Account from '../../components/account/Account';
import Topbar from '../../components/topbar/Topbar';
import Amount from '../../components/amount/Amount';
import List from '../../components/list/List';

export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <div className="homeContainer">
        <div className="title">Caisse1</div>
        <div className="top">
          <div className="left">
            <Account />
            <Amount />
          </div>
          <div className="center">
            <List />
          </div>
          <div className="right">right</div>
        </div>
      </div>
    </div>
  );
}
