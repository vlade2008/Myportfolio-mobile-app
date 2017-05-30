import {StackNavigator,NavigationActions} from "react-navigation";

//components
import Index from "../components/Index";

import {Button, Alert, Text} from "react-native";
import React, {Component} from "react";


const resetActionToDashboard = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'index'})
    ]
});

export default  StackNavigator({

    dashboard: {
        screen: Index,
        navigationOptions: ({navigation}) => ({
            title: 'Index',
            headerLeft: null,
        })
    },
}, {
    initialRouteName: 'dashboard',
    headerMode: 'screen',
    cardStyle:{backgroundColor:'white'},
    navigationOptions: {
      headerStyle: {

       elevation: null
     },
     statusBarStyle: 'light',
     headerTintColor: 'white',
     tintColor: 'white'
    }
});
