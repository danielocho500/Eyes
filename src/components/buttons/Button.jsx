import React from 'react'
import './button.scss'

export const Button = ({setstate}) => {

    const changeEmotion = (emotion) => {
		setstate(emotion);
	}

    return(
        <div className='buttons'>
            <button onClick={() => {changeEmotion('neutral')}}> Neutral </button>
			<button onClick={() => {changeEmotion('happy')}}> Happy </button>
		    <button onClick={() => {changeEmotion('sad')}}> Sad </button>
		    <button onClick={() => {changeEmotion('close')}}> Close </button>
		    <button onClick={() => {changeEmotion('angry')}}> Angry </button>
		    <button onClick={() => {changeEmotion('confused')}}> Confused </button>
		    <button onClick={() => {changeEmotion('suspicious')}}> Suspicious </button>
		    <button onClick={() => {changeEmotion('pain')}}> Pain </button>
		    <button onClick={() => {changeEmotion('unamused')}}> Unamused </button>
		    <button onClick={() => {changeEmotion('unsure')}}> Unsure </button>
        </div>
    )
}
