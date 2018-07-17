import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Card />, document.getElementById('react-card'));
registerServiceWorker();
