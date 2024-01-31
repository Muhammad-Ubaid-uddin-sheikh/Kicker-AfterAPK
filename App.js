import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, ScrollView} from 'react-native';
import AppNavigator from './src/routes/AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reduxfolder/index';
const store = createStore(rootReducer);
const App = () => {
    return ( 
        <Provider store={store}>
        <NavigationContainer>
          <StatusBar  barStyle="dark-content"  />
         
          {/* <ScrollView style={styles.form} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> */}
            <AppNavigator />
            {/* </ScrollView> */}
        
        </NavigationContainer>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({

});