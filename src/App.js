import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './page/cakeContainer';
import HookCakeContainer from './page/hookCakeContainer';
import IceCreamContainer from './page/iceCreamContainer';
import NewCakeContainer from './page/newCakeContainer';
import ItemContainer from './page/itemContainer';
import UserContainer from './page/userContainer';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Provider store={store}>
          <CakeContainer/>
          <IceCreamContainer/>
          <HookCakeContainer/>
          <NewCakeContainer/>
          <ItemContainer cake/>
          <ItemContainer/>
          <UserContainer/>
      </Provider>
      </>
    )
  }
}
