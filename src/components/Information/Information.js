import React from 'react';

const Information = (props) => {
    console.log(props)
    const { name, company, picture, balance, description, Instructor } = props.people;

    return (
        <div className="col">
            <div className="card text-center">
                <img src={picture} className="card-img-top img-thumbnail rounded mx-auto d-block mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">Course Name: {name}</h5>
                    <p className="card-title">Course Instructor: {Instructor}</p>
                    <p className="card-text">Course Duration: {company}</p>
                    <p className="card-text">Course Cost: ${balance}</p>
                    <p className="card-text">Course Description: {description}</p>

                </div>
            </div>
        </div>

    );
};

export default Information;