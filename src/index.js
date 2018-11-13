import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Root from './root';
import App from './containers/App';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root'),
);
