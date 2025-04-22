export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	datamod: {
		effectType: 'Rule',
		name: 'Data Mod',
		desc: 'When a new Pokémon switches in for the first time, information about its types, stats and Abilities is displayed to both players.',
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				const species = this.dex.species.get(pokemon.species.name);
				const baseSpecies = Dex.species.get(pokemon.species.name);
				let modded = false;
				for (const type of [0, 1]) {
					if (species.types[type] !== baseSpecies.types[type]) {
						modded = true;
					}
				}
				modded = modded ||
					(species.baseStats.hp !== baseSpecies.baseStats.hp ||
						species.baseStats.atk !== baseSpecies.baseStats.atk ||
					 	species.baseStats.def !== baseSpecies.baseStats.def ||
					 	species.baseStats.spa !== baseSpecies.baseStats.spa ||
					 	species.baseStats.spd !== baseSpecies.baseStats.spd ||
					 	species.baseStats.spe !== baseSpecies.baseStats.spe ||
					 	species.abilities[0] !== baseSpecies.abilities[0] ||
					 	species.abilities[1] !== baseSpecies.abilities[1] ||
					 	species.abilities['H'] !== baseSpecies.abilities['H'] ||
					 	species.abilities['S'] !== baseSpecies.abilities['S']);
				if (modded) {
					pokemon.isModded = true;
				}
			}
		},
		onSwitchIn(pokemon) {
			const species = this.dex.species.get(pokemon.species.name);
			const switchedIn = pokemon.switchedIn;
			if (!pokemon.isModded) return;
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
			if (pokemon.switchedIn) return;
			pokemon.switchedIn = true;
			let abilities = species.abilities[0];
			if (species.abilities[1]) {
				abilities += ` / ${species.abilities[1]}`;
			}
			if (species.abilities['H']) {
				abilities += ` / ${species.abilities['H']}`;
			}
			if (species.abilities['S']) {
				abilities += ` / ${species.abilities['S']}`;
			}
			const baseStats = species.baseStats;
			const type = species.types[0];
			if (species.types[1]) {
				const type2 = species.types[1];
				this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="https://${Config.routes.client}/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span></li><li style="clear: both"></li></ul>`);
			} else {
				this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span></li><li style="clear: both"></li></ul>`);
			}
			this.add(`raw|<ul class="utilichart"><li class="result"><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
		},
	},
};
