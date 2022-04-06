import * as React from 'react';
import { useState } from 'react';
import Field from '../field';
import './index.scss';

interface Props {
	readonly data: any;
}

export const InfoContainer: React.FunctionComponent<Props> = ({ data, isEditable, onChange }) => {
	const { messages, ...info } = data;
	const [errors, setErrors] = useState({ span01: '', span02: '' });

	if (info) {
		const { span01, span02 } = info;
		return (
			<div className="table-info">
				<div className="info">
					{span01 && !isEditable && <div className="span01">{info?.span01}</div>}
					{span02 && !isEditable && <div className="span02">{span02}</div>}
					{isEditable && (
						<>
							<Field
								register={{ onChange: onChange }}
								type="text"
								name="span01"
								placeholder="Info"
								error={errors.span01}
							></Field>
							<Field
								register={{ onChange: onChange }}
								type="text"
								name="span02"
								placeholder="Info"
								error={errors.span02}
							></Field>
						</>
					)}
				</div>
				<div className="avg-container">
					{info?.avg &&
						info?.avg?.map((k: any, i: number) => (
							<div key={i} className="avg" data-action={k.action}>
								{k.action}: {k.avg}
							</div>
						))}
				</div>
				<div className="text-container">
					{messages?.map((k: string, i: any) => (
						<div key={i}>{k}</div>
					))}
				</div>
			</div>
		);
	}
	return null;
};

export default InfoContainer;
