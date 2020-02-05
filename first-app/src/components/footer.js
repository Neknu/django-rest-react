import React, {Component} from 'react';

import { CtxConsumer } from '../index';

class Footer extends Component{

    state = {
        name: 'NEknu',
        isLogin: false,
    }

    componentDidMount() {
        this.setState({name: 'myName'});
        // subcribe
    }

    componentWillUnmount() {
        // unsubscribe
    }

    changed = evt => {
        this.setState({name: evt.target.value});
        console.log(this.state.name);
    }

    render() {

    const animals = ['cat', 'dog', 'horse'];

    return (
        <CtxConsumer>
            {
                (context) => (
                    <div>
                    {context.animals.map( animal => {
                        return (
                            <div key={animal}>
                                <h1>{animal}</h1>
                            </div>
                        );
                    }) }
                    </div>
                )}
        </CtxConsumer>
        
            /* { animals.map( animal => {
            return (
                <div key={animal}>
                    <h1>{animal}</h1>
                </div>
            );
            }) } */

        // <div>
           

        //     { this.state.isLogin === true ? (
        //         <React.Fragment>
        //              <h2 onClick={this.props.myAlert}>
        //                 {this.props.trademark}
        //              </h2>
        //              <input value={this.state.name}
        //              onChange={this.changed} type="text"/>
        //         </React.Fragment>
        //     ) : (
        //         <React.Fragment>
        //              <h2 onClick={this.props.myAlert}>
        //                 You cant se this, please subcribe
        //              </h2>
        //         </React.Fragment>
        //     ) }
        // </div>
    )
    }
}

export default Footer;