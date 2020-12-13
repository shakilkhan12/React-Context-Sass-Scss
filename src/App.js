import { useState } from 'react';
import './main.scss';
import Header from './components/Header';
import ModelContext from './context/ModelContext';
function App() {
	const [modelState, setModelState] = useState(false);
	const openModel = () => {
		setModelState(true);
	};
	const closeModel = () => {
		setModelState(false);
	};
	return (
		<ModelContext.Provider value={{ modelState, openModel, closeModel }}>
			<Header />
		</ModelContext.Provider>
	);
}

export default App;
