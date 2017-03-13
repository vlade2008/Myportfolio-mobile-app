import React, { Component } from 'react'

//components
import IndexComponents from '../components/Index'
//redux
import {Scene, Router, ActionConst, Actions} from 'react-native-router-flux'
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
//create variable
const RouterWithRedux = connect()(Router);


class MyportfolioRouter  extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <RouterWithRedux
        hideNavBar={false}
        showNavigationBar={true}
        duration={0}
        animation={"fade"}
        titleStyle={{ color: 'white',}}
        navigationBarStyle={{ backgroundColor: '#0E5EA8', borderBottomWidth: 0 }}
        barButtonTextStyle={{ color: 'white' }}
        barButtonIconStyle={{ tintColor: 'white' }}>

        <Scene key="root">
          <Scene key="main" component={IndexComponents} title="Main"/>
        </Scene>
      </RouterWithRedux>
    )
  }
}


function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyportfolioRouter);
