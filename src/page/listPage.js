import React, {Component} from 'react';

class ListPage extends Component {
    render() {
        console.log(122, this.props.match)
        return (
            <div>
                list => { this.props.match.params && this.props.match.params.id}
            </div>
        );
    }
}

export default ListPage;
