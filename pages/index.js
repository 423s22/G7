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
  Modal,
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
        {/*start of Daniel's UI, might not be in the right place,
           cant tell due to unknown variables */}
        <Layout>
          <Layout.Section oneHalf>
            <Card title="Basic Shirt">
              <Card.Section>
                <Thumbnail
                  source="https://www.kindpng.com/picc/m/2-27631_transparent-blank-white-shirt-png-plain-white-t.png"
                  size="large"
                  alt="White Shirt"
                />
                <p> Decal Options</p>
                <ButtonGroup segmented>
                  <Button>None</Button>
                  <Button>Skull</Button>
                  <Button>Motorcycle</Button>
                </ButtonGroup>
              </Card.Section>

              <Card.Section>
                <TextStyle varation="strong">Total</TextStyle>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card title="Samurai Shirt">
              <Card.Section>
                <Thumbnail
                  source="https://ajstore.in/wp-content/uploads/2021/04/tshirt-mockup-cyberpunk-2077-samurai_0000_black.jpg"
                  size="large"
                  alt="Samurai Shirt"
                />
                <p>Shirt Color</p>
                <ButtonGroup segmented>
                  <Button>Black</Button>
                  <Button>White</Button>
                  <Button>Gray</Button>
                </ButtonGroup>
              </Card.Section>

              <Card.Section>
                <TextStyle varation="strong"> Total </TextStyle>
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
        {/*End of Daniel's UI*/}
      </Page>
    );
  }
  handleSelection(resources) {
    console.log(resources);
    const idFromResources = resources.selection.map((product) => [
      product.handle,
      product.id,
    ]);
    this.setState({ open: false });
    this.setState({ rows: idFromResources });
    console.log(idFromResources);
  }
}

export default Index;
