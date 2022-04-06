import { TableState } from '@src/store/interfaces';
import axios from 'axios';

export const getData = async (key: string, situation: string): Promise<TableState | void> => {
	return axios
		.get('http://localhost:3001/ranges', {
			params: {
				key,
				situation
			}
		})
		.then(r => {
			try {
				const { bluff, call, raise, fold, info } = r.data[0];
				const tableState: TableState = {
					bluff,
					call,
					raise,
					fold,
					info: JSON.parse(info.replace(/\'/g, '"'))
				};
				return tableState;
			} catch (error) {
				//console.log({ error });
			}
		});
};
export const saveRange = async (body: any): Promise<TableState> => {
	return axios({
		method: 'post',
		url: 'http://localhost:3001/ranges',
		data: body
	}).then(r => {
		return r.data[0];
	});
};
