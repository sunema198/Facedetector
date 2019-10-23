import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

import { setSearchField } from '../actions';

//STATE:describes your application/is able to change value//Tell what property is
//PROPS:

const mapStateToProps = state => {
    return{
        searchField : state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
    }

class App extends Component {
    constructor() {
        super()     //calls the constructor of component
        this.state = {          //state describes our app and stays in parent component
            people : []
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ people: users})});
        }

    render(){
        const { people } = this.state;
        const { searchField ,onSearchChange} = this.props;
        const filteredPeople = people.filter(people =>{
            return people.name.toLowerCase().includes(searchField.toLowerCase());
        })
            return !people.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>TEAM MEMBERS</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                    <CardList people ={filteredPeople} />
                    </Scroll>
                </div>
            );
        }
        }
    

export default connect(mapStateToProps, mapDispatchToProps)(App);
