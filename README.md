# SparkUp -  Social Media for Millennials

## About SparkUp:

- SparkUp is a social media app aimed at young adults and millennials who are seeking an alternative to mainstream social networks. The app provides a platform for users to express their creative side and connect with like-minded individuals. 
- SparkUp's unique features include a focus on user-generated content such as blogs and photography, as well as interactive tools for collaboration and discovery.
- The target audience for SparkUp is tech-savvy individuals aged 18-35 who value self-expression and connection with a community that shares their interests and passions.

## Features


- Post Feeds (PostsWidget/PostWidget)
    - Like/Unlike
    - View Comments
    - Add/Remove Friend
- Backend Routes
  - /createPost
  - /getFeedPosts
  - /getUserFriends
  - /getUserPosts
  - /likePost
  - /register
  - /login
  - File Upload (Multer)
  - /getUsers
  - /chats/receive
  - /chat/send
- Deployed the backend on Azure and frontend on Vercel
- Auth Service and Route Guards
- Designed UI using Tailwind CSS
- User Profile Page
  - Assembled the widgets to design the profile page
- MyPostWidget
  - Widget to create a new post (Upload Image/Write Caption)
- Login/SignUp pages
- File Upload (Dropzone)
- UserWidget
  - Shows user details on the home page and profile page 
  - Profile Picture, Name, Friend Count, Location, etc.
- Navigation Panel
- FriendListWidget
  - Displays friends of logged-in user/friends of the person whose profile is being viewed
- Home Page
  - Assembled all the widgets to design the home page
- AdvertWidget
  -Shows a static advertisement of Openscreen Inc.
- Live Chat
  - Direct messaging with your friends
  - Used pooling technique
  - Only logged-in users can see their chats with friends because of a message key generated at the backend


## Deployments

- Backend: [https://sparkup.azurewebsites.net/](https://sparkup.azurewebsites.net/)
- Angular App: [https://sparkup-angular.vercel.app/](https://sparkup-angular.vercel.app/)
