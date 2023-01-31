import axios from 'axios';

// export const loginWithGoogle = async () => {
//     const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
//     const options = {
//         redirect_uri: "http://localhost:5000/auth/google",
//         client_id: "618519447606-v77bdn6ojtnjjqr6kv3dmsshd9cc37tn.apps.googleusercontent.com",
//         access_type: "offline",
//         response_type: "code",
//         prompt: "consent",
//         scope: [
//             "https://www.googleapis.com/auth/photoslibrary",
//             "https://www.googleapis.com/auth/photoslibrary.readonly",
//         ].join(" "),
//     };
//     return `${rootUrl}?${new URLSearchParams(options)}`;
// }

export const getAlbums = async (req, res) => {
    return await axios.get('http://localhost:5000/album');
}