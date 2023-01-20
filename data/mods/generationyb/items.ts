export const Items: {[itemid: string]: ModdedItemData} = {
// Regular Items
	blunderpolicy: {
		name: "Blunder Policy",
		spritenum: 716,
		fling: {
			basePower: 80,
		},
		onUpdate(pokemon) {
			if (pokemon.moveThisTurnResult === false) {
				this.boost({spe: 2});
				pokemon.useItem();
			}
		},
		// Item activation located in scripts.js
		num: 1121,
		gen: 8,
		desc: "+2 Speed if the holder's move fails. Single use.",
	},
	weatherballoon: {
		name: "Weather Balloon",
		spritenum: 249,
		fling: {
			basePower: 30,
		},
		onModifyDamage(damage, source, target, move) {
			if (this.field.isWeather('snow') || this.field.isWeather('raindance') || this.field.isWeather('sunnyday') || this.field.isWeather('sandstorm')) {
				return this.chainModify(1.2);
			}
		},
		gen: 9,
		desc: "This Pokemon's moves deal 1.2x damage in any weather.",
	},
	firstaidkit: {
		name: "First-Aid Kit",
		spritenum: 249,
		fling: {
			basePower: 80,
		},
		onSwitchOut(pokemon) {
			if (pokemon.status) this.add('-curestatus', pokemon, pokemon.status, '[from] item: First-Aid Kit');
			pokemon.clearStatus();
		},
		gen: 9,
		desc: "Heals the user's status condition on switch-out.",
	},
	ruthlessribbon: {
		name: "Ruthless Ribbon",
		spritenum: 249,
		fling: {
			basePower: 10,
		},
		onModifyDamage(damage, source, target, move) {
			if (target.status || target.hasAbility('comatose')) {
				return this.chainModify([5324, 4096]);
			}
		},
		gen: 9,
		desc: "This Pokemon's moves deal 1.3x damage to targets afflicted with a status condition.",
	},
	sandysupplement: {
		name: "Sandy Supplement",
		spritenum: 385,
		fling: {
			basePower: 70,
		},
		onResidualOrder: 5,
		onResidualSubOrder: 5,
		onResidual(pokemon) {
			if (pokemon.hasType('Rock')) {
				this.heal(pokemon.baseMaxhp / 16);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0 && target.hasType('Rock')) {
				this.debug('Sandy Supplement neutralize');
				return this.chainModify(0.75);
			}
		},
		num: 325,
		gen: 4,
		desc: "Rock-types: Heal 1/16 of their max HP every turn and take 0.75x damage from super effective moves.",
	},

// Link Braces

};
