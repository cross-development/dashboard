//Core
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from './App';
//Context
import { ThemeContextProvider } from 'context/themeContext';

ReactDOM.render(
	<ThemeContextProvider>
		<App />
	</ThemeContextProvider>,
	document.getElementById('root'),
);
