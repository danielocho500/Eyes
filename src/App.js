import { useState } from 'react';
import './app.scss'
import { Button } from './components/buttons/Button';
import { Eyes } from './components/eyes/Eyes';

import githubLogo from './img/github.svg';

export default function App() {
	
		const [state, setstate] = useState('neutral')

		return (
				<div className="App">
						<Eyes state={state}/>
						<Button setstate={setstate}/>
						<a href='https://github.com/danielocho500/Eyes' target="_blank"><img className='github' alt='github logo' src={githubLogo}/></a>
				</div>
		);
}
