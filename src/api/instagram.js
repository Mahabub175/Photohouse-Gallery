/* eslint-disable import/no-anonymous-default-export */

const fetch = require("node-fetch");

export default async (req, res) => {
  try {
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_KEY_CLIENT;
    const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,media_type,permalink,caption&access_token=${accessToken}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
