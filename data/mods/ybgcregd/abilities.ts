export const Abilities: {[k: string]: ModdedAbilityData} = {
	powerspot: {
    shortDesc: "This Pokemon and its allies have the power of their moves multiplied by 1.3.",                                                      
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			this.debug('Power Spot boost');
			return this.chainModify([5325, 4096]);
		},
		name: "Power Spot",
		rating: 4,
		num: 249,
	},
	plus: {
    shortDesc: "This Pokemon and its allies' Electric-type moves have their power multiplied by 1.3.", 
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Plus boost');
				return this.chainModify(1.3);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(spd, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		name: "Plus",
		rating: 4,
		num: 57,
	},	
  minus: {
    shortDesc: "This side's Electric-types can't have stats lowered or status inflicted by other Pokemon.", 
		onModifySpDPriority: 6,
		onModifySpD(spd, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		onAllyTryBoost(boost, target, source, effect) {
			if ((source && target === source) || !target.hasType('Electric')) return;
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
				this.add('-block', target, 'ability: Minus', '[of] ' + effectHolder);
			}
		},
		onAllySetStatus(status, target, source, effect) {
			if (target.hasType('Electric') && source && target !== source && effect && effect.id !== 'yawn') {
				this.debug('interrupting setStatus with Minus');
				if (effect.name === 'Synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Minus', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (target.hasType('Electric') && status.id === 'yawn') {
				this.debug('Minus blocking yawn');
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Minus', '[of] ' + effectHolder);
				return null;
			}
		},
		isBreakable: true,
		name: "Minus",
		rating: 4,
		num: 58,
	},
	flockrock: {
    shortDesc: "If Squawkabilly: 50% boost to all stats if ally is Flying-type.", 
		onUpdate(pokemon) {
			const ally = pokemon.allies()[0];
			if (!ally || pokemon.baseSpecies.baseSpecies !== 'Squawkabilly' || !ally.hasType('Flying')) {
				if (pokemon.getVolatile('flockrock')) pokemon.removeVolatile('flockrock');
				return;
			}
			if (!pokemon.getVolatile('flockrock')) {
				this.add('-activate', pokemon, 'ability: Flock Rock', '[of] ' + ally);
				pokemon.addVolatile('flockrock');
			} else {
				if (!ally.fainted) return;
				pokemon.removeVolatile('flockrock');
			}
		},
		condition: {
			onStart(target) {
				this.add('-start', target, 'ability: Flock Rock');
				this.add('-message', `${target.name} is ready to rock!`);
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				return this.chainModify(1.5);
			},
		   onModifyDefPriority: 6,
			onModifyDef(def, pokemon) {
				return this.chainModify(1.5);
			},
		   onModifySpAPriority: 5,
		   onModifySpA(spa, pokemon) {
				return this.chainModify(1.5);
		   },
		   onModifySpDPriority: 6,
		   onModifySpD(spd, pokemon) {
				return this.chainModify(1.5);
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(1.5);
			},
			onEnd(target) {
				this.add('-end', target, 'Flock Rock');
			},
		},
		isPermanent: true,
		name: "Flock Rock",
		rating: 0,
	},
};
