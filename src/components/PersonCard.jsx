import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super (props)
        this.state = {
            age : this.props.age
        }
    }

    increaseAge = () => {
        console.log("clicked");
        this.setState({

            age: (this.state.age)+1
        })
    }
    render() {
        const {firstName, lastName, age, haircolor} = this.props;
        return(
            <>
                <h1>{firstName}<span>,</span> {lastName}</h1>
                <p>Age: {this.state.age} <span>Hair Color: {haircolor}</span></p>
                <button onClick={this.increaseAge}>Happy Birthday { lastName } { firstName}</button>
            </>
        );
    }
}

export default PersonCard;