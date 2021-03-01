import React from 'react';
import ReactDOM from 'react-dom';
import { CssModule } from './CssModule';
import { InlineCss } from './InlineCss';
import { StyledComponent } from './StyledComponent';

ReactDOM.render(
  <React.StrictMode>
    <CssModule />
    <InlineCss />
    <StyledComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);