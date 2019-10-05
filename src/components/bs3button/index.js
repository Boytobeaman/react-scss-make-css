import React from 'react';


class Bs3button extends React.Component {
    
    componentWillMount() {

    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-myclass">myclass</button>
                <button type="button" className="btn btn-default">default</button>
                <button type="button" className="btn btn-info">infor</button>
                <button type="button" className="btn btn-danger">danger</button>
                <button type="button" className="btn btn-warning">warning</button>
            </div>
        )
    }
}
export default Bs3button;