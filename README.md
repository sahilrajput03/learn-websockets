# Websockets

FYI: `helloworld-socket.io` is deployed @ [https://elegant-chat-app.herokuapp.com/](https://elegant-chat-app.herokuapp.com/).

src: https://www.youtube.com/watch?v=1BfCnjr_Vjg&t=3s

**Merged repo:**

- `sahilrajput03/web-rtc` into OLDER_STUFF directory.

**Connection Initiation:**

- When client sends a request to server for websocket connection, server responds with 101 HTTP response and the handshake is complete.
- At this point tcp/ip connection is left open allowing bi-directional messaging to be done with very low latency.
- The connection is left open until one of the parties is left off.
- Its also known as full-duplex connection in telecommunication terms that means both parties can talk at the same time.

### More

**Yet another page of mine on webrtc projects resources**

- [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-webrtc.md)

**Q. WebSockets is same as WebRTC?**

- Ans. **NO! WebRTC is for browser-to-browser based communication instead of brower to server and backforth. ~ Fireship.io**

- Links:
  - https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
  - https://webrtc.org/

## Reading docs of Socket.io

- **Upgrade Mechanism**

Source: [Click here](https://socket.io/docs/v4/how-it-works/#upgrade-mechanism)

![image](https://user-images.githubusercontent.com/31458531/202636223-5da4becb-d544-4949-90ff-117dd776e22e.png)


- **Registering a Middleware**

Source: [Click Here](https://socket.io/docs/v4/middlewares/#registering-a-middleware)

![image](https://user-images.githubusercontent.com/31458531/202636678-7261d4a7-4daf-43da-a54c-9dd606a0e5bf.png)
