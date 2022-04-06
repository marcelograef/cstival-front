import { TableState } from '@src/store/interfaces';
import axios from 'axios';

const url = "http://ec2-54-163-62-9.compute-1.amazonaws.com:3001";

export const getData = async (key: string, situation: string): Promise<TableState | void> => {
	return axios
		.get(`${url}/ranges`, {
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
		url: `${url}/ranges`,
		data: body
	}).then(r => {
		return r.data[0];
	});
};
