import { Button, CardTable, Field, InfoContainer } from '@components';
import { TableActionType } from '@src/store/enums';
import { TableState } from '@src/store/interfaces';
import { saveRange } from '@src/utilities';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { calculateAvg } from '../../utilities/calculateInfo';
import './index.scss';

export const CustomRange: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();

	const [avg, setAvg] = useState<any | null>(null);
	const [range, setRange] = useState<TableState>({});

	const [key, setKey] = useState<string>('');
	const [situation, setSituation] = useState<string>('');
	const [actionToAdd, setActionToAdd] = useState('');
	const tableValues = useSelector((state: any) => state.table);

	const [errors, setErrors] = useState({ call: '', raise: '', bluff: '', fold: '' });

	useEffect(() => {
		const res = calculateAvg(tableValues);
		setAvg(res);
	}, [tableValues]);

	const onChange = (event: any) => {
		const {
			target: { name, value }
		} = event;

		if (name.includes('span')) {
			const { info } = tableValues;
			dispatch({
				type: TableActionType.LOAD_TABLE,
				payload: { ...tableValues, info: { ...info, [name]: value } }
			});
		} else {
			dispatch({
				type: TableActionType.LOAD_TABLE,
				payload: { ...tableValues, [name]: value }
			});
		}
	};

	const onClick = (event: any) => {
		const {
			target: { name }
		} = event;
		console.log({ name });
		setActionToAdd(name);
	};

	const handleSave = () => {
		console.log({ range, key });
		console.log({ tableValues });
		try {
			saveRange({ key, situation, ...tableValues });
		} catch (error) {
			console.log({ error });
		}
	};

	return (
		<div className="selector-container">
			<div className="button-container spaced">
				<Button onClick={() => setKey('OR')}>Open Raise</Button>
				<Button onClick={() => setKey('ROR')}>Respuesta vs OR</Button>
				<Button onClick={() => setKey('RES3')}>Respuesta 3Bet</Button>
				<Button onClick={() => setKey('ROL')}>ROL</Button>
				<Button onClick={() => setKey('PUSH')}>Push por Pos. y Stack</Button>
			</div>
			<div className="selector-body">
				<Field
					register={{ onChange: onChange, onClick: onClick }}
					type="text"
					name="raise"
					label="Raise Range"
					error={errors.raise}
					placeholder="Raise Range"
					value={tableValues['raise']}
				/>
				<Field
					register={{ onChange: onChange, onClick: onClick }}
					type="text"
					name="call"
					label="Call Range"
					error={errors.call}
					placeholder="Call Range"
					value={tableValues['call']}
				/>
				<Field
					register={{ onChange: onChange, onClick: onClick }}
					type="text"
					name="bluff"
					label="Bluff Range"
					error={errors.bluff}
					placeholder="Bluff Range"
					value={tableValues['bluff']}
				/>
				<Field
					register={{ onChange: onChange, onClick: onClick }}
					type="text"
					name="fold"
					label="Fold Range"
					error={errors.fold}
					placeholder="Fold Range"
					value={tableValues['fold']}
				/>
			</div>
			<div className="flex-container">
				<div className="row content-container" style={{ justifyContent: 'space-around' }}>
					<Field
						register={{}}
						type="text"
						name="raise"
						error={errors.raise}
						placeholder="Accion"
						value={key}
						disabled={true}
					/>
					<Field
						register={{ onChange: e => setSituation(e.target.value) }}
						type="text"
						name="situacion"
						error={errors.raise}
						placeholder="Situacion"
						value={situation}
					/>
					<Button onClick={handleSave}>Guardar</Button>
				</div>
				<div className="row content-container">
					<CardTable actionToAdd={actionToAdd} isEditable={true} />
					<InfoContainer data={{ ...tableValues?.info, avg }} isEditable={true} onChange={onChange} />
				</div>
			</div>
		</div>
	);
};

export default CustomRange;
