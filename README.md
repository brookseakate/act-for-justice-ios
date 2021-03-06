# Actionist iOS App
Actionist is an iOS app and [REST API](https://github.com/brookseakate/actionist-api) created as my Capstone Project at [Ada Developers Academy](http://adadevelopersacademy.org/). The goal of the project is to streamline engagement with social justice and political actions from a mobile device.

The iOS App provides a list of Action Alerts of three types: Call, Email, or Event. Users can take actions directly through the app:
- For Call Actions: View a script and place a call using the native iOS phone client.
- For Email Actions: View an email subject line and body; send email using the native iOS email client.
- For Event Actions: View time, date, and location information for the event; add event to device's default calendar.

The [Actionist API](https://github.com/brookseakate/actionist-api) manages [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations for the User, Call Action, Email Action, and Event Action resources.

Learn more about the project at: http://actionistapp.com/

See the API code at: https://github.com/brookseakate/actionist-api

# Installation
The Actionist iOS App is written in JavaScript using [React Native](https://facebook.github.io/react-native/).

## Dependencies
- [Node.js](https://nodejs.org/en/)
- [Watchman](https://facebook.github.io/watchman/)
- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835)
- [React Native CLI](https://www.npmjs.com/package/react-native-cli)

See the [React Native Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) for installation details.

## Getting Started
Before cloning, be sure all necessary packages listed above are installed.

Clone the repo:
```
$ git clone <this-repository-url>
$ cd actionist-ios
```

## Configuration
### Define Environment Variables
The Actionist API requires HTTP Basic authentication for all requests. To communicate with the API, you'll need to specify the username and password to send with `fetch` requests.

Create a file in `app/config` called `environment.js`. Paste in the code below, replacing the username and password values with your authentication information:

```javascript
// app/config/environment.js

const Environment = {
  username: '<your_username>',      // your username here
  password: '<your_password>'       // your password here
};

export default Environment;

```

### Specify API Server
If running the Actionist API on a local server, update the `fetch` request in `app/components/WelcomeView/WelcomeView.js` on line 30. Replace the first argument to fetch (`remote_api`) with `local_api`:

```javascript
// app/components/WelcomeView/WelcomeView.js

...

const local_api = 'http://localhost:5000/api/v1.0/actions';
const remote_api = 'https://actionistapp.com/api/v1.0/actions';

fetch(local_api, req_object)        // updated fetch request
.then((response) => response.json())
.then((responseData) => {
  this._loadActionList(responseData)
})

...
```

## Running in the Simulator
To run the app in the iOS simulator:
```
$ npm install
$ react-native run-ios
```

## Running on Device
To run the app on device, see React Native's [Running on Device](https://facebook.github.io/react-native/docs/running-on-device.html) guide. (If you don't already have one, you'll need to set up an [Xcode Team Provisioning Profile](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html#//apple_ref/doc/uid/TP40012582-CH28-SW7) first.)

# License
This project is released open source under the [MIT License](https://github.com/brookseakate/actionist-ios/blob/master/LICENSE.txt).

# Links
- [Ada Developers Academy Website](http://adadevelopersacademy.org/)
- [Actionist App Website](https://actionistapp.com)
- [Actionist API Code](https://github.com/brookseakate/actionist-api)
- [My Website](http://kateshaffer.com)
- App Icon & Favicon: [Protest by Chris Kerr from the Noun Project](https://thenounproject.com/term/fist/15242)
- Bootstrap Theme (index page):
[New Age](https://startbootstrap.com/template-overviews/new-age/)
