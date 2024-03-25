import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';
import AppNavigator from './src/routes/AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reduxfolder/index';
const store = createStore(rootReducer);
import {enableLatestRenderer} from 'react-native-maps';
const App = () => {
    enableLatestRenderer();
    return ( 
        <Provider store={store}>
        <NavigationContainer>
        <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'}/>
          <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
          <View style={{flex:1,padding:0}}>
          {/* <ScrollView style={styles.form} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> */}
            <AppNavigator />
            </View>
            </SafeAreaView>
        </NavigationContainer>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({

});