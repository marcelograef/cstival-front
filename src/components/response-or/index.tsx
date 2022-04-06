import { CardTable, InfoContainer } from '@components';
import { TableState } from '@src/store/interfaces';
import { getData } from '@src/utilities';
import { TableActionType } from '@store/enums';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//import { ranges } from './ranges';
import { calculateAvg } from '../../utilities/calculateInfo';
import './index.scss';

export const ResponseOR: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const [avg, setAvg] = useState<any | null>(null);
	const [range, setRange] = useState<TableState>({ info: {} });

	const [yourPosition, setYourPosition] = useState('');
	const [villainPosition, setVillainPosition] = useState('');

	useEffect(() => {
		const res = calculateAvg(range);
		setAvg(res);
	}, [range]);

	const getPositions = (player = '') => {
		const positions = 'UTG-1,UTG,UTG+1,MP,MP+1,HJ,CO,BU,SB,BB';
		const positionsArray = positions.split(',');
		return positionsArray.map((p: string) => {
			let active = '';
			if (player) {
				active = yourPosition == p ? 'active' : '';
			} else {
				active = villainPosition == p ? 'active' : '';
			}

			return (
				<button
					className={`selector ${active}`}
					key={p}
					disabled={
						player && positionsArray.indexOf(p) - 1 < positionsArray.indexOf(villainPosition) ? true : false
					}
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

						const realYourPos = getRealPosition(indexYP);
						const realVillainPos = getRealPosition(indexVP);
						dispatch({
							type: TableActionType.LOAD_TABLE,
							payload: {}
						});
						getData('ROR', `${realYourPos}|${realVillainPos}`).then(rangeData => {
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
	return (
		<div className="selector-container">
			<div className="selector-body">{getPositions()}</div>
			<div className="selector-body">{getPositions('you')}</div>
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

export default ResponseOR;
