import React from 'react'
import {Tabs,Tab} from 'react-materialize'
import Cards from './main-tabs'

export default  class HoverableComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovering : false
    };
    }

    render() {
        const style = {
            backgroundColor :this.state.hovering ? 'dsdsdsds' : undefined
        };

        const handleMouseEnter = () => this.setState({hovering : true});
        const handleMouseLeave = () => this.setState({hovering : false});

        return (
            <div
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
              <Cards/>
            </div>
        );
    }
}