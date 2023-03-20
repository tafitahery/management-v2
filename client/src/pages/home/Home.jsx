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
        <div className="top">
          <div className="left">
            <Account />
          </div>
          <div className="right">
            <div className="title">Caisse1</div>
            <div className="content">
              <Amount />
              <List />
            </div>
          </div>
        </div>
        <div className="bottom">bottom</div>
      </div>
    </div>
  );
}
