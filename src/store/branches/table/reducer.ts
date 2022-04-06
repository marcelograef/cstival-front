import { TableActionType } from './enums';
import { TableAction, TableState } from './interfaces';

export const initialState: TableState = {
	bluff: '',
	call: '',
	fold: '',
	raise: '',
	info: {}
};

export default (state = initialState, { type, payload }: TableAction): TableState => {
	switch (type) {
		case TableActionType.LOAD_TABLE:
			return {
				...state,
				...initialState,
				...payload
			};

		default:
			return state;
	}
};
