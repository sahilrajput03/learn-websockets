# Websockets

- **Procfile for heroku:**
  - [learn-websockets/chat-app](https://github.com/sahilrajput03/learn-websockets/blob/main/learn-socket.io/chat-app/Procfile)
  - [video-chat-app-webrtc](https://github.com/sahilrajput03/video-chat-app-webrtc/blob/hash-router/Procfile)

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

**Q. Amazing Question: Differences between io.to(), io.in(), and socket.to() for emitting to all clients in a room**

[Click here](https://stackoverflow.com/questions/42988262/differences-between-io-to-io-in-and-socket-to-for-emitting-to-all-client)

## Reading docs of Socket.io

- **Server Instance**

  Soure: Click here

  ![image](https://user-images.githubusercontent.com/31458531/202637866-a92a2c12-a9c0-40ff-bc4f-461f04f5a27e.png)
  
- **Socket Instance**

  Source: [Click here](https://socket.io/docs/v4/server-socket-instance/)

  ![image](https://user-images.githubusercontent.com/31458531/202637960-94b9a592-22df-490d-96c9-dbd830409527.png)



- **Upgrade Mechanism**

  Source: [Click here](https://socket.io/docs/v4/how-it-works/#upgrade-mechanism)

  ![image](https://user-images.githubusercontent.com/31458531/202636223-5da4becb-d544-4949-90ff-117dd776e22e.png)


- **Registering a Middleware**

  Source: [Click Here](https://socket.io/docs/v4/middlewares/#registering-a-middleware)

  ![image](https://user-images.githubusercontent.com/31458531/202636678-7261d4a7-4daf-43da-a54c-9dd606a0e5bf.png)

- **Sending Creentials**

  Source: [Click here](https://socket.io/docs/v4/middlewares/#sending-credentials)

  ![image](https://user-images.githubusercontent.com/31458531/202637567-c9b265d3-3e25-4a94-a2ce-014436c5a44d.png)

- **Events**

  Source: [Click here](https://socket.io/docs/v4/server-instance/#events)

  ![image](https://user-images.githubusercontent.com/31458531/202638874-63449bb0-fd03-4633-986d-4f959fcbec9c.png)

- **Complete Api - Version 4.x**

  [Click here](https://socket.io/docs/v4/server-api/#server)
  
  ![image](https://user-images.githubusercontent.com/31458531/202639303-96edd383-3f8d-4adc-bff6-d05021015629.png)

- **Acknowledgements:**

  Docs: [Click here](https://socket.io/docs/v3/emitting-events/#acknowledgements)
  
  ![image](https://user-images.githubusercontent.com/31458531/209868857-51bcab9c-3ba1-4cd3-b9c9-c492e59fb91d.png)
