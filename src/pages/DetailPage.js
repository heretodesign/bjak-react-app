import React from 'react'
import axios from 'axios'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Image from "react-graceful-image"
import Flickr from '../Flickr-1.4s-200px.svg'

class DetailPage extends React.Component {
  state = {
    data: [],
    isLoading: true,
    newComment: '',
  }

  componentDidMount () {
    axios.get('https://cdn-discover.hooq.tv/v1.2/discover/titles/e6464ce6-42c9-43ae-be23-0dd57f50add1')
    .then(result => {
      // console.log(result.data.data)
      this.setState({
        data: result.data.data,
        isLoading: false,
      })
    })
  }


  render() {
    const {isLoading, data, newComment} = this.state;
    console.log(this.state);
    return (
      <>
        <div class="container">
          <div class="notification" id="notification">
            <div class="columns is-mobile" id="columns">
              <div class="column is-three-fifths is-offset-one-fifth" id="colMain">
                {
                    !isLoading ? (
                      <>
                          <figure class="image is-3by1" id="imgBanner">
                            <img src={data.images[2].url} />
                          </figure>
                          <p className="title is-5 has-text-left" id="title">
                            Title: {data.title}
                          </p>
                          <p className="title is-6  has-text-left" id="synopsis">
                            Synopsis: {data.short_description}
                          </p>
                          <p className="title is-6 has-text-left" id="synopsis">
                            Genre: {data.tags.label}
                          </p>
                          <div class="columns">
                            <div class="column is-three-fifths">
                              <p className="title is-6 has-text-left" id="synopsis">
                                Languages: {data.languages}
                              </p>
                            </div>
                            <div class="column">
                              <p className="title is-6 has-text-left" id="synopsis">
                                Audio: {data.audios}
                              </p>
                            </div>
                          </div>
                          <div class="columns">
                            <div class="column is-three-fifths">
                              <p className="title is-6 has-text-left" id="synopsis">
                                Age Rating: {data.meta.ageRating}
                              </p>
                            </div>
                            <div class="column">
                              <p className="title is-6 has-text-left" id="synopsis">
                                Release Year: {data.meta.releaseYear}
                              </p>
                            </div>
                          </div>
                          <p className="title is-6 has-text-left" id="synopsis">
                            Seasons: {data.seasons}
                          </p>
                          <p className="title is-6 has-text-left" id="synopsis">
                            Cast: {data.people}
                          </p>
                          <p className="title is-6 has-text-left" id="synopsis">
                            Availability: {data.availability}
                          </p>
                          <p className="title is-6  has-text-left" id="detDescription">
                            Description: {data.description}
                          </p>
                      </>
                    )
                    : <>
                    <p className="text-center"><img className="display:inline;" src={Flickr} alt="Flickr" /></p>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DetailPage;
