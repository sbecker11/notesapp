import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  resourceName: 'authResourceName',
  userPoolName: 'userPoolName',
  identityPoolName: 'identityPoolName',
  allowUnauthenticatedIdentities: false,
  userAttributes: [
    UserAttributes.EMAIL,
    UserAttributes.PHONE_NUMBER,
  ],
  thirdPartyAuth: {
    google: {
      clientId: 'yourGoogleClientId',
      clientSecret: 'yourGoogleClientSecret',
    },
    facebook: {
      appId: 'yourFacebookAppId',
      appSecret: 'yourFacebookAppSecret',
    },
  },
});