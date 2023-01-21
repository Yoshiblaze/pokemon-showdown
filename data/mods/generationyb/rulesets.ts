export const Formats: {[k: string]: FormatData} = {
	itemclause: {
		effectType: 'ValidatorRule',
		name: 'Item Clause',
		desc: "Prevents teams from having more than one Pok&eacute;mon with the same item",
		onBegin() {
			this.add('rule', 'Item Clause: Limit one of each item');
		},
		onValidateTeam(team) {
			const itemTable = new Set<string>();
			for (const set of team) {
				const item = this.toID(set.item);
				if (!item) continue;
				if (itemTable.has(item)) {
					return [
						`You are limited to one of each item by Item Clause.`,
						`(You have more than one ${this.dex.items.get(item).name})`,
					];
				}
				itemTable.add(item);
			}
		},
	},
	doubleitemclause: {
		effectType: 'ValidatorRule',
		name: 'Double Item Clause',
		desc: "Prevents teams from having more than two Pok&eacute;mon with the same item",
		onBegin() {
			this.add('rule', 'Double Item Clause: Limit two of each item');
		},
		onValidateTeam(team) {
			const itemTable: {[k: string]: number} = {};
			for (const set of team) {
				const item = this.toID(set.item);
				if (!item) continue;
				if (item in itemTable) {
					if (itemTable[item] >= 2) {
		
};
