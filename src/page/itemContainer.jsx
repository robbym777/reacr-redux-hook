import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

class ItemContainer extends React.Component {
    render() {
        return(
            <>
            <h1>HOOK /w TERNARY</h1>
            <h2>Item - {this.props.item}</h2>
            <button onClick={this.props.buyItem}>Buy Items</button>
            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes 
    : state.iceCream.numOfIceCreams
    return{
        item: itemState
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)