export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	klawf: {
		num: 950,
		name: "Klawf",
		types: ["Rock"],
		baseStats: {hp: 70, atk: 100, def: 115, spa: 35, spd: 55, spe: 85},
		abilities: {0: "Anger Shell", 1: "Shell Armor", H: "Regenerator"},
		heightm: 1.3,
		weightkg: 79,
		color: "Red",
		eggGroups: ["Water 3"],
	},
	veluza: {
		num: 976,
		name: "Veluza",
		types: ["Water", "Psychic"],
		baseStats: {hp: 90, atk: 102, def: 73, spa: 97, spd: 65, spe: 70},
		abilities: {0: "Mold Breaker", 1: "Regenerator", H: "Sharpness"},
		heightm: 2.5,
		weightkg: 90,
		color: "Gray",
		eggGroups: ["Water 2"],
	},
	hypno: {
		inherit: true,
		baseStats: {hp: 85, atk: 73, def: 80, spa: 73, spd: 115, spe: 67},
	},
	banette: {
		inherit: true,
		baseStats: {hp: 114, atk: 125, def: 65, spa: 83, spd: 63, spe: 65},
	},
	honchkrow: {
		inherit: true,
		baseStats: {hp: 120, atk: 135, def: 52, spa: 105, spd: 52, spe: 41},
	},
	delibird: {
		inherit: true,
		baseStats: {hp: 80, atk: 55, def: 45, spa: 80, spd: 45, spe: 130},
		abilities: {0: "Vital Spirit", 1: "Hustle", H: "Symbiosis"},
  },
	coalossal: {
		inherit: true,
		baseStats: {hp: 110, atk: 90, def: 120, spa: 90, spd: 90, spe: 30},
  },
	lurantis: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 90, spa: 80, spd: 90, spe: 45},
  },
	houndoom: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 105},
		abilities: {0: "Early Bird", 1: "Flash Fire", H: "Solar Power"},
  },
	gogoat: {
		inherit: true,
		baseStats: {hp: 123, atk: 114, def: 62, spa: 97, spd: 81, spe: 68},
		abilities: {0: "Sap Sipper", 1: "Grassy Surge", H: "Grass Pelt"},
  },
	oinkologne: {
		num: 916,
		name: "Oinkologne",
		baseForme: "M",
		types: ["Normal", "Fairy"],
		gender: "M",
		baseStats: {hp: 110, atk: 101, def: 75, spa: 59, spd: 80, spe: 65},
		abilities: {0: "Lingering Aroma", 1: "Misty Surge", H: "Thick Fat"},
		heightm: 1,
		weightkg: 120,
		color: "Gray",
		prevo: "Lechonk",
		evoLevel: 18,
		otherFormes: ["Oinkologne-F"],
		formeOrder: ["Oinkologne", "Oinkologne-F"],
		eggGroups: ["Field"],
	},
	oinkolognef: {
		num: 916,
		name: "Oinkologne-F",
		baseSpecies: "Oinkologne",
		forme: "F",
		types: ["Normal", "Fairy"],
		gender: "F",
		baseStats: {hp: 115, atk: 90, def: 70, spa: 59, spd: 91, spe: 65},
		abilities: {0: "Aroma Veil", 1: "Misty Surge", H: "Thick Fat"},
		heightm: 1,
		weightkg: 120,
		color: "Brown",
		prevo: "Lechonk",
		evoLevel: 18,
		eggGroups: ["Field"],
	},
	dedenne: {
		inherit: true,
		baseStats: {hp: 67, atk: 58, def: 57, spa: 81, spd: 67, spe: 105},
  },
	pachirisu: {
		inherit: true,
		baseStats: {hp: 70, atk: 45, def: 90, spa: 45, spd: 90, spe: 95},
  },
	luxray: {
		inherit: true,
		baseStats: {hp: 92, atk: 120, def: 79, spa: 95, spd: 79, spe: 70},
  },
	wugtrio: {
		inherit: true,
		abilities: {0: "Gooey", 1: "Storm Drain", H: "Sand Veil"},
  },
	dugtrio: {
		inherit: true,
		abilities: {0: "Sand Veil", 1: "Arena Trap", H: "Sand Rush"},
  },
	skuntank: {
		inherit: true,
		baseStats: {hp: 103, atk: 103, def: 67, spa: 71, spd: 67, spe: 84},
		abilities: {0: "Stench", 1: "Aftermath", H: "Stalwart"},
  },
	passimian: {
		inherit: true,
		baseStats: {hp: 100, atk: 120, def: 90, spa: 40, spd: 60, spe: 105},
  },
	oranguru: {
		inherit: true,
		baseStats: {hp: 100, atk: 60, def: 85, spa: 100, spd: 110, spe: 60},
  },
	perrserker: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 100, spa: 50, spd: 80, spe: 50},
  },
	persian: {
		inherit: true,
		baseStats: {hp: 65, atk: 70, def: 60, spa: 85, spd: 65, spe: 115},
  },
	persianalola: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 60, spa: 95, spd: 65, spe: 115},
  },
	ironjugulis: {
		inherit: true,
		baseStats: {hp: 90, atk: 104, def: 76, spa: 122, spd: 70, spe: 108},
  },
};