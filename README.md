# Websockets

src: https://www.youtube.com/watch?v=1BfCnjr_Vjg&t=3s

**Connection Initiation:**

- When client sends a request to server for websocket connection, server responds with 101 HTTP response and the handshake is complete.
- At this point tcp/ip connection is left open allowing bi-directional messaging to be done with very low latency.
- The connection is left open until one of the parties is left off.
- Its also known as full-duplex connection in telecommunication terms that means both parties can talk at the same time.

### More

**Yet another page of mine on webrtc projects resources**

- [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-webrtc.md)

**WebSockets is same as WebRTC?**

Ans.**NO**. WebRTC is for browser-to-browser based communication instead of brower to server and backforth. ~ Fireship.io
