export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	terastalclause: {
		effectType: 'Rule',
		name: 'Terastal Clause',
		desc: "Prevents Pok&eacute;mon from Terastallizing",
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.species.baseSpecies !== 'Ogerpon') {
					pokemon.canTerastallize = null;
				}
			}
			this.add('rule', 'Terastal Clause: You cannot Terastallize');
		},
	},
	ccapmformchanges: {
		effectType: 'Rule',
		name: 'CCAPM Form Changes',
		desc: "Makes a bunch of form changes function",
		onBegin() {
			this.add('rule', 'CCAPM Form Changes: Makes many form changes work');
		},
		onStart(pokemon) {
			if (pokemon.species.name === "Samurott" && pokemon.side.totalFainted >= 3) {
				pokemon.formeChange('Samurott-Overlord', null, true);
			}
		},
		onWeather(target, source, effect) {
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				if (target.species.name === "Beartic") {
					target.formeChange('Beartic-Freshwater', null, true);
					target.setAbility('cloudnine', target);
				}
			} else if (effect.id === 'hail' || effect.id === 'snowscape') {
				if (target.species.name === "Beartic-Freshwater") {
					target.formeChange('Beartic', null, true);
					target.setAbility('slushrush', target);
				}
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire' && target.species.name === "Beartic") {
				target.formeChange('Beartic-Freshwater', null, true);
				target.setAbility('cloudnine', target);
			} else if (move.type === 'Ice' && target.species.name === "Beartic-Freshwater") {
				target.formeChange('Beartic', null, true);
				target.setAbility('slushrush', target);
			} else if (move.type === 'Rock' && target.species.name === "Kommo-o") {
				target.formeChange('Kommo-o-Hard-Rock', null, true);
				target.setAbility('backbeat', target);
			} else if (move.type === 'Electric' && target.species.name === "Luxray") {
				target.formeChange('Luxray-Conductive', null, true);
			} else if (!move.damage && !move.damageCallback &&
						  target.getMoveHitData(move).typeMod > 0 &&
						  target.species.name === "Rhyperior") {
				target.formeChange('Rhyperior-Adversity', null, true);
				target.setAbility('emergencycannon', target);
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'stealthrock' && target.species.name === "Kommo-o") {
				target.formeChange('Kommo-o-Hard-Rock', null, true);
				target.setAbility('backbeat', target);
			}
		},
		onAfterBoost(boost, target, source, effect) {
			let speedUp = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! > 0) {
					speedUp = true;
				}
			}
			if (speedUp && target.species.name === "Blaziken") {
				target.formeChange('Blaziken-Wildfire', null, true);
				target.setAbility('burnout', target);
			}
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source.species.name === "Clawitzer" && move.flags['pulse']) {
				target.formeChange('Clawitzer-Curled', null, true);
				target.setAbility('prismarmor', target);
			} else if (source.species.name === "Lilligant" && move.flags['dance']) {
				target.formeChange('Lilligant-Hisui', null, true);
				target.setAbility('drought', target);
			} else if (source.species.name === "Luxray-Conductive" &&
						  move.type !== 'Electric') {
				target.formeChange('Luxray', null, true);
			} else if (source.species.name === "Luxray" && move.type === 'Electric') {
				target.formeChange('Luxray-Conductive', null, true);
			} else if (source.species.name === "Talonflame" && move.type === 'Flying') {
				target.formeChange('Talonflame-Tempest', null, true);
				target.setAbility('toughwings', target);
			}
		},
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns && pokemon.species.name === "Fearow") {
				pokemon.formeChange('Fearow-Ferocious', null, true);
				pokemon.setAbility('wonderguard', pokemon);
			} else if (pokemon.activeTurns && pokemon.species.name === "Fearow-Ferocious") {
				pokemon.formeChange('Fearow', null, true);
				pokemon.setAbility('sniper', pokemon);
			} else if (pokemon.hp <= pokemon.maxhp / 1.5 &&
						 pokemon.species.name === "Rayquaza") {
				pokemon.formeChange('Rayquaza-Untethered', null, true);
				pokemon.setAbility('beastboost', pokemon);
			} else if (pokemon.hp <= pokemon.maxhp / 2 &&
						 pokemon.species.name === "Sunflora") {
				pokemon.formeChange('Sunflora-Wilted', null, true);
				pokemon.setAbility('wither', pokemon);
			} else if (pokemon.hp <= pokemon.maxhp / 2 &&
						 pokemon.species.name === "Torterra") {
				pokemon.formeChange('Torterra-Old', null, true);
				pokemon.setAbility('headon', pokemon);
				pokemon.heal(pokemon.baseMaxhp / 2);
			}
		},
		onSourceAfterFaint(length, target, source, effect) {
			if (source.species.id === 'lucario') {
				if (this.effectState.auraTriggered) return;
				if (effect?.effectType !== 'Move') {
					return;
				}
				if (source.hp && !source.transformed && source.side.foePokemonLeft()) {
					this.add('-activate', source, 'ability: Aura Bond');
					// the ability isn't real
					source.formeChange('Lucario-Aura Bond', this.effect, true);
					source.setAbility('aurapartner', source);
					source.formeRegression = true;
					this.effectState.auraTriggered = true;
				}
			} else if (source.species.name === "Octillery") {
				if (effect && effect.effectType === 'Move' &&
					source.formeChange('Octillery-Sharpshooter', null, true);
					source.setAbility('focusedfire', target);
				}
			}
		},
	},
};
