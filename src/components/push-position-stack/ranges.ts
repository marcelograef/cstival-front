import { TableState } from '@src/store/branches/table/interfaces';

export interface TableStateData {
	[key: string]: TableState;
}

export const ranges: TableStateData = {
	HJ: {
		bluff: 'A2s+,KJs+,QJs+,JT+s,77+,AT+,KQ+'
	},
	'CO|BU': {
		bluff: 'A2s+,KTs+,QTs+,JT+s,T9s+,98s+87s+,76s+,65s+,77+,A9+,KJ+'
	},
	BB: {
		bluff: 'A6s+,K5s+,Q8s+,J8+s,T8s+,98s+,86s,75s,44+,A8+,K7+,Q9+,J9+'
	}
};
