import { CardTable, InfoContainer } from '@components';
import { TableState } from '@src/store/branches/table/interfaces';
import { getData } from '@src/utilities';
import { TableActionType } from '@store/enums';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { calculateAvg } from '../../utilities/calculateInfo';
import './index.scss';

export const OpenRaise: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const [avg, setAvg] = useState<any | null>(null);

	const [selected, setSelected] = useState('');
	const [range, setRange] = useState<TableState | void>({ info: {} });

	useEffect(() => {
		const res = calculateAvg(range);
		setAvg(res);
	}, [range]);

	const getPositions = () => {
		const positions = 'UTG-1,UTG,UTG+1,MP,MP+1,HJ,CO,BU,SB';
		return positions.split(',').map((p: string) => (
			<button
				className={`selector ${p == selected ? 'active' : ''}`}
				key={p}
				onClick={() => {
					setSelected(p);
					dispatch({
						type: TableActionType.LOAD_TABLE,
						payload: {}
					});
					getData('OR', p).then(rangeData => {
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
		));
	};

	return (
		<div className="selector-container">
			<div className="selector-body">{getPositions()}</div>
			<div className="flex-container">
				<div className="row content-container">
					{selected && (
						<>
							<CardTable />
							<InfoContainer data={{ ...range?.info, avg }} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default OpenRaise;
