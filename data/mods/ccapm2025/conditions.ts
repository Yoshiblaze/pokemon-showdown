export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
	snowscape: {
		name: 'Snowscape',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('icyrock')) {
				return 8;
			}
			return 5;
		},
		onModifyDefPriority: 10,
		onModifyDef(def, pokemon) {
			if (pokemon.hasType('Ice') && this.field.isWeather('snowscape')) {
				return this.modify(def, 1.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Snowscape', '[from] ability: ' + effect.name, `[of] ${source}`);
			} else {
				this.add('-weather', 'Snowscape');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Snowscape', '[upkeep]');
			if (this.field.isWeather('snowscape')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.species.id === 'wyrdeer') {
					pokemon.formeChange('Wyrdeer-Snowblind', this.effect, true);
					pokemon.setAbility('heartofcold', pokemon, true);
					this.add('-activate', pokemon, 'ability: Heart of Cold');
				}
			}
		},
	},
	ber: {
		name: 'ber',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			this.effectState.counter = 0;
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'ber', '[from] ability: ' + sourceEffect.name, `[of] ${source}`);
			} else {
				this.add('-status', target, 'ber');
			}
			if (target.species.name === 'Drifblim') {
				target.formeChange('Drifblim-Inflamed', this.effect, true);
			}
		},
		onDamage(damage, target, source, effect) {
			const hp = target.maxhp / 16;
			this.effectState.counter += hp;
			return damage + hp;
		},
		onFoeDamage(damage, target, source, effect) {
			if (source.status === 'ber') {
				const hp = target.maxhp / 16;
				this.effectState.counter += hp;
				return damage + hp;
			}
		},
		onEnd(pokemon) {
			for (let opponent of pokemon.side.foe.active) {
				let active = opponent.side.foe.active.filter(mon => mon.status === 'ber').length > 0;
				if (opponent.species.name === 'Mesprit' && active) {
					opponent.formeChange('Mesprit-Rampaging', this.effect, false);
				}
				if (opponent.species.name === 'Mesprit-Rampaging' && !active){
					opponent.formeChange('Mesprit', this.effect, false);
				}
			}
		},
		onFaint(pokemon) {
			for (let opponent of pokemon.side.foe.active) {
				let active = opponent.side.foe.active.filter(mon => mon.status === 'ber').length - 1 > 0;
				if (opponent.species.name === 'Mesprit' && active) {
					opponent.formeChange('Mesprit-Rampaging', this.effect, false);
				}
				if (opponent.species.name === 'Mesprit-Rampaging' && !active){
					opponent.formeChange('Mesprit', this.effect, false);
				}
			}
		},
		onSwitchOut(pokemon) {
			for (let opponent of pokemon.side.foe.active) {
				let active = opponent.side.foe.active.filter(mon => mon.status === 'ber').length - 1 > 0;
				if (opponent.species.name === 'Mesprit' && active) {
					opponent.formeChange('Mesprit-Rampaging', this.effect, false);
				}
				if (opponent.species.name === 'Mesprit-Rampaging' && !active){
					opponent.formeChange('Mesprit', this.effect, false);
				}
			}
		},
		onUpdate(pokemon){
			if (this.effectState.counter >= 10000 * pokemon.maxhp) pokemon.cureStatus();
			for (let opponent of pokemon.side.foe.active) {
				let active = opponent.side.foe.active.filter(mon => mon.status === 'ber').length > 0;
				if (opponent.species.name === 'Mesprit' && active) {
					opponent.formeChange('Mesprit-Rampaging', this.effect, false);
				}
				if (opponent.species.name === 'Mesprit-Rampaging' && !active){
					opponent.formeChange('Mesprit', this.effect, false);
				}
			}
    },
  },
	restoring: {
		name: 'Restoring',
		duration: 1,
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'restoring');
		},
		onEnd(target) {
			if (target.species.id === 'aurorus') {
				target.formeChange('Aurorus-Glorious', this.effect, true);
				target.setAbility('megalauncher', source, true);
				this.add('-activate', target, 'ability: Mega Launcher');
				if (this.field.isWeather(['hail', 'snowscape'])) {
					target.heal(pokemon.baseMaxhp / 2);
				}
			}
			this.add('-end', target, 'restoring');
		},
	},
};
