import React from 'react'
import { connect } from 'react-redux';
import { buyCake, makeCake } from '../redux'

class CakeContainer extends React.Component {
    render() {
        return(
            <>
            <div>
                <h1>CLASS</h1>
                <h2>Number of Cakes - {this.props.numOfCakes}</h2>
                <button onClick={this.props.buyCake}>Buy Cake</button>
                <button onClick={this.props.makeCake}>Make Cake</button>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        makeCake: () => dispatch(makeCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)