import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from '../redux'

class IceCreamContainer extends React.Component {
    render() {
        return(
            <>
            <div>
                <h2>Number of Ice Cream - {this.props.numOfIceCreams}</h2>
                <button onClick={this.props.buyIceCream}>Buy IceCream</button>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)