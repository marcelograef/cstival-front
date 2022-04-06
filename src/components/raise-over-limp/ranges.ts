import { TableState } from '@src/store/branches/table/interfaces';

export interface TableStateData {
	[key: string]: TableState;
}

export const ranges: TableStateData = {
	'HJ-': {
		raise: 'A2s+,KJs+,QJs+,JT+s,77+,AT+,KQ+',
		info: {
			span01: 'Response vs LIMP Any Pos',
			span02: '20+ BB',
			messages: [
				'El ROL si es con más de 60bb+ debe ser de 4-6bb. A mayor stack deep, más grande el size del ROL. Recordar que nuestras manos buenas quieren sacar valor y achicar el SPR',
				'ROL en la BB vs SB: Rara vez la SB nos va a limp-shovear, porque no pensará que estemos ROLeando tan loose. Con 25-35bbs podemos checkear más suited connectors, ya que estas manos se benefician de barrelear en deep, o checkear atrás el flop y jugar SPR más grandes.'
			]
		}
	},
	'CO|BU': {
		raise: 'A2s+,KTs+,QTs+,JT+s,T9s+,98s+,87s+,76s+,65s+,77+,A9+,KJ+',
		info: {
			span01: 'Response vs LIMP',
			span02: '20+ BB',
			messages: [
				'El ROL si es con más de 60bb+ debe ser de 4-6bb. A mayor stack deep, más grande el size del ROL. Recordar que nuestras manos buenas quieren sacar valor y achicar el SPR',
				'ROL en la BB vs SB: Rara vez la SB nos va a limp-shovear, porque no pensará que estemos ROLeando tan loose. Con 25-35bbs podemos checkear más suited connectors, ya que estas manos se benefician de barrelear en deep, o checkear atrás el flop y jugar SPR más grandes.'
			]
		}
	},
	BB: {
		raise: 'A6s+,K5s+,Q8s+,J8+s,T8s+,98s+,86s,75s,44+,A8+,K7+,Q9+,J9+',
		info: {
			span01: 'Response vs LIMP de SB',
			span02: '15+ BB',
			messages: [
				'El ROL si es con más de 60bb+ debe ser de 4-6bb. A mayor stack deep, más grande el size del ROL. Recordar que nuestras manos buenas quieren sacar valor y achicar el SPR',
				'ROL en la BB vs SB: Rara vez la SB nos va a limp-shovear, porque no pensará que estemos ROLeando tan loose. Con 25-35bbs podemos checkear más suited connectors, ya que estas manos se benefician de barrelear en deep, o checkear atrás el flop y jugar SPR más grandes.'
			]
		}
	}
};
