import {AppRegistry} from 'react-native';
import MainPage from './MainPage';
import demo from './demo';
import Edit from './edit';
import {name as appName} from './app.json';
import TabScene from './TabScene';
import Profile from './Profile';
AppRegistry.registerComponent(appName, () => MainPage);