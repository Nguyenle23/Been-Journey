const { google } = require('googleapis');
const axios = require('axios');
const Album = require('../models/Album');

const CLIENTID = "618519447606-v77bdn6ojtnjjqr6kv3dmsshd9cc37tn.apps.googleusercontent.com";
const CLIENTSCERET = "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";
const REDIRECTURL = "http://localhost:5000/auth/google";
const API_KEY = "AIzaSyB6kME70IBmkmYru_9CnY19kdGowKGLLVU";

function getTokens({ code, clientId, ClientSecret, redirectUri }) {
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: CLIENTID,
    client_secret: CLIENTSCERET,
    redirect_uri: REDIRECTURL,
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

module.exports = {
  getGoogleAuthURL: async (req, res) => {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const options = {
      redirect_uri: REDIRECTURL,
      client_id: CLIENTID,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/photoslibrary",
        "https://www.googleapis.com/auth/photoslibrary.readonly",
      ].join(" "),
    };
    return res.send(`${rootUrl}?${new URLSearchParams(options)}`);
  },
  getResourceGooglePhoto: async (req, res) => {
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

    const resourceGoogle = await axios
      .get(
        `https://photoslibrary.googleapis.com/v1/sharedAlbums?key=${API_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${tokensRes.access_token}`,
          },
        }
      )
      .then(
        (result) => {
          return result.data;
        }
      )
      .catch((error) => {
        console.error(`Failed to fetch resources`);
        throw new Error(error.message);
      });

    Album.insertMany(resourceGoogle.sharedAlbums, function (error, docs) {
      if (error) {
        console.log(error);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });
    res.send(resourceGoogle.sharedAlbums);
  },
}