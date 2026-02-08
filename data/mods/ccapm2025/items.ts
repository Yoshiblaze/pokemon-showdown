export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	// Changed Items
	berserkgene: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.status === '' && pokemon.useItem())
			{
				pokemon.trySetStatus('ber', pokemon)
			}
		},
		boosts: {},
		num: 0,
		gen: 2,
		isNonstandard: null,
	},

	// Custom Items
	darminitanite: {
		name: "Darminitanite",
		spritenum: 576,
		megaStone: { "Darmanitan": "Darmanitan-Mega" },
		itemUser: ["Darmanitan"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		gen: 9,
		shortDesc: "If held by a Darmanitan, this item allows it to Mega Evolve in battle.",
		num: -1,
	},
	emolgite: {
		name: "Emolgite",
		spritenum: 576,
		megaStone: { "Emolga": "Emolga-Mega" },
		itemUser: ["Emolga"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		gen: 9,
		shortDesc: "If held by an Emolga, this item allows it to Mega Evolve in battle.",
		num: -2,
	},
	flygonite: {
		name: "Flygonite",
		spritenum: 576,
		megaStone: { "Flygon": "Flygon-Mega" },
		itemUser: ["Flygon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		gen: 9,
		shortDesc: "If held by a Flygon, this item allows it to Mega Evolve in battle.",
		num: -3,
	},
	mysterioustusk: {
		name: "Mysterious Tusk",
		spritenum: 382,
		onTakeItem(item, pokemon, source) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;
			if (source?.baseSpecies.name === 'Mamoswine') {
				return false;
			}
			return true;
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;
			if (pokemon.species.name === 'Mamoswine' && move.totalDamage == target.maxhp) {
				pokemon.formeChange('Mamoswine-Overflow', this.effect, true);
			}
		},
		gen: 9,
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
	drearymushroom: {
		name: "Dreary Mushroom",
		spritenum: 609,
		fling: {
			basePower: 30,
		},
		onDamagePriority: 1,
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0 && !target.transformed) {
				target.formeChange('Parasect-Wicked', this.effect, true);
				this.damage(target.baseMaxhp / 8);
				target.addVolatile('berserk'); // change to trySetStatus if that's how we end up coding it
				target.useItem();
				return 0;
			}
		},
		shortDesc: "Parasect: Blocks 1 SE move, loses 1/8 HP instead, changes form, and becomes Berserk. Single use.",
		num: -5,
		gen: 9,
	},
	restorationcapsule: {
		name: "Restoration Capsule",
		spritenum: 6,
		fling: {
			basePower: 10,
		},
		onStart(target) {
			this.add('-item', target, 'Restoration Capsule');
			target.addVolatile('restoring');
		},
		// hazard immunity implemented in moves.ts
		shortDesc: "Aurorus: Hazard immunity, changes its form after 1 turn.",
		num: -6,
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
