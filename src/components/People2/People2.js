import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';


const People2 = () => {
    const [people, setPeople] = useState([])



    useEffect(() => {
        fetch('./people2.JSON')
            .then(res => res.json())
            .then(data => setPeople(data));

    }, [])



    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">


            {
                people.map(people => <Information
                    key={people.email}
                    people={people}

                >
                </Information>)
            }


        </div>
    );
};

export default People2;