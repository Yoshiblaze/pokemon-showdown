export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	// Changed Moves
	acupressure: {
		inherit: true,
		onHit(target) {
			if (target.species.name === "Regigigas" && !this.ruleTable.tagRules.includes("+pokemontag:cap")) {
				if (!target.m.stats) {
					const allStats: BoostID[] = [];
					let stat: BoostID;
					for (stat in target.boosts) {
						allStats.push(stat);
					}

					target.m.stats = allStats;
					target.m.stats.pop();
					target.m.stats.pop();
					this.prng.shuffle(target.m.stats);
				}

				if (target.m.stats.length) {
					const randomStat = target.m.stats.pop();
					const boost: SparseBoostsTable = {};
					boost[randomStat as BoostID] = 2;
					this.boost(boost);
				} else {
					return false;
				}

				if (target.m.stats.length === 0)
					target.formeChange('Regigigas-Colossal', null, true);
			} else {
				const stats: BoostID[] = [];
				let stat: BoostID;
				for (stat in target.boosts) {
					if (target.boosts[stat] < 6) {
						stats.push(stat);
					}
				}
				if (stats.length) {
					const randomStat = this.sample(stats);
					const boost: SparseBoostsTable = {};
					boost[randomStat] = 2;
					this.boost(boost);
				} else {
					return false;
				}
			}
		},
	},
	aromatherapy: {
		inherit: true,
		onHit(target, source, move) {
			this.add('-activate', source, 'move: Aromatherapy');
			let success = false;
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				if (ally !== source && !this.suppressingAbility(ally)) {
					if (ally.hasAbility('sapsipper')) {
						this.add('-immune', ally, '[from] ability: Sap Sipper');
						continue;
					}
					if (ally.hasAbility('goodasgold')) {
						this.add('-immune', ally, '[from] ability: Good as Gold');
						continue;
					}
					if (ally.volatiles['substitute'] && !move.infiltrates) continue;
				}
				if ((ally as any).cureStatus(false, source)) success = true;
			}
			return success;
		},
	},
	diamondstorm: {
		inherit: true,
		onModifyMove(move, source) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;

			const item = source.getItem();
			if (!item?.isGem) return;

			move.type = item.name.split(' ')[0];

			if (source.ability !== "geminfusion" || !move) return;

			move.onEffectiveness =
				function (this: Battle, typeMod: number, target: Pokemon | null, type: string, ActiveMove) {
					return typeMod + this.dex.getEffectiveness('Rock', type);
				};
		},
		onHit(target, pokemon, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;

			const item = pokemon.getItem();
			if (!item?.isGem) return;

			if (pokemon.species.id === 'diancie' && !pokemon.transformed) {
				move.willChangeForme = true;
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;

			if (move.willChangeForme) {
				pokemon.formeChange('Diancie-Infused', this.effect, true, '0', '[msg]');
			}
		},
	},
	diamondstormbug: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Bug",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Bug",
		contestType: "Beautiful",
	},
	diamondstormdark: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Dark",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Beautiful",
	},
	diamondstormdragon: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Dragon",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Beautiful",
	},
	diamondstormelectric: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Electric",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Electric",
		contestType: "Beautiful",
	},
	diamondstormfairy: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Fairy",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Beautiful",
	},
	diamondstormfighting: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Fighting",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Fighting",
		contestType: "Beautiful",
	},
	diamondstormfire: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Fire",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
	},
	diamondstormflying: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Flying",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Flying",
		contestType: "Beautiful",
	},
	diamondstormghost: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Ghost",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Ghost",
		contestType: "Beautiful",
	},
	diamondstormgrass: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Grass",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Grass",
		contestType: "Beautiful",
	},
	diamondstormground: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Ground",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Ground",
		contestType: "Beautiful",
	},
	diamondstormice: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Ice",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	diamondstormnormal: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Normal",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Beautiful",
	},
	diamondstormpoison: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Poison",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Poison",
		contestType: "Beautiful",
	},
	diamondstormpsychic: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Psychic",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Psychic",
		contestType: "Beautiful",
	},
	diamondstormrock: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Rock",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Beautiful",
	},
	diamondstormsteel: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Steel",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Steel",
		contestType: "Beautiful",
	},
	diamondstormwater: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		realMove: "Diamond Storm",
		name: "Diamond Storm Water",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Rock', type);
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful",
	},
	explosion: {
		inherit: true,
		onAfterMove(pokemon, source, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;
			if (pokemon.species.name === "Electrode" && pokemon.fainted) {
				this.add('-message', `Shakite escaped from its Pokéball!`);

				const shakite: PokemonSet = {
					name: "Shakite",
					species: "Shakite",
					item: pokemon.set.item,
					ability: "Aerilate",
					moves: pokemon.set.moves,
					nature: pokemon.set.nature,
					gender: ['M', 'F'][this.random(2)],
					happiness: this.random(256),
					teraType: pokemon.set.teraType,
					evs: pokemon.set.evs,
					ivs: pokemon.set.ivs,
					level: pokemon.set.level,
					shiny: this.random(4096) === 0,
				};

				const newPoke = pokemon.side.addPokemon(shakite)!;
				this.add('poke', newPoke.side.id, newPoke.details, '');
				this.actions.switchIn(newPoke, 0, null, false);
			}
		},
	},
	finalgambit: {
		inherit: true,
		onAfterMove(pokemon, source, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;
			if (pokemon.species.name === "Electrode" && pokemon.fainted) {
				this.add('-message', `Shakite escaped from its Pokéball!`);

				const shakite: PokemonSet = {
					name: "Shakite",
					species: "Shakite",
					item: pokemon.set.item,
					ability: "Aerilate",
					moves: pokemon.set.moves,
					nature: pokemon.set.nature,
					gender: ['M', 'F'][this.random(2)],
					happiness: this.random(256),
					teraType: pokemon.set.teraType,
					evs: pokemon.set.evs,
					ivs: pokemon.set.ivs,
					level: pokemon.set.level,
					shiny: this.random(4096) === 0,
				};

				const newPoke = pokemon.side.addPokemon(shakite)!;
				this.add('poke', newPoke.side.id, newPoke.details, '');
				this.actions.switchIn(newPoke, 0, null, false);
			}
		},
	},
	gmaxsweetness: {
		inherit: true,
		self: {
			onHit(source) {
				for (const ally of source.side.pokemon) {
					(ally as any).cureStatus(false, source);
				}
			},
		},
	},
	healbell: {
		inherit: true,
		onHit(target, source) {
			this.add('-activate', source, 'move: Heal Bell');
			let success = false;
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				if (ally !== source && !this.suppressingAbility(ally)) {
					if (ally.hasAbility('soundproof')) {
						this.add('-immune', ally, '[from] ability: Soundproof');
						continue;
					}
					if (ally.hasAbility('goodasgold')) {
						this.add('-immune', ally, '[from] ability: Good as Gold');
						continue;
					}
				}
				if ((ally as any).cureStatus(false, source)) success = true;
			}
			return success;
		},
	},
	junglehealing: {
		inherit: true,
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
			return ((pokemon as any).cureStatus(false, pokemon)) || success;
		},
	},
	healingwish: {
		inherit: true,
		onAfterMove(pokemon, source, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;
			if (pokemon.species.name === "Electrode" && pokemon.fainted) {
				this.add('-message', `Shakite escaped from its Pokéball!`);

				const shakite: PokemonSet = {
					name: "Shakite",
					species: "Shakite",
					item: pokemon.set.item,
					ability: "Aerilate",
					moves: pokemon.set.moves,
					nature: pokemon.set.nature,
					gender: ['M', 'F'][this.random(2)],
					happiness: this.random(256),
					teraType: pokemon.set.teraType,
					evs: pokemon.set.evs,
					ivs: pokemon.set.ivs,
					level: pokemon.set.level,
					shiny: this.random(4096) === 0,
				};

				const newPoke = pokemon.side.addPokemon(shakite)!;
				this.add('poke', newPoke.side.id, newPoke.details, '');
				this.actions.switchIn(newPoke, 0, null, false);
			}
		},
	},
	lunarblessing: {
		inherit: true,
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
			return (pokemon as any).cureStatus(false, pokemon) || success;
		},
	},
	lunardance: {
		inherit: true,
		onAfterMove(pokemon, source, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;
			if (pokemon.species.name === "Electrode" && pokemon.fainted) {
				this.add('-message', `Shakite escaped from its Pokéball!`);

				const shakite: PokemonSet = {
					name: "Shakite",
					species: "Shakite",
					item: pokemon.set.item,
					ability: "Aerilate",
					moves: pokemon.set.moves,
					nature: pokemon.set.nature,
					gender: ['M', 'F'][this.random(2)],
					happiness: this.random(256),
					teraType: pokemon.set.teraType,
					evs: pokemon.set.evs,
					ivs: pokemon.set.ivs,
					level: pokemon.set.level,
					shiny: this.random(4096) === 0,
				};

				const newPoke = pokemon.side.addPokemon(shakite)!;
				this.add('poke', newPoke.side.id, newPoke.details, '');
				this.actions.switchIn(newPoke, 0, null, false);
			}
		},
	},
	memento: {
		inherit: true,
		onAfterMove(pokemon, source, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;
			if (pokemon.species.name === "Electrode" && pokemon.fainted) {
				this.add('-message', `Shakite escaped from its Pokéball!`);

				const shakite: PokemonSet = {
					name: "Shakite",
					species: "Shakite",
					item: pokemon.set.item,
					ability: "Aerilate",
					moves: pokemon.set.moves,
					nature: pokemon.set.nature,
					gender: ['M', 'F'][this.random(2)],
					happiness: this.random(256),
					teraType: pokemon.set.teraType,
					evs: pokemon.set.evs,
					ivs: pokemon.set.ivs,
					level: pokemon.set.level,
					shiny: this.random(4096) === 0,
				};

				const newPoke = pokemon.side.addPokemon(shakite)!;
				this.add('poke', newPoke.side.id, newPoke.details, '');
				this.actions.switchIn(newPoke, 0, null, false);
			}
		},
	},
	mistyexplosion: {
		inherit: true,
		onAfterMove(pokemon, source, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;
			if (pokemon.species.name === "Electrode" && pokemon.fainted) {
				this.add('-message', `Shakite escaped from its Pokéball!`);

				const shakite: PokemonSet = {
					name: "Shakite",
					species: "Shakite",
					item: pokemon.set.item,
					ability: "Aerilate",
					moves: pokemon.set.moves,
					nature: pokemon.set.nature,
					gender: ['M', 'F'][this.random(2)],
					happiness: this.random(256),
					teraType: pokemon.set.teraType,
					evs: pokemon.set.evs,
					ivs: pokemon.set.ivs,
					level: pokemon.set.level,
					shiny: this.random(4096) === 0,
				};

				const newPoke = pokemon.side.addPokemon(shakite)!;
				this.add('poke', newPoke.side.id, newPoke.details, '');
				this.actions.switchIn(newPoke, 0, null, false);
			}
		},
	},
	psychoshift: {
		inherit: true,
		self: {
			onHit(pokemon) {
				(pokemon as any).cureStatus(false, pokemon);
			},
		},
	},
	purify: {
		inherit: true,
		onHit(target, source) {
			if (!(target as any).cureStatus(false, source)) {
				this.add('-fail', source);
				this.attrLastMove('[still]');
				return this.NOT_FAIL;
			}
			this.heal(Math.ceil(source.maxhp * 0.5), source);
		},
	},
	refresh: {
		inherit: true,
		onHit(pokemon) {
			if (['', 'slp', 'frz'].includes(pokemon.status)) return false;
			(pokemon as any).cureStatus(false, pokemon);
		},
	},
	selfdestruct: {
		inherit: true,
		onAfterMove(pokemon, source, move) {
			if (this.ruleTable.tagRules.includes("+pokemontag:cap")) return;
			if (pokemon.species.name === "Electrode" && pokemon.fainted) {
				this.add('-message', `Shakite escaped from its Pokéball!`);

				const shakite: PokemonSet = {
					name: "Shakite",
					species: "Shakite",
					item: pokemon.set.item,
					ability: "Aerilate",
					moves: pokemon.set.moves,
					nature: pokemon.set.nature,
					gender: ['M', 'F'][this.random(2)],
					happiness: this.random(256),
					teraType: pokemon.set.teraType,
					evs: pokemon.set.evs,
					ivs: pokemon.set.ivs,
					level: pokemon.set.level,
					shiny: this.random(4096) === 0,
				};

				const newPoke = pokemon.side.addPokemon(shakite)!;
				this.add('poke', newPoke.side.id, newPoke.details, '');
				this.actions.switchIn(newPoke, 0, null, false);
			}
		},
	},
	smellingsalts: {
		inherit: true,
		onHit(target, source, move) {
			if (target.status === 'par') (target as any).cureStatus(false, source);
		},
	},
	sparklingaria: {
		inherit: true,
		onAfterMove(source, target, move) {
			if (source.fainted || !move.hitTargets || move.hasSheerForce) {
				// make sure the volatiles are cleared
				for (const pokemon of this.getAllActive()) delete pokemon.volatiles['sparklingaria'];
				return;
			}
			const numberTargets = move.hitTargets.length;
			for (const pokemon of move.hitTargets) {
				// bypasses Shield Dust when hitting multiple targets
				if (pokemon !== source && pokemon.isActive && (pokemon.removeVolatile('sparklingaria') || numberTargets > 1) &&
					pokemon.status === 'brn') {
					(pokemon as any).cureStatus(false, source);
				}
			}
		},
	},
	sparklyswirl: {
		inherit: true,
		self: {
			onHit(pokemon, source, move) {
				this.add('-activate', source, 'move: Aromatherapy');
				for (const ally of source.side.pokemon) {
					if (ally !== source && (ally.volatiles['substitute'] && !move.infiltrates)) {
						continue;
					}
					(ally as any).cureStatus(false, source);
				}
			},
		},
	},
	stealthrock: {
		inherit: true,
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn(pokemon) {
				const source = this.effectState.source;
				const type = source.ability === "geminfusion" &&
				source.getItem()?.isGem ? source.getItem().name.split(' ')[0] : this.dex.getActiveMove('stealthrock').type;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(type), -6, 6);
				this.damage(pokemon.maxhp * (2 ** typeMod) / 8);
			},
		},
	},
	takeheart: {
		inherit: true,
		onHit(pokemon) {
			const success = !!this.boost({ spa: 1, spd: 1 });
			return (pokemon as any).cureStatus(false, pokemon) || success;
		},
	},
	uproar: {
		inherit: true,
		onTryHit(target, source, move) {
			const activeTeam = target.side.activeTeam();
			const foeActiveTeam = target.side.foe.activeTeam();
			for (const [i, allyActive] of activeTeam.entries()) {
				if (allyActive && allyActive.status === 'slp') (allyActive as any).cureStatus(false, source);
				const foeActive = foeActiveTeam[i];
				if (foeActive && foeActive.status === 'slp') (foeActive as any).cureStatus(false, source);
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Cute",
	},
	wakeupslap: {
		inherit: true,
		onHit(target, source, move) {
			if (target.status === 'slp') (target as any).cureStatus(false, source);
		},
	},
	worryseed: {
		inherit: true,
		onHit(target, source) {
			const oldAbility = target.setAbility('insomnia');
			if (!oldAbility) return oldAbility as false | null;
			if (target.status === 'slp') (target as any).cureStatus(false, source);
		},
	},

	// New Moves
	primalpulse: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Primal Pulse",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, distance: 1, metronome: 1, pulse: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Morning Sun', target);
			this.add('-anim', source, 'Aura Sphere', target);
		},
		onModifyType(move, pokemon) {
			const types = pokemon.getTypes();
			let type = types[1];
			if (type === 'Bird') type = '???';
			if (type === '???' && types[0]) type = types[0];
			move.type = type;
		},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
		desc: "This move's type matches the secondary type of the user. 20% chance to flinch foe.",
		shortDesc: "Type varies based on the user's secondary type. 20% flinch.",
	},
	dragonscurse: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Dragon's Curse",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Dragon Pulse', target);
			this.add('-anim', source, 'Hex', target);
		},
		secondary: {
			chance: 100,
			onHit(target) {
				target.addVolatile('curse');
			},
		},
		target: "normal",
		type: "Dragon",
		contestType: "Clever",
		shortDesc: "Curses the target.",
		desc: "Curses the target.",
	},
	sixtongueemojis: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "sixtongueemojis",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
			this.add('-anim', source, 'Lick', target);
		},
		beforeTurnCallback(pokemon) {
			for (const side of this.sides) {
				if (side.hasAlly(pokemon)) continue;
				side.addSideCondition('sixtongueemojis', pokemon);
				const data = side.getSideConditionData('sixtongueemojis');
				if (!data.sources) {
					data.sources = [];
				}
				data.sources.push(pokemon);
			}
		},
		onModifyMove(move, source, target) {
			if (target?.beingCalledBack || target?.switchFlag) move.accuracy = true;
		},
		onTryHit(target, pokemon) {
			target.side.removeSideCondition('sixtongueemojis');
		},
		condition: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				this.debug('sixtongueemojis start');
				let alreadyAdded = false;
				pokemon.removeVolatile('destinybond');
				for (const source of this.effectState.sources) {
					if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: sixtongueemojis');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst || source.canTerastallize) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source) {
								if (action.choice === 'megaEvo') {
									this.actions.runMegaEvo(source);
								} else if (action.choice === 'terastallize') {
									// Also a "forme" change that happens before moves, though only possible in NatDex
									this.actions.terastallize(source);
								} else {
									continue;
								}
								this.queue.list.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.actions.runMove('sixtongueemojis', source, source.getLocOf(pokemon));
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		shortDesc: "If a foe is switching out, hits it.",
		desc: "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. No accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
	},
	kaleidostorm: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Kaleidostorm",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Diamond Storm', target);
		},
		onModifyType(move, pokemon) {
			const types = pokemon.getTypes();
			let type = types[0];
			if (type === 'Bird') type = '???';
			if (type === '???' && types[1]) type = types[1];
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
		shortDesc: "Type varies based on the user's primary type.",
	},
	yinangblast: {
		accuracy: true,
		basePower: 170,
		category: "Special",
		name: "Yin-Yang Blast",
		pp: 1,
		priority: 0,
		flags: { },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Inferno Overdrive', target);
			this.add('-anim', source, 'Thunder Cage', target);
		},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water') return 1;
		},
		isZ: "ultrasimiseariumz",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
		desc: "This move's type effectiveness against Water is changed to be super effective no matter what this move's type is.",
		shortDesc: "Super effective on Water.",
	},
	stackshield: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stack Shield",
		pp: 10,
		priority: 4,
		flags: { noassist: 1, failcopycat: 1 },
		stallingMove: true,
		volatileStatus: 'stackshield',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
				this.add('-start', target, 'Stack Shield');
				const newatk = target.storedStats.def;
				const newdef = target.storedStats.atk;
				const newspa = target.storedStats.spd;
				const newspd = target.storedStats.spa;
				target.storedStats.atk = newatk;
				target.storedStats.def = newdef;
				target.storedStats.spa = newspa;
				target.storedStats.spd = newspd;
			},
			onCopy(pokemon) {
				const newatk = pokemon.storedStats.def;
				const newdef = pokemon.storedStats.atk;
				const newspa = pokemon.storedStats.spd;
				const newspd = pokemon.storedStats.spa;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
				pokemon.storedStats.spa = newspa;
				pokemon.storedStats.spd = newspd;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Stack Shield');
				const newatk = pokemon.storedStats.def;
				const newdef = pokemon.storedStats.atk;
				const newspa = pokemon.storedStats.spd;
				const newspd = pokemon.storedStats.spa;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
				pokemon.storedStats.spa = newspa;
				pokemon.storedStats.spd = newspd;
			},
			onRestart(pokemon) {
				pokemon.removeVolatile('Stack Shield');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: { effect: 'clearnegativeboost' },
		contestType: "Cute",
		desc: "Protects the user and flips its offenses and defenses.",
		shortDesc: "Protects the user and flips its offenses and defenses.",
	},
	// Old Moves
	kingsshield: {
		inherit: true,
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({ atk: -1, spa: -1 }, source, target, this.dex.getActiveMove("King's Shield"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({ atk: -1, spa: -1 }, source, target, this.dex.getActiveMove("King's Shield"));
				}
			},
		},
	},
	ivycudgel: {
		inherit: true,
		onModifyType(move, pokemon) {
			switch (pokemon.species.name) {
			case 'Ogerpon-Wellspring':
			case 'Ogerpon-Wellspring-Tera':
				move.type = 'Water';
				break;
			case 'Ogerpon-Hearthflame':
			case 'Ogerpon-Hearthflame-Tera':
				move.type = 'Fire';
				break;
			case 'Ogerpon-Cornerstone':
			case 'Ogerpon-Cornerstone-Tera':
				move.type = 'Rock';
				break;
			case 'Ogerpon-Pixiedust':
			case 'Ogerpon-Pixiedust-Tera':
				move.type = 'Fairy';
				break;
			}
		},
	},
	razorshell: {
		num: 534,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Razor Shell",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		onModifyMove(move, pokemon, target) {
			if (!target) return;
			const atk = pokemon.getStat('atk', false, true);
			const spa = pokemon.getStat('spa', false, true);
			const def = target.getStat('def', false, true);
			const spd = target.getStat('spd', false, true);
			const physical = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * atk) / def) / 50);
			const special = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * spa) / spd) / 50);
			if (physical < special || (physical === special && this.randomChance(1, 2))) {
				move.category = 'Special';
				delete move.flags['contact'];
			}
		},
		onHit(target, source, move) {
			// Shell Side Arm normally reveals its category via animation on cart, but doesn't play either custom animation against allies
			if (!source.isAlly(target)) this.hint(move.category + " Razor Shell");
		},
		onAfterSubDamage(damage, target, source, move) {
			if (!source.isAlly(target)) this.hint(move.category + " Razor Shell");
		},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
		desc: "Has a 50% chance to lower the target's Defense and a 50% chance to lower the target's Special Attack. This move becomes a special attack that doesn't make contact if the value of ((((2 * the user's level / 5 + 2) * 90 * X) / Y) / 50), where X is the user's Attack stat and Y is the target's Defense stat, is greater than the same value where X is the user's Special Attack stat and Y is the target's Special Defense stat. No stat modifiers other than stat stage changes are considered for this purpose. If the two values are equal, this move chooses a damage category at random.",
		shortDesc: "50% -1 Def, -50% -SpD. Special+non-contact if it would be stronger.",
	},
};
