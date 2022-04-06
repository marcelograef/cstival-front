import { TableActionType } from '@store/enums';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardTable, InfoContainer } from '@components';
import './index.scss';

import { calculateAvg } from '@src/utilities/calculateInfo';
import { TableState } from '@src/store/interfaces';
import axios from 'axios';
import { getData } from '@src/utilities';

export const Response3Bet: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const [yourPosition, setYourPosition] = useState('');
	const [villainPosition, setVillainPosition] = useState('');
	const [sbAction, setSbAction] = useState('');
	const [range, setRange] = useState<TableState>({ info: {} });
	const [avg, setAvg] = useState<any | null>(null);

	const positions = 'UTG-1,UTG,UTG+1,MP,MP+1,HJ,CO,BU,SB,BB';
	const positionsArray = positions.split(',');

	useEffect(() => {
		const res = calculateAvg(range);
		setAvg(res);
	}, [range]);

	const getPositions = (player = '') => {
		return positionsArray.map((p: string) => {
			let active = '';
			if (player) {
				active = yourPosition == p ? 'active' : '';
			} else {
				active = villainPosition == p ? 'active' : '';
			}

			let disabled;
			if ((!player && p.includes('UTG')) || (player && p == 'BB')) {
				disabled = true;
			} else {
				disabled =
					!player && positionsArray.indexOf(yourPosition) > positionsArray.indexOf(p) - 1 ? true : false;
			}

			return (
				<button
					className={`selector ${active}`}
					key={p}
					disabled={disabled}
					onClick={() => {
						let indexYP = positionsArray.indexOf(yourPosition);
						let indexVP = positionsArray.indexOf(villainPosition);
						if (player == 'you') {
							setYourPosition(p);
							indexYP = positionsArray.indexOf(p);
							if (positionsArray.indexOf(p) - 1 < indexVP) setVillainPosition('');
						} else {
							setVillainPosition(p);
							indexVP = positionsArray.indexOf(p);
						}

						const realYourPos = getRealPosition(indexYP);
						const realVillainPos = getRealPosition(indexVP);
						if (!(yourPosition == 'SB' && villainPosition == 'BB')) {
							setSbAction('');
						}
						dispatch({
							type: TableActionType.LOAD_TABLE,
							payload: {}
						});
						getData('RES3', `${realYourPos}|${realVillainPos}`).then(rangeData => {
							setRange(rangeData);
							dispatch({
								type: TableActionType.LOAD_TABLE,
								payload: rangeData
							});
						});
					}}
				>
					{p}
				</button>
			);
		});
	};

	const getRealPosition = (pos: number) => {
		let realPos;
		if (pos <= 2) {
			realPos = 'EP';
		} else if (pos <= 4) {
			realPos = 'MP';
		} else if (pos == 5) {
			realPos = 'HJ';
		} else if (pos == 6) {
			realPos = 'CO';
		} else if (pos == 7) {
			realPos = 'BU';
		} else if (pos == 8) {
			realPos = 'SB';
		} else {
			realPos = 'BB';
		}

		return realPos;
	};

	const sbVsBbOptions = () => {
		const indexYP = positionsArray.indexOf(yourPosition);
		const indexVP = positionsArray.indexOf(villainPosition);

		const realYourPos = getRealPosition(indexYP);
		const realVillainPos = getRealPosition(indexVP);

		const onClick = (action: string) => {
			setSbAction(action);
			dispatch({
				type: TableActionType.LOAD_TABLE,
				payload: {}
			});
			getData('RES3', `${realYourPos}|${realVillainPos}|${action}`).then(rangeData => {
				setRange(rangeData);
				dispatch({
					type: TableActionType.LOAD_TABLE,
					payload: rangeData
				});
			});
		};
		return (
			<>
				<button
					className={`selector ${sbAction == '3Bet' ? 'active' : ''} not-circle`}
					onClick={() => onClick('3Bet')}
				>
					Respuesta a 3Bet
				</button>
				<button
					className={`selector ${sbAction == 'ROL' ? 'active' : ''} not-circle`}
					onClick={() => onClick('ROL')}
				>
					Respuesta a RoL
				</button>
			</>
		);
	};
	return (
		<div className="selector-container">
			<div className="selector-body">{getPositions('you')}</div>
			<div className="selector-body">{getPositions()}</div>
			{yourPosition == 'SB' && villainPosition == 'BB' && <div className="selector-body">{sbVsBbOptions()}</div>}
			<div className="flex-container">
				{yourPosition && villainPosition && (
					<div className="row content-container">
						<CardTable />
						<InfoContainer data={{ ...range?.info, avg }} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Response3Bet;
