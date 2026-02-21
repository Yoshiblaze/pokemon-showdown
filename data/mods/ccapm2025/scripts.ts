import { Pokemon, toID } from "../../../sim";
import { RESTORATIVE_BERRIES } from "../../../sim/pokemon";
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	init() {
		for (const mon of Dex.species.all()) {
			if (this.modData("Learnsets", mon.id)?.learnset)
				this.modData("Learnsets", mon.id).learnset.holdhands = ["9L1"];
		}
		this.modData("Learnsets", "alcremie").learnset.acidarmor = ["9L1"];
		this.modData("Learnsets", "drifblim").learnset.hurricane = ["9L1"];
		this.modData("Learnsets", "drifblim").learnset.infernalparade = ["9L1"];
		this.modData("Learnsets", "electrode").learnset.healingwish = ["9L1"];
		this.modData("Learnsets", "electrode").learnset.lunardance = ["9L1"];
		this.modData("Learnsets", "electrode").learnset.memento = ["9L1"];
		this.modData("Learnsets", "electrode").learnset.mistyexplosion = ["9L1"];
		this.modData("Learnsets", "flygon").learnset.healbell = ["9L1"];
		this.modData("Learnsets", "flygon").learnset.snarl = ["9L1"];
		this.modData("Learnsets", "flygon").learnset.quiverdance = ["9L1"];
		this.modData("Learnsets", "flygon").learnset.vacuumwave = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.agility = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.bubblebeam = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.earthquake = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.firepunch = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.icepunch = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.megapunch = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.terablast = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.terrainpulse = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.thunderpunch = ["9L1"];
		this.modData("Learnsets", "genesect").learnset.waterpulse = ["9L1"];
		this.modData("Learnsets", "ironvaliant").learnset.playrough = ["9L1"];
		this.modData("Learnsets", "ironvaliant").learnset.willowisp = ["9L1"];
		this.modData("Learnsets", "ironvaliant").learnset.wish = ["9L1"];
		this.modData("Learnsets", "jirachi").learnset.holdhands = ["9L1"];
		this.modData("Learnsets", "kommoo").learnset.powergem = ["9L1"];
		this.modData("Learnsets", "kommoo").learnset.stoneedge = ["9L1"];
		this.modData("Learnsets", "mesprit").learnset.recover = ["9L1"];
		this.modData("Learnsets", "octillery").learnset.recover = ["9L1"];
		this.modData("Learnsets", "shaymin").learnset.floralhealing = ["9L1"];
		this.modData("Learnsets", "shaymin").learnset.flowershield = ["9L1"];
		this.modData("Learnsets", "shaymin").learnset.flowertrick = ["9L1"];
		this.modData("Learnsets", "shaymin").learnset.sappyseed = ["9L1"];
		this.modData("Learnsets", "shaymin").learnset.strengthsap = ["9L1"];
		this.modData("Learnsets", "simisear").learnset.burningjealousy = ["9L1"];
		this.modData("Learnsets", "simisear").learnset.earthpower = ["9L1"];
		this.modData("Learnsets", "simisear").learnset.eruption = ["9L1"];
		this.modData("Learnsets", "simisear").learnset.fakeout = ["9L1"];
		this.modData("Learnsets", "simisear").learnset.mudshot = ["9L1"];
		this.modData("Learnsets", "simisear").learnset.temperflare = ["9L1"];
		this.modData("Learnsets", "simisear").learnset.terablast = ["9L1"];
		this.modData("Learnsets", "simisear").learnset.stoneedge = ["9L1"];
		this.modData("Learnsets", "simisear").learnset.swordsdance = ["9L1"];
		this.modData("Learnsets", "slowking").learnset.darkpulse = ["9L1"];
		this.modData("Learnsets", "slowking").learnset.sludgebomb = ["9L1"];
		this.modData("Learnsets", "slowking").learnset.sludgewave = ["9L1"];
		this.modData("Learnsets", "stakataka").learnset.taunt = ["9L1"];
		this.modData("Learnsets", "volcarona").learnset.weatherball = ["9L1"];
		this.modData("Learnsets", "volcarona").learnset.quiverdance = ["9L1"];
		this.modData("Learnsets", "weavile").learnset.amnesia = ["9L1"];
		this.modData("Learnsets", "weavile").learnset.auroraveil = ["9L1"];
		this.modData("Learnsets", "weavile").learnset.berrier = ["9L1"];
		this.modData("Learnsets", "weavile").learnset.dive = ["9L1"];
		this.modData("Learnsets", "weavile").learnset.haze = ["9L1"];
		this.modData("Learnsets", "weavile").learnset.hypnosis = ["9L1"];
		this.modData("Learnsets", "weavile").learnset.moonlight = ["9L1"];
		this.modData("Learnsets", "weavile").learnset.obstruct = ["9L1"];
		this.modData("Learnsets", "weavile").learnset.switcheroo = ["9L1"];
		this.modData("Learnsets", "wyrdeer").learnset.auroraveil = ["9L1"];
		this.modData("Learnsets", "wyrdeer").learnset.blizzard = ["9L1"];
		this.modData("Learnsets", "wyrdeer").learnset.freezedry = ["9L1"];
		this.modData("Learnsets", "wyrdeer").learnset.icebeam = ["9L1"];
		this.modData("Learnsets", "wyrdeer").learnset.iciclespear = ["9L1"];
		this.modData("Learnsets", "wyrdeer").learnset.icywind = ["9L1"];
		this.modData("Learnsets", "wyrdeer").learnset.solarbeam = ["9L1"];
		this.modData("Learnsets", "wyrdeer").learnset.energyball = ["9L1"];
		this.modData("Learnsets", "zarude").learnset.rest = ["9L1"];
		this.modData("Learnsets", "zeraora").learnset.doubleshock = ["9L1"];
		this.modData("Learnsets", "zeraora").learnset.highjumpkick = ["9L1"];
		this.modData("Learnsets", "zeraora").learnset.quickattack = ["9L1"];
		this.modData("Learnsets", "zeraora").learnset.charge = ["9L1"];
		this.modData("Learnsets", "aurorus").learnset.primalpulse = ["9L1"];
		this.modData("Learnsets", "cofagrigus").learnset.dragonscurse = ["9L1"];
		this.modData("Learnsets", "dudunsparce").learnset.sixtongueemojis = ["9L1"];
		this.modData("Learnsets", "kecleon").learnset.kaleidostorm = ["9L1"];
		this.modData("Learnsets", "beartic").learnset.glacierfang = ["9L1"];
		this.modData("Learnsets", "stakataka").learnset.stackshield = ["9L1"];
		this.modData("Learnsets", "aegislash").learnset.soulboundslash = ["9L1"];
		this.modData("Learnsets", "landorus").learnset.generationaldeevolution = ["9L1"];
		this.modData("Learnsets", "landorus").learnset.generationalevolution = ["9L1"];
		this.modData("Learnsets", "sylveon").learnset.ribbonshift = ["9L1"];
	},
	actions: {
		inherit: true,
		canUltraBurst(pokemon: Pokemon) {
			if (['Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane'].includes(pokemon.baseSpecies.name) &&
				pokemon.getItem().id === 'ultranecroziumz') {
				return "Necrozma-Ultra";
			} else if (pokemon.baseSpecies.name === 'Simisear' &&
				pokemon.getItem().id === 'ultrasimiseariumz') {
				return "Simisear-Ultra";
			}
			return null;
		},
		runSwitch(pokemon: Pokemon) {
			const switchersIn = [pokemon];
			while (this.battle.queue.peek()?.choice === 'runSwitch') {
				const nextSwitch = this.battle.queue.shift();
				switchersIn.push(nextSwitch!.pokemon!);
			}
			const allActive = this.battle.getAllActive(true);
			this.battle.speedSort(allActive);
			this.battle.speedOrder = allActive.map(a => a.side.n * a.battle.sides.length + a.position);
			this.battle.fieldEvent('SwitchIn', switchersIn);

			for (const poke of switchersIn) {
				if (!poke.hp) continue;
				poke.isStarted = true;
				poke.draggedIn = null;
				if (poke.species.name === 'Iron Valiant' && !pokemon.battle.ruleTable.tagRules.includes("+pokemontag:cap"))
					pokemon.m.usedMoves = [];
				if (poke.species.name === 'Sudowoodo' && !pokemon.battle.ruleTable.tagRules.includes("+pokemontag:cap"))
					poke.m.grassMoves = 0;
			}
			return true;
		},
		useMove(move: Move, pokemon: Pokemon) {
			const success = this.useMoveInner(move, pokemon);
			if (success && pokemon.species.name === 'Iron Valiant' &&
				!pokemon.battle.ruleTable.tagRules.includes("+pokemontag:cap")) {
				if (!pokemon.m.usedMoves) pokemon.m.usedMoves = [];
				if (!pokemon.m.usedMoves.includes(move.id)) pokemon.m.usedMoves.push(move.id);
				if (pokemon.moves.filter(name => pokemon.m.usedMoves.includes(name)).toString() === pokemon.moves.toString())
					pokemon.formeChange('Iron Valiant-High-Judge', null, true);
			}
			if (success && pokemon.species.name === 'Mewtwo' &&
				!pokemon.battle.ruleTable.tagRules.includes("+pokemontag:cap")) {
				if (!pokemon.m.darkMoves) pokemon.m.darkMoves = 0;
				if (move.type === 'Dark') pokemon.m.darkMoves++;
				if (pokemon.m.darkMoves >= 3)
					pokemon.formeChange('Mewtwo-Evil-Scary', null, true);
			}
			if (success && pokemon.species.name === 'Volcanion' &&
				!pokemon.battle.ruleTable.tagRules.includes("+pokemontag:cap")) {
				if (!pokemon.m.steamMoves) pokemon.m.steamMoves = 0;
				if ((move.type === 'Water' || move.type === 'Fire')) pokemon.m.steamMoves++;
				if (pokemon.m.darkMoves >= 3)
					pokemon.formeChange('Volcanion-Surge', null, true);
			}
			if (success && move.type === 'Grass' &&
				!pokemon.battle.ruleTable.tagRules.includes("+pokemontag:cap")) {
				for (const mon of pokemon.foes()) {
					if (mon.species.name !== 'Sudowoodo') continue;
					if (!mon.m.grassMoves) mon.m.grassMoves = 0;
					mon.m.grassMoves++;
					if (mon.m.grassMoves >= 2) {
						mon.formeChange('Sudowoodo-Nopseudo', null, true);
					}
				}
				for (const mon of pokemon.alliesAndSelf()) {
					if (mon.species.name !== 'Sudowoodo') continue;
					if (!mon.m.grassMoves) mon.m.grassMoves = 0;
					mon.m.grassMoves++;
					if (mon.m.grassMoves >= 2) {
						mon.formeChange('Sudowoodo-Nopseudo', null, true);
					}
				}
			}
			return success;
		},
	},
	faintMessages(lastFirst = false, forceCheck = false, checkWin = true) {
		if (this.ended) return;
		const length = this.faintQueue.length;
		if (!length) {
			if (forceCheck && this.checkWin()) return true;
			return false;
		}
		if (lastFirst) {
			this.faintQueue.unshift(this.faintQueue[this.faintQueue.length - 1]);
			this.faintQueue.pop();
		}
		let faintQueueLeft, faintData;

		while (this.faintQueue.length) {
			faintQueueLeft = this.faintQueue.length;
			faintData = this.faintQueue.shift()!;
			const pokemon: Pokemon = faintData.target;
			if (!pokemon.fainted && this.runEvent('BeforeFaint', pokemon, faintData.source, faintData.effect)) {
				if (pokemon.species.name === 'Kecleon' && !this.ruleTable.tagRules.includes("+pokemontag:cap")) {
					let forme = 'None';
					switch (pokemon.types[0]) {
					case 'Fire':
					case 'Rock':
					case 'Ground':
						forme = 'Kecleon-Volcanic';
						break;
					case 'Grass':
					case 'Bug':
					case 'Poison':
						forme = 'Kecleon-Wild';
						break;
					case 'Electric':
					case 'Fairy':
					case 'Psychic':
						forme = 'Kecleon-Luminous';
						break;
					case 'Ghost':
					case 'Dragon':
					case 'Steel':
						forme = 'Kecleon-Storybook';
						break;
					case 'Ice':
					case 'Water':
					case 'Flying':
						forme = 'Kecleon-Phasic';
						break;
					case 'Normal':
					case 'Fighting':
					case 'Dark':
						forme = 'Kecleon-Ruffian';
						break;
					default:
						forme = 'None';
					}

					if (forme !== 'None') {
						pokemon.formeChange(forme, null, true);
						this.add('-message', `Kecleon was resurrected into ${pokemon.species}.`);

						pokemon.faintQueued = false;
						pokemon.subFainted = false;
						pokemon.status = '';
						pokemon.hp = 1; // Needed so hp functions works
						pokemon.sethp(pokemon.maxhp);
						pokemon.ability = pokemon.baseAbility;

						this.add('-heal', pokemon, pokemon.getHealth, '[from] move: Revival Blessing');
						continue;
					}
				}
				this.add('faint', pokemon);
				if (pokemon.side.pokemonLeft) pokemon.side.pokemonLeft--;
				if (pokemon.side.totalFainted < 100) pokemon.side.totalFainted++;
				this.runEvent('Faint', pokemon, faintData.source, faintData.effect);
				this.singleEvent('End', pokemon.getAbility(), pokemon.abilityState, pokemon);
				this.singleEvent('End', pokemon.getItem(), pokemon.itemState, pokemon);
				if (pokemon.formeRegression && !pokemon.transformed) {
					// before clearing volatiles
					pokemon.baseSpecies = this.dex.species.get(pokemon.set.species || pokemon.set.name);
					pokemon.baseAbility = toID(pokemon.set.ability);
				}
				pokemon.clearVolatile(false);
				pokemon.fainted = true;
				pokemon.illusion = null;
				pokemon.isActive = false;
				pokemon.isStarted = false;
				delete pokemon.terastallized;
				if (pokemon.formeRegression) {
					// after clearing volatiles
					pokemon.details = pokemon.getUpdatedDetails();
					this.add('detailschange', pokemon, pokemon.details, '[silent]');
					pokemon.updateMaxHp();
					pokemon.formeRegression = false;
				}
				pokemon.side.faintedThisTurn = pokemon;
				if (this.faintQueue.length >= faintQueueLeft) checkWin = true;
			}
		}

		if (this.gen <= 1) {
			// in gen 1, fainting skips the rest of the turn
			// residuals don't exist in gen 1
			this.queue.clear();
			// Fainting clears accumulated Bide damage
			for (const pokemon of this.getAllActive()) {
				if (pokemon.volatiles['bide']?.damage) {
					pokemon.volatiles['bide'].damage = 0;
					this.hint("Desync Clause Mod activated!");
					this.hint("In Gen 1, Bide's accumulated damage is reset to 0 when a Pokemon faints.");
				}
			}
		} else if (this.gen <= 3 && this.gameType === 'singles') {
			// in gen 3 or earlier, fainting in singles skips to residuals
			for (const pokemon of this.getAllActive()) {
				if (this.gen <= 2) {
					// in gen 2, fainting skips moves only
					this.queue.cancelMove(pokemon);
				} else {
					// in gen 3, fainting skips all moves and switches
					this.queue.cancelAction(pokemon);
				}
			}
		}

		if (checkWin && this.checkWin(faintData)) return true;

		if (faintData && length) {
			this.runEvent('AfterFaint', faintData.target, faintData.source, faintData.effect, length);
		}
		return false;
	},
	pokemon: {
		inherit: true,
		isGrounded(negateImmunity = false) {
			if ('gravity' in this.battle.field.pseudoWeather) return true;
			if ('ingrain' in this.volatiles && this.battle.gen >= 4) return true;
			if ('smackdown' in this.volatiles) return true;
			const item = (this.ignoringItem() ? '' : this.item);
			if (item === 'ironball') return true;
			// If a Fire/Flying type uses Burn Up and Roost, it becomes ???/Flying-type, but it's still grounded.
			if (!negateImmunity && this.hasType('Flying') && !(this.hasType('???') && 'roost' in this.volatiles)) return false;
			if ((this.hasAbility('levitate') || this.hasAbility('interdimensionalmissle')) &&
				!this.battle.suppressingAbility(this)) {
				return null;
			}
			if ('magnetrise' in this.volatiles) return false;
			if ('telekinesis' in this.volatiles) return false;
			return item !== 'airballoon';
		},
		cureStatus(this: Pokemon, silent?: boolean, source: Pokemon | null = null) {
			if (!this.hp || !this.status) return false;

			if (source?.ability === 'herbalelixir') {
				switch (this.status) {
				case 'psn':
				case 'tox':
					this.setAbility('poisonheal');
					this.baseAbility = this.ability;
					return false;
				case 'brn':
					this.setAbility('guts');
					this.baseAbility = this.ability;
					return false;
				case 'par':
					this.setAbility('quickfeet');
					this.baseAbility = this.ability;
					return false;
				case 'ber':
					this.setAbility('marvelscale');
					this.baseAbility = this.ability;
					return false;
				default:
					break;
				}
			}

			this.setStatus('');
			this.battle.add('-curestatus', this, this.status, silent ? '[silent]' : '[msg]');
			if (this.status === 'slp' && this.removeVolatile('nightmare')) {
				this.battle.add('-end', this, 'Nightmare', '[silent]');
			}

			if (source?.species.name === 'Zarude' && !source.battle.ruleTable.tagRules.includes("+pokemontag:cap")) {
				source.formeChange('Zarude-Alchemist', null, true);
			}

			return true;
		},
		eatItem(this: Pokemon, force?: boolean, source?: Pokemon, sourceEffect?: Effect) {
			if (!this.item) return false;
			if ((!this.hp && this.item !== 'jabocaberry' && this.item !== 'rowapberry') || !this.isActive) return false;

			if (!sourceEffect && this.battle.effect) sourceEffect = this.battle.effect;
			if (!source && this.battle.event?.target) source = this.battle.event.target;
			const item = this.getItem();
			if (sourceEffect?.effectType === 'Item' && this.item !== sourceEffect.id && source === this) {
				// if an item is telling us to eat it but we aren't holding it, we probably shouldn't eat what we are holding
				return false;
			}
			if (
				this.battle.runEvent('UseItem', this, null, null, item) &&
				(force || this.battle.runEvent('TryEatItem', this, null, null, item))
			) {
				this.battle.add('-enditem', this, item, '[eat]');

				this.battle.singleEvent('Eat', item, this.itemState, this, source, sourceEffect);
				this.battle.runEvent('EatItem', this, source, sourceEffect, item);

				if (RESTORATIVE_BERRIES.has(item.id)) {
					switch (this.pendingStaleness) {
					case 'internal':
						if (this.staleness !== 'external') this.staleness = 'internal';
						break;
					case 'external':
						this.staleness = 'external';
						break;
					}
					this.pendingStaleness = undefined;
				}

				this.lastItem = this.item;
				this.item = '';
				this.battle.clearEffectState(this.itemState);
				this.usedItemThisTurn = true;
				this.ateBerry = true;
				if (this.species.baseSpecies === 'Alcremie' && !this.battle.ruleTable.tagRules.includes("+pokemontag:cap")) {
					switch (this.species.id) {
					case "alcremierubycream":
						this.formeChange('Alcremie-Sweetened-Ruby-Cream', null, true);
						break;
					case "alcremiematchacream":
						this.formeChange('Alcremie-Sweetened-Matcha-Cream', null, true);
						break;
					case "alcremiemintcream":
						this.formeChange('Alcremie-Sweetened-Mint-Cream', null, true);
						break;
					case "alcremielemoncream":
						this.formeChange('Alcremie-Sweetened-Lemon-Cream', null, true);
						break;
					case "alcremiesaltedcream":
						this.formeChange('Alcremie-Sweetened-Salted-Cream', null, true);
						break;
					case "alcremierubyswirl":
						this.formeChange('Alcremie-Sweetened-Ruby-Swirl', null, true);
						break;
					case "alcremiecaramelswirl":
						this.formeChange('Alcremie-Sweetened-Caramel-Swirl', null, true);
						break;
					case "alcremierainbowswirl":
						this.formeChange('Alcremie-Sweetened-Rainbow-Swirl', null, true);
						break;
					default:
						this.formeChange('Alcremie-Sweetened', null, true);
						break;
					}

					switch (this.lastItem) {
					case "aguavberry":
						this.battle.boost({ spd: 1 }, this);
						break;
					case "enigmaberry":
						const type = this.battle.dex.types.names()[this.battle.random(18)];
						if (this.hasType(type)) return false;
						if (!this.addType(type)) return false;
						this.battle.add('-start', this, 'typeadd', type);
						break;
					case "figyberry":
						this.battle.boost({ atk: 1 }, this);
						break;
					case "iapapaberry":
						this.battle.boost({ def: 1 }, this);
						break;
					case "magoberry":
						this.battle.boost({ spe: 1 }, this);
						break;
					case "oranberry":
						this.heal(this.maxhp);
						break;
					case "sitrusberry":
						const side = this.side.foe;
						if (!side.sideConditions['stickyweb']) {
							side.addSideCondition('stickyweb', this.foes()[0]);
						}
						break;
					case "wikiberry":
						this.battle.boost({ spa: 1 }, this);
						break;
					default:
						break;
					}
				}
				this.battle.runEvent('AfterUseItem', this, null, null, item);
				return true;
			}
			return false;
		},

		getStat(statName: StatIDExceptHP, unboosted?: boolean, unmodified?: boolean) {
			statName = toID(statName) as StatIDExceptHP;
			// @ts-expect-error type checking prevents 'hp' from being passed, but we're paranoid
			if (statName === 'hp') throw new Error("Please read `maxhp` directly");

			// base stat
			let stat = this.storedStats[statName];

			// Download ignores Wonder Room's effect, but this results in
			// stat stages being calculated on the opposite defensive stat
			if (unmodified && 'wonderroom' in this.battle.field.pseudoWeather) {
				if (statName === 'def') {
					statName = 'spd';
				} else if (statName === 'spd') {
					statName = 'def';
				}
			}

			// stat boosts
			if (!unboosted) {
				let boosts = this.boosts;
				if (!unmodified) {
					boosts = this.battle.runEvent('ModifyBoost', this, null, null, { ...boosts });
				}
				let boost = boosts[statName];
				const boostTable = [1, 1.5, 2, 2.5, 3, 3.5, 4];
				if (boost > 6) boost = 6;
				if (boost < -6) boost = -6;
				if (boost >= 0) {
					stat = Math.floor(stat * boostTable[boost]);
				} else {
					stat = Math.floor(stat / boostTable[-boost]);
				}
			}

			// stat modifier effects
			if (!unmodified) {
				const statTable: { [s in StatIDExceptHP]: string } = { atk: 'Atk', def: 'Def', spa: 'SpA', spd: 'SpD', spe: 'Spe' };
				stat = this.battle.runEvent('Modify' + statTable[statName], this, null, null, stat);
				// Implement Trying My Best!
				if (!this.battle.ruleTable.tagRules.includes("+pokemontag:cap")) {
					const mon = this as any;
					if (mon.tryingMyBestSwitches) {
						stat *= (10 + mon.tryingMyBestSwitches) / 10;
					}
				}
			}

			if (statName === 'spe' && stat > 10000 && !this.battle.format.battle?.trunc) stat = 10000;
			return stat;
		},
	},
};
