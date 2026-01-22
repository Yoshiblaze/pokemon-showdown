export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	darminitanite: {
		name: "Darminitanite",
		spritenum: 576,
		megaStone: "Darmanitan-Mega",
		megaEvolves: "Darmanitan",
		itemUser: ["Darmanitan"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		gen: 9,
		shortDesc: "If held by a Darmanitan, this item allows it to Mega Evolve in battle.",
		num: -1,
	},
	emolgite: {
		name: "Emolgite",
		spritenum: 576,
		megaStone: "Emolga-Mega",
		megaEvolves: "Emolga",
		itemUser: ["Emolga"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		gen: 9,
		shortDesc: "If held by an Emolga, this item allows it to Mega Evolve in battle.",
		num: -2,
	},
	flygonite: {
		name: "Flygonite",
		spritenum: 576,
		megaStone: "Flygon-Mega",
		megaEvolves: "Flygon",
		itemUser: ["Flygon"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		gen: 9,
		shortDesc: "If held by a Flygon, this item allows it to Mega Evolve in battle.",
		num: -3,
	},
	pixiedustmask: {
		name: "Pixiedust Mask",
		spritenum: 759,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.name.startsWith('Ogerpon-Pixiedust')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Ogerpon') return false;
			return true;
		},
		forcedForme: "Ogerpon-Pixiedust",
		itemUser: ["Ogerpon-Pixiedust"],
		shortDesc: "Ogerpon-Pixiedust: 1.2x power attacks; Terastallize to gain Embody Aspect.",
		num: -4,
		gen: 9,
	},
	ultrasimiseariumz: {
		name: "Ultrasimisearium Z",
		spritenum: 687,
		onTakeItem: false,
		zMove: "Yin-Yang Blast",
		zMoveFrom: "Fire Blast",
		itemUser: ["Simisear-Ultra"],
		shortDesc: "Simisear: Ultra Burst, then Z-Move w/ Fire Blast.",
		num: -4,
		gen: 9,
	},
	buggem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Bug' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Bug' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	darkgem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Dark' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Dark' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	dragongem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Dragon' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Dragon' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	electricgem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Electric' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Electric' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	fairygem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Fairy' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Fairy' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	fightinggem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Fighting' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Fighting' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	firegem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Fire' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Fire' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	flyinggem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Flying' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Flying' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	ghostgem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Ghost' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Ghost' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	grassgem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Grass' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Grass' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	groundgem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Ground' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Ground' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	icegem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Ice' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Ice' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	normalgem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Normal' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Normal' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	poisongem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Poison' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Poison' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	rockgem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Rock' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Rock' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	steelgem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Steel' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Steel' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
	watergem: {
		inherit: true,
		isNonstandard: null,
		onTakeItem(item, pokemon, source) {
			if (source.name === "Diancie" || source?.ability === "geminfusion" || pokemon.ability === "geminfusion") {
				return false;
			}
			return true;
		},
		onUseItem(item, pokemon) {
			if ((pokemon.name === "Diancie" || pokemon?.ability === "geminfusion") && item?.isGem) {
				return false;
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Water' && source.ability === "geminfusion") {
				source.addVolatile('gem');
			} else if (move.type === 'Water' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
	},
};
