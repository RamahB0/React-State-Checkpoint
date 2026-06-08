import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
      person: {
            fullName: 'Lionel Messi',
                  bio: 'Argentine professional footballer widely regarded as one of the greatest players of all time.',
                        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
                              profession: 'Professional Footballer'
                                  },
                                      shows: false,
                                          timeSinceMount: 0
                                            };

                                              componentDidMount() {
                                                  this.interval = setInterval(() => {
                                                        this.setState(prevState => ({
                                                                timeSinceMount: prevState.timeSinceMount + 1
                                                                      }));
                                                                          }, 1000);
                                                                            }

                                                                              componentWillUnmount() {
                                                                                  clearInterval(this.interval);
                                                                                    }

                                                                                      toggleShow = () => {
                                                                                          this.setState(prevState => ({ shows: !prevState.shows }));
                                                                                            };

                                                                                              render() {
                                                                                                  const { person, shows, timeSinceMount } = this.state;
                                                                                                      return (
                                                                                                            <div className="container mt-5">
                                                                                                                    <h1 className="text-center mb-4">React State Checkpoint</h1>
                                                                                                                            <p className="text-center text-muted">Time since component mounted: {timeSinceMount} seconds</p>
                                                                                                                                    <div className="text-center mb-4">
                                                                                                                                              <button className="btn btn-primary" onClick={this.toggleShow}>
                                                                                                                                                          {shows ? 'Hide Profile' : 'Show Profile'}
                                                                                                                                                                    </button>
                                                                                                                                                                            </div>
                                                                                                                                                                                    {shows && (
                                                                                                                                                                                              <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                                                                                                                                                                                                          <img src={person.imgSrc} className="card-img-top" alt={person.fullName} style={{ height: '300px', objectFit: 'cover', objectPosition: 'top' }} />
                                                                                                                                                                                                                      <div className="card-body">
                                                                                                                                                                                                                                    <h5 className="card-title">{person.fullName}</h5>
                                                                                                                                                                                                                                                  <h6 className="card-subtitle mb-2 text-muted">{person.profession}</h6>
                                                                                                                                                                                                                                                                <p className="card-text">{person.bio}</p>
                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                              )}
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                          export default App;
