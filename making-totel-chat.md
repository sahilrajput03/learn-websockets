# making totel chat app

- Use socket.io with nestjs: [Youtube Video](https://www.youtube.com/watch?v=7xpLYk4q0Sg)
- Nestjs docs: [Gateways](https://docs.nestjs.com/websockets/gateways) and [Official example on Github](https://github.com/nestjs/nest/tree/master/sample/02-gateways)
- Socket.io: https://socket.io/docs/v4/

Amazing referece article (has code): https://gabrieltanner.org/blog/nestjs-realtime-chat/

## NESTJS DOCS - FIXING error "Hydration failed because the initial UI does not match what was rendered on the server."

- [React hydration Errror](https://nextjs.org/docs/messages/react-hydration-error) in Nextjs Docs 
- Lovely article: [here](https://www.joshwcomeau.com/react/the-perils-of-rehydration/) from above nextjs docs page and I fixed the isseu using `<ClinetOnly>` component for the issue.
- A Stackoverflow question [related to this](https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render)
- Medium article on making realtime chat app with nextjs only - [Click here](https://betterprogramming.pub/socket-io-and-nextjs-build-real-time-chat-application-part-1-976555ecba). BTW: Theo uses pusher for the RTC communication: [check here](https://github.com/sahilrajput03/nextjs-examples-testing/blob/master/Readme.md#next-auth)
- Implementing socket.io+nextjs+heroku: *45 Upvotes* [Stackoverflow answer](https://stackoverflow.com/questions/57512366/how-to-use-socket-io-with-next-js-api-routes?answertab=scoredesc#tab-top)
