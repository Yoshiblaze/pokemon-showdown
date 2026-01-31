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
