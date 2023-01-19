export const Items: {[itemid: string]: ModdedItemData} = {
// Regular Items
	blunderpolicy: {
		name: "Blunder Policy",
		spritenum: 716,
		fling: {
			basePower: 80,
		},
		onUpdate(pokemon) {
			if (pokemon.moveThisTurnResult === false) {
				this.boost({spe: 2});
				pokemon.useItem();
			}
		},
		// Item activation located in scripts.js
		num: 1121,
		gen: 8,
		desc: "+2 Speed if the holder's move fails. Single use.",
	},

// Link Braces

};
