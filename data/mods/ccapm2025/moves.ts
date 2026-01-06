export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	// New Moves
	primalpulse: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Primal Pulse",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, distance: 1, metronome: 1, pulse: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Morning Sun', target);
			this.add('-anim', source, 'Aura Sphere', target);
		},
		onModifyType(move, pokemon) {
			const types = pokemon.getTypes();
			let type = types[1];
			if (type === 'Bird') type = '???';
			if (type === '???' && types[0]) type = types[0];
			move.type = type;
		},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
		desc: "This move's type matches the secondary type of the user. 20% chance to flinch foe.",
		shortDesc: "Type varies based on the user's secondary type. 20% flinch.",
	},
	dragonscurse: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Dragon's Curse",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Dragon Pulse', target);
			this.add('-anim', source, 'Hex', target);
		},
		secondary: {
			chance: 100,
			onHit(target) {
				target.addVolatile('curse');
			},
		},
		target: "normal",
		type: "Dragon",
		contestType: "Clever",
		shortDesc: "Curses the target.",
		desc: "Curses the target.",
	},
	sixtongueemojis: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "sixtongueemojis",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
		},
		beforeTurnCallback(pokemon) {
			for (const side of this.sides) {
				if (side.hasAlly(pokemon)) continue;
				side.addSideCondition('sixtongueemojis', pokemon);
				const data = side.getSideConditionData('sixtongueemojis');
				if (!data.sources) {
					data.sources = [];
				}
				data.sources.push(pokemon);
			}
		},
		onModifyMove(move, source, target) {
			if (target?.beingCalledBack || target?.switchFlag) move.accuracy = true;
		},
		onTryHit(target, pokemon) {
			target.side.removeSideCondition('sixtongueemojis');
		},
		condition: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				this.debug('sixtongueemojis start');
				let alreadyAdded = false;
				pokemon.removeVolatile('destinybond');
				for (const source of this.effectState.sources) {
					if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: sixtongueemojis');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst || source.canTerastallize) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source) {
								if (action.choice === 'megaEvo') {
									this.actions.runMegaEvo(source);
								} else if (action.choice === 'terastallize') {
									// Also a "forme" change that happens before moves, though only possible in NatDex
									this.actions.terastallize(source);
								} else {
									continue;
								}
								this.queue.list.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.actions.runMove('sixtongueemojis', source, source.getLocOf(pokemon));
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		shortDesc: "If a foe is switching out, hits it.",
		desc: "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. No accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
	},
	kaleidostorm: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Kaleidostorm",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Diamond Storm', target);
		},
		onModifyType(move, pokemon) {
			const types = pokemon.getTypes();
			let type = types[0];
			if (type === 'Bird') type = '???';
			if (type === '???' && types[1]) type = types[1];
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
		shortDesc: "Type varies based on the user's primary type.",
	},
	yinangblast: {
		accuracy: true,
		basePower: 170,
		category: "Special",
		name: "Yin-Yang Blast",
		pp: 1,
		priority: 0,
		flags: {},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Inferno Overdrive', target);
			this.add('-anim', source, 'Thunder Cage', target);
		},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water') return 1;
		},
		isZ: "ultrasimiseariumz",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
		desc: "This move's type effectiveness against Water is changed to be super effective no matter what this move's type is.",
		shortDesc: "Super effective on Water.",
	},
	// Old Moves
	kingsshield: {
		inherit: true,
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({ atk: -1, spa: -1 }, source, target, this.dex.getActiveMove("King's Shield"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({ atk: -1, spa: -1 }, source, target, this.dex.getActiveMove("King's Shield"));
				}
			},
		},
	},
	ivycudgel: {
		inherit: true,
		onModifyType(move, pokemon) {
			switch (pokemon.species.name) {
			case 'Ogerpon-Wellspring': case 'Ogerpon-Wellspring-Tera':
				move.type = 'Water';
				break;
			case 'Ogerpon-Hearthflame': case 'Ogerpon-Hearthflame-Tera':
				move.type = 'Fire';
				break;
			case 'Ogerpon-Cornerstone': case 'Ogerpon-Cornerstone-Tera':
				move.type = 'Rock';
				break;
			case 'Ogerpon-Pixiedust': case 'Ogerpon-Pixiedust-Tera':
				move.type = 'Fairy';
				break;
			}
		},
	},
	razorshell: {
		num: 534,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Razor Shell",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		onModifyMove(move, pokemon, target) {
			if (!target) return;
			const atk = pokemon.getStat('atk', false, true);
			const spa = pokemon.getStat('spa', false, true);
			const def = target.getStat('def', false, true);
			const spd = target.getStat('spd', false, true);
			const physical = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * atk) / def) / 50);
			const special = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * spa) / spd) / 50);
			if (physical < special || (physical === special && this.randomChance(1, 2))) {
				move.category = 'Special';
				delete move.flags['contact'];
			}
		},
		onHit(target, source, move) {
			// Shell Side Arm normally reveals its category via animation on cart, but doesn't play either custom animation against allies
			if (!source.isAlly(target)) this.hint(move.category + " Razor Shell");
		},
		onAfterSubDamage(damage, target, source, move) {
			if (!source.isAlly(target)) this.hint(move.category + " Razor Shell");
		},
		secondary: [
			{
				chance: 50,
				boosts: {
					def: -1,
				},
			}, {
				chance: 50,
				boosts: {
					spd: -1,
				},
			}, 
		],
		target: "normal",
		type: "Water",
		contestType: "Cool",
		desc: "Has a 50% chance to lower the target's Defense and a 50% chance to lower the target's Special Attack. This move becomes a special attack that doesn't make contact if the value of ((((2 * the user's level / 5 + 2) * 90 * X) / Y) / 50), where X is the user's Attack stat and Y is the target's Defense stat, is greater than the same value where X is the user's Special Attack stat and Y is the target's Special Defense stat. No stat modifiers other than stat stage changes are considered for this purpose. If the two values are equal, this move chooses a damage category at random.",
		shortDesc: "50% -1 Def, -50% -SpD. Special+non-contact if it would be stronger.",
	},
};
