import React, { Component } from 'react'
//redux
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

//navigation
import MyNavigation from '../navigation/MyNavigation';
import { addNavigationHelpers } from 'react-navigation';


class MyportfolioRouter  extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <MyNavigation navigation={addNavigationHelpers({
                 dispatch: this.props.dispatch,
                 state: this.props.nav,
      })} />

    )
  }
}


function mapStateToProps(state) {
  return {
    nav:state.nav
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyportfolioRouter);
