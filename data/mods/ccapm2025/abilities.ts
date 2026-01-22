export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	geminfusion: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const item = pokemon.getItem();
			if (move.type === 'Rock' && item?.isGem) {
				move.type = item.name.split(' ')[0];
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.getItem()?.isGem) return;

			const type = pokemon.getItem().name.split(' ')[0];
			// map Rock to the new type, go through Set to delete duplicate entries
			const newTypes = [...new Set(pokemon.getTypes().map(t => t === 'Rock' ? type : t))];

			if (pokemon.getTypes().join() === newTypes.join() || !pokemon.setType(newTypes)) return;
			this.add('-start', pokemon, 'typechange', newTypes.join('/'), '[from] ability: Gem Infusion');
		},
		flags: {},
		name: "Gem Infusion",
		rating: 4,
		num: 1001,
	},
	embodyaspectwellspring: {
		onStart(pokemon) {
			if ((pokemon.baseSpecies.name === 'Ogerpon-Wellspring-Tera' ||
				  pokemon.baseSpecies.name === 'Ogerpon-Pixiedust-Tera') &&
				pokemon.terastallized &&
				!this.effectState.embodied) {
				this.effectState.embodied = true;
				this.boost({ spd: 1 }, pokemon);
			}
		},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
		name: "Embody Aspect (Wellspring)",
		rating: 3.5,
		num: 302,
	},
	stancechange: {
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== 'Aegislash' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			const targetForme = (move.id === 'soulboundslash' ? 'Aegislash-Soulbound' : 'Aegislash-Blade');
			const targetForme = (move.id === 'kingsshield' ? 'Aegislash' : 'Aegislash-Blade');
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
		name: "Stance Change",
		rating: 4,
		num: 176,
	},
	moltencore: {
		/* onStart(pokemon) {
		}, */
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
		name: "Molten Core",
		rating: 3.5,
		shortDesc: "Magcargo: On switch-in, absorbs 1 layer of hazards and transforms; Hazard immunity.",
	},
	stackchange: {
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== 'stackshield' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'stackshield') return;
			const targetForme = (move.id === 'stackshield' ? 'Stakataka' : 'Stakataka-Missile');
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
		name: "Stack Change",
		rating: 4,
		shortDesc: "Stakataka: Changes to Missile Forme before attacks, and changes to Base Forme before Stack Shield.",
	},
	interdimensionalmissle: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Interdimensional Missle boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Interdimensional Missle boost');
				return this.chainModify(1.5);
			}
		},
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== 'stackshield' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'stackshield') return;
			const targetForme = (move.id === 'stackshield' ? 'Stakataka' : 'Stakataka-Missile');
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		// airborneness implemented in scripts.ts:Pokemon#isGrounded
		flags: { breakable: 1, failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
		name: "Interdimensional Missle",
		rating: 3.5,
		shortDesc: "Effects of Levitate + Stack Change + User's Fire moves deal 1.5x damage.",
	},
	wither: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Wither');
				}
				return null;
			}
		},
		onResidualOrder: 6,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
		flags: { breakable: 1 },
		name: "Wither",
		rating: 1.5,
		shortDesc: "User loses 1/16 of its max HP per turn. Heals TBD% HP when hit by Water.",
	},
	toughwings: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Flying') return priority + 1;
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['contact']) {
				return this.chainModify([5325, 4096]);
			}
		},
		flags: {},
		name: "Tough Wings",
		rating: 5,
		shortDesc: "Effects Tough Claws + Gale Wings (Gen 6).",
	},
	stench: {
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				this.debug('Adding Stench flinch');
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 20,
					volatileStatus: 'flinch',
				});
			}
		},
		flags: {},
		name: "Stench",
		rating: 1.5,
		shortDesc: "This Pokemon's attacks without a chance to make the target flinch gain a 20% chance to make the target flinch.",
	},
	victoryfinale: {
		onAnyModifyAccuracyPriority: -1,
		onAnyModifyAccuracy(accuracy, target, source) {
			if (source.isAlly(this.effectState.target) && typeof accuracy === 'number') {
				return this.chainModify([5325, 4096]);
			}
		},
		flags: {},
		name: "Victory Finale",
		rating: 3.5,
		shortDesc: "This Pokemon's and its allies' moves have their accuracy multiplied by 1.3.",
	},
	supercritical: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Supercritical boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Supercritical boost');
				return this.chainModify(1.5);
			}
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				this.debug('Adding Supercritical suppress');
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 100,
					volatileStatus: 'gastroacid',
				});
			}
		},
		onTryHit(pokemon, target, move) {
			if (move.type === 'Water') {
				this.add('-immune', pokemon, '[from] ability: Supercritical');
				return null;
			}
		},
		flags: { breakable: 1 },
		name: "Supercritical",
		rating: 3,
		shortDesc: "User's Water moves have 1.5x power and suppress the target's ability; Water immunity.",
	},
	bitterness: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.name !== 'Weavile-Frost') return;
			if (pokemon.activeTurns) {
				this.boost({ atk: 1 });
			}
		},
		flags: {},
		name: "Bitterness",
		rating: 5,
		shortDesc: "Weavile-Frost: Attack is raised by 1 stage at the end of each full turn it has been on the field.",
	},
	emergencycannon: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.flags['bullet']) {
				this.debug('Emergency Cannon boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.flags['bullet']) {
				this.debug('Emergency Cannon boost');
				return this.chainModify(1.5);
			}
		},
		onModifyMove(move) {
			if (move.flags['bullet']) {
				move.category === 'Physical';
				move.accuracy = true;
			}
		},
		flags: {},
		name: "Emergency Cannon",
		rating: 3.5,
		shortDesc: "User's bullet moves are physical, can't miss, and have 1.5x power.",
	},
	martialize: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Fighting';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Martialize",
		rating: 4,
		shortDesc: "This Pokemon's Normal-type moves become Fighting-type moves and have their power multiplied by 1.2.",
	},
	intoxicate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Poison';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Intoxicate",
		rating: 4,
		shortDesc: "This Pokemon's Normal-type moves become Poison-type moves and have their power multiplied by 1.2.",
	},
	shroomndoom: {
		onStart(pokemon) {
			pokemon.addVolatile('torment');
		},
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod <= 0) {
				this.debug('Shroom n Doom boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Shroom n' Doom",
		rating: 2,
		shortDesc: "User is under the effects of Torment. Non-SE moves deal 1.5x damage.",
	},
	focusedfire: {
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			this.debug('focusedfire - enhancing accuracy');
			return true;
		},
		onModifyPriority(priority, pokemon, target, move) {
			if (move?) return priority - 1;
		},
		onModifyCritRatio(critRatio, source, target) {
			return 5;
		},
		flags: {},
		name: "Focused Fire",
		rating: 3,
		shortDesc: "User's attacks have -1 priority but can't miss and always crit.",
	},
	shroomndoom: {
		onStart(pokemon) {
			pokemon.addVolatile('focusenergy');
		},
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug('Sniper boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Guided Missiles",
		rating: 5,
		shortDesc: "Effects of Sniper + Uses Focus Energy on switch-in.",
	},
};
