import React, { useEffect, useState } from 'react'
import { states } from '../../helpers/states'

export const Eyes = ({state}) => {

	const [leftLowerRotation, setLeftLowerRotation] = useState('20deg');
	const [leftLowerPosition, setLeftLowerPosition] = useState('40%');
	const [leftUpperRotation, setLeftUpperRotation] = useState('0deg');
	const [leftUpperPosition, setLeftUpperPosition] = useState('0%');
	const [rightLowerRotation, setrightLowerRotation] = useState('-20deg');
	const [rightLowerPosition, setrightLowerPosition] = useState('40%');
	const [rightUpperRotation, setRightUpperRotation] = useState('0deg');
	const [rightUpperPosition, setRightUpperPosition] = useState('0%');
	const [faceRotationX, setFaceRotationX] = useState('0deg');
	const [faceRotationY, setFaceRotationY] = useState('0deg');
	const [faceRotationZ, setfaceRotationZ] = useState('0deg');

	useEffect(() => {
		if(states[state] == undefined) return;

		setLeftLowerRotation(states[state].left.lower.rotation+'deg');
		setLeftLowerPosition(states[state].left.lower.position+"%");
		setLeftUpperRotation(states[state].left.upper.rotation+'deg');
		setLeftUpperPosition(states[state].left.upper.position+"%");

		setrightLowerRotation(states[state].right.lower.rotation+'deg');
		setrightLowerPosition(states[state].right.lower.position+"%");
		setRightUpperRotation(states[state].right.upper.rotation+'deg');
		setRightUpperPosition(states[state].right.upper.position+"%");

		setFaceRotationX(states[state].face.rotationX+'deg');
		setFaceRotationY(states[state].face.rotationY+'deg');
		setfaceRotationZ(states[state].face.rotationZ+'deg');
	}, [state])

    return(
        <div>
            <div className="face-container">
				    <div className="face" style={{'--left-lower-rotation': leftLowerRotation,
												  '--left-lower-position': leftLowerPosition,
												  '--left-upper-rotation': leftUpperRotation,
												  '--left-upper-position': leftUpperPosition,
												  '--right-lower-rotation': rightLowerRotation,
												  '--right-lower-position': rightLowerPosition,
												  '--right-upper-rotation': rightUpperRotation,
												  '--right-upper-position': rightUpperPosition,
												  '--face-rotation-x': faceRotationX,
												  '--face-rotation-y': faceRotationY,
												  '--face-rotation-z': faceRotationZ}}>
								
						    <div className="eye left">
									<div className="lower">
											<div className="lid"></div>
									</div>
										
									<div className="upper">
											<div className="lid"></div>
									</div>
							</div>

							<div className="eye right">
									<div className="lower">
											<div className="lid"></div>
									</div>
										
									<div className="upper">
											<div className="lid"></div>
									</div>
							</div>
						
					</div>
				</div>
        </div>

		
    )
}
