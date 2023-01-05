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
};
