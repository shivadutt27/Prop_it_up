import React, {Component} from 'react';

class PersonCard extends Component{
    render() {
        const {firstName, lastName, age, haircolor} = this.props;
        return(
            <>
                <h1>{firstName} {lastName}</h1>
                <p>Age: {age} <span>Hair Color: {haircolor}</span></p>
            </>
        );
    }
}

export default PersonCard;