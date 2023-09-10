import React from 'react';
import {View, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from './navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './redux/store';

import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <PaperProvider>
          <RootNavigator />
        </PaperProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
