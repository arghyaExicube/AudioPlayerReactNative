/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import App from './App.js';
// import App from './audioPlayer/App.js';

AppRegistry.registerComponent(appName, () => App);
