export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	// Modified Abilities
	poisonheal: {
		inherit: true,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				const toHeal = Math.min(target.baseMaxhp / 8, target.baseMaxhp - target.hp);
				this.heal(toHeal);
				if (target.species.name === "Gliscor" && !this.ruleTable.tagRules.includes("+pokemontag:cap")) {
					if (!this.effectState.phCounter) this.effectState.phCounter = 0;
					this.effectState.phCounter += toHeal;
					if (this.effectState.phCounter >= target.baseMaxhp)
						target.formeChange('Gliscor-Sated', null, true);
				}
				return false;
			}
		},
	},

	// New Abilities
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
			const targetForme = (move.id === 'soulboundslash' ? 'Aegislash-Soulbound' :
				(move.id === 'kingsshield' ? 'Aegislash' : 'Aegislash-Blade'));
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
				move.category = 'Physical';
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
			return this.chainModify(10, 1);
		},
		onModifyPriority(priority, pokemon, target, move) {
			if (move) return priority - 1;
		},
		onModifyCritRatio(critRatio, source, target) {
			return 5;
		},
		flags: {},
		name: "Focused Fire",
		rating: 3,
		shortDesc: "User's attacks have -1 priority but can't miss and always crit.",
	},
	rampage: {
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 2) {
				this.debug('Rampage boost');
				return this.chainModify([5325, 4096]);
			} else if (attacker.hp <= attacker.maxhp / 3) {
				this.debug('Rampage boost');
				return this.chainModify([6799, 4096]);
			}
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				this.debug('Rampage boost');
				return this.chainModify([5325, 4096]);
			} else if (pokemon.hp <= pokemon.maxhp / 3) {
				this.debug('Rampage boost');
				return this.chainModify([6799, 4096]);
			}
		},
		flags: {},
		name: "Rampage",
		rating: 3,
		shortDesc: "1.3x SpA & Spe when below 50% max HP, 1.66x SpA & Spe when below 33% max HP.",
	},
	spectralize: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Ghost';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Spectralize",
		rating: 4,
		shortDesc: "This Pokemon's Normal-type moves become Ghost-type moves and have their power multiplied by 1.2.",
	},
	overcharged: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Overcharged');
				}
				return null;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Overcharged boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Overcharged boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			target.addVolatile('charge');
		},
		flags: { breakable: 1 },
		name: "Overcharged",
		rating: 3.5,
		shortDesc: "Effects of Volt Absorb + Electromorphosis + Transistor.",
	},
	aurapartner: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.multihit || move.flags['noparentalbond'] || move.flags['charge'] ||
				move.flags['futuremove'] || move.spreadHit || move.isZ || move.isMax) return;
			move.multihit = 2;
			move.multihitType = 'aurapartner';
		},
		onBasePowerPriority: 7,
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'aurapartner' && move.hit > 1) return this.chainModify(0.25);
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			if (move.multihitType === 'aurapartner' && move.hit > 1) { // hardcode
				move.type = 'Ghost';
			}
		},
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'aurapartner' && move.id === 'secretpower' && move.hit < 2) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		flags: {},
		name: "Aura Partner",
		rating: 4.5,
		shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage halved and is Ghost-type.",
	},
	backbeat: {
		onBeforeMovePriority: 9,
		onBeforeMove(pokemon) {
			if (!pokemon.volatiles['backbeat']) {
				pokemon.addVolatile('backbeat');
			} else if if (pokemon.volatiles['backbeat']) {
				pokemon.removeVolatile('backbeat');
			}
		},
		condition: {
			onStart(pokemon) {
				this.add('-activate', pokemon, 'ability: Backbeat');
				this.add('-start', pokemon, 'Backbeat');
			},
			onModifyDamage(damage, source, target, move) {
				return this.chainModify(1.5);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Backbeat');
			},
		},
		flags: {},
		name: "Backbeat",
		rating: 3,
		shortDesc: "This Pokemon's attacks deal 1.5x damage every other turn.",
	},
	volcanicpalette: {
		onModifySTAB(stab, source, target, move) {
			if (move.forceSTAB || source.hasType(move.type)) {
				if (stab === 2) {
					return 2.25;
				}
				return 2;
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Volcanic Palette neutralize');
				return this.chainModify(0.75);
			}
		},
		flags: { breakable: 1 },
		name: "Volcanic Palette",
		rating: 4,
		shortDesc: "Effects of Solid Rock + Adaptability.",
	},
	wildpalette: {
		onModifySTAB(stab, source, target, move) {
			if (move.forceSTAB || source.hasType(move.type)) {
				if (stab === 2) {
					return 2.25;
				}
				return 2;
			}
		},
		onAllyTryBoost(boost, target, source, effect) {
			if ((source && target === source) || !target.hasType('Grass')) return;
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
				this.add('-block', target, 'ability: Wild Palette', `[of] ${effectHolder}`);
			}
		},
		onAllySetStatus(status, target, source, effect) {
			if (target.hasType('Grass') && source && target !== source && effect && effect.id !== 'yawn') {
				this.debug('interrupting setStatus with Flower Veil');
				if (effect.name === 'Synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Wild Palette', `[of] ${effectHolder}`);
				}
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (target.hasType('Grass') && status.id === 'yawn') {
				this.debug('Flower Veil blocking yawn');
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Wild Palette', `[of] ${effectHolder}`);
				return null;
			}
		},
		flags: { breakable: 1 },
		name: "Wild Palette",
		rating: 4,
		shortDesc: "Effects of Flower Veil + Adaptability.",
	},
	luminiouspalette: {
		onModifySTAB(stab, source, target, move) {
			if (move.forceSTAB || source.hasType(move.type)) {
				if (stab === 2) {
					return 2.25;
				}
				return 2;
			}
		},
		onFoeTryMove(target, source, move) {
			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
			if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
				return;
			}
			const dazzlingHolder = this.effectState.target;
			if ((source.isAlly(dazzlingHolder) || move.target === 'all') && move.priority > 0.1) {
				this.attrLastMove('[still]');
				this.add('cant', dazzlingHolder, 'ability: Luminious Palette', move, `[of] ${target}`);
				return false;
			}
		},
		flags: { breakable: 1 },
		name: "Luminious Palette",
		rating: 4,
		shortDesc: "Effects of Dazzling + Adaptability.",
	},
	storybookpalette: {
		onModifySTAB(stab, source, target, move) {
			if (move.forceSTAB || source.hasType(move.type)) {
				if (stab === 2) {
					return 2.25;
				}
				return 2;
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
		flags: {},
		name: "Storybook Palette",
		rating: 4,
		shortDesc: "Effects of Magic Guard + Adaptability.",
	},
	phasicpalette: {
		onModifySTAB(stab, source, target, move) {
			if (move.forceSTAB || source.hasType(move.type)) {
				if (stab === 2) {
					return 2.25;
				}
				return 2;
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire') {
				this.boost({ atk: 1 });
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Phasic Palette');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Phasic Palette');
			}
			return false;
		},
		flags: { breakable: 1 },
		name: "Phasic Palette",
		rating: 4,
		shortDesc: "Effects of Thermal Exchange + Adaptability.",
	},
	ruffianpalette: {
		onModifySTAB(stab, source, target, move) {
			if (move.forceSTAB || source.hasType(move.type)) {
				if (stab === 2) {
					return 2.25;
				}
				return 2;
			}
		},
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({ atk: length }, source);
			}
		},
		flags: {},
		name: "Ruffian Palette",
		rating: 4,
		shortDesc: "Effects of Moxie + Adaptability.",
	},
	evileye: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Evil Eye');
		},
		onDeductPP(target, source) {
			if (target.isAlly(source)) return;
			return 2;
		},
		flags: {},
		name: "Evil Eye",
		rating: 4.5,
		shortDesc: "If this Pokemon is the target of a foe's move, that moves loses 2 additional PP.",
	},
	aeoliandrift: {
		onStart(source) {
         source.side.addSideCondition('tailwind');
		},
		flags: {},
		name: "Aeolian Drift",
		rating: 5,
		shortDesc: "On switch-in, this Pokemon summons Tailwind.",
	},
	darkmagic: {
		onDamagingHit(damage, target, source, move) {
			if (source.volatiles['disable']) return;
			if (!move.isMax && !move.flags['futuremove'] && move.id !== 'struggle') {
				if (this.randomChance(3, 10)) {
					source.addVolatile('disable', this.effectState.target);
				}
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ghost' || move.type === 'Dragon') {
				this.debug('Dark Magic boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ghost' || move.type === 'Dragon') {
				this.debug('Dark Magic boost');
				return this.chainModify([5325, 4096]);
			}
		},
		flags: {},
		name: "Dark Magic",
		rating: 4,
		shortDesc: "Effects of Cursed Body + User's Ghost and Dragon moves deal 1.3x damage.",
	},
	burnout: {
		onStart(pokemon) {
         pokemon.addVolatile('burnout');
		},
		condition: {
			duration: 3,
			/* onStart(pokemon) {
	         // put a message here
			}, */
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				this.debug('Burnout boost');
				return this.chainModify(1.5);
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				this.debug('Burnout boost');
				return this.chainModify(1.5);
			},
			onEnd(pokemon) {
				// message here
				pokemon.formeChange('Blaziken');
			pokemon.setAbility('toughclaws', pokemon, true);
			this.add('-activate', pokemon, 'ability: Tough Claws');
			},
		},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
		name: "Burnout",
		rating: 3.5,
		shortDesc: "Blaziken-Wildfire: 1.5x Atk & SpA. Reverts to base Blaziken after 2 turns.",
	},
};
