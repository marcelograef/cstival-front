import { TableActionType } from './enums';

export interface TableInfo {
	span01?: string;
	span02?: string;
	messages?: string[];
}

export interface TableState {
	bluff?: string;
	call?: string;
	raise?: string;
	fold?: string;
	info?: TableInfo;
}

export interface TableAction {
	type: TableActionType;
	payload?: Partial<TableState>;
}
