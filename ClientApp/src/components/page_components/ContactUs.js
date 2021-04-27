import React, { Component } from "react";
import TopbarComponents from "../global_components/Topbar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as pageAction from "../../actions/page-action";

class ContactUs extends React.Component {
  componentDidMount() {
    this.props.PageAction.setPageID(2);
    // this.loadData();
  }

  render() {
    //   const productList = this.props.Product.productList;
    //   const productID = this.props.Product.productID;
    return <React.Fragment>Page 2</React.Fragment>;
  }
}

const mapStateToProps = (state) => ({
  Product: state.Product,
});

const mapDispatchToProps = (dispatch) => ({
  PageAction: bindActionCreators(pageAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
