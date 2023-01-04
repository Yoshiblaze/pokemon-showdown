export const Moves: {[k: string]: ModdedMoveData} = {
// Changed Moves
	facade: {
		num: 263,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Facade",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon) {
			if (pokemon.status) {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	voltswitch: {
		num: 521,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Volt Switch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	terablast: {
		num: 851,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		shortDesc: "Changes type based on the user's IVs.",
		name: "Tera Blast",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	roost: {
		inherit: true,
		pp: 10,
	},
	recover: {
		inherit: true,
		pp: 10,
	},
	shoreup: {
		inherit: true,
		pp: 10,
	},
	softboiled: {
		inherit: true,
		pp: 10,
	},
	razorwind: {
		num: 13,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: null,
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, slicing: 1, wind: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
	},
	glaciallance: {
		num: 824,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Glacial Lance",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ice",
	},
	secretsword: {
		num: 548,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		isNonstandard: "Past",
		overrideDefensiveStat: 'def',
		name: "Secret Sword",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Beautiful",
	},
	silverwind: {
		num: 318,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: null,
		name: "Silver Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
	},
	ominouswind: {
		num: 466,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: null,
		name: "Ominous Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Beautiful",
	},
	defog: {
		num: 432,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, wind: 1},
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.conditions.get(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			this.field.clearTerrain();
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
	},
	xscissor: {
		num: 404,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "High critical hit ratio.",
		name: "X-Scissor",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	dragonclaw: {
		num: 337,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "High critical hit ratio.",
		name: "Dragon Claw",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	makeitrain: {
		num: 874,
		accuracy: 100,
		basePower: 110,
		category: "Special",
		name: "Make It Rain",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -1,
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Steel",
		contestType: "Beautiful",
	},
	ragefist: {
		num: 889,
		accuracy: 100,
		basePower: 50,
		basePowerCallback(pokemon) {
			return Math.min(150, 50 + 25 * pokemon.timesAttacked);
		},
		category: "Physical",
		shortDesc: "+25 power for each time user was hit. Max 4 hits.",
		name: "Rage Fist",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	lastrespects: {
		num: 854,
		accuracy: 100,
		basePower: 25,
		basePowerCallback(pokemon, target, move) {
			return 25 + 25 * pokemon.side.totalFainted;
		},
		category: "Physical",
		shortDesc: "+25 power for each time a party member fainted.",
		name: "Last Respects",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	triplekick: {
		num: 167,
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		isNonstandard: null,
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 120},
		maxMove: {basePower: 80},
		contestType: "Cool",
	},
	bitterblade: {
		num: 891,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Bitter Blade",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	
// New Moves
	bladebullet: {
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		shortDesc: "Fails unless each known move has been used. Special if SpA > Atk.",
		name: "Blade Bullet",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sacred Sword", target);
		},
		onTry(source) {
			if (source.moveSlots.length < 2) return false; // Last Resort fails unless the user knows at least 2 moves
			let hasBladeBullet = false; // User must actually have Last Resort for it to succeed
			for (const moveSlot of source.moveSlots) {
				if (moveSlot.id === 'bladebullet') {
					hasBladeBullet = true;
					continue;
				}
				if (!moveSlot.used) return false;
			}
			return hasBladeBullet;
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cute",
	},
	boltbomb: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		shortDesc: "Sets Electric Terrain if it hits.",
		name: "Bolt Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Zap Cannon", target);
		},
		onHit() {
			this.field.setTerrain('electricterrain');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Electric",
		contestType: "Beautiful",
	},
	charcoalchakram: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		shortDesc: "Makes the target weaker to Fire.",
		name: "Charcoal Chakram",
		pp: 10,
		priority: 0,
		flags: {slicing: 1, protect: 1, mirror: 1, defrost: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Flame Burst", target);
		},
		secondary: {
			chance: 100,
			onHit(target) {
				target.addVolatile('tarshot');
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	cursedhorns: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		shortDesc: "Heals 50% of damage dealt. 30% chance to poison foe.",
		name: "Cursed Horns",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Horn Leech", target);
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Tough",
	},
	darknarrative: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		shortDesc: "Lowers the foe's SpA by 1 stage.",
		name: "Dark Narrative",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Snarl", target);
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Beautiful",
	},
	deafeningshriek: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		shortDesc: "Has 33% recoil, unless the user has the ability Soundproof or is wearing Headphones.",
		name: "Deafening Shriek",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hyper Voice", target);
			this.add('-anim', source, "Boomburst", target);
		},
		recoil: [1, 3],
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	electrontransfer: {
		accuracy: 95,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			return 49 - 9 * move.hit;
		},
		category: "Physical",
		shortDesc: "Hits 5 times, each hit can miss, each hit gets slightly weaker.",
		name: "Electron Transfer",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 5,
		multiaccuracy: true,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Spark", target);
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {basePower: 120},
		maxMove: {basePower: 140},
	},
	heartbeat: {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		shortDesc: "Hits 2-5 times.",
		name: "Heartbeat",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		multihit: [2, 5],
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Heart Stamp", target);
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	heroswelcome: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		shortDesc: "Only works on the user's first turn active.",
		name: "Hero's Welcome",
		pp: 10,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "First Impression", target);
		},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Hero's Welcome only works on your first turn out.");
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
	},
	
// Legalizing Some Dexited Moves
	psychoboost: {
		inherit: true,
		isNonstandard: null,
	},
	beakblast: {
		inherit: true,
		isNonstandard: null,
	},
	simplebeam: {
		inherit: true,
		isNonstandard: null,
	},
	healbell: {
		inherit: true,
		isNonstandard: null,
	},
};
