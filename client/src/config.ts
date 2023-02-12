// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'gw1l6meodj'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nzntu7ix.us.auth0.com',
  domain: 'dev-n753vqibxmqp70uw.us.auth0.com',            // Auth0 domain
  clientId: '9CtQ1xAmW73VuEWhIs6bYRZcd2WnlELw',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
