const express = require('express');
const { google } = require('googleapis');
const axios = require('axios');

const app = express();
const port = 5000;
const CLIENTID = "618519447606-v77bdn6ojtnjjqr6kv3dmsshd9cc37tn.apps.googleusercontent.com";
const CLIENTSCERET = "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";
const REDIRECTURL = "http://localhost:5000/auth/google";

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.json());

app.post('/auth/google', (req, res) => {
  function getGoogleAuthURL() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
      redirect_uri: "http://localhost:5000/auth/google",
      client_id: "618519447606-v77bdn6ojtnjjqr6kv3dmsshd9cc37tn.apps.googleusercontent.com",
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };
    return `${rootUrl}?${new URLSearchParams(options)}`;
  }
  return res.send(getGoogleAuthURL());
});

function getTokens({ code, clientId, ClientSecret, redirectUri }) {
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: "618519447606-v77bdn6ojtnjjqr6kv3dmsshd9cc37tn.apps.googleusercontent.com",
    client_secret: "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",
    redirect_uri: "http://localhost:5000/auth/google",
    grant_type: "authorization_code",
  };
  return axios
    .post(url, new URLSearchParams(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(`Failed to fetch auth tokens`);
      throw new Error(error.message);
    });
}

async function libraryApiSearch(authToken, parameters) {
  let nextPageToken = null;
  let error = null;

  try {
    // Make a POST request to search the library or album
    const searchResponse =
      await fetch(config.apiEndpoint + '/v1/mediaItems:search', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(parameters)
      });
  } catch (err) {
    console.error(error);
  }
}

app.get('/auth/google', async (req, res) => {
  const { code } = req.query;
  const tokensRes = await getTokens({ code, CLIENTID, CLIENTSCERET, REDIRECTURL });

  const oAuth2Client = new google.auth.OAuth2(
    CLIENTID,
    CLIENTSCERET,
    REDIRECTURL
  );
  oAuth2Client.setCredentials({
    access_token: tokensRes.access_token,
    refresh_token: tokensRes.refresh_token
  });

  const photo = libraryApiSearch(code, {
    pageSize: 20,
  })
  console.log(photo);

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

