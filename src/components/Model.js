import { useContext } from 'react';
import ModelContext from '../context/ModelContext';
const Model = (props) => {
	const { modelState, closeModel } = useContext(ModelContext);
	const removeModel = (e) => {
		const className = e.target.getAttribute('class');
		if (className === 'model') {
			closeModel();
		}
	};
	return (
		<>
			{modelState ? (
				<div className='model' onClick={(e) => removeModel(e)}>
					<div className='model__body'>{props.children}</div>
				</div>
			) : (
				''
			)}
		</>
	);
};
export default Model;
