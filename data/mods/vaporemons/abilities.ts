export const Abilities: {[k: string]: ModdedAbilityData} = {
	zerotohero: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect?.effectType !== 'Move') {
				return;
			}
			if (source.species.id === 'palafin' && source.hp && !source.transformed && source.side.foe.pokemonLeft) {
				this.add('-activate', source, 'ability: Zero to Hero');
				source.formeChange('Palafin-Hero', this.effect, true);
			}
		},
		isPermanent: true,
		name: "Zero to Hero",
		shortDesc: "If this Pokemon is a Palafin in Zero Form, KOing a foe has it change to Hero Form.",
		rating: 5,
		num: 278,
	},
	overcoat: {
		inherit: true,
		shortDesc: "This Pokemon is immune to sandstorm damage, hazards, and powder moves.",
		name: "Overcoat",
	},
	cutecharm: {
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (defender.types.includes(move.type)) {
				this.debug('Cute Charm weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (defender.types.includes(move.type)) {
				this.debug('Cute Charm weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Cute Charm",
		shortDesc: "This Pokemon takes 50% damage from moves of its own type.",
		rating: 3,
		num: 56,
	},
	healer: {
		name: "Healer",
	   onFaint(pokemon) {
			pokemon.side.addSlotCondition(pokemon, 'healer');
	   },
	   condition: {
			onSwap(target) {
				 if (!target.fainted) {
					  const source = this.effectState.source;
					  const damage = this.heal(target.baseMaxhp / 3, target, target);
					  if (damage) this.add('-heal', target, target.getHealth, '[from] ability: Healer', '[of] ' + this.effectState.source);
					  target.side.removeSlotCondition(target, 'healer');
				 }
			},
	   },
		rating: 3,
		shortDesc: "On faint, the next Pokemon sent out heals 33% of its max HP.",
		num: 131,
	},
};
