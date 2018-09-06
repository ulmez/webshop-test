import React from 'react';
import axios from 'axios';

class OnePage extends React.Component {
    constructor(props) {
        super(props);

        /*state = {
            users: []
        };*/
    }

    componentDidMount() {
        // Make a request for a user with a given ID
        axios.get('/users')
        .then((response) => {
            // handle success
            console.log(response.data);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        });

        /*this.state({
            users: 
        });*/
    }

    render() {
        return (
            <h1>Page One</h1>
        );
    }
}

export default OnePage;