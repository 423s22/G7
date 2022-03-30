import { AppProvider, Button, Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

import React from "react";


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
        subtitle="The greatest way to increment your pricing."
        >
          <Button 
          fullWidth
          onClick={() => this.setState({ open: true })}
          >
            Select a Product
          </Button>

        

        </Page>
      </AppProvider>
    );
  }
  handleSelection(resources) {
    console.log(resources);
    const idFromResources = resources.selection.map((product) => [
      product.handle,
      product.id
    ]);
    this.setState({ open: false });
    this.setState({ rows: idFromResources });
    console.log(idFromResources);
  }
}

export default Index;
