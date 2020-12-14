import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../redux'

function UserContainer({userData, fetchUser}) {
    useEffect(fetchUser, [])// eslint-disable-line
    return userData.loading ? (
        <h2>Loading...</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                {
                    userData 
                    && userData.data 
                    && userData.data.map(user => <p>{user.name}</p>)
                }
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)