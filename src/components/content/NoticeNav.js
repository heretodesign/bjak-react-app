import React from 'react'
import { Link } from "react-router-dom"
import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const NoticeNav = () => {
  return (
    <>
     <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
            <div className="firstsection">
                <h2 className="title is-3 has-text-left has-text-weight-light" id="mainBlack">Bulletin Board App<br />
                </h2>
                <div className="content">
                    <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">This Week Focus</p>
                </div>
                <div className="content">
                  <div className="columns">
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/" className="button is-large is-info is-fullwidth">List of Movies</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/pages/detailpage" className="button is-large is-info is-fullwidth">Detail of Movies</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
        </div>
     </section>
    </>
  );
}

export default NoticeNav;
