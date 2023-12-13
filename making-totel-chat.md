# making totel chat app

## Post man requests

- **Creating locations with api:**

![image](https://user-images.githubusercontent.com/31458531/188494866-58c7a699-24b1-4832-a385-82eeaf18d0d2.png)

- **Creating types api works like that:**

![image](https://user-images.githubusercontent.com/31458531/188493682-6acd3259-ef19-4e29-b1f9-790c4f9424e0.png)

## Using twilio in totel

![image](https://user-images.githubusercontent.com/31458531/186841804-fe7d80f4-f2e8-44fd-83d5-773f6abeb334.png)

![image](https://user-images.githubusercontent.com/31458531/186844787-83cd95b2-36fb-4859-8649-cfa6f7852f52.png)

![image](https://user-images.githubusercontent.com/31458531/186844800-c1b6a1b4-a345-4d2a-8dfe-3e676a885910.png)

Creating a Verify service i.e., OTP verification: (via sms/whatsapp/email/etc

![image](https://user-images.githubusercontent.com/31458531/186848635-532229d2-6461-40da-bb22-d067b03c2e3c.png)

- Now you may pin the product for faster access when you need it later:

![image](https://user-images.githubusercontent.com/31458531/186864367-9a18bf87-436f-4efe-b800-70855ef3024c.png)

- You can check the logs of otps send on your account by navigating to this:

![image](https://user-images.githubusercontent.com/31458531/186871379-4f35ebff-0149-4260-87fa-561065b56457.png)

- You can check usage summary of twilio products via:

![image](https://user-images.githubusercontent.com/31458531/186920471-0d0f0afe-10dd-4e61-a2e7-bfd2dbc27378.png)

- I WAS GETTING ERROR code `20003` probably bcoz my account is suspended. Source: [Error 20003](https://www.twilio.com/docs/api/errors/20003)

![image](https://user-images.githubusercontent.com/31458531/186921909-5397069d-c84d-459f-901e-814cb31d67fd.png)

- Firebase also have signup with phone number as well (Good Guide):  https://firebase.google.com/docs/auth/web/phone-auth?authuser=0&hl=en


## new life

- chat app with firebase: https://youtu.be/zQyrwxMPm88
- logrocket article 2022: https://blog.logrocket.com/how-to-build-chatroom-app-react-firebase/
- fixed firebase db error for temp from this: https://stackoverflow.com/a/54444948/10012446
- login with facebbok-firebase-docs: https://firebase.google.com/docs/auth/web/facebook-login#web-version-9_5
- creating app_id and app_secret: https://support.appmachine.com/support/solutions/articles/80000978442
- [help_video](https://www.youtube.com/watch?v=kEfe9u5F_L0) In facebook setting up login_with you may set site: `https://for-next-auth-example-project.firebaseapp.com` and for **Valid OAuth Redirect URIs** you need to set it to `https://for-next-auth-example-project.firebaseapp.com/__/auth/handler` as suggested when you turn on the fb login from firebase console.
- Firebase Local Emulator Suite: [Docs - Basic info](https://firebase.google.com/docs/emulator-suite), [Implementation: Get Started](https://firebase.google.com/docs/emulator-suite/connect_and_prototype?database=Firestore)
- Firebase emulator suite: The Local Firebase Emulator UI in 15 minutes - Official Googe's Channle: The Local Firebase Emulator UI in 15 minutes: https://youtu.be/pkgvFNPdiEs
- Deployed my [learn-firebase](https://github.com/sahilrajput03/learn-firebase) on gihtub
- Cloud Firestore [Data Model](https://firebase.google.com/docs/firestore/data-model#:~:text=Cloud%20Firestore%20is%20a%20NoSQL,set%20of%20key%2Dvalue%20pairs.)

```bash
# installed firebase cli
npm install -g firebase-tools
# login
firebase login
# list firebase projects
firebase projects:list
# COMPLETE CLI REFERECNE: https://firebase.google.com/docs/cli#sign-in-test-cli


```

```bash
npm install firebase react-firebase-hooks
```

![image](https://user-images.githubusercontent.com/31458531/186233190-ef3f43e3-9319-4e53-9d58-53e73e1a5894.png)

For firestore db I used this version: ![image](https://user-images.githubusercontent.com/31458531/186234576-923d7e96-16a1-4196-9748-c45bed79c929.png)


## We are using this to provide internalization to the nextjs app

![image](https://user-images.githubusercontent.com/31458531/186733854-adba961c-b230-401f-91e7-a0b5fb54e9dc.png)


## previous life

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
- WE are using https://cloudinary.com/ for api for compressing and managing images and videos, check in file: `src/pages/api/upload.js`.

## project understanding

Thats how project auth is organized:

![image](https://user-images.githubusercontent.com/31458531/186140831-3386bc01-0f53-49a5-9f2f-1c758a82f92f.png)

## Other

- Backup of socket.io implementation in nextjs: https://gist.github.com/sahilrajput03/4183cdf2c49bccaa80614bed1c0fd77d


## This is what i need to do to fix the auth via vanillay hooks later on

Source: [css-tricks article on making chat room with firebase and react](https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/)

![image](https://user-images.githubusercontent.com/31458531/186436899-148e2aec-9f31-428f-96ea-a6eaa0e57d53.png)
