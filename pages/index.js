import { DataTable, Page } from "@shopify/polaris";
import { ResourcePicker, Provider, Modal } from "@shopify/app-bridge-react";
import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
  state = { open: false, rows: [] };
  // config = {apiKey: API_KEY, host: host}
  render() {
    return (
      <Page
        title="Product selector"
        primaryAction={{
          content: "Select products",
          onAction: () => this.setState({ open: true }),
        }}
      >
        <ResourcePicker
          resourceType="Product"
          open={this.state.open}
          onCancel={() => this.setState({ open: false })}
          onSelection={(resources) => this.handleSelection(resources)}
        />
        <Modal title="my modal" message="Hello world!" open />
        <DataTable
          columnContentTypes={["text", "text"]}
          headings={["Name", "ID"]}
          rows={this.state.rows}
        />
      </Page>
    );
  }
  handleSelection = (resources) => {
    console.log(resources);
    const idFromResources = resources.selection.map((product) => [
      product.handle,
      product.id,
    ]);
    this.setState({ open: false });
    this.setState({ rows: idFromResources });
    console.log(idFromResources);
  };
}

export default Index;
