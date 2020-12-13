import { useState, useContext } from 'react';
import Model from './Model';
import ModelContext from '../context/ModelContext';
const Header = () => {
	const { openModel } = useContext(ModelContext);
	const [state] = useState({
		video: '/assets/videos/header.mp4',
		heading: 'we are travel friends',
		subHeading:
			'Come and join us we tour the most famous & beautiful places in the world',
		logo: '/assets/images/logo.png',
	});

	return (
		<>
			<div className='header'>
				<div className='container pr'>
					<div className='header__logo'>
						<img src={state.logo} alt='logo' />
					</div>
				</div>
				<div className='header__video'>
					<video src={state.video} autoPlay loop muted></video>
				</div>
				<div className='header__content'>
					<div className='container'>
						<div className='header__content__text'>
							<div className='header__content__text__child'>
								<h1 className='header__content__text__child__h1'>
									{state.heading}
								</h1>
								<p className='header__content__text__child__p'>
									{state.subHeading}
								</p>
								<div className='header__content__text__child__link'>
									<button className='btn-default' onClick={() => openModel()}>
										get started
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Model>
				<h1>Hello model</h1>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
				maiores autem esse atque nostrum fuga asperiores aut quisquam ipsam
				quasi eaque amet architecto eos est adipisci, reprehenderit pariatur,
				eveniet odio!
			</Model>
		</>
	);
};
export default Header;
