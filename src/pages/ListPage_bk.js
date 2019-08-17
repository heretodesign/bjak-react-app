import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ListPage extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount () {
  axios.get('https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20').then(response => {
    // console.log(response.data.data[0]);
    let words = [...response.data.data];
    let finalData = words.filter(word => word.type === "Multi-Title-Manual-Curation");
    console.log(finalData[0]);
    this.setState({
      movies: finalData
    })
  })
  .catch(error => {
    console.log('ERROR: ', error)
  })
}

  addComment = (taskId) => {
    this.props.history.push(`/pages/detail/${taskId}`)
  }


  render() {

      return (
        <div>
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large notification">
                  <div className="firstsection">
                      <h1 className="title is-3">Att: Upcoming Events and Programmes</h1>
                      <div className="content">
                        <div className="columns">
                          <div className="column" id="tablelisttask">
                            <table className="table is-mobile">
                              <thead>
                                <tr>
                                  <th><abbr title="image" className="is-3">Row Name</abbr></th>
                                  <th><abbr title="title">Image</abbr></th>
                                  <th><abbr title="date">Title</abbr></th>
                                </tr>
                              </thead>
                              <tbody>
                              {this.state.movies.map((movie) => (
                                <tr className="key={task.id}">
                                  <td>{ movie.row_name }</td>
                                  <Link to={`/pages/viewpage/${movie.row_id}`}>
                                    <figure className="image is-200x200">
                                      <td><img width="200" height="200" src={ movie.data.images } /></td>
                                    </figure>
                                  </Link>
                                  {/*<td><img width="200" height="200" src={ movie.image } /></td>*/}
                                  <td><h4>{ movie.type }</h4></td>
                                  {/*<td><h4>{ movie.data.title }</h4></td>*/}

                                  {/*<td><button onClick={() => {this.addComment(movie.id)} } className="button is-info">Comment</button></td>*/}
                                </tr>
                              ))}
                              </tbody>
                            </table>
                           </div>
                        </div>
                      </div>
                   </div>
              </div>
          </section>
        </div>
      )
  }
}
export default ListPage;
