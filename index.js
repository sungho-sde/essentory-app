/**
 * @format
 */

import {
  AppRegistry,
  Text
} from 'react-native';
import App from './src/components/App';
import {
  name as appName
} from './app.json';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
// Text.defaultProps.style = {
//   color:"red"
// }

AppRegistry.registerComponent(appName, () => App);