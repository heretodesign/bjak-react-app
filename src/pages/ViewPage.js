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
    const {isLoading, content, newComment} = this.state;
    return (
      <>
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large">
                  <div className="firstsection">
                    <div className="content">
                      <div className="columns is-mobile">
                        <div className="column is-three-fifths is-offset-one-fifth has-background-info">
                          {
                            !isLoading ? (
                              <>
                                <h1 className="title is-3 has-text-white">{content.title}</h1>
                                <img src={content.images[2].url} alt='dummy' />
                                 <br />
                                 <p className="subtitle is-5 has-text-white"> Description: {content.short_description}</p>
                                 <p className="subtitle is-6 has-text-white"> Language: {content.languages}</p>
                                 <p className="subtitle is-6 has-text-white"> Director: {content.people[0].name}</p>
                                 <p className="subtitle is-6 has-text-white"> Cast: {content.people[1].name}, {content.people[2].name}, {content.people[3].name}</p>
                                 <p className="subtitle is-6 has-text-white"> Classification: {content.meta.ageRating} {content.meta.releaseYear}</p>
                                 <p className="subtitle is-6 has-text-white"> Length: {content.running_time_friendly}</p>

                                 <p className="subtitle is-6 has-text-white"> Description: {content.description}</p>
                                 <p className="subtitle is-5 has-text-white">Genre: {content.tags[0].label} / {content.tags[1].label}</p>
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
          {/*<section className="section is-paddingless-horizontal">
            <div className="container grid is-large notification">
                <div className="firstsection">
                  <div className="content">
                    <div className="columns">
                     <div className="column is-three-fifths is-offset-one-fifth">
                        {this.state.addYourSay.map((comment) => {
                          return <h3>{comment}</h3>
                        })}

                        <h3>Comment: {newComment}</h3>
                     </div>
                    </div>
                    <form id="addComment-form" onSubmit={e => this.addComment(e)}>
                      <div className="columns">
                        <div className="column is-three-fifths is-offset-one-fifth">
                        <h1 className="title is-3"> Add Your Say</h1>
                          <div className="columns">
                            <div className="column">
                              <div className="field">
                                <div className="control">
                                  <textarea onChange={e => this.handleChange(e)} className="textarea is-large" type="text" name="comment" value={newComment}  placeholder="Comment" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column">
                              <div className="field">
                                <div className="control">
                                  <button className="button is-large is-info is-fullwidth" type="submit" value="Submit">Add Comment</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
               </div>
            </div>
          </section>*/}
      </>
    )
  }
}

export default ViewPage;
