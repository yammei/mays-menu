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

<h2 id='v'>V. System Documentation</h2>

</b>Feature-Index</b>
<br>1. <a href='#f1'>Switching Screens</a>
<br>2. <a href='#f2'>Database Schema</a>

<hr>

<section id='f1'>
<b>[1]Screen Navigation</b><br><br>

Dependencies:
```js
// These imports are the main dependencies.
import { StackScreensList } from '@/app/(tabs)/App';
import { StackNavigationProp } from '@react-navigation/stack';

// Component Example
<NavBarButton
    name='Main'                     // string
    component='MainPage'            // keyof StackScreensList
    func={testFunction}             // () => void
    cid={1}                         // number
    color={preset.colorIcon}        // string
    size='0 0 576 512'              // string
    pathing='M575.8 255.5c0...'     // string
    navigation={navigation}         // StackNavigationProp<StackScreenList>;
/>
```
Component Description:<br>
The navigation bar buttons allows the user to navigate between various pages and components.<br>

Architecture:<br><br>
<img src='https://raw.githubusercontent.com/yammei/image-repo/main/r6.png'/>
</section>

<section id='f2'>

<hr>
<b>[2] Database Schema</b><br><br>

Architecture:
```sql
create database maysmenu_database;
use maysmenu_database;

create user_account_data (
    uid         int auto_increment  primary key,
    first_name  varchar(30)         not null,
    last_name   varchar(30)         not null,
    username    varchar(20)         not null,
    password    varchar(255)        not null,
    email_address           varchar(50)         not null unique,
    email_subscription      boolean             default false,
    account_type            varchar(30)         default 'user',
    account_creation_date   timestamp           default current_timestamp,
    last_successful_login   timestamp           null,
    failed_login_attempts   int                 default 0,
    profile_picture_id      int                 default 1,
);

create user_app_data (
    uid             int auto_increment  primary_key,
    friends_list    varchar(5000)       null,
    blocked_list    varchar(5000)       null,
    itineraries     varchar(5000)       null,

);

create trigger
after insert
on users for each row
begin
    -- Trigger logic.
end;
```

</section>
