export const Abilities: {[k: string]: ModdedAbilityData} = {
	angershell: {
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedAngerShell = false;
			} else {
				this.effectState.checkedAngerShell = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedAngerShell;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedAngerShell = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.boost({atk: 1, spa: 1, spe: 2, def: -1, spd: -1}, target, target);
			}
		},
		name: "Anger Shell",
		rating: 4,
		num: 271,
	},
	moody: {
		shortDesc: "This Pokemon's lowest stat goes up by 1 every turn.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				let statName = 'atk';
				let worstStat = 3000; // The highest possible stat number (with boosts) is 2,676
				let s: StatIDExceptHP;
				for (s in pokemon.storedStats) {
					if (pokemon.storedStats[s] >= worstStat) continue;
					statName = s;
					worstStat = pokemon.storedStats[s];
				}
				this.boost({[statName]: 1}, pokemon, pokemon);
			}
		},
		name: "Moody",
		rating: 3,
		num: 141,
	},
	sandveil: {
    shortDesc: "Boosts highest non-HP, non-Speed stat by 1.3x in sandstorm.",                                                      
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onWeatherChange(pokemon) {
			if (pokemon.transformed) return;
			// Protosynthesis is not affected by Utility Umbrella
			if (this.field.isWeather('sandstorm')) {
				pokemon.addVolatile('sandveil');
			} else if (!this.field.isWeather('sandstorm')) {
				pokemon.removeVolatile('sandveil');
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['sandveil'];
			this.add('-end', pokemon, 'Sand Veil', '[silent]');
		},
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				this.add('-activate', pokemon, 'ability: Sand Veil');
				this.effectState.bestStat = pokemon.getBestStat(false, true);
				this.add('-start', pokemon, 'sandveil' + this.effectState.bestStat);
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, source, target, move) {
				if (this.effectState.bestStat !== 'atk' && this.effectState.bestStat !== 'spe') return;
				this.debug('Sand Veil atk boost');
				return this.chainModify([5325, 4096]);
			},
			onModifyDefPriority: 6,
			onModifyDef(def, target, source, move) {
				if (this.effectState.bestStat !== 'def' && this.effectState.bestStat !== 'spe') return;
				this.debug('Sand Veil def boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpAPriority: 5,
			onModifySpA(relayVar, source, target, move) {
				if (this.effectState.bestStat !== 'spa' && this.effectState.bestStat !== 'spe') return;
				this.debug('Sand Veil spa boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpDPriority: 6,
			onModifySpD(relayVar, target, source, move) {
				if (this.effectState.bestStat !== 'spd' && this.effectState.bestStat !== 'spe') return;
				this.debug('Sand Veil spd boost');
				return this.chainModify([5325, 4096]);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Sand Veil');
			},
		},
		name: "Sand Veil",
		rating: 1.5,
		num: 8,
	},
	snowcloak: {
    shortDesc: "Boosts highest non-HP, non-Speed stat by 1.3x in snow.",                                                      
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			if (pokemon.transformed) return;
			// Protosynthesis is not affected by Utility Umbrella
			if (this.field.isWeather('snow')) {
				pokemon.addVolatile('snowcloak');
			} else if (!this.field.isWeather('snow')) {
				pokemon.removeVolatile('snowcloak');
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['snowcloak'];
			this.add('-end', pokemon, 'Snow Cloak', '[silent]');
		},
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				this.add('-activate', pokemon, 'ability: Snow Cloak');
				this.effectState.bestStat = pokemon.getBestStat(false, true);
				this.add('-start', pokemon, 'snowcloak' + this.effectState.bestStat);
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, source, target, move) {
				if (this.effectState.bestStat !== 'atk' && this.effectState.bestStat !== 'spe') return;
				this.debug('Snow Cloak atk boost');
				return this.chainModify([5325, 4096]);
			},
			onModifyDefPriority: 6,
			onModifyDef(def, target, source, move) {
				if (this.effectState.bestStat !== 'def' && this.effectState.bestStat !== 'spe') return;
				this.debug('Snow Cloak def boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpAPriority: 5,
			onModifySpA(relayVar, source, target, move) {
				if (this.effectState.bestStat !== 'spa' && this.effectState.bestStat !== 'spe') return;
				this.debug('Snow Cloak spa boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpDPriority: 6,
			onModifySpD(relayVar, target, source, move) {
				if (this.effectState.bestStat !== 'spd' && this.effectState.bestStat !== 'spe') return;
				this.debug('Snow Cloak spd boost');
				return this.chainModify([5325, 4096]);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Snow Cloak');
			},
		},
		name: "Snow Cloak",
		rating: 1.5,
		num: 81,
	},
	wonderskin: {
    shortDesc: "This Pokemon is immune to status moves while switching in.",                                                      
		onTryHit(target, source, move) {
			if (move.category === 'Status' && target !== source && !target.activeTurns) {
				this.add('-immune', target, '[from] ability: Wonder Skin');
				return null;
			}
		},
		isBreakable: true,
		name: "Wonder Skin",
		rating: 4,
		num: 147,
	},
};