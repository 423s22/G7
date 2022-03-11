import { Heading, Page } from "@shopify/polaris";

export default function Index() {
  return (
    <Page
    fullWidth
    title="Products"
    primaryAction={{
      content: "Select Products",
      onAction: () => console.log("Hello")
    }}>
      <Heading>
        Shopify app with Node and React{" "}
        <span role="img" aria-label="tada emoji">
          🎉
        </span>
      </Heading>
    </Page>
  );
}
/* 
import React from 'react';
import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

class Index extends React.Component {
  state = { open: false }
  render() {
    return (
      <Page
        title='Product selector'
        primaryAction={{
          content: 'Select products',
          onAction: () => this.setState({open: true})
        }}
      >
        <ResourcePicker
          resourceType='Product'
          open={this.state.open}
          onCancel={() => this.setState({open: false})}
          onSelection={(resources) => this.handleSelection(resources)}
        />
      </Page>
    )
  }
  handleSelection = (resources) => {
    const idFromResources = resources.selection.map((product) => product.id);
    this.setState({open: false})
    console.log(idFromResources);
  }
}

export default Index;
 */
/* import React from 'react';

import { Page , Layout , Card, TextStyle, Thumbnail, Button, ButtonGroup} from "@shopify/polaris";

const Index = () => {
  return <Page title="Merchandise">
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
        <Card title = "Samurai Shirt">
        <Card.Section>
          <Thumbnail
            source="https://ajstore.in/wp-content/uploads/2021/04/tshirt-mockup-cyberpunk-2077-samurai_0000_black.jpg"
            size="large"
            alt="Samurai Shirt"
          />
          <p>
              Shirt Color
    </p>
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
    </Layout>;
  </Page>;
};

export default Index; 
 */