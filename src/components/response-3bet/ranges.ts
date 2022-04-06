import { TableState } from '@src/store/branches/table/interfaces';

export interface TableStateData {
	[key: string]: TableState;
}

export const ranges: TableStateData = {
	'EP|MP': {
		fold: 'A9s,A5s-A4s,KJs-KTs,QTs,T9s,98s,77-66',
		bluff: 'AJs-ATs,AQ',
		raise: 'AKs+,KK+,AK',
		call: 'AQs,KQs,QJs,JTs,QQ-88',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'EP|HJ': {
		bluff: 'ATs-A9s,A5s,AQ',
		fold: 'A4s,KTs,QTs,98s,66',
		call: 'AQs-AJs,KJs+,QJs+,JTs,T9s+,JJ-77',
		raise: 'AKs+,QQ+,AK',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'EP|CO': {
		fold: 'KTs,66',
		bluff: 'A9s,A54s,QTs,98s',
		raise: 'AKs+,QQ+,AK',
		call: 'AQs-ATs,KJs+,QJs+,JTs,T9s+,JJ-77,AQ',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'EP|BU': {
		fold: '66',
		bluff: 'A9s,A54s,KTs,QTs,98s',
		raise: 'AKs+,QQ+,AK',
		call: 'AQs-ATs,KJs+,QJs+,JTs,T9s+,JJ-77,AQ',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'EP|SB': {
		bluff: 'A9s,A54s,KTs,QTs,98s',
		raise: 'AKs+,QQ+,AK',
		call: 'AQs-ATs,KJs+,QJs+,JTs,T9s+,JJ-77,AQ,66',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.15x'
		}
	},
	'EP|BB': {
		bluff: 'A9s,A54s,KTs,QTs,98s',
		raise: 'AKs+,QQ+,AK',
		call: 'AQs-ATs,KJs+,QJs+,JTs,T9s+,JJ-77,AQ,66',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.15x'
		}
	},
	'MP|HJ': {
		fold: 'A8s-A6s,KTs-K9s,QTs-Q9s,J9s,87s,76s,55,AT',
		bluff: 'A9s,A5s-A2s,AJ,KQ',
		raise: 'AKs+,KK+,AK',
		call: 'AQs-ATs,KJs+,QJs+,JTs,T9s+,98s,QQ-77,AQ,66',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'MP|CO': {
		fold: 'A7s-A6s,K9s,Q9s,J9s,76s,AT',
		bluff: 'A9s-A8s,A5s-A2s,87s,AJ,KQ',
		raise: 'AKs+,QQ+,AK',
		call: 'AQs-ATs,KTs+,QTs+,JTs,T9s+,98s,JJ-55,AQ',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'MP|BU': {
		fold: 'A7s-A6s,K9s,Q9s,J9s,AT',
		bluff: 'A9s-A8s,A5s-A2s,76s,AJ,KQ',
		raise: 'AKs+,JJ+,AK',
		call: 'AQs-ATs,KTs+,QTs+,JTs,T9s+,98s,87s,AQ,TT-55',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'MP|SB': {
		fold: 'A6s,K9s,Q9s,J9s',
		bluff: 'A9s-A7s,A5s-A2s,AT,KQ',
		raise: 'AKs+,JJ+,AK',
		call: 'AQs-ATs,KTs+,QTs+,JTs,T9s+,98s,87s,76s,AQ-AJ,TT-55',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.16x'
		}
	},
	'MP|BB': {
		fold: 'K9s,Q9s,J9s,AT',
		bluff: 'A9s-A2s,KQ,AJ',
		raise: 'AKs+,JJ+,AK',
		call: 'AQs-ATs,KTs+,QTs+,JTs,T9s+,98s,87s,76s,AQ,TT-55',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.16x'
		}
	},
	'HJ|CO': {
		fold: 'K8s,T8s,97s,65s,54s,44-22,A9,QJ',
		bluff: 'A9s-A2s,76s,77s,KJ,AT',
		raise: 'AKs+,JJ+,AK',
		call: 'AQs-ATs,K9s+,Q9s+,J9s+,T9s+,98s,87s,AQ-AJ,KQ,TT-55',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'HJ|BU': {
		fold: 'K8s,T8s,97s,33-22,A9,QJ',
		bluff: 'A9s-A2s,76s,65s,54s,77s,KJ,AT',
		raise: 'AKs+,JJ+,AK',
		call: 'AQs-ATs,K9s+,Q9s+,J9s+,T9s+,98s,87s,AQ-AJ,KQ,TT-44',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'HJ|SB': {
		fold: 'K8s,T8s,97s,65s,54s,33-22,A9,QJ',
		bluff: 'A9s-A2s,KJ,AT',
		raise: 'AKs+,JJ+,AK',
		call: 'AQs-ATs,K9s+,Q9s+,J9s+,T9s+,98s,87s,76s,AQ-AJ,KQ,TT-44',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.16x'
		}
	},
	'HJ|BB': {
		fold: 'K9s-K8s,Q9s,J9s,T8s,97s,65s,54s,33-22,AT-A9,KJ,QJ',
		bluff: 'A9s-A2s,AJ,KQ',
		raise: 'AKs+,JJ+,AK',
		call: 'AQs-ATs,KTs+,QTs+,JTs+,T9s+,98s,87s,76s,AQ,TT-44',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.15x'
		}
	},
	'CO|BU': {
		fold: 'K8s-K7s,Q8s,J8s,T8s,64s,54s,43s,33-22,A9-A7,KT-K9,QJ-QT,JT',
		bluff: 'A8s-A6s,A4s-A2s,97s,86s,75s,AT,KJ',
		raise: 'AKs+,TT+,AK',
		call: 'AQs-A9s,A5s,K9s+,Q9s+,J9s+,T9s+,98s,87s,76s,65s,AQ-AJ,KQ,99-44',
		info: {
			span01: 'Respuesta a 3bet 3X',
			span02: 'El 4bet es a 2.2x'
		}
	},
	'CO|SB': {
		fold: 'K8s-K7s,Q8s,J8s,T8s,64s,54s,43s,33-22,A9-A7,KT-K9,QJ-QT,JT',
		bluff: 'A8s-A6s,A4s-A2s,97s,86s,75s,AT,KJ',
		raise: 'AKs+,TT+,AK',
		call: 'AQs-A9s,A5s,K9s+,Q9s+,J9s+,T9s+,98s,87s,76s,65s,AQ-AJ,KQ,99-44',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.15x'
		}
	},
	'CO|BB': {
		fold: 'A7s-A6s,K8s-K7s,Q8s,J8s,86s,75s,64s,54s,43s,33-22,A9-A7,KT-K9,QJ-QT,JT',
		bluff: 'A8s,A4s-A2s,T8s,97s,65s,AT,KJ',
		raise: 'AKs+,TT+,AK',
		call: 'AQs-A9s,A5s,K9s+,Q9s+,J9s+,T9s+,98s,87s,76s,AQ-AJ,KQ,99-44',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.15x'
		}
	},
	'BU|SB': {
		fold: 'K3s-K2s,Q7s-Q5s,J7s-J5s,T6s-T5s,96s-95s,85s,53s,43s,A8-A6,A2,K9-K7,Q9-Q8,J9-J8,T9-T8,98',
		bluff: 'K6s-K4s,86s,75s,64s,A5-A3,QT',
		raise: 'AJs+,99+,AQ+',
		call: 'ATs-A2s,KQs-K7s,Q8s+,J8s+,T7s+,97s+,87s,76s,65s,54s,88-22,AJ-A9,KT+,QJ,JT',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.16x'
		}
	},
	'BU|BB': {
		fold: 'K3s-K2s,Q7s-Q5s,J7s-J5s,T6s-T5s,96s-95s,85s,53s,43s,A8-A6,A2,K9-K7,Q9-Q8,J9-J8,T9-T8,98',
		bluff: 'K6s-K4s,86s,75s,64s,A5-A3,QT',
		raise: 'AJs+,99+,AQ+',
		call: 'ATs-A2s,KQs-K7s,Q8s+,J8s+,T7s+,97s+,87s,76s,65s,54s,88-22,AJ-A9,KT+,QJ,JT',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.15x'
		}
	},
	'SB|BB|3Bet': {
		fold: 'J3s-J2s,T5s-T4s,94s,84s,63s,53s,Q3-Q2,J6,T6,96,86',
		bluff: 'J4s,K3-K2,Q5-Q4',
		raise: 'AKs-AJs,QQ-JJ,AQ',
		call: 'ATs,KQs-KJs,QJs,95s,85s,74s,43s,TT-88,AJ-AT,KQ-KJ',
		info: {
			span01: 'Respuesta a 3bet 3.5X',
			span02: 'El 4bet es a 2.1x'
		}
	},
	'SB|BB|ROL': {
		fold: 'K4,Q6,J7,T7,65',
		bluff: 'A3-A2,K6-K5,Q7',
		raise: 'KK+,AK',
		call: 'A9s-A2s,KTs-K2s,QTs-Q2s,JTs-J5s,T9s-T6s,98s-96s,87s-86s,76s-74s,65s-64s,54s,32s,77-22,A9-A4,KT-K7,QJ-Q8,JT-J8,T9-T8,98-97,87,76,54',
		info: {
			span01: 'Respuesta a ROL x3',
			span02: 'El 3bet es a 2.5x'
		}
	}
};
