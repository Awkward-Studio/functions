import { Client, Users } from 'node-appwrite';

export default async function (req, res) {
    const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
        .setProject('66b10a0100095b4634e4')                 // Your Appwrite project ID
        .setKey('standard_a3f97cc2ff9a273cef1940cce2ca0086115a03c46a3cea19de2eebf83ada4186125b71125e10ce8ac853e2834bce01ff380124f3b380ba8bf4e7d070e04a1889e855dc50e45fe5e2d02a18b4140fffbf2574ba4a27b9450e83d4306495570d5a17bfdeb646f7d4100255e08837ac12b744f0ac439b5a2b9111d51b6bba56ac41');                // Admin API key

    const users = new Users(client);

    const userList = await users.list();
    res.json(userList);
    return userList;
};
