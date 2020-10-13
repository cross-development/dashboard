//Core
import React from 'react';
import Dashboard from 'containers/Dashboard';
//Context
import { useThemeContext } from 'context/themeContext';
//Styles
import { GlobalStyles } from 'styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';

const App = () => {
	const { theme } = useThemeContext();

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Dashboard />
		</ThemeProvider>
	);
};

export default App;
