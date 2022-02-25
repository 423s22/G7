# ESOF 423 Group 7
Shopify App

## Members
Daniel Vinogradov (danel2233), James Marsh (nwjm), Riley Slater (Riley-Zlater)

## Scrum Artifacts
https://docs.google.com/spreadsheets/d/1W8RsXhnKqqY7ODa_aBuuRIF6f_MJlCqh/edit#gid=1999516863

## For Users:
This Shopify App allows merchants to create incremental pricing upgrades or "add-ons" to items in their Shopify store, avoiding the need to manually create each price combination in their own store. The customer will see the total cost updated automatically, and receive 1 item in their cart showing the combined price.

Application is still in development & not yet released on the Shopify App Store. Example usage can be found at our [Test Store](https://6rqueqozx1qtycs5-62796234997.shopifypreview.com/)

## For Developers:
You can clone this repository and run the application on your own development store:

1. Install Shopify CLI, Node.js, npm, and Ruby
2. Log in to your Partner Account with the command `shopify login` inside this directory
3. Create an ngrok account and auth token, documentation [here](https://ngrok.com/docs#config)
4. Authenticate with ngrok using your newly created token:
    `shopify app tunnel auth <token>`
5. Start the server:
    `shopify app serve`
6. This will create an installation link to install the application in your Development Store.


