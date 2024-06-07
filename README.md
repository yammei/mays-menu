<h1>May's Menu</h1>
<p>Food brings people together! May's Menu is an iOS app (in development) for creating and sharing your playlist of favorite foods!</p>

<h2>Master Documentation</h2>
<b>Index</b>
<br>I. <a href='#i'>Project Progress</a>
<br>II. <a href='#ii'>Application Requirements</a>
<br>III. <a href='#iii'>Development Setup</a>
<br>IV. <a href='#iv'>Resources</a>
<br>V. <a href='#v'>Feature Documentation</a>

<h2 id='i'>I. Project Progress</h2>
<!-- ✘ ✔ -->
<br>[Completed] Requirements & System Design
   <a href="#ii">[Document]</a>
<br>[Completed] Wireframe & Mockup 
   <a href="https://www.figma.com/design/8Tctnk4MifOjTbEEL7I5Ja/mays-menu?node-id=0%3A1&t=6K9fCD9sMYFYscwU-1">[Figma]</a>
   <a href="https://github.com/yammei/image-repo/blob/main/r5.png">[Image]</a>
<br>[In Progress] Development & Testing 
   <a href="https://github.com/yammei/mays-menu">[Repo]</a>

<h2 id='ii'>II. Application Requirements</h2>

1. User Account System
    * Unique username, email, password.
    * Optional: profile picture, banner.
2. Application Features
    * Exhaustive list of restaurants (incl. map).
    * Playlist creation (icons, names).
    * Playlist sharing (by link, socials).
3. System Requirements
    * Server VM (GCP West).
    * Distributed API server (Node.js/Express.js).
    * Database server (MySQL).
4. Security Features
    * Password encryption (Argon2).
    * MFA (optional for user).
    * Account privacy settings. 

<h2 id='iii'>III. Development Setup</h2>

<b>Server Setup</b>

```bash
cd backend
npm install
```

<b>Expo Setup</b>

```bash
# Instructions from Expo Doc.
npx create-expo-app@latest
npx expo install expo-dev-client
npx expo start
```

<h2 id='iv'>IV. Resources</h2>

* <a href="https://reactnative.dev/">React Native Documentation</a>
* <a href="https://docs.expo.dev/get-started/start-developing/">Expo Documentation</a>
* <a href="https://docs.expo.dev/get-started/start-developing/](https://react-svgr.com/playground/?native=true&typescript=true)">SVGR</a>

<h2 id='v'>V. Feature Documentation</h2>

</b>Feature-Index</b>
<br>1. <a href='#f1'>Switching Screens</a>
<br>2. <a href='#f2'>Navbar Buttons</a>

<hr>

<section id='f1'>

<b>Feature 1: Navigation: Switching Screens</b><br><br>

Dependencies:
```bash
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
```

Notes:<br>
To be written.

</section>

<section id='f2'>

<hr>
<b>Feature 2: Navigation: Navbar Buttons</b><br><br>

Dependencies:
```js
// These imports are the main dependencies.
import { TouchableWithoutFeedback } from 'react-native';
import Svg, { Path } from 'react-native-svg';

// Component Example
<TopBarButton
   name='Button Name'                  // string
   func={onPressFunction}              // () => void
   cid={1}                             // number
   color='rgb(255, 255, 255)'          // string
   size='0 0 512 512'                  // string
   pathing='SVG d/path attribute.'     // string
   side='left/right'                   // string
   visible={boolean}                   // boolean
/>
```
Component Description:<br>
The navigation bar buttons allows the user to navigate between various pages and components.<br>

</section>


