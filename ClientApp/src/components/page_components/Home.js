import React, { Component } from "react";
import TopbarComponents from "../global_components/Topbar";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productAction from "../../actions/product-action";
import * as pageAction from "../../actions/page-action";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: "Hello World",
      index: 0,
      round: 0,
      JsonResponse: [],
    };
  }

  componentDidMount() {
    this.props.PageAction.setPageID(1);
    this.loadData();
  }

  loadData() {
    //api
    var endpoint = "";
    window.WebServiceMode == "prod"
      ? (endpoint = window.WebServiceEndpoint)
      : (endpoint = window.WebServiceLocal);
    const url = endpoint + "api/Personal/MyInfo/";

    const body = JSON.stringify({
      // Property1: "",
      // Property2: "",
      // PageIndex: this.state.index,
      // PageSize: window.PageSize,
      // Orderby: "",
      Name: "Cop",
    });

    axios
      .post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("api response:" + response.data.CizName);
        if (response.data !== null) {
          if (this.state.round === 0) {
            this.setState({
              JsonResponse: response.data.products,
              index: 1,
              round: 1,
            });
          } else {
            let data = this.state.JsonResponse;
            for (let i = 0; i < response.data.products.length; i++) {
              data.push({
                productId: response.data.products[i].productId,
                productNameEng: response.data.products[i].productNameEng,
              });
            }
            this.setState({ JsonResponse: data, index: this.state.index + 1 });
          }
        }
      });
  }

  onClickChange() {
    this.setState({ Text: "Click" });
  }

  render() {
    // const products = this.state.JsonResponse;

    return (
      <React.Fragment>
        <center>
          <TopbarComponents />
          <div>{this.state.Text}</div>
          <button onClick={() => this.onClickChange()}>Click</button>
        </center>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ProductAction: bindActionCreators(productAction, dispatch),
  PageAction: bindActionCreators(pageAction, dispatch),
});

export default connect(null, mapDispatchToProps)(Home);
