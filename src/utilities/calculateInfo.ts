export const calculateAvg = (combosObjectParam: any): any => {
	if (combosObjectParam) {
		const cards = 'AKQJT98765432';
		const cardList = [];
		for (const c of cards) {
			cardList.push(c);
		}
		const listToGenerate: string[] = [];

		for (let i = 0; i < cardList.length; i++) {
			for (let j = 0; j < cardList.length; j++) {
				const str = i < j ? `${cardList[i]}${cardList[j]}s` : `${cardList[j]}${cardList[i]}`;
				listToGenerate.push(str);
			}
		}

		const combosObjectAux = [
			{ key: 'call', value: combosObjectParam['call'] },
			{ key: 'fold', value: combosObjectParam['fold'] },
			{ key: 'bluff', value: combosObjectParam['bluff'] },
			{ key: 'raise', value: combosObjectParam['raise'] }
		];

		const combosObject = combosObjectAux.filter(c => c.value);

		const totalCombos = listToGenerate.reduce((acum, c) => {
			if (c.includes('s')) {
				return acum + 4;
			} else if (c[0] == c[1]) {
				return acum + 6;
			}
			return acum + 12;
		}, 0);

		const result = [];

		for (const combos of combosObject) {
			const amountCombos = calculateCombos(combos.key, combosObject);
			result.push({
				action: [combos['key'].toUpperCase()],
				avg: `${((amountCombos / totalCombos) * 100).toFixed(2)}%`
			});
		}

		return result;
	}
};

export const calculateCombos = (action: string, combosObject: any) => {
	const cardList = [];
	const cardsString = 'AKQJT98765432';
	for (const c of cardsString) {
		cardList.push(c);
	}
	const listToGenerate: string[] = [];

	for (let i = 0; i < cardList.length; i++) {
		for (let j = 0; j < cardList.length; j++) {
			const str = i < j ? `${cardList[i]}${cardList[j]}s` : `${cardList[j]}${cardList[i]}`;
			listToGenerate.push(str);
		}
	}
	// si no tengo la accion, retorno 0
	if (!combosObject.map((k: any) => k.key).includes(action)) {
		return 0;
	}

	// calculo recorriendo todos los valores posibles de rangos
	return listToGenerate.reduce((acum, cards) => {
		const card01 = cards[0],
			card02 = cards[1],
			cardsSuited = cards.includes('s');

		const combos = combosObject
			.find((com: any) => com.key === action)
			.value.split(',')
			.map((a: string) => a.trim())
			.filter((a: string) => a != '' && a.length > 1);

		for (const combo of combos) {
			// defino si el combo representa un par o no
			const comboPar = combo[0] == combo[1] ? true : false;

			// defino tipo de rango
			let comboTipo = null;
			if (combo.includes('+')) {
				comboTipo = '+';
			} else if (combo.includes('-') && combo.length > 4) {
				comboTipo = '-';
			}

			// defino suited
			const comboSuited = combo.includes('s') ? true : false;

			// armo el rango para arriba o para abajo
			let subCards = combo[1];
			if (comboTipo == '+') {
				subCards = cardsString.substring(0, cardsString.indexOf(combo[1]) + 1);
			} else if (comboTipo == '-') {
				const aux = combo.split('-');
				subCards = cardsString.substring(cardsString.indexOf(aux[0][1]), cardsString.indexOf(aux[1][1]) + 1);
			}

			// miro los pares
			if (comboPar && card01 == card02 && subCards.includes(card01)) {
				return acum + 6;
			}
			// miro los demas rangos
			if (!comboPar && card01 != card02 && card01 == combo[0] && subCards.includes(card02)) {
				if (comboSuited && cardsSuited) {
					return acum + 4;
				} else if (!comboSuited && !cardsSuited) {
					return acum + 12;
				}
			}
		}
		return acum;
	}, 0);
};
