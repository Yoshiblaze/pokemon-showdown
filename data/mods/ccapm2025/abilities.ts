export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	geminfusion: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const item = pokemon.getItem();
			if (move.type === 'Rock' && item?.isGem) {
				move.type = item.name.split(' ')[0];
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.getItem()?.isGem) return;

			const type = pokemon.getItem().name.split(' ')[0];
			// map Rock to the new type, go through Set to delete duplicate entries
			const newTypes = [...new Set(pokemon.getTypes().map(t => t === 'Rock' ? type : t))];

			if (pokemon.getTypes().join() === newTypes.join() || !pokemon.setType(newTypes)) return;
			this.add('-start', pokemon, 'typechange', newTypes.join('/'), '[from] ability: Gem Infusion');
		},
		flags: {},
		name: "Gem Infusion",
		rating: 4,
		num: 1001,
	},
	embodyaspectwellspring: {
		onStart(pokemon) {
			if ((pokemon.baseSpecies.name === 'Ogerpon-Wellspring-Tera' ||
				  pokemon.baseSpecies.name === 'Ogerpon-Pixiedust-Tera') &&
				pokemon.terastallized &&
				!this.effectState.embodied) {
				this.effectState.embodied = true;
				this.boost({ spd: 1 }, pokemon);
			}
		},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
		name: "Embody Aspect (Wellspring)",
		rating: 3.5,
		num: 302,
	},
};
