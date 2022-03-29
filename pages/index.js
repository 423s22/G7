import { DataTable, Page } from "@shopify/polaris";
import {
  Layout,
  Card,
  TextStyle,
  Thumbnail,
  Button,
  ButtonGroup,
  ResourcePicker,
  Provider,
  Modal
} from "@shopify/app-bridge-react";
import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, rows: [] };
  }
  // config = {apiKey: API_KEY, host: host}
  render() {
    return (
      <Page>
        <p>Hello there</p>
      </Page>
    );
  }
}

export default Index;
