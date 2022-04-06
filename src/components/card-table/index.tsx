import { Card } from '@components';
import { TableActionType } from '@src/store/enums';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../spinner';
import './index.scss';

export const CardTable: React.FunctionComponent = ({ isEditable = false, actionToAdd }) => {
	const tableValues = useSelector((state: any) => state.table);
	const dispatch = useDispatch();
	const [mouseDown, setMouseDown] = useState(false);

	const onClick = (combo: string) => {
		if (isEditable && actionToAdd) {
			let value;
			const cards = 'AKQJT98765432';

			const previous = tableValues[actionToAdd]
				.split(',')
				.map(v => {
					if (v.includes('+')) {
						if (v[0] == v[1]) {
							return cards
								.split('')
								.map((c, i) => {
									const index = cards.indexOf(v[0]);
									if (index >= i) {
										return `${c}${c}`;
									}
									return '';
								})
								.filter(a => a != '')
								.join(',');
						} else if (v.includes('s')) {
							return cards
								.split('')
								.map((c, i) => {
									const index1 = cards.indexOf(v[0]) + 1;
									const index2 = cards.indexOf(v[1]);
									if (index1 <= i && index2 >= i) {
										return `${v[0]}${c}s`;
									}
									return '';
								})
								.filter(a => a != '')
								.join(',');
						} else {
							return cards
								.split('')
								.map((c, i) => {
									const index1 = cards.indexOf(v[0]) + 1;
									const index2 = cards.indexOf(v[1]);
									if (index1 <= i && index2 >= i) {
										return `${v[0]}${c}`;
									}
									return '';
								})
								.filter(a => a != '')
								.join(',');
						}
					} else if (v.includes('-')) {
						if (v[0] == v[1]) {
							return cards
								.split('')
								.map((c, i) => {
									const index1 = cards.indexOf(v[0]);
									const index2 = cards.indexOf(v[3]);
									console.log({ index1, index2 });
									if (index1 <= i && index2 >= i) {
										return `${c}${c}`;
									}
									return '';
								})
								.filter(a => a != '')
								.join(',');
						} else if (v.includes('s')) {
							return cards
								.split('')
								.map((c, i) => {
									const index1 = cards.indexOf(v[1]);
									const index2 = cards.indexOf(v[5]);
									console.log(v[1], v[4]);
									if (i >= index1 && i <= index2) {
										return `${v[0]}${c}s`;
									}
									return '';
								})
								.filter(a => a != '')
								.join(',');
						} else {
							return cards
								.split('')
								.map((c, i) => {
									const index1 = cards.indexOf(v[1]);
									const index2 = cards.indexOf(v[4]);
									console.log(v[1], v[4]);
									if (i >= index1 && i <= index2) {
										return `${v[0]}${c}`;
									}
									return '';
								})
								.filter(a => a != '')
								.join(',');
						}
					}
					return v;
				})
				.join(',');

			console.log({ previous });
			try {
				value = [...previous.split(',').filter(value => value != ''), combo].join(',');
			} catch (error) {
				value = combo;
			}

			console.log({ value });

			const pairs = value
				.split(',')
				.filter(c => c[0] == c[1])
				.sort((a, b) => {
					return cards.indexOf(a[0]) - cards.indexOf(b[0]);
				})
				.filter(function (item, pos, ary) {
					return !pos || item != ary[pos - 1];
				})
				.reduce((prev, current) => {
					if (prev) {
						if (cards.indexOf(prev[prev.length - 1]) + 1 == cards.indexOf(current[0])) {
							return `${prev}-${current}`;
						}
						return `${prev},${current}`;
					}
					return current;
				}, '')
				.split(',')
				.map(c => {
					if (c.includes('-')) {
						const splited = c.split('-');
						return splited[0].includes('A')
							? `${splited[splited.length - 1]}+`
							: `${splited[0]}-${splited[splited.length - 1]}`;
					}
					return c;
				})
				.join(',');
			console.log({ pairs });
			const suiteds = value
				.split(',')
				.filter(c => c.includes('s'))
				.sort((a, b) => {
					if (a[0] == b[0]) {
						return cards.indexOf(a[1]) - cards.indexOf(b[1]);
					}
					return cards.indexOf(a[0]) - cards.indexOf(b[0]);
				})
				.filter(function (item, pos, ary) {
					return !pos || item != ary[pos - 1];
				})
				.reduce((prev, current) => {
					if (prev) {
						if (prev[prev.length - 3] == current[0]) {
							if (cards.indexOf(prev[prev.length - 2]) + 1 == cards.indexOf(current[1])) {
								return `${prev}-${current}`;
							}
						}
						return `${prev},${current}`;
					}
					return current;
				}, '')
				.split(',')
				.map(c => {
					if (c.includes('-')) {
						const splited = c.split('-');
						return cards.indexOf(splited[0][1]) == cards.indexOf(splited[0][0]) + 1
							? `${splited[splited.length - 1]}+`
							: `${splited[0]}-${splited[splited.length - 1]}`;
					}
					return c;
				})
				.join(',');

			const offSuiteds = value
				.split(',')
				.filter(c => !c.includes('s') && c[0] != c[1])
				.sort((a, b) => {
					if (a[0] == b[0]) {
						return cards.indexOf(a[1]) - cards.indexOf(b[1]);
					}
					return cards.indexOf(a[0]) - cards.indexOf(b[0]);
				})
				.filter(function (item, pos, ary) {
					return !pos || item != ary[pos - 1];
				})
				.reduce((prev, current) => {
					if (prev) {
						if (prev[prev.length - 2] == current[0]) {
							if (cards.indexOf(prev[prev.length - 1]) + 1 == cards.indexOf(current[1])) {
								return `${prev}-${current}`;
							}
						}
						return `${prev},${current}`;
					}
					return current;
				}, '')
				.split(',')
				.map(c => {
					if (c.includes('-')) {
						const splited = c.split('-');
						return cards.indexOf(splited[0][1]) == cards.indexOf(splited[0][0]) + 1
							? `${splited[splited.length - 1]}+`
							: `${splited[0]}-${splited[splited.length - 1]}`;
					}
					return c;
				})
				.join(',');

			dispatch({
				type: TableActionType.LOAD_TABLE,
				payload: {
					...tableValues,
					[actionToAdd]: `${[pairs, suiteds, offSuiteds].filter(v => v != '').join(',')}`
				}
			});
		}
	};

	const onMouseDown = () => {
		isEditable && setMouseDown(true);
	};
	const onMouseUp = () => {
		isEditable && setMouseDown(false);
	};

	const onMouseEnter = (combo: string) => {
		if (mouseDown && isEditable) {
			onClick(combo);
		}
	};

	const generateGrid = (combosObjectParam: any) => {
		const cards = 'AKQJT98765432';
		const cardList = [];
		for (const c of cards) {
			cardList.push(c);
		}
		const listToGenerate: string[] = [];

		for (let i = 0; i < cardList.length; i++) {
			for (let j = 0; j < cardList.length; j++) {
				const str = i < j ? `${cardList[i]}${cardList[j]}s` : `${cardList[j]}${cardList[i]}`;
				listToGenerate.push(str);
			}
		}

		const combosObjectAux = [
			{ key: 'call', value: combosObjectParam['call'] },
			{ key: 'fold', value: combosObjectParam['fold'] },
			{ key: 'bluff', value: combosObjectParam['bluff'] },
			{ key: 'raise', value: combosObjectParam['raise'] }
		];

		const combosObject = combosObjectAux.filter(c => c.value);

		return listToGenerate.map((c, index) => {
			const suited = c.includes('s');
			let action = [];
			for (const acc of combosObject) {
				if (acc.value) {
					const combos = acc['value']
						.split(',')
						.filter((a: string) => a != '' && a.length > 1)
						.map((a: string) => a.trim());
					for (const auxCombo of combos) {
						/**
						 * Preguntas
						 * 1 - es par
						 * 2 - es +, -, * or null
						 * 3 - es s or null
						 */
						const combo = auxCombo;
						let par = false;
						let tipo = null;
						let suited = false;

						// defino si es par o no
						if (combo[0] == combo[1]) {
							par = true;
						}
						// tipo define rango
						let subCards = '';
						if (combo.includes('+')) {
							tipo = '+';
						} else if (combo.includes('-') && combo.length > 4) {
							tipo = '-';
						}

						// defino suited
						if (combo.includes('s')) {
							suited = true;
						}

						// armo el rango para arriba o para abajo
						if (tipo == '+') {
							subCards = cards.substring(0, cards.indexOf(combo[1]) + 1);
						} else if (tipo == '-') {
							const aux = combo.split('-');
							subCards = cards.substring(cards.indexOf(aux[0][1]), cards.indexOf(aux[1][1]) + 1);
						} else {
							subCards = combo[1];
						}

						// miro los pares
						if (par && c[0] == c[1] && subCards.includes(c[0])) {
							if (suited && c.includes('s')) {
								action.push(acc.key);
							} else if (!suited && !c.includes('s')) {
								action.push(acc.key);
							}
						}

						// miro los demas rangos
						if (!par && c[0] != c[1] && c[0] == combo[0] && subCards.includes(c[1])) {
							if (suited && c.includes('s')) {
								action.push(acc.key);
							} else if (!suited && !c.includes('s')) {
								action.push(acc.key);
							}
						}
					}
				}
			}

			const typeSuited = c.includes('s') ? 'suited' : 'offsuited';

			const dataType = c[0] == c[1] ? 'pair' : typeSuited;

			return (
				<Card
					data-type={dataType}
					key={index}
					suited={suited}
					action={action}
					onMouseDown={() => onClick(c)}
					onMouseEnter={() => onMouseEnter(c)}
				>
					{c}
				</Card>
			);
		});
	};

	return (
		<div className="grid-container" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
			{generateGrid(tableValues)}
		</div>
	);
};

export default CardTable;
