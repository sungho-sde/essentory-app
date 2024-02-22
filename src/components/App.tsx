import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigationContainer from '@routes/RootNavigation/containers/RootNavigationContainer';
import rootReducers from '@store/rootReducers';

const myStore = createStore(rootReducers, composeWithDevTools());

type Props = {};

const App = (props: Props) => {
  return (
    // <GestureHandlerRootView
    //   style={{
    //     flex: 1,
    //   }}>
    //   <StatusBar barStyle={'light-content'} />
    // </GestureHandlerRootView>
    <Provider store={myStore}>
      <RootNavigationContainer />
    </Provider>
  );
};

export default App;
