import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../store/modules/counter';

class PalleteContainers extends Component {
    handleSelect = color => {
        const { changeColor } = this.props;
        changeColor(color);
    }
    render() {
        const { color } = thisprops;
        return (
            <div>
                Test
            </div>
        )
    }
}

const mapStateToProps = state => ({
    color: state.counter.color
});

const mapDispatchTOProps = dispatch = ({
    changeColor: color => dispatch(changeColor(color));
})

export default connect(
    mapStateToProps,
    mapDispatchTOProps
)(PalleteContainers);