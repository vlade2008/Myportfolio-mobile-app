import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Switch,
  Button
} from 'react-native'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as MyStyle from '../styles/index'


 class Index extends Component {
  render() {
    return (
      <View style={{backgroundColor:MyStyle.mainCOlor,marginTop:200}}>
        <Text style={{color:'black'}}>asdasd</Text>
      </View>
    )
  }
}
function mapStateToProps(state){
    return {
        profile: state.profile
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
