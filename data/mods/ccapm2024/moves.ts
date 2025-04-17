export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	leechlife: {
		inherit: true,
		onModifyMove(move, pokemon) {
			if (!pokemon.volatiles['bloodsucking']) return;
			move.basePower = 20;
			move.drain = [1, 1];
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
			pokemon.removeVolatile('bloodsucking');
		},
	},

	// fake moves
	medic: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "medic",
		pp: 20,
		priority: 0,
		flags: { reflectable: 1, nonsky: 1, mustpressure: 1, nosketch: 1 },
		sideCondition: 'medic',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'medic', '[silent]');
			},
			onEntryHazard(pokemon) {
				this.heal(pokemon.maxhp / 6);
				if (pokemon.status) pokemon.cureStatus();
				pokemon.side.removeSideCondition('medic');
				this.add('-sideend', pokemon.side, 'move: Medic', '[silent]');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: { boost: { def: 1 } },
		contestType: "Clever",
	},
	fishingtokens: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Fishing Tokens",
		pp: 30,
		priority: 0,
		flags: { snatch: 1 },
		sideCondition: 'fishingtokens',
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'Fishing Tokens');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				this.add('-sidestart', side, 'Fishing Tokens');
				this.effectState.layers++;
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 2,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Fishing Tokens');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Water",
		zMove: { boost: { spd: 1 } },
		contestType: "Beautiful", // they sure are
	},
};
