export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	/* // try later (or not)
	actions: {
		secondaries(targets: SpreadMoveTargets, source: Pokemon, move: ActiveMove, moveData: ActiveMove, isSelf?: boolean) {
			if (!moveData.secondaries) return;
			for (const foe of targets) {
				if (foe === false) continue;
				const secondaries: Dex.SecondaryEffect[] =
					this.battle.runEvent('ModifySecondaries', foe, source, moveData, moveData.secondaries.slice());
				for (const secondary of secondaries) {
					const secondaryRoll = this.battle.random(100);
					// User stat boosts or foe stat drops can possibly overflow if it goes beyond 256 in Gen 8 or prior
					const secondaryOverflow = (secondary.boosts || secondary.self) && this.battle.gen <= 8;
					if (typeof secondary.chance === 'undefined' ||
						secondaryRoll < (secondaryOverflow ? secondary.chance % 256 : secondary.chance)) {
						let flag = true;
						const canSetStatus = function (status, target, pokemon) {
							if (!target || target === false || target.status) return false;
							const cantStatus = {
								brn: ['Fire', 'comatose', 'waterveil', 'waterbubble'],
								frz: ['Ice', 'comatose', 'magmaarmor'],
								par: ['Electric', 'comatose', 'limber'],
								psn: ['comatose', 'immunity'],
								slp: ['comatose', 'insomnia', 'vitalspirit'],
								tox: ['comatose', 'immunity'],
							};
							if (target.hasType(['Poison', 'Steel']) && (status === 'psn' || status === 'tox')) {
								if (pokemon.hasAbility('corrosion')) {
									return true;
								} else {
									return false;
								}
							}
							if (target.hasType(cantStatus[status][0])) return false;
							if (move.ignoreAbility) return true;
							if (target.hasAbility('leafguard') && this.isWeather(['sunnyday', 'desolateland'])) return false;
							if (target.hasAbility('shieldsdown') && target.template.speciesid === 'miniormeteor') return false;
							if (target.hasAbility(cantStatus[status])) return false;
							return true;
						};
						if (moveData.secondary.status) flag = canSetStatus(moveData.secondary.status, foe, source);
						if (moveData.secondary.volatileStatus) flag = !(moveData.secondary.volatileStatus in foe.volatiles);
						if (moveData.secondary.volatileStatus === 'flinch') flag = flag && foe.activeTurns && !foe.moveThisTurn;
						this.moveHit(foe, source, move, secondary, true, isSelf);
						if (moveData.secondary.self.boosts) {
							Object.keys(moveData.secondary.self.boosts).forEach(boost => {
								if (source.boosts[boost] === 6) flag = false;
							});
						} else {
							flag = flag && !(foe.hp === undefined || foe.hp <= 0);
						}
						if (moveData.target !== 'self' && moveData.secondary.boosts) {
							const cantLower = {
								'atk': ['clearbody', 'fullmetalbody', 'hypercutter', 'whitesmoke'],
								'def': ['bigpecks', 'clearbody', 'fullmetalbody', 'whitesmoke'],
								'spa': ['clearbody', 'fullmetalbody', 'whitesmoke'],
								'spd': ['clearbody', 'fullmetalbody', 'whitesmoke'],
								'spe': ['clearbody', 'fullmetalbody', 'whitesmoke'],
								'accuracy': ['clearbody', 'fullmetalbody', 'keeneye', 'whitesmoke'],
							};
							for (const k in moveData.secondary.boosts) {
								if (foe.boosts[k] === -6) {
									flag = false;
									continue;
								}
								if (moveData.secondary.boosts[k] < 0 && foe.hasAbility(cantLower[k]) && !move.ignoreAbility) {
									flag = false;
									break;
								}
							}
						}
						if (source.hasAbility('sheerforce')) flag = false;
						if (foe && foe.hasAbility('shielddust') && !move.ignoreAbility && !move.secondary.self.boosts) {
							flag = false;
						}
						if (flag && foe.hasAbility('countermeasures')) {
							this.battle.add('-activate', foe, 'ability: Countermeasures');
							this.battle.damage(source.baseMaxhp * (100 - secondary.chance) / 100, source, foe);
						}
					}
				}
			}
		},
	}, */
};
