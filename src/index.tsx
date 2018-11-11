import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppDesktop } from './App@desktop'
import { AppMobile } from './App@mobile'

// tslint:disable-next-line:no-var-requires
const DeviceDetector = require('device-detector');

const device = DeviceDetector.parse(navigator.userAgent) || {};
const deviceType = device.type || { type: 'Desktop' };

ReactDOM.render(
  deviceType === 'Desktop' ? <AppDesktop /> : <AppMobile />,
  document.getElementById('root') as HTMLElement
);
