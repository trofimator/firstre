import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './MainPage.css';
import Header from './Header';

class MainPage extends Component {
    
    const filterRobots = (robots) => {
        return robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }

    render() {
        const { onSearchChanged,robots, isPanding } = this.props;

        return isPanding ?
            <h1>Loading...</h1>
            :
            (
                <div className='tc'>
                   <Header />
                    <SearchBox searchChanged={onSearchChanged} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots(robots)} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }

    componentDidMount() {
        this.props.onRequestRobots();
    }
};

export default MainPage;