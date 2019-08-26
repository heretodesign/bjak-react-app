import React from 'react'
import axios from 'axios'
import { Button, Columns, Column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Image from "react-graceful-image"
import Flickr from '../Flickr-1.4s-200px.svg'

class ViewPage extends React.Component {
  state = {
    content: [],
    isLoading: true
  }

  componentDidMount () {
    axios.get(`https://cdn-discover.hooq.tv/v1.2/discover/titles/${this.props.match.params.id}`)
    .then(result => {
      console.log(result.data.data)
      this.setState({
        content: result.data.data,
        isLoading: false,
      })
    })
  }

  render() {
    const { isLoading, content } = this.state;
    return (
      <>
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large">
                  <div className="firstsection">
                    <div className="content">
                      <div className="columns is-mobile">
                        <div className="column is-three-fifths is-offset-one-fifth has-background-grey">
                          {
                            !isLoading ? (
                              <>
                                <h1 className="title is-3 has-text-white" id="viewTitle">{content.title}</h1>
                                <img src={content.images[0].url} alt='movie banner' />
                                 <br />
                                 <br />
                                 <p className="subtitle is-5 has-text-white" id="viewPara"> Short Description: {content.short_description}</p>
                                 <p className="subtitle is-6 has-text-white" id="viewPara"> Language: {content.languages}</p>
                                 <p className="subtitle is-6 has-text-white" id="viewPara"> Cast:
                                  {
                                    content.people && content.people.length && content.people.map((talk, index) => `${talk.name} ${index === content.people.length - 1 ? ' ' : ', '}`)
                                  }
                                  </p>
                                 <p className="subtitle is-6 has-text-white" id="viewPara"> Classification: {content.meta.ageRating} {content.meta.releaseYear}</p>
                                 <p className="subtitle is-6 has-text-white" id="viewPara"> Length: {content.running_time_friendly}</p>
                                 <p className="subtitle is-6 has-text-white" id="viewPara"> Description: {content.description}</p>
                                 <p className="subtitle is-5 has-text-white" id="viewGenre">
                                 {
                                   content.tags && content.tags.length && content.tags.map((tag, index) => `${tag.label} ${index === content.tags.length - 1 ? '' : ' / '}`)
                                 }
                                 </p>
                                 {/* <p className="subtitle is-5 has-text-white" id="viewGenre">Genre: {content.tags[0].label} / {content.tags[1].label}</p> */}
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
              </div>
          </section>
      </>
    )
  }
}

export default ViewPage;
