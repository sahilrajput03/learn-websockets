# making totel chat app

- Use socket.io with nestjs: [Youtube Video](https://www.youtube.com/watch?v=7xpLYk4q0Sg)
- Nestjs docs: [Gateways](https://docs.nestjs.com/websockets/gateways) and [Official example@Gihub](https://github.com/nestjs/nest/tree/master/sample/02-gateways)
- Socket.io: https://socket.io/docs/v4/

Amazing referece article (has code): https://gabrieltanner.org/blog/nestjs-realtime-chat/

## NESTJS DOCS - FIXING error "Hydration failed because the initial UI does not match what was rendered on the server."

- https://nextjs.org/docs/messages/react-hydration-error
- Lovely article: [here](https://www.joshwcomeau.com/react/the-perils-of-rehydration/) from above nextjs docs page and I fixed the isseu using `<ClinetOnly>` component for the issue.
- a stackoverflow [question related to this](https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render). 
