import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Landing extends Component {
    render(){
        return (
            <div>
                <div className="landing container py-5">
                    <div className="row py-5">
                        <div className="col-lg-8 d-none d-lg-block">
                            <h1 className="text-center">What's Kraken<span className="text-white">?</span></h1>
                            <div className="d-flex">
                                <div className="p-4 align-self-start">
                                    <i className="fas fa-check fa-2x"></i>
                                </div>
                                <div className="p-4 align-self-end text-white">
                                    Identify and advertise yourself for future discovery.
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-4 align-self-start">
                                    <i className="fas fa-check fa-2x"></i>
                                </div>
                                <div className="p-4 align-self-end text-white">
                                    Connect with others who share your same passions and skills
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-4 align-self-start">
                                    <i className="fas fa-check fa-2x"></i>
                                </div>
                                <div className="p-4 align-self-end text-white">
                                    Collaborate with each other on projects/ideas
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-primary text-center card-form form-middle">
                                <div className="card-body">
                                    <h3>Get Connected</h3>
                                    <div className="form-group mt-3 py-3">
                                        <Link to='/new'>
                                            <button className="btn btn-block btn-outline-light">
                                                Become a New User
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="form-group py-3">
                                        <Link to='/list'>
                                            <button className="btn btn-block btn-outline-light">
                                                Search Current Users
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;