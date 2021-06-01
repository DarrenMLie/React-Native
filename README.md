## Video Browser Mobile Application Project

In this project, I created a simple video browser application in React Native using Expo where users can search for short videos by entering a search query into the search bar. The application will then import short free stock videos from an external API and display them in a list that includes a preview image and other relevant information. Finally, the users can add videos to a favorites list where they can easily access the videos.

# Files
In total there are 11 main .js files used to create this mobile application:
- App.js               -> main application function that will be exported and launched, contains the main pipe application component and loading screen component
- pipe.js              -> main application component that loads the different sections of the application
- loadingscreen.js     -> loading screen component that launches when app is booting up
- homescreen.js        -> home screen that is used by users to browse and select videos
- videoscreen.js       -> video screen that is used to display the selected video
- browse.js            -> a component that is part of the homescreen component that displays the search results in a list
- favorites.js         -> a component that is part of the homescreen component that displays the user's favorited videos in a list
- fetchapi.js          -> asynchronous function that is used to fetch information from the external API
- store.js             -> the main part of the redux system that stores the applications state information
- actions.js           -> the part of the redux system that takes in information and convert them to the appropriate format to be dispatched
- reducers.js          -> the part of the redux system that dispatches actions to modify the state information stored in the store

