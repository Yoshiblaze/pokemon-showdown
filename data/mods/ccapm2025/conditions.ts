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
		onFieldEnd(field, source, effect) {
			this.add('-weather', 'none');
			if (source.species.id === 'wyrdeer') {
				source.formeChange('Wyrdeer-Snowblind', this.effect, true);
				source.setAbility('heartofcold', source, true);
				this.add('-activate', source, 'ability: Heart of Cold');
			}
		},
	},
};