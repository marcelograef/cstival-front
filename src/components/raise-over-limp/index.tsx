import { TableActionType } from '@store/enums';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardTable, InfoContainer } from '@components';
import './index.scss';
import { TableState } from '@src/store/interfaces';
import { calculateAvg } from '@src/utilities/calculateInfo';
import { getData } from '@src/utilities';

export const ROL: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const [yourPosition, setYourPosition] = useState('');
	const [range, setRange] = useState<TableState>({ info: {} });
	const [avg, setAvg] = useState<any | null>(null);

	useEffect(() => {
		const res = calculateAvg(range);
		setAvg(res);
	}, [range]);

	const getPositions = (player = '') => {
		const positions = 'UTG-1,UTG,UTG+1,MP,MP+1,HJ,CO,BU,SB,BB';
		const positionsArray = positions.split(',');
		return positionsArray.map((p: string) => {
			const active = yourPosition == p ? 'active' : '';

			return (
				<button
					className={`selector ${active}`}
					key={p}
					onClick={() => {
						let indexYP = positionsArray.indexOf(yourPosition);
						setYourPosition(p);
						indexYP = positionsArray.indexOf(p);

						const getRealPosition = (pos: number) => {
							let realPos;
							if (pos <= 5 || pos == 8) {
								realPos = 'HJ-';
							} else if (pos == 9) {
								realPos = 'BB';
							} else {
								realPos = 'CO|BU';
							}
							return realPos;
						};

						const realYourPos = getRealPosition(indexYP);
						dispatch({
							type: TableActionType.LOAD_TABLE,
							payload: {}
						});
						getData('ROL', `${realYourPos}`).then(rangeData => {
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
			<div className="flex-container">
				{yourPosition && (
					<div className="row content-container">
						<CardTable />
						<InfoContainer data={{ ...range?.info, avg }} />
					</div>
				)}
			</div>
		</div>
	);
};

export default ROL;
