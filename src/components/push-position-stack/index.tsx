import { CardTable, InfoContainer } from '@components';
import { TableState } from '@src/store/interfaces';
import { getData } from '@src/utilities';
import { calculateAvg } from '@src/utilities/calculateInfo';
import { TableActionType } from '@store/enums';
import * as React from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { ranges } from './ranges';

export const PushPositionStack: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const [yourPosition, setYourPosition] = useState('');
	const [selectedCell, setSelectedCell] = useState({ row: '', column: '' });
	const [flatRanges, setFaltRanges] = useState<string[]>([]);
	const [flatSelected, setFlatSelected] = useState(-1);

	const [range, setRange] = useState<TableState>({ info: {} });
	const [avg, setAvg] = useState<any | null>(null);
	const tableValues = useSelector((state: any) => state.table);

	useEffect(() => {
		const res = calculateAvg(range);
		setAvg(res);
	}, [range]);

	const positions = 'UTG,UTG+1,MP,MP+1,HJ,CO,BU,SB';
	const bbs = 20;
	const positionsArray = positions.split(',');

	const getPositions = () => {
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
								realPos = 'HJ';
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
							payload: ranges[`${realYourPos}`]
						});
					}}
				>
					{p}
				</button>
			);
		});
	};

	const Grid = forwardRef(({ className, children }: any, ref) => (
		<div ref={ref} className={`table-position-bb ${className}`}>
			{children}
		</div>
	));
	const gridElement = useRef<HTMLElement | null>(null);

	const gridHoveredCellDataAddressAtt = 'data-hovered-cell-address';
	const gridSelectedCellDataAddressAtt = 'data-selected-cell-address';
	const cellDataAddressRow = 'data-row';
	const cellDataAddressCol = 'data-column';

	const updateHoveredCellAddress = (cellElement: HTMLElement) => {
		const dataAddress = `R${cellElement.getAttribute(cellDataAddressRow)}C${cellElement.getAttribute(
			cellDataAddressCol
		)}`;
		if (dataAddress && gridElement) {
			gridElement?.current.setAttribute(gridHoveredCellDataAddressAtt, dataAddress);
		}
	};

	const removeHoveredCellAddress = () => {
		gridElement && gridElement?.current.removeAttribute(gridHoveredCellDataAddressAtt);
	};

	const onMouseOver = (event: any) => {
		if (gridElement?.current) {
			updateHoveredCellAddress(event.currentTarget);
		}
	};

	const onMouseOut = (event: any) => {
		if (gridElement?.current) {
			removeHoveredCellAddress();
		}
	};

	const onClick = (event: any) => {
		event.preventDefault();

		const cellElement = event.currentTarget;
		const row = cellElement.getAttribute(cellDataAddressRow);
		const column = cellElement.getAttribute(cellDataAddressCol);

		const dataAddress = `R${row}C${column}`;
		if (dataAddress && gridElement) {
			setSelectedCell({ row, column });
		}

		let text = event.target.innerText;
		const [pos, bbs] = text.split('-');
		const situation = `${pos.replace('+', '').replace(/\s/, '')}|${bbs.trim()}BB`;

		let flag = false;
		const auxRanges: string[] = [];
		positionsArray.forEach(p => {
			if (flag) {
				auxRanges.push(`F-${p}|${pos.trim().replace('+', '')}|${bbs.trim()}BB`);
			}
			if (p == pos.trim()) {
				flag = true;
			}
		});
		setFaltRanges(auxRanges);
		setFlatSelected(-1);
		dispatch({
			type: TableActionType.LOAD_TABLE,
			payload: {}
		});
		getData('PUSH', situation).then(rangeData => {
			setRange(rangeData);
			dispatch({
				type: TableActionType.LOAD_TABLE,
				payload: rangeData
			});
		});
	};

	const loadRange = (rangeSelector: string, index: number): void => {
		dispatch({
			type: TableActionType.LOAD_TABLE,
			payload: {}
		});
		setFlatSelected(index);
		getData('PUSH', rangeSelector.replace('+', '').replace(/\s/, '')).then(rangeData => {
			setRange(rangeData);
			dispatch({
				type: TableActionType.LOAD_TABLE,
				payload: rangeData
			});
		});
	};

	const renderTable = () => {
		const cells: any[] = [];

		['', ...positionsArray].forEach((current, index, array) => {
			if (current == '') {
				cells.push(
					<div>
						<div className="gridHeader">
							<div className="diagonal"></div>
							<div>
								<span>BBs</span>
							</div>
							<div>
								<span>Pos</span>
							</div>
							<div className="diagonal"></div>
						</div>
					</div>
				);
			} else {
				cells.push(
					<div data-column="0" data-row={index}>
						{current}
					</div>
				);
			}
			for (let i = bbs; i >= 2; i--) {
				if (current == '') {
					cells.push(
						<div
							data-column={i}
							data-row="0"
							onMouseOver={onMouseOver}
							onMouseOut={onMouseOut}
						>{`${i}`}</div>
					);
				} else if (index < 6 && i > 15) {
					cells.push(
						<div data-row={index} data-column={i} onMouseOver={onMouseOver} onMouseOut={onMouseOut}></div>
					);
				} else {
					cells.push(
						<div
							data-row={index}
							data-column={i}
							onMouseOver={onMouseOver}
							onMouseOut={onMouseOut}
							onClick={onClick}
							className={
								`${index}` == `${selectedCell.row}` && `${i}` == `${selectedCell.column}`
									? 'selected'
									: ''
							}
						>{`${current} - ${i}`}</div>
					);
				}
			}
		});
		return <Grid ref={gridElement}>{...cells}</Grid>;
	};
	return (
		<div className="selector-container">
			<div className="selector-body-push">{renderTable()}</div>
			<div className="flex-container">
				<div className="row content-container">
					<>
						<CardTable />
						<InfoContainer data={{ ...range?.info, avg }} />
						{flatRanges.length > 0 && (
							<div className="flat-container">
								<div className="flat-title">Flat</div>
								{flatRanges.map((rangeText: string, index) => {
									const text = rangeText.split('-')[1].split('|')[0];
									return (
										<div
											className={`flat-option ${flatSelected == index ? 'selected' : ''}`}
											onClick={() => loadRange(rangeText, index)}
										>
											{text}
										</div>
									);
								})}
							</div>
						)}
					</>
				</div>
			</div>
		</div>
	);
};

export default PushPositionStack;
