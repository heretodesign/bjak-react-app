import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Columns, Column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ListPage extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
      axios.get('https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20')
        .then(response => {
            // console.log(response.data.data);
            let titles = [...response.data.data]; //copy the res into a new array called title using spread
            let curated = titles.filter(word => word.type === "Multi-Title-Manual-Curation"); //use filter to filter for specific type
            console.log(curated);
            // console.log(curated[0].data[0].images[0].url);
            this.setState({
                movies: curated
            })
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }

    render() {
        return (
          <section className="section">
            <div className="container notification is-primary has-text-centered" style={{ overflowX: "scroll" }}>
                <h1 className="title is-1">Cool Stuff To Watch</h1>
                {
                    this.state.movies.map(movie =>
                        <>
                            <div className="columns has-text-centered">
                                <div className="column">
                                    <h1 class="title is-3">{movie.row_name}</h1>

                                </div>
                            </div>
                            <div className="columns has-text-centered">
                                {
                                    movie.data.map(show =>
                                        <div className="column">
                                            {
                                              show.images
                                                .filter(image => image.type === "POSTER")
                                                .map(image =>
                                                    <div className="card">
                                                        <div className="card-image">
                                                          <Link to={`/pages/viewpage/${movie.row_id}`}>
                                                            <figure className="image is-4by3">
                                                                <img
                                                                    src={image.url}
                                                                    alt="Placeholder image"
                                                                />
                                                            </figure>
                                                            </Link>
                                                        </div>
                                                        <div className="card-content">
                                                            <p className="heading is-7">{show.title}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </>
                    )
                }
            </div>
          </section >
    );
  }
}

export default ListPage
