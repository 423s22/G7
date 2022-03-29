import { AppProvider, DataTable, Page } from "@shopify/polaris";
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
      <AppProvider>
        <Page
        title="Welcome to fluid pricing"
        >
          
        </Page>
      </AppProvider>
    );
  }
}

export default Index;
