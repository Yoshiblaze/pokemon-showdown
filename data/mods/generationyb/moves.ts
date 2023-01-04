export const Moves: {[k: string]: ModdedMoveData} = {
	bladebullet: {
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		shortDesc: "Fails unless each known move has been used. Special if SpA > Atk.",
		name: "Blade Bullet",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sacred Sword", target);
		},
		onTry(source) {
			if (source.moveSlots.length < 2) return false; // Last Resort fails unless the user knows at least 2 moves
			let hasBladeBullet = false; // User must actually have Last Resort for it to succeed
			for (const moveSlot of source.moveSlots) {
				if (moveSlot.id === 'bladebullet') {
					hasBladeBullet = true;
					continue;
				}
				if (!moveSlot.used) return false;
			}
			return hasBladeBullet;
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cute",
	},
};
