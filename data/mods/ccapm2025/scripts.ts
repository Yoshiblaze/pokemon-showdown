import {Pokemon} from "../../../sim";
import {BattleActions} from "../../../sim/battle-actions";

export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	init() {
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
			if (pokemon.name === 'Iron Valiant' && !pokemon.battle.ruleTable.tagRules.includes("+pokemontag:cap"))
				pokemon.m.usedMoves = [];
			return true;
		},
		useMove(move: Move, pokemon: Pokemon) {
			const success = this.useMoveInner(move, pokemon);
			if (success && pokemon.name === 'Iron Valiant' && !pokemon.battle.ruleTable.tagRules.includes("+pokemontag:cap"))
			{
				if (!pokemon.m.usedMoves) pokemon.m.usedMoves = [];
				if (!pokemon.m.usedMoves.includes(move.id)) pokemon.m.usedMoves.push(move.id);
				if (pokemon.moves.filter(name => pokemon.m.usedMoves.includes(name)).toString() === pokemon.moves.toString())
					pokemon.formeChange('Iron Valiant-High-Judge', null, true);
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
				if (pokemon.name === 'Kecleon' && !this.ruleTable.tagRules.includes("+pokemontag:cap")){
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
	}
};
