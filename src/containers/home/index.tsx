import { OpenRaise, PushPositionStack, ResponseOR, ROL, Wrapper, Response3Bet, CustomRange } from '@components';
import { TableActionType } from '@src/store/enums';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import './index.scss';

export const Home: React.FunctionComponent = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	let children: React.ReactNode;
	const [draw, setDraw] = useState(children);

	const onClick = (layout: string) => {
		setDraw(layout);
		dispatch({
			type: TableActionType.LOAD_TABLE,
			payload: {}
		});
	};

	return (
		<Wrapper>
			<div className="o-shell">{t('')}</div>
			<div className="header">
				<h1>Estrategia Preflop</h1>
				<div className="sections">
					<h4 className={`${draw === 'OR' ? 'active' : ''}`} onClick={() => onClick('OR')}>
						Open Raise
					</h4>
					<h4 className={`${draw === 'ROR' ? 'active' : ''}`} onClick={() => onClick('ROR')}>
						Respuesta vs OR
					</h4>
					<h4 className={`${draw === 'RES3' ? 'active' : ''}`} onClick={() => onClick('RES3')}>
						Respuesta 3Bet
					</h4>
					<h4 className={`${draw === 'ROL' ? 'active' : ''}`} onClick={() => onClick('ROL')}>
						ROL
					</h4>
					<h4 className={`${draw === 'PUSH' ? 'active' : ''}`} onClick={() => onClick('PUSH')}>
						Push por Pos. y Stack
					</h4>
					<h4 className={`${draw === 'CUSTOM' ? 'active' : ''}`} onClick={() => onClick('CUSTOM')}>
						Custom Range
					</h4>
				</div>
				{draw == 'OR' && <OpenRaise />}
				{draw == 'ROR' && <ResponseOR />}
				{draw == 'RES3' && <Response3Bet />}
				{draw == 'ROL' && <ROL />}
				{draw == 'PUSH' && <PushPositionStack />}
				{draw == 'CUSTOM' && <CustomRange />}
			</div>
		</Wrapper>
	);
};

export default Home;
