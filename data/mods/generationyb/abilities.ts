export const Abilities: {[k: string]: ModdedAbilityData} = {
	coldcut: {
		// upokecenter says this is implemented as an added secondary effect
		onModifyMove(move) {
			if (!move?.flags['slicing'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = []; 
			}
			move.secondaries.push({
				chance: 30,
				status: 'frz',
				ability: this.dex.abilities.get('coldcut'),
			});
		},
		name: "Cold Cut",
		shortDesc: "This Pokemon's slicing moves have a 30% chance of freezing the foe.",
		rating: 2,
		num: 143,
	},
	additivearmor: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({def: length}, source);
			}
		},
		name: "Additive Armor",
		shortDesc: "This Pokemon's Defense is raised by 1 stage if it attacks and KOes another Pokemon.",
		rating: 3,
		num: 153,
	},
	alarmclock: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Alarm Clock');
			this.add('-message', `An alarm clock began ringing!`);
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || !move?.flags['sound']) return;
			if (!move.auraBooster?.hasAbility('Alarm Clock')) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([5325, 4096]);
		},
		onTryHit(target) {
			const activeTeam = target.side.activeTeam();
			const foeActiveTeam = target.side.foe.activeTeam();
			for (const [i, allyActive] of activeTeam.entries()) {
				if (allyActive && allyActive.status === 'slp') allyActive.cureStatus();
				const foeActive = foeActiveTeam[i];
				if (foeActive && foeActive.status === 'slp') foeActive.cureStatus();
			}
		},
		name: "Alarm Clock",
		shortDesc: "While this Pokemon is active, sound moves deal 1.3x damage and no Pokemon can fall asleep.",
		rating: 3,
		num: 186,
	},
	crowdpleaser: {
		onUpdate(pokemon) {
			if (!pokemon.side.getSideCondition('luckychant')) {
				this.actions.useMove("Lucky Chant", pokemon);
			}
		},
		name: "Crowd Pleaser",
		shortDesc: "Sets Lucky Chant on switch-in for 8 turns whenever possible.",
		rating: 4,
		num: 2,
	},
	filterfeed: {
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			this.heal(pokemon.maxhp / 16);
		},
		name: "Filter Feed",
		shortDesc: "Heals 6.25% of user's max HP at the end of each turn.",
		num: 44,
		rating: 3,
	},
	gaiaguardian: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.foes()) {
				if ((this.field.isTerrain('electricterrain') || this.field.isTerrain('psychicterrain') || this.field.isTerrain('grassyterrain') || this.field.isTerrain('mistyterrain')) && target.isGrounded()) {
					this.damage(target.baseMaxhp / 8, target, pokemon);
				}
			}
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon, target, move) {
			if (this.field.isTerrain('electricterrain') || this.field.isTerrain('psychicterrain') || this.field.isTerrain('grassyterrain') || this.field.isTerrain('mistyterrain')) return this.chainModify(1.2);
		},
		name: "Gaia Guardian",
		shortDesc: "While this Pokemon is active, foes affected by terrains lose 1/8 of their max HP per turn. This Pokemon's moves deal 1.2x damage in terrains.",
		rating: 1.5,
		num: 123,
	},
	glider: {
		onStart(pokemon) {
			if (pokemon.side.sideConditions['tailwind']) {
				this.boost({spe: 1}, pokemon, pokemon);
			}
		},
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['wind']) {
				this.boost({spe: 1}, target, target);
			}
		},
		onAllySideConditionStart(target, source, sideCondition) {
			const pokemon = this.effectState.target;
			if (sideCondition.id === 'tailwind') {
				this.boost({spe: 1}, pokemon, pokemon);
			}
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (!move || !target) return;
			if (move.flags['wind']) {
				this.boost({spe: 1}, source, source);
			}
		},
		name: "Glider",
		shortDesc: "After using or getting hit by a wind move, this Pokemon's Speed goes up by 1 stage.",
		rating: 3.5,
		num: 274,
	},

// Will do legendary abilities later

	heartofcourage: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.hasType(move.type) && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Heart of Courage boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (attacker.hasType(move.type) && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Heart of Courage boost');
				return this.chainModify(1.5);
			}
		},
		name: "Heart of Courage",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with STAB attacks.",
		rating: 2,
	},
	highfashion: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return this.chainModify([4915, 4096]);
			}
		},
		name: "High Fashion",
		shortDesc: "User's Normal-type attacks have 1.2x power.",
		rating: 3.5,
	},
	inevitable: {
		name: "Inevitable",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp && target.species.id === 'gbonawola') {
				this.actions.useMove("Future Flames", target);
			}
			if (!target.hp && target.species.id === 'gbonanene') {
				this.actions.useMove("Future Harvest", target);
			}
			if (!target.hp && target.species.id === 'gbonablanu') {
				this.actions.useMove("Future Laments", target);
			}
			if (!target.hp && target.species.id === 'gbonazito') {
				this.actions.useMove("Future Shock", target);
			}
		},
		shortDesc: "When this Pokemon faints due to another Pokemon's move, it uses its signature future move if it's not already active.",
		rating: 2,
	},
	insulttoinjury: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (defender.hurtThisTurn) {
				this.debug('BP multiplied on damaged target');
				return this.chainModify(1.5);
			}
		},
		name: "Insult to Injury",
		shortDesc: "This Pokemon's moves deal 1.5x damage to targets that have already taken damage this turn.",
		rating: 3.5,
	},
	laststand: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 1.33333333) {
				return this.chainModify(1.1);
			}
			else if (attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.3);
			}
			else if (attacker.hp <= attacker.maxhp / 4) {
				return this.chainModify(1.5);
			}
		},
		name: "Last Stand",
		shortDesc: "This Pokemon's moves deal more damage when this Pokemon has less HP.",
		rating: 3.5,
	},
	nevermore: {
		onStart(pokemon) {
			pokemon.addVolatile('nevermore');
		},
		condition: {
			onStart(pokemon) {
				this.effectState.lastMove = '';
				this.effectState.numConsecutive = 0;
			},
			onTryMovePriority: -2,
			onTryMove(pokemon, target, move) {
				if (!move.flags['sound']) {
					pokemon.removeVolatile('nevermore');
					return;
				}
				if (move.flags['sound'] && !pokemon.volatiles['nevermore']) {
					pokemon.addVolatile('nevermore');
					return;
				}
				if (this.effectState.lastMove === move.id && pokemon.moveLastTurnResult) {
					this.effectState.numConsecutive++;
				} else if (pokemon.volatiles['twoturnmove']) {
					if (this.effectState.lastMove !== move.id) {
						this.effectState.numConsecutive = 1;
					} else {
						this.effectState.numConsecutive++;
					}
				} else {
					this.effectState.numConsecutive = 0;
				}
				this.effectState.lastMove = move.id;
			},
			onModifyDamage(damage, source, target, move) {
				const dmgMod = [4096, 4915, 5734, 6553, 7372, 8192];
				const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
				this.debug(`Current Metronome boost: ${dmgMod[numConsecutive]}/4096`);
				return this.chainModify([dmgMod[numConsecutive], 4096]);
			},
		},
		name: "Nevermore",
		shortDesc: "This Pokemon's sound moves gain power each time they're used, capping at 2x power.",
		rating: 3.5,
	},
	powerrush: {
		onModifyDamage(damage, source, target, move) {
			return this.chainModify([5324, 4096]);
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status') {
				this.add('-ability', source, 'Power Rush');
				this.damage(source.baseMaxhp / 10, source, source);
			}
		},
		name: "Power Rush",
		shortDesc: "This Pokemon's moves deal 1.3x damage, but this Pokemon loses 10% of its max HP every time it lands an attack.",
		rating: 3.5,
	},
	reboot: {
		onDamagingHit(damage, target, source, move) {
			this.field.setTerrain('electricterrain');
		},
		name: "Reboot",
		shortDesc: "When this Pokemon is hit by an attack, the effect of Electric Terrain begins.",
		rating: 2.5,
	},
	rocketfists: {
		onModifyMovePriority: 8,
		onModifyMove(move, pokemon) {
			if ((move.flags['punch'])  && move.category === 'Physical') move.category = 'Special';
		},
		name: "Rocket Fists",
		shortDesc: "This Pokemon's punching moves are Special.",
		rating: 2.5,
	},
	rolereversal: {
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== 'Tragichiou' || attacker.transformed || move.category === 'Status') return;
			const targetForme = (move.category === 'Physical' ? 'Tragichiou' : 'Tragichiou-Comedy');
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		isPermanent: true,
		name: "Role Reversal",
		shortDesc: "This Pokemon changes to its Comedy form before it uses a Special move and its Tragedy form before it uses a Physical move.",
		rating: 4,
	},
	siegeengine: {
		onModifyMove(move) {
			move.infiltrates = true;
		},
		name: "Siege Engine",
		shortDesc: "(Placeholder) This Pokemon's moves break the Reflect/Light Screen/Aurora Veil before dealing damage and ignore Wide Guard and Quick Guard.",
		rating: 4,
	},
	silkstream: {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Gorilla Tactics");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifySpePriority: 1,
		onModifySpe(spe, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Silk Stream Spe Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		name: "Silk Stream",
		shortDesc: "This Pokemon's Speed is 1.5x, but it can only select the first move it executes.",
		rating: 4.5,
	},
	tippedscales: {
		onPrepareHit(source, target, move) {
			if (move.hasBounced) return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Tipped Scales');
			}
		},
		name: "Tipped Scales",
		rating: 4.5,
		shortDesc: "This Pokemon's type changes to match the type of the move it is about to use. Works multiple times per switch-in.",
	},
	totaleclipse: {
		shortDesc: "Removes weather upon switch-in.",
		onSwitchInPriority: 6,
		onSwitchIn(pokemon, target, source) {
			this.field.clearWeather();
		},
		name: "Total Eclipse",
	},
	goodasgold: {
		onAllyBoost(boost, target, source, effect) {
			if ((source && target === source) || !target.hasType('Steel')) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries) {
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Good as Gold', '[of] ' + effectHolder);
			}
		},
		onAllySetStatus(status, target, source, effect) {
			if (target.hasType('Steel') && source && target !== source && effect && effect.id !== 'yawn') {
				this.debug('interrupting setStatus with Good as Gold');
				if (effect.id === 'synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Good as Gold', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (target.hasType('Steel') && status.id === 'yawn') {
				this.debug('Good as Gold blocking yawn');
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Good as Gold', '[of] ' + effectHolder);
				return null;
			}
		},
		isBreakable: true,
		name: "Good as Gold",
		rating: 3,
		shortDesc: "This side's Steel-types can't have stats lowered or status inflicted by other Pokemon.",
		num: 283,
	},
};
