export const Items: {[itemid: string]: ModdedItemData} = {
	bigroot: {
		name: "Big Root",
		spritenum: 29,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['heal'] || move.id === 'bitterblade') {
				this.debug('Big Root boost');
				return this.chainModify([5324, 4096]);
			}
		},
		onTryHealPriority: 1,
		onTryHeal(damage, target, source, effect) {
			const heals = ['leechseed', 'ingrain', 'aquaring', 'strengthsap'];
			if (heals.includes(effect.id)) {
				return this.chainModify([5324, 4096]);
			}
		},
		num: 296,
		desc: "Damaging draining moves deal 30% more damage, status draining moves heal 30% more.",
		gen: 4,
	},
	terashard: {
		name: "Tera Shard",
		spritenum: 658,
		onTakeItem: false,
		onStart(pokemon) {
			const type = pokemon.teraType;
			this.add('-item', pokemon, 'Tera Shard');
			this.add('-anim', pokemon, "Cosmic Power", pokemon);
			if (type && type !== '???') {
				if (!pokemon.setType(type)) return;
				this.add('-start', pokemon, 'typechange', type, '[from] item: Tera Shard');
			}
			this.add('-message', `${pokemon.name}'s Tera Shard changed its type!`);
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'soak' || move.id === 'magicpowder') {
				this.add('-immune', pokemon, '[from] item: Tera Shard');
				return null;
			}
		},
		num: -1000,
		gen: 9,
		desc: "Holder becomes its Tera Type on switch-in.",
	}, /*
	terashardnormal: {
		name: "Tera Shard (Normal)",
		spritenum: 658,
		onTakeItem: false,
		onStart(pokemon) {
			const type = pokemon.hpType;
			this.add('-item', pokemon, 'Tera Shard');
			this.add('-anim', pokemon, "Cosmic Power", pokemon);
			if (type && type !== '???') {
				if (!pokemon.setType('Normal')) return;
				this.add('-start', pokemon, 'typechange', 'Normal', '[from] item: Tera Shard');
			}
			this.add('-message', `${pokemon.name}'s Tera Shard changed its type!`);
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'soak' || move.id === 'magicpowder') {
				this.add('-immune', pokemon, '[from] item: Tera Shard');
				return null;
			}
		},
		num: -1007,
		gen: 9,
		desc: "Holder becomes its Tera Type on switch-in. (Use this if you want to Tera Normal)",
	},	
	terashardfairy: {
		name: "Tera Shard (Fairy)",
		spritenum: 658,
		onTakeItem: false,
		onStart(pokemon) {
			const type = pokemon.hpType;
			this.add('-item', pokemon, 'Tera Shard');
			this.add('-anim', pokemon, "Cosmic Power", pokemon);
			if (type && type !== '???') {
				if (!pokemon.setType('Fairy')) return;
				this.add('-start', pokemon, 'typechange', 'Fairy', '[from] item: Tera Shard');
			}
			this.add('-message', `${pokemon.name}'s Tera Shard changed its type!`);
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'soak' || move.id === 'magicpowder') {
				this.add('-immune', pokemon, '[from] item: Tera Shard');
				return null;
			}
		},
		num: -1008,
		gen: 9,
		desc: "Holder becomes its Tera Type on switch-in. (Use this if you want to Tera Fairy)",
	},	*/
	seginstarshard: {
		name: "Segin Star Shard",
		spritenum: 658,
		fling: {
			basePower: 20,
			status: 'slp',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === 966 || pokemon.baseSpecies.num === 966) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Revavroom') {			
				this.add('-item', pokemon, 'Segin Star Shard');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Segin Star Shard changed its type!`);
			}
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 966 && (move.type === 'Dark' || move.type === 'Steel' || move.type === 'Poison')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'soak' || move.id === 'magicpowder') {
				this.add('-immune', pokemon, '[from] item: Segin Star Shard');
				return null;
			}
		},
		forcedForme: "Revavroom-Segin",
		itemUser: ["Revavroom-Segin"],
		num: -1001,
		gen: 9,
		desc: "Revavroom: Becomes Dark-type, Ability: Intimidate, 1.2x Dark/Poison/Steel power.",
	},	
	schedarstarshard: {
		name: "Schedar Star Shard",
		spritenum: 658,
		fling: {
			basePower: 20,
			status: 'brn',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === 966 || pokemon.baseSpecies.num === 966) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Revavroom') {			
				this.add('-item', pokemon, 'Schedar Star Shard');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Schedar Star Shard changed its type!`);
			}
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 966 && (move.type === 'Fire' || move.type === 'Steel' || move.type === 'Poison')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'soak' || move.id === 'magicpowder') {
				this.add('-immune', pokemon, '[from] item: Schedar Star Shard');
				return null;
			}
		},
		forcedForme: "Revavroom-Schedar",
		itemUser: ["Revavroom-Schedar"],
		num: -1002,
		gen: 9,
		desc: "Revavroom: Becomes Fire-type, Ability: Speed Boost, 1.2x Fire/Poison/Steel power.",
	},	
	navistarshard: {
		name: "Navi Star Shard",
		spritenum: 658,
		fling: {
			basePower: 20,
			status: 'psn',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === 966 || pokemon.baseSpecies.num === 966) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Revavroom') {			
				this.add('-item', pokemon, 'Navi Star Shard');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Navi Star Shard changed its type!`);
			}
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 966 && (move.type === 'Steel' || move.type === 'Poison')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'soak' || move.id === 'magicpowder') {
				this.add('-immune', pokemon, '[from] item: Navi Star Shard');
				return null;
			}
		},
		forcedForme: "Revavroom-Navi",
		itemUser: ["Revavroom-Navi"],
		num: -1003,
		gen: 9,
		desc: "Revavroom: Becomes Poison-type, Ability: Toxic Debris, 1.2x Poison/Steel power.",
	},	
	ruchbahstarshard: {
		name: "Ruchbah Star Shard",
		spritenum: 658,
		fling: {
			basePower: 20,
			volatilestatus: 'confusion',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === 966 || pokemon.baseSpecies.num === 966) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Revavroom') {			
				this.add('-item', pokemon, 'Ruchbah Star Shard');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Ruchbah Star Shard changed its type!`);
			}
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 966 && (move.type === 'Fairy' || move.type === 'Steel' || move.type === 'Poison')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'soak' || move.id === 'magicpowder') {
				this.add('-immune', pokemon, '[from] item: Ruchbah Star Shard');
				return null;
			}
		},
		forcedForme: "Revavroom-Ruchbah",
		itemUser: ["Revavroom-Ruchbah"],
		num: -1004,
		gen: 9,
		desc: "Revavroom: Becomes Fairy-type, Ability: Misty Surge, 1.2x Fairy/Poison/Steel power.",
	},	
	caphstarshard: {
		name: "Caph Star Shard",
		spritenum: 658,
		fling: {
			basePower: 20,
			status: 'par',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === 966 || pokemon.baseSpecies.num === 966) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Revavroom') {			
				this.add('-item', pokemon, 'Caph Star Shard');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Caph Star Shard changed its type!`);
			}
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 966 && (move.type === 'Fighting' || move.type === 'Steel' || move.type === 'Poison')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'soak' || move.id === 'magicpowder') {
				this.add('-immune', pokemon, '[from] item: Caph Star Shard');
				return null;
			}
		},
		forcedForme: "Revavroom-Caph",
		itemUser: ["Revavroom-Caph"],
		num: -1005,
		gen: 9,
		desc: "Revavroom: Becomes Fighting-type, Ability: Stamina, 1.2x Fighting/Poison/Steel power.",
	},	
	tuffytuff: {
		name: "Tuffy-Tuff",
		spritenum: 251,
		fling: {
			basePower: 10,
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Igglybuff' || source.baseSpecies.baseSpecies === 'Jigglypuff' || source.baseSpecies.baseSpecies === 'Wigglytuff') return false;
			return true;
		},
		onModifyDefPriority: 1,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Igglybuff' || pokemon.baseSpecies.baseSpecies === 'Jigglypuff' || pokemon.baseSpecies.baseSpecies === 'Wigglytuff') {
				return this.chainModify(2);
			}
		},
		onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Igglybuff' || pokemon.baseSpecies.baseSpecies === 'Jigglypuff' || pokemon.baseSpecies.baseSpecies === 'Wigglytuff') {
				return this.chainModify(2);
			}
		},
		desc: "Igglybuff line: 2x Defense & Special Defense.",
		itemUser: ["Igglybuff", "Jigglypuff", "Wigglytuff"],
		num: -1006,
		gen: 9,
	},
};
