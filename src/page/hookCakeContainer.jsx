import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake, makeCake } from '../redux'

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return(
        <div>
            <br/>
            <h1>HOOK</h1>
            <h2>Jumlah Kue - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Beli Kue</button>
            <button onClick={() => dispatch(makeCake())}>Buat Kue</button>
        </div>
    )
}
export default HookCakeContainer