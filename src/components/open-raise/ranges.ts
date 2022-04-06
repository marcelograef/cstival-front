import { TableState } from '@src/store/branches/table/interfaces';

export interface TableStateData {
	[key: string]: TableState;
}

//TODO: calculate AVG
export const ranges: TableStateData = {
	'UTG-1': {
		raise: 'A9s+,KTs+,QTs+,A5s,JTs+,T9s+,98s+,66+,AQ+',
		info: { span01: 'BBs: 30+', span02: 'OR: 2.25x' }
		//avg: '10,11%'
	},
	UTG: {
		raise: 'A9s+,KTs+,QTs+,A5s,A4s,JTs+,T9s+,98s+,66+,AQ+',
		info: { span01: 'BBs: 30+', span02: 'OR: 2.25x' }
		//avg: '11%'
	},
	'UTG+1': {
		raise: 'A4s+,K9s+,Q9s+,J9s+,T9s+,98s+,87s+,55+,AJ+,KQ+',
		info: { span01: 'BBs: 30+', span02: 'OR: 2.25x' }
		//avg: '14,7%'
	},
	MP: {
		raise: 'A2s+,K9s+,Q9s+,J9s+,T9s+,98s+,87s+,76s+,55+,AT+,KQ+',
		info: { span01: 'BBs: 30+', span02: 'OR: 2.25x' }
		//avg: '16,6%'
	},
	'MP+1': {
		raise: 'A2s+,K9s+,Q9s+,J9s+,T9s+,98s+,87s+,76s+,65s+,44+,AT+,KJ+',
		info: { span01: 'BBs: 30+', span02: 'OR: 2.25x' }
		//avg: '18,3%'
	},
	HJ: {
		raise: 'A2s+,K8s+,Q9s+,J9s+,T8s+,97s+,87s+,76s+,65s+,54s+,22+,A9+,KJ+,QJ+',
		info: { span01: 'BBs: 30+', span02: 'OR: 2.25x' }
		//avg: '23,7%'
	},
	CO: {
		raise: 'A2s+,K7s+,Q8s+,J8s+,T8s+,97s+,86s+,75s+,64s+,54s+,43s+,22+,A7+,K9+,QT+,JT+',
		info: { span01: 'BBs: 30+', span02: 'OR: 2.25x' }
		//avg: '29,7%'
	},
	BU: {
		raise: 'A2s+,K2s+,Q5s+,J5s+,T5s+,95s+,85s+,75s+,64s+,53s+,43s+,22+,A2+,K7+,Q8+,J8+,T8+,98+',
		info: { span01: 'BBs: 30+', span02: 'OR: 2.25x' }
		//avg: '47,8%'
	},
	SB: {
		call: 'KK+,A9s-A2s,KTs-K2s,QTs-Q2s,JTs-J5s,T9s-T6s,98s-96s,87s-86s,76s-74s,65s-64s,54s,32s,77-22,AK,A9-A2,KT-K4,QJ-Q6,JT-J7,T9-T7,98-97,87,76,65,54',
		raise: 'AKs-ATs,KQs-kJs,QJs,J4s-J2s,T5s-T4s,95s-94s,85s-84s,63s,53s,43s,QQ-88,AQ-AT,KQ-KJ,K3-K2,Q5-Q2,J6,T6,96,86',
		info: { span01: 'BBs: 30+', span02: 'OR: 3x' }
	}
};
