import React, { Component } from 'react'
import { columns, column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import umaifcbk from '../../../img/fcbk.svg'
import umaiinsta from '../../../img/insta.svg'
import umailinked from '../../../img/linked.svg'

const BottomFooter = () => {

  return (
      <footer className="section footer-btm">
          <div className="container content has-text-centered">
              <div className="columns">
                <div className="column is-2">
                  <div className="firstFooter">
                      <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">Bjak </h1>
                      <div className="content">
                        <div className="subtitle is-5 has-text-grey">
                          <div className="has-text-left has-text-weight-light">
                              <p className="has-text-left" id="mainFooter">About Us</p>
                              <p className="has-text-left" id="mainFooter">Careers</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="column is-3">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">Bjak HQ</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">info@bjak.com</p>
                                    <p className="has-text-left" id="mainFooter">
                                      04-01 UOA Tower A<br />
                                      Kota Damanasara<br />
                                      Kuala Lumpur 049704
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">Bjak Penang</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">info@bjak.com</p>
                                    <p className="has-text-left" id="mainFooter">
                                      A-21-06 IBM Tower,<br />
                                      8 Georgetown <br />
                                      Penang 50250
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-3">
                  <div className="firstFooter">
                      <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark">
                      <div className="navbar-end">
                        <div className="navbar-item">
                          <div className="buttons">
                            <a className="is-primary">
                              <img src={umaifcbk} className="nav-logo has-text-right" width="60" height="60" alt="umai" />
                            </a>
                            <a className="is-primary">
                              <img src={umailinked} className="nav-logo" width="60" height="60" alt="umai"  />
                            </a>
                            <a className="is-light">
                              <img src={umaiinsta} className="nav-logo" width="60" height="60" alt="umai"  />
                            </a>
                          </div>
                        </div>
                      </div>
                      </h1>
                   </div>
                </div>
              </div>
          </div>
          <section className="section">
              <div className="container">
                  <div className="content">
                    <hr className="hr-footer" />
                  </div>
              </div>
          </section>
          <section className="section">
              <div className="container">
                <div className="columns">
                  <div className="column is-half">
                    <div className="content">
                        <div className="subtitle is-5 has-text-white">
                            <p className="has-text-left has-text-weight-light has-text-grey">
                                <a href="#" className="has-text-left has-text-grey" id="mainFooter">Terms & Conditions | Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="content">
                        <div className="subtitle is-5 has-text-white">
                            <p className="has-text-right has-text-weight-light has-text-grey">
                                <a href="#" className="has-text-right has-text-grey" id="mainFooter">© 2019 Bjak. All Rights Reserved</a>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
      </footer>
  );
}

export default BottomFooter;
