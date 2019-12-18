// vendor
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// custom style
import './assets/scss/styles.scss';
import { App } from './components/App';
const node = document.getElementById('root');

ReactDOM.render(<App />, node);
