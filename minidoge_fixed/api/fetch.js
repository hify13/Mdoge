export default async function handler(req, res) {
  try {
    const url = req.query.url;
    if (!url) return res.status(400).send("Missing URL");

    const response = await fetch(url);
    const contentType = response.headers.get("content-type") || "text/html";
    const text = await response.text();

    res.setHeader("Content-Type", contentType);
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send("Server error: " + err.message);
  }
}
