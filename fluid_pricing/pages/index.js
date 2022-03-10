import React from 'react';

import { Page , Layout , Card, TextStyle, Thumbnail, Button, ButtonGroup} from "@shopify/polaris";

const Index = () => {
  return <Page title="Merchandise">
    <Layout>
      

      <Layout.Section oneHalf>
        //first layout section
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


      /*Second Layout Section, ill use oneHalf method to make 2 separate sections */
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