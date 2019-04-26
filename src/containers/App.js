import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestRobots} from '../Actions';
import Header from '../components/Header';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPanding: state.requestRobots.isPanding,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChanged: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
}

class App extends Component {
    render() {
        const { searchField, onSearchChanged,robots, isPanding } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

        return isPanding ?
            <h1>Loading...</h1>
            :
            (
                <div className='tc'>
                   <Header />
                    <SearchBox searchChanged={onSearchChanged} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }

    componentDidMount() {
        this.props.onRequestRobots();
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);