import React from 'react';
import Header from '../bootstrap4header/index';

class Bootstrap4 extends React.Component {
    
    componentWillMount() {

    }
    render() {
        return (
            <div>
                <Header/>
                <div className='p-3'>
                    bootstrap4 content
                </div>
            </div>
        )
    }
}
export default Bootstrap4;