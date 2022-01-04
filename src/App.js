import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import MUITest from './Components/MUITest';

const theme = createTheme({
	palette: {
		primary: {
			main: '#f54272'
		},
		secondary: {
			main: '#fff'
		}
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path='mui' element={<MUITest />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
