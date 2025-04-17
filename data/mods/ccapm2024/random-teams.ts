import RandomTeams from '../../random-battles/gen9/teams';

export interface CPMSet {
	species: string;
	ability: string | string[];
	item: string | string[];
	gender: GenderName | GenderName[];
	moves: (string | string[])[];
	signatureMove: string;
	evs?: { hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number };
	ivs?: { hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number };
	nature?: string | string[];
	shiny?: number | boolean;
	level?: number;
	happiness?: number;
	skip?: string;
	teraType?: string | string[];
}
interface CPMSets { [k: string]: CPMSet }

export const cpmSets: CPMSets = {
	/*
	// Example:
	Username: {
		species: 'Species', ability: 'Ability', item: 'Item', gender: '',
		moves: ['Move Name', ['Move Name', 'Move Name']],
		signatureMove: 'Move Name',
		evs: {stat: number}, ivs: {stat: number}, nature: 'Nature', teraType: 'Type',
	},
	// Species, ability, and item need to be captialized properly ex: Ludicolo, Swift Swim, Life Orb
	// Gender can be M, F, N, or left as an empty string
	// each slot in moves needs to be a string (the move name, captialized properly ex: Hydro Pump), or an array of strings (also move names)
	// signatureMove also needs to be capitalized properly ex: Scripting
	// You can skip Evs (defaults to 84 all) and/or Ivs (defaults to 31 all), or just skip part of the Evs (skipped evs are 0) and/or Ivs (skipped Ivs are 31)
	// You can also skip shiny, defaults to false. Level can be skipped (defaults to 100).
	// Nature needs to be a valid nature with the first letter capitalized ex: Modest
	*/
	Aesap: {
		species: 'Aesap', ability: 'Exhaust', item: 'Lansat Berry', gender: '',
		moves: ['Knock Off', 'U-turn', 'Strength Sap'],
		signatureMove: 'Let\'s Snuggle Forever',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Jolly', teraType: 'Flying',
	},
	Anxiousoil: {
		species: 'Anxiousoil', ability: 'Troubled', item: 'Leftovers', gender: '',
		moves: [['Earthquake', 'Earth Power'], ['Shadow Ball', 'Poltergeist'], ['Ice Beam', 'Spikes', 'Moonblast']],
		signatureMove: 'Taunt',
		evs: { hp: 252, spa: 4, spe: 252 }, nature: 'Naive', teraType: 'Steel',
	},
	Araquisis: {
		species: 'Araquisis', ability: 'Precognition', item: 'Leftovers', gender: '',
		moves: ['Zen Headbutt', ['Sticky Web', 'Trick Room'], ['Moonlight', 'Pursuit']],
		signatureMove: 'Knock Off',
		evs: { hp: 252, atk: 252, spd: 4 }, ivs: { spe: 0 }, nature: 'Adamant', teraType: 'Dark',
	},
	Arthrostrike: {
		species: 'Arthrostrike', ability: 'Preeminence', item: 'Leftovers', gender: '',
		moves: ['Pin Missile', 'Earthquake', ['Fell Stinger', 'U-turn']],
		signatureMove: 'Arm Thrust',
		evs: { hp: 248, atk: 252, spe: 8 }, nature: 'Adamant', teraType: 'Fairy',
	},
	Bleyabat: {
		species: 'Bleyabat', ability: 'Night Light', item: 'Heavy-Duty Boots', gender: '',
		moves: ['Dual Wingbeat', 'Shadow Claw', 'Roost'],
		signatureMove: 'Bulk Up',
		evs: { hp: 252, def: 4, spd: 252 }, nature: 'Careful', teraType: 'Water',
	},
	Boillusk: {
		species: 'Boillusk', ability: 'Absorber', item: 'Heavy-Duty Boots', gender: '',
		moves: ['Steam Erupton', 'Earth Power', ['Scald', 'Stealth Rock', 'Overheat']],
		signatureMove: 'Fire Blast',
		evs: { hp: 252, spa: 252, spe: 4 }, nature: 'Modest', teraType: 'Fire',
	},
	Boogeymancer: {
		species: 'Boogeymancer', ability: 'Broken Wand', item: 'Life Orb', gender: '',
		moves: ['Shadow Ball', 'Energy Ball', ['Parting Shot', 'Calm Mind']],
		signatureMove: 'Lava Plume',
		evs: { atk: 4, spa: 252, spd: 252 }, nature: 'Timid', teraType: 'Dragon',
	},
	Buffball: {
		species: 'Buffball', ability: 'Preparation', item: 'Leftovers', gender: '',
		moves: ['Leech Life', 'Knock Off', ['Bulk Up', 'Agility']],
		signatureMove: "Close Combat",
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Adamant', teraType: 'Ground',
	},
	Bugsome: {
		species: 'Bugsome', ability: 'Stat Leeching', item: 'Heavy-Duty Boots', gender: '',
		moves: ['Lunge', ['Crunch', 'Psychic Fangs'], 'Close Combat'],
		signatureMove: "U-turn",
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Fire',
	},
	Cliffilisk: {
		species: 'Cliffilisk', ability: 'Crumble', item: 'Leftovers', gender: '',
		moves: ['Dragon Claw', ['Knock Off', 'Earthquake'], ['Stone Edge', 'Head Smash']],
		signatureMove: "Collision Course",
		evs: { hp: 252, atk: 252, spd: 4 }, nature: 'Adamant', teraType: 'Fighting',
	},
	Cogwyld: {
		species: 'Cogwyld', ability: 'Self-Repair', item: 'Heavy-Duty Boots', gender: '',
		moves: ['Knock Off', 'Gear Grind', ['Heal Bell', 'Thunder Wave', 'Stealth Rock']],
		signatureMove: 'Parting Shot',
		evs: { hp: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Water',
	},
	Contradox: {
		species: 'Contradox', ability: 'Antimatter', item: 'Life Orb', gender: '',
		moves: ['Psychic Fangs', ['Earthquake', 'Fire Punch', 'Ice Shard'], 'U-turn'],
		signatureMove: 'Triple Axel',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Poison',
	},
	Cosmole: {
		species: 'Cosmole', ability: 'Quick Thinking', item: 'Life Orb', gender: '',
		moves: [['Swords Dance', 'Rapid Spin', 'Close Combat'], 'Earthquake', 'Psychic Fangs'],
		signatureMove: 'Extreme Speed',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Adamant', teraType: 'Ground',
	},
	Crashtank: {
		species: 'Crashtank', ability: 'Brace for Impact', item: 'Heavy-Duty Boots', gender: 'N',
		moves: ['Knock Off', 'Body Press', ['Rapid Spin', 'Spikes', 'U-turn']],
		signatureMove: 'Body Slam',
		evs: { hp: 248, def: 252, spd: 8 }, nature: 'Impish', teraType: 'Fairy',
	},
	Cryobser: {
		species: 'Cryobser', ability: 'Medic', item: 'Heavy-Duty Boots', gender: '',
		moves: ['Ice Beam', 'Heal Bell', ['Discharge', 'Body Slam']],
		signatureMove: 'Revival Blessing',
		evs: { hp: 252, spd: 252, spe: 4 }, nature: 'Calm', teraType: 'Fairy',
	},
	Delirirak: {
		species: 'Delirirak', ability: 'Fumigation', item: 'Heavy-Duty Boots', gender: '',
		moves: ['Recover', 'Ice Beam', ['Earth Power', 'Toxic', 'Will-O-Wisp']],
		signatureMove: 'Hex',
		evs: { hp: 4, spa: 252, spd: 252 }, nature: 'Modest', teraType: 'Stellar',
	},
	Depresloth: {
		species: 'Depresloth', ability: 'Exhaust', item: 'Leftovers', gender: '',
		moves: ['Thunderbolt', 'Shadow Ball', 'Volt Switch'],
		signatureMove: 'Signal Beam',
		evs: { hp: 252, def: 252, spa: 4 }, nature: 'Timid', teraType: 'Bug',
	},
	Faellen: {
		species: 'Faellen', ability: 'Broken Wand', item: 'Choice Specs', gender: '',
		moves: [['U-turn', 'Trick'], 'Dark Pulse', ['Flamethrower', 'Moonblast']],
		signatureMove: 'Light of Ruin',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Ghost',
	},
	Fightinfly: {
		species: 'Fightinfly', ability: 'Nocturnal', item: 'Choice Band', gender: '',
		moves: ['Close Combat', ['Knock Off', 'Stone Edge'], ['Earthquake', 'Flare Blitz']],
		signatureMove: 'U-turn',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Jolly', teraType: 'Fairy',
	},
	Folibower: {
		species: 'Folibower', ability: 'Treasure Craze', item: 'Salac Berry', gender: '',
		moves: ['Seed Bomb', 'Acrobatics', 'Recycle'],
		signatureMove: 'Stuff Cheeks',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Fairy',
	},
	Frenzaiai: {
		species: 'Frenzaiai', ability: 'Asymmetry', item: 'Black Sludge', gender: '',
		moves: ['Toxic', 'U-turn', 'Knock Off'],
		signatureMove: 'Encore',
		evs: { hp: 252, spd: 4, spe: 252 }, nature: 'Jolly', teraType: 'Fairy',
	},
	Fungemory: {
		species: 'Fungemory', ability: 'Sealed Off', item: 'Leftovers', gender: 'M',
		moves: ['Psychic Noise', 'Scald', ['Tidy Up', 'Teleport']],
		signatureMove: 'Shadow Ball',
		evs: { hp: 252, spa: 4, spd: 252 }, nature: 'Calm', teraType: 'Psychic',
	},
	Guarden: {
		species: 'Guarden', ability: 'Royal Guard', item: 'Leftovers', gender: '',
		moves: ['Bulk Up', 'Leaf Blade', ['Body Press', 'Bitter Blade', 'Iron Head']],
		signatureMove: 'Spiky Shield',
		evs: { hp: 252, spd: 252, spe: 4 }, nature: 'Careful', teraType: 'Steel',
	},
	Hawksectiff: {
		species: 'Hawksectiff', ability: 'Pecking Order', item: 'Heavy-Duty Boots', gender: '',
		moves: ['Dual Wingbeat', 'Knock Off', ['Roost', 'Sucker Punch']],
		signatureMove: 'Pursuit',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Jolly', teraType: 'Steel',
	},
	Ichthyocorn: {
		species: 'Ichthyocorn', ability: 'Capricious', item: 'Leftovers', gender: '',
		moves: [['Recover', 'Ice Beam'], 'Moonblast', ['Hydro Pump', 'Scald']],
		signatureMove: 'Flip Turn',
		evs: { spa: 252, spd: 4, spd: 252 }, nature: 'Timid', teraType: 'Rock',
	},
	Lampyre: {
		species: 'Lampyre', ability: 'Night Light', item: ['Air Balloon', 'Choice Specs'], gender: '',
		moves: ['Flash Cannon', 'Scald', ['Calm Mind', 'Overheat']],
		signatureMove: 'Fire Blast',
		evs: { hp: 252, def: 28, spd: 224 }, ivs: { atk: 0, spe: 0 }, nature: 'Relaxed',
	},
	Lazahrusk: {
		species: 'Lazahrusk', ability: 'Diseased', item: 'Heavy-Duty Boots', gender: '',
		moves: [['Leech Life', 'Shadow Ball'], 'Strength Sap', 'Revival Blessing'],
		signatureMove: 'Mortal Spin',
		evs: { hp: 252, def: 252, spd: 4 }, nature: 'Relaxed', teraType: 'Fairy',
	},
	Leviadon: {
		species: 'Leviadon', ability: 'Gangster', item: 'Leftovers', gender: '',
		moves: ['Close Combat', ['Glare', 'Flash Cannon', 'Fire Blast'], ['Dragon Tail', 'Stealth Rock']],
		signatureMove: 'Core Enforcer',
		evs: { hp: 252, spa: 252, spd: 4 }, nature: 'Modest', teraType: 'Water',
	},
	Liwyzard: {
		species: 'Liwyzard', ability: 'Magic Missile', item: 'Light Ball', gender: '',
		moves: ['Calm Mind', 'Mystical Fire', 'Moonlight'],
		signatureMove: 'Strange Steam',
		evs: { hp: 252, spa: 4, spe: 252 }, nature: 'Timid', teraType: 'Steel',
	},
	Magmouth: {
		species: 'Magmouth', ability: 'Searing Remark', item: 'Leftovers', gender: '',
		moves: ['Boomburst', 'Sandsear Storm', ['Parting Shot', 'Torch Song']],
		signatureMove: 'Burning Bulwark',
		evs: { hp: 252, def: 252, spd: 4 }, nature: 'Bold', teraType: ['Steel', 'Flying', 'Electric', 'Dark'],
	},
	Manticrash: {
		species: 'Manticrash', ability: 'Comeback', item: 'Assault Vest', gender: '',
		moves: ['Hyper Drill', ['Fake Out', 'First Impression'], ['Wild Charge', 'U-turn']],
		signatureMove: 'Headlong Rush',
		evs: { hp: 252, atk: 252, spd: 4 }, nature: 'Adamant', teraType: 'Grass',
	},
	Marlord: {
		species: 'Marlord', ability: 'Polychrome', item: 'Assault Vest', gender: '',
		moves: ['Close Combat', ['Head Smash', 'Knock Off'], 'Earthquake'],
		signatureMove: 'Iron Head',
		evs: { hp: 148, atk: 156, spd: 204 }, nature: 'Adamant', teraType: 'Steel',
	},
	Marsonmallow: {
		species: 'Marsonmallow', ability: 'big stick', item: 'Heavy-Duty Boots', gender: '',
		moves: ['Play Rough', ['Recover', 'Leaf Blade'], ['Trick Room', 'Sticky Web']],
		signatureMove: 'Flare Blitz',
		evs: { hp: 252, atk: 252, def: 4 }, nature: 'Brave', teraType: 'Poison',
	},
	Mindwyrm: {
		species: 'Mindwyrm', ability: 'Quick Thinking', item: 'Sitrus Berry', gender: '',
		moves: ['Leech Life', ['Knock Off', 'Temper Flare'], 'Dragon Hammer'],
		signatureMove: 'Clangorous Soul',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Any',
	},
	Minkai: {
		species: 'Minkai', ability: 'Nocturnal', item: ['Life Orb', 'Choice Specs'], gender: '',
		moves: ['Focus Blast', 'Earth Power', ['Calm Mind', 'Shadow Ball']],
		signatureMove: 'Ice Beam',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Any',
	},
	Mosstrosity: {
		species: 'Mosstrosity', ability: 'Clinch', item: 'Power Herb', gender: '',
		moves: ['Meteor Beam', 'Surf', 'Thunderbolt'],
		signatureMove: 'Solar Beam',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Any',
	},
	Nectaregal: {
		species: 'Nectaregal', ability: 'Electromagnetic Manipulation', item: 'Leftovers', gender: '',
		moves: ['Giga Drain', ['Volt Switch', 'Discharge', 'Mud Shot'], ['Spikes', 'Calm Mind']],
		signatureMove: 'Synthesis',
		evs: { hp: 252, def: 252, spd: 4 }, nature: 'Bold', teraType: 'Flying',
	},
	Nharboard: {
		species: 'Nharboard', ability: 'First-Class Ticket', item: 'Leftovers', gender: '',
		moves: ['Flash Cannon', 'Flip Turn', ['Hurricane', 'Defog']],
		signatureMove: 'Scald',
		evs: { hp: 252, def: 4, spa: 252 }, nature: 'Modest', teraType: 'Fairy',
	},
	Noyew: {
		species: 'Noyew', ability: 'Back at Ya!', item: 'Leftovers', gender: '',
		moves: ['Spikes', 'Toxic', 'Leech Seed'],
		signatureMove: 'Leech Seed',
		evs: { hp: 252, def: 128, spd: 128 }, nature: 'Careful', teraType: 'Fairy',
	},
	Nucleophage: {
		species: 'Nucleophage', ability: 'Diseased', item: 'Black Sludge', gender: '',
		moves: ['Psychic', 'Sludge Wave', 'Lava Plume'],
		signatureMove: 'Nasty Plot',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Psychic',
	},
	Nummanutts: {
		species: 'Nummanutts', ability: 'Dice Roller', item: 'Black Sludge', gender: '',
		moves: ['Knock Off', 'Recover', ['Mortal Spin', 'U-turn']],
		signatureMove: 'Sludge Bomb',
		evs: { hp: 252, spa: 4, spd: 252 }, nature: 'Sassy', teraType: 'Poison',
	},
	DaWoblefet: {
		species: 'Wobbuffet', ability: 'Shadow Artifice', item: 'Iapapa Berry', gender: '',
		moves: ['Counter', 'Mirror Coat', 'Encore'],
		signatureMove: 'Super Ego Inflation',
		evs: { hp: 252, def: 252, spd: 4 }, ivs: { spe: 0 }, nature: 'Relaxed', teraType: 'Fairy',
	},
	deftinwolf: {
		species: 'Yveltal', ability: 'Sharpness', item: 'Dread Plate', gender: '',
		moves: ['Aerial Ace', 'Ceaseless Edge', 'Cross Poison'],
		signatureMove: 'Trivial Pursuit',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Adamant', teraType: 'Poison',
	},
	dhelmise: {
		species: 'Dhelmise', ability: 'Virus', item: 'Big Root', gender: 'N',
		moves: ['Spectral Thief', 'Horn Leech', 'Shadow Sneak'],
		signatureMove: 'EMP',
		evs: { hp: 252, atk: 4, spd: 252 }, nature: 'Careful', teraType: ['Ghost'],
	},
	DianaNicole: {
		species: 'Abomasnow', ability: 'Snow Warning', item: 'Abomasite', gender: 'F',
		moves: ['Giga Drain', 'Earth Power', 'Blizzard'],
		signatureMove: 'Breath of Tiamat',
		evs: { hp: 252, def: 4, spa: 252 }, nature: 'Modest', shiny: true,
	},
	EasyOnTheHills: {
		species: 'Snorlax', ability: 'Immunity', item: 'Life Orb', gender: 'M',
		moves: ['Darkest Lariat', 'Body Slam', 'Heavy Slam'],
		signatureMove: 'Snack Time',
		evs: { hp: 252, atk: 252, spd: 4 }, nature: 'Adamant', teraType: 'Ghost', shiny: true,
	},
	Elliot: {
		species: 'Sinistea', ability: 'Natural Cure', item: 'Focus Sash', gender: 'N',
		moves: ['Moonblast', 'Shadow Ball', 'Teatime'],
		signatureMove: 'Tea Party',
		evs: { def: 4, spa: 252, spe: 252 }, nature: 'Modest', teraType: 'Water', shiny: true,
	},
	Elly: {
		species: 'Thundurus', ability: 'Storm Surge', item: 'Heavy-Duty Boots', gender: 'F',
		moves: ['Wildbolt Storm', 'Sandsear Storm', 'Volt Switch'],
		signatureMove: 'Sustained Winds',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Ground',
	},
	Emboar02: {
		species: 'Emboar', ability: 'Hogwash', item: 'Choice Band', gender: 'F',
		moves: ['Flare Blitz', 'Wave Crash', 'Volt Tackle'],
		signatureMove: 'Insert boar pun here',
		// eslint-disable-next-line @stylistic/max-len
		evs: { hp: 252, atk: 252, def: 4 }, nature: 'Adamant', teraType: ['Fire', 'Water', 'Fighting', 'Electric'], shiny: 50 / 49,
	},
	Fame: {
		species: 'Jumpluff', ability: 'Social Jumpluff Warrior', item: 'Leftovers', gender: 'F',
		moves: ['Air Slash', 'Thunder Wave', 'Toxic'],
		signatureMove: 'Solidarity',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Fire',
	},
	Felucia: {
		species: 'Vespiquen', ability: 'Mountaineer', item: 'Red Card', gender: 'F',
		moves: ['Strength Sap', ['Oblivion Wing', 'Night Shade'], ['Thief', 'Calm Mind', 'Toxic']],
		signatureMove: 'Rigged Dice',
		evs: { hp: 252, def: 4, spd: 252 }, nature: 'Calm',
	},
	Froggeh: {
		species: 'Toxicroak', ability: 'Super Luck', item: 'Leftovers', gender: 'M',
		moves: ['Gunk Shot', 'Sucker Punch', 'Drain Punch'],
		signatureMove: 'Cringe Dad Joke',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Adamant', teraType: 'Dark',
	},
	Frostyicelad: {
		species: 'Qwilfish-Hisui', ability: 'Almost Frosty', item: 'Eviolite', gender: 'M',
		moves: ['Darkest Lariat', 'Recover', ['Dire Claw', 'Meteor Mash', 'Bitter Malice']],
		signatureMove: 'Puffy Spiky Destruction',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: ['Dark', 'Poison', 'Ghost', 'Steel'], shiny: 1024,
	},
	Frozoid: {
		species: 'Gible', ability: 'Snowballer', item: 'Eviolite', gender: 'M',
		moves: ['Dragon Dance', 'Dragon Rush', 'Precipice Blades'],
		signatureMove: 'Flat out falling',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Adamant', teraType: 'Any', shiny: true,
	},
	Ganjafin: {
		species: 'Wiglett', ability: 'Gambling Addiction', item: 'Eviolite', gender: 'M',
		moves: ['Wrap', 'Cosmic Power', 'Strength Sap'],
		signatureMove: 'Wiggling Strike',
		evs: { hp: 252, def: 4, spe: 252 }, nature: 'Timid', teraType: 'Grass', shiny: 2,
	},
	'Haste Inky': {
		species: 'Falinks', ability: 'Simple', item: 'Sitrus Berry', gender: 'N',
		moves: ['Superpower', 'Ice Hammer', 'Throat Chop'],
		signatureMove: 'Hasty Revolution',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Dark',
	},
	havi: {
		species: 'Gastly', ability: 'Mensis Cage', item: 'Leftovers', gender: 'F',
		moves: ['Astral Barrage', 'Moonblast', 'Substitute'],
		signatureMove: 'Augur of Ebrietas',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Ghost',
	},
	Hecate: {
		species: 'Mewtwo', ability: 'Hacking', item: 'Mewtwonite X', gender: 'F',
		moves: ['Photon Geyser', 'Drain Punch', 'Iron Head'],
		signatureMove: 'Testing in Production',
		evs: { atk: 252, spa: 4, spe: 252 }, nature: 'Jolly',
	},
	HiZo: {
		species: 'Zoroark-Hisui', ability: 'Justified', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Last Respects', 'Blood Moon', 'Spirit Break'],
		signatureMove: 'Scapegoat',
		evs: { atk: 252, spa: 4, spe: 252 }, nature: 'Naive', teraType: 'Fairy',
	},
	HoeenHero: {
		species: 'Ludicolo', ability: 'Misspelled', item: 'Life Orb', gender: 'M',
		moves: [['Hydro Pump', 'Surf'], 'Giga Drain', 'Ice Beam'],
		signatureMove: 'Re-Program',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Water',
	},
	hsy: {
		species: 'Ursaluna', ability: 'Hustle', item: 'Blunder Policy', gender: 'M',
		moves: ['Drill Peck', 'Egg Bomb', 'Headlong Rush'],
		signatureMove: 'Wonder Wing',
		evs: { hp: 252, atk: 252, spe: 4 }, nature: 'Adamant', teraType: 'Flying',
	},
	Hydrostatics: {
		species: 'Pichu-Spiky-eared', ability: 'Hydrostatic Positivity', item: 'Eviolite', gender: 'M',
		moves: ['Hydro Pump', 'Thunder', 'Ice Beam'],
		signatureMove: 'Hydrostatics',
		evs: { def: 4, spa: 252, spe: 252 }, nature: 'Modest', teraType: 'Water', shiny: 2,
	},
	'in the hills': {
		species: 'Gligar', ability: 'Illiterit', item: 'Eviolite', gender: 'M',
		moves: ['Roost', 'Knock Off', 'Tidy Up'],
		signatureMove: '10-20-40',
		evs: { hp: 252, def: 4, spd: 252 }, nature: 'Careful', teraType: 'Water',
	},
	ironwater: {
		species: 'Jirachi', ability: 'Good as Gold', item: 'Leftovers', gender: 'N',
		moves: ['Swords Dance', 'Zen Headbutt', 'Hammer Arm'],
		signatureMove: 'Jirachi Ban Hammer',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Jolly', teraType: 'Steel',
	},
	'Irpachuza!': {
		species: 'Mr. Mime', ability: 'Mime knows best', item: 'Irpatuzinium Z', gender: 'M',
		moves: [['Destiny Bond', 'Lunar Dance'], 'Parting Shot', 'Taunt'],
		signatureMove: 'Fleur Cannon',
		evs: { hp: 252, spa: 4, spd: 252 }, nature: 'Modest',
	},
	Isaiah: {
		species: 'Medicham', ability: 'Psychic Surge', item: 'Medichamite', gender: 'M',
		moves: ['Close Combat', 'Knock Off', 'Triple Axel'],
		signatureMove: 'Simple Gameplan',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', shiny: true,
	},
	'J0rdy004 ♫': {
		species: 'Vulpix-Alola', ability: 'Fortifying Frost', item: 'Never-Melt Ice', gender: 'N',
		moves: ['Blizzard', 'Focus Blast', 'Recover'],
		signatureMove: 'Snowy Samba',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', shiny: 4,
	},
	Kalalokki: {
		species: 'Flamigo', ability: 'Scrappy', item: 'Choice Band', gender: 'M',
		moves: ['Brave Bird', 'Sucker Punch', ['Drain Punch', 'Rapid Spin']],
		signatureMove: 'Knot Weak',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: ['Fighting', 'Flying'],
	},
	Karthik: {
		species: 'Staraptor', ability: 'Tough Claws', item: 'Choice Scarf', gender: 'M',
		moves: ['Brave Bird', 'Head Smash', ['Flare Blitz', 'Wave Crash']],
		signatureMove: 'Salvaged Sacrifice',
		evs: { hp: 252, atk: 4, spe: 252 }, nature: 'Adamant', teraType: 'Flying',
	},
	ken: {
		species: 'Jigglypuff', ability: 'Aroma Veil', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Dazzling Gleam', 'Heal Order', 'Mortal Spin'],
		signatureMove: ', (ac)',
		evs: { hp: 252, def: 252, spa: 4 }, nature: 'Bold', teraType: 'Any',
	},
	kenn: {
		species: 'Larvitar', ability: 'Deserted Dunes', item: 'Eviolite', gender: 'M',
		moves: ['Salt Cure', 'Shore Up', ['Precipice Blades', 'Headlong Rush']],
		signatureMove: 'Stone Faced',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Adamant', teraType: 'Rock', shiny: true,
	},
	Kennedy: {
		species: 'Cinderace', ability: 'Anfield', item: 'Berserk Gene', gender: 'M',
		moves: ['Blaze Kick', ['Triple Kick', 'Trop Kick'], 'U-turn'],
		signatureMove: 'Hat-Trick',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Any',
	},
	keys: {
		species: 'Rayquaza', ability: 'Defeatist', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Oblivion Wing', 'Sizzly Slide', 'Bouncy Bubble'],
		signatureMove: 'Protector of the Skies',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', shiny: 10,
	},
	kingbaruk: {
		species: 'Wigglytuff', ability: 'Peer Pressure', item: 'Silk Scarf', gender: 'M',
		moves: ['Trump Card', 'Encore', ['Protect', 'Thunder Wave']],
		signatureMove: 'Platinum Record',
		evs: { hp: 252, def: 4, spa: 252 }, nature: 'Modest', teraType: 'Normal',
	},
	Kiwi: {
		species: 'Minccino', ability: 'Sure Hit Sorcery', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Dynamic Punch', 'Substitute', 'Noble Roar'],
		signatureMove: 'Mad Manifest',
		evs: { hp: 252, atk: 144, spe: 112 }, nature: 'Adamant', teraType: 'Fighting', shiny: true,
	},
	Klmondo: {
		species: 'Cloyster', ability: 'Super Skilled', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Victory Dance', 'Icicle Spear', 'Rock Blast'],
		signatureMove: 'The Better Water Shuriken',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Adamant', teraType: 'Water',
	},
	'kolohe ✮彡': {
		species: 'Pikachu', ability: 'Soul Surfer', item: 'Light Ball', gender: '',
		moves: ['Thunder', 'Volt Switch', 'Bouncy Bubble'],
		signatureMove: 'Hang Ten',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Water',
	},
	Kry: {
		species: 'Mawile', ability: 'Flash Freeze', item: 'Mawilite', gender: 'M',
		moves: ['Sucker Punch', 'Fire Lash', 'Play Rough'],
		signatureMove: 'Attack of Opportunity',
		evs: { hp: 252, atk: 252, spd: 4 }, nature: 'Adamant', shiny: 1024,
	},
	Lasen: {
		species: 'Zekrom', ability: 'Idealized World', item: 'Leftovers', gender: 'M',
		moves: ['Volt Switch', 'Fusion Bolt', 'Dragon Claw'],
		signatureMove: 'Rise Above',
		evs: { hp: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Fire',
	},
	'Lets go shuckles': {
		species: 'Shuckle', ability: 'Persistent', item: 'Berry Juice', gender: 'M',
		moves: ['Diamond Storm', 'Headlong Rush', ['Glacial Lance', 'U-turn']],
		signatureMove: 'Shuckle Power',
		evs: { hp: 252, def: 252, spd: 4 }, ivs: { spe: 0 }, nature: 'Relaxed', teraType: 'Ground', shiny: 213,
	},
	Lily: {
		species: 'Togedemaru', ability: 'Unaware', item: 'Leftovers', gender: 'F',
		moves: ['Victory Dance', 'Plasma Fists', 'Meteor Mash'],
		signatureMove: 'Power Up',
		evs: { hp: 252, def: 4, spd: 252 }, nature: 'Careful', teraType: 'Fairy', shiny: 1734,
	},
	Loethalion: {
		species: 'Ralts', ability: 'Psychic Surge', item: 'Gardevoirite', gender: '',
		moves: ['Esper Wing', 'Calm Mind', 'Lunar Blessing'],
		signatureMove: 'Darkmoon Cackle',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', shiny: true,
	},
	Lumari: {
		species: 'Ponyta-Galar', ability: 'Pyrotechnic', item: 'Eviolite', gender: 'F',
		moves: ['Substitute', 'Sappy Seed', 'Magical Torque'],
		signatureMove: 'Mystical Bonfire',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Fairy',
	},
	Lunell: {
		species: 'Vaporeon', ability: 'Low Tide, High Tide', item: 'Leftovers', gender: 'F',
		moves: ['Hydro Pump', 'Thunder', 'Moonlight'],
		signatureMove: 'Praise the Moon',
		evs: { hp: 252, def: 4, spa: 252 }, nature: 'Calm', teraType: 'Fairy', shiny: 512,
	},
	'Lyna 氷': {
		species: 'Dragonair', ability: 'Magic Aura', item: 'Eviolite', gender: 'F',
		moves: ['Victory Dance', 'V-create', 'Glacial Lance'],
		signatureMove: 'Wrath of Frozen Flames',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Dragon',
	},
	Maia: {
		species: 'Litwick', ability: 'Power Abuse', item: 'Eviolite', gender: 'F',
		moves: ['Shadow Ball', 'Flamethrower', 'Giga Drain'],
		signatureMove: 'Body Count',
		evs: { hp: 252, spa: 252, spd: 4 }, nature: 'Modest', teraType: 'Ghost',
	},
	'marillvibes ♫': {
		species: 'Marill', ability: 'Huge Power', item: 'Life Orb', gender: 'M',
		moves: ['Surging Strikes', 'Jet Punch', 'Close Combat'],
		signatureMove: 'Good Vibes Only',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Adamant', teraType: 'Water', shiny: true,
	},
	Mathy: {
		species: 'Furret', ability: 'Dynamic Typing', item: 'Big Root', gender: 'M',
		moves: ['Bitter Blade', 'Swords Dance', 'Taunt'],
		signatureMove: 'Breaking Change',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Ghost',
	},
	Merritty: {
		species: 'Torchic', ability: 'End Round', item: 'Eviolite', gender: 'M',
		moves: ['Quiver Dance', 'Fiery Dance', 'Strength Sap'],
		signatureMove: 'New Bracket',
		evs: { hp: 4, def: 36, spa: 196, spd: 36, spe: 236 }, nature: 'Timid', teraType: 'Flying', shiny: true,
	},
	Meteordash: {
		species: 'Tatsugiri', ability: 'TatsuGlare', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Spacial Rend', 'Steam Eruption', 'Glare'],
		signatureMove: 'Plagiarism',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Steel',
	},
	Mex: {
		species: 'Dialga', ability: 'Time Dilation', item: 'Adamant Orb', gender: 'N',
		moves: ['Dragon Pulse', 'Flash Cannon', ['Aura Sphere', 'Volt Switch', 'Meteor Beam']],
		signatureMove: 'Time Skip',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Steel', shiny: true,
	},
	Miojo: {
		species: 'Spheal', ability: 'The Rolling Spheal', item: 'Choice Band', gender: '',
		moves: ['Liquidation', 'Collision Course', 'Flip Turn'],
		signatureMove: 'vruuuuuum',
		evs: { hp: 8, atk: 252, spd: 4, spe: 244 }, nature: 'Jolly', teraType: 'Fighting', shiny: 363,
	},
	Monkey: {
		species: 'Infernape', ability: 'Harambe Hit', item: 'Blunder Policy', gender: 'M',
		moves: ['Dynamic Punch', 'Plasma Fists', 'Fire Punch'],
		signatureMove: 'Banana Breakfast',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Jolly', teraType: 'Electric', shiny: 69,
	},
	MyPearl: {
		species: 'Latios', ability: 'Eon Call', item: 'Soul Dew', gender: 'M',
		moves: ['Draco Meteor', 'Aura Sphere', 'Flip Turn'],
		signatureMove: 'Eon Assault',
		evs: { hp: 252, def: 4, spe: 252 }, ivs: { atk: 0 }, nature: 'Timid', teraType: 'Steel', shiny: 50,
	},
	'MyPearl-Latias': {
		species: 'Latias', ability: 'Eon Call', item: 'Soul Dew', gender: 'F',
		moves: ['Calm Mind', 'Recover', 'Thunder Wave'],
		signatureMove: 'Eon Assault',
		evs: { hp: 252, def: 4, spe: 252 }, ivs: { atk: 0 }, nature: 'Timid', teraType: 'Steel', shiny: 50, skip: 'MyPearl',
	},
	Neko: {
		species: 'Chien-Pao', ability: 'Weatherproof', item: 'Heavy-Duty Boots', gender: 'N',
		moves: ['Swords Dance', 'Bitter Blade', ['Crunch', 'Sucker Punch']],
		signatureMove: 'Quality Control Zoomies',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Fire',
	},
	Ney: {
		species: 'Banette', ability: 'Insomnia', item: 'Banettite', gender: 'M',
		moves: ['Destiny Bond', 'Will-O-Wisp', 'Parting Shot'],
		signatureMove: 'Shadow Dance',
		evs: { hp: 252, atk: 252, def: 4 }, ivs: { spe: 0 }, nature: 'Brave', shiny: true,
	},
	Notater517: {
		species: 'Incineroar', ability: 'Vent Crosser', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Ceaseless Edge', 'Pyro Ball', ['Rapid Spin', 'Encore']],
		signatureMove: '~nyaa',
		evs: { hp: 252, atk: 252, spd: 4 }, nature: 'Adamant', teraType: 'Steel',
	},
	'nya~ ❤': {
		species: 'Delcatty', ability: 'Adorable Grace', item: 'Focus Band', gender: 'F',
		moves: ['Freeze-Dry', 'Flamethrower', 'Volt Switch'],
		signatureMove: ':3',
		evs: { hp: 252, spa: 4, spe: 252 }, nature: 'Naive', teraType: 'Ice',
	},
	pants: {
		species: 'Annihilape', ability: 'Drifting', item: 'Leftovers', gender: 'M',
		moves: ['Rage Fist', 'Drain Punch', 'Dragon Dance'],
		signatureMove: 'Eerie Apathy',
		evs: { hp: 240, spd: 252, spe: 16 }, nature: 'Careful', teraType: 'Ghost',
	},
	PartMan: {
		species: 'Chandelure', ability: 'C- Tier Shitposter', item: 'Leek', gender: 'M',
		moves: ['Searing Shot', 'Hex', 'Morning Sun'],
		signatureMove: 'Alting',
		evs: { hp: 252, spa: 69, spe: 188 }, nature: 'Timid',
	},
	'Pastor Gigas': {
		species: 'Regigigas', ability: 'God\'s Mercy', item: 'Clear Amulet', gender: 'N',
		moves: ['Sacred Fire', 'Knock Off', 'Healing Wish'],
		signatureMove: 'Call to Repentance',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Adamant', teraType: 'Fairy',
	},
	Peary: {
		species: 'Klinklang', ability: 'Levitate', item: 'Pearyum Z', gender: '',
		moves: ['Lock On', 'Sheer Cold', 'Substitute'],
		signatureMove: 'Gear Grind',
		evs: { hp: 252, def: 4, spe: 252 }, nature: 'Jolly',
	},
	phoopes: {
		species: 'Jynx', ability: 'I Did It Again', item: 'Focus Sash', gender: 'F',
		moves: ['Lovely Kiss', 'Psychic', 'Amnesia'],
		signatureMove: 'Gen 1 Blizzard',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Ice',
	},
	Pissog: {
		species: 'Volcarona', ability: 'Drought', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Torch Song', 'Morning Sun', 'Solar Beam'],
		signatureMove: 'A Song Of Ice And Fire',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Fire', shiny: 1096,
	},
	'Pissog-Frosmoth': {
		species: 'Frosmoth', ability: 'Snow Warning', item: 'Heavy-Duty Boots', gender: 'F',
		moves: ['Blizzard', 'Chilly Reception', 'Aurora Veil'],
		signatureMove: 'A Song Of Ice And Fire',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Ice', skip: 'Pissog', shiny: 1096,
	},
	pokemonvortex: {
		species: 'Pokestar Smeargle', ability: 'Prankster', item: 'Focus Sash', gender: 'N',
		moves: ['Spore', 'Extreme Evoboost', 'Substitute'],
		signatureMove: 'Roulette',
		evs: { hp: 252, def: 4, spe: 252 }, nature: 'Timid', teraType: 'Ghost',
	},
	'Princess Autumn': {
		species: 'Altaria', ability: 'Last Hymn', item: 'Altarianite', gender: 'F',
		moves: ['Earthquake', 'Amnesia', 'Roost'],
		signatureMove: 'Cotton Candy Crush',
		evs: { hp: 248, spd: 164, spe: 96 }, nature: 'Careful', shiny: 4,
	},
	ptoad: {
		species: 'Politoed', ability: 'Drizzle', item: 'Leftovers', gender: 'M',
		moves: ['Jet Punch', 'Ice Punch', 'Earthquake'],
		signatureMove: 'Pleek...',
		evs: { hp: 252, atk: 252, spd: 4 }, nature: 'Adamant', teraType: 'Water',
	},
	Pulse_kS: {
		species: 'Hydreigon', ability: 'Pulse Luck', item: 'Quick Claw', gender: 'N',
		moves: ['Dark Pulse', 'Dragon Pulse', 'Origin Pulse'],
		signatureMove: 'Luck Pulse',
		evs: { hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85 }, nature: 'Serious', teraType: ['Steel', 'Poison'],
	},
	PYRO: {
		species: 'Kingambit', ability: 'Hardcore Hustle', item: 'Leftovers', gender: 'M',
		moves: ['Kowtow Cleave', 'Sucker Punch', 'Swords Dance'],
		signatureMove: 'Meat Grinder',
		evs: { hp: 252, atk: 252, def: 4 }, nature: 'Adamant', teraType: 'Flying',
	},
	'Quite Quiet': {
		species: 'Ribombee', ability: 'Fancy Scarf', item: ['Life Orb', 'Leftovers'], gender: 'F',
		moves: ['Roost', 'Moonblast', ['Aura Sphere', 'U-turn']],
		signatureMove: '*Worried Noises*',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Flying',
		// The nature not being Quiet is a crime
	},
	quziel: {
		species: 'Chromera', ability: 'High Performance Computing', item: 'Covert Cloak', gender: 'M',
		moves: ['Recover', 'Revelation Dance', 'Boomburst'],
		signatureMove: 'Reshape',
		evs: { def: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Ghost',
	},
	R8: {
		species: 'Chansey', ability: 'Anti-Pelau', item: 'Eviolite', gender: 'N',
		moves: ['Ice Beam', 'Thunderbolt', 'Flamethrower'],
		signatureMove: 'Magic Trick',
		evs: { hp: 252, spa: 252, spe: 4 }, ivs: { atk: 0 }, nature: 'Modest', teraType: 'Ice', shiny: 256,
	},
	Rainshaft: {
		species: 'Xerneas', ability: 'Rainy\'s Aura', item: 'Rainium Z', gender: 'F',
		moves: ['Psychic Noise', 'Sing', 'Alluring Voice'],
		signatureMove: 'Sparkling Aria',
		evs: { hp: 252, spa: 252, spe: 4 }, nature: 'Mild',
	},
	Ransei: {
		species: 'Audino-Mega', ability: 'Ultra Mystik', item: 'Safety Goggles', gender: 'M',
		moves: ['Psystrike', 'Transform', 'Light of Ruin'],
		signatureMove: 'Flood of Lore',
		evs: { hp: 252, def: 4, spa: 252 }, ivs: { spe: 0 }, nature: 'Modest', shiny: 2,
	},
	ReturnToMonkey: {
		species: 'Oranguru', ability: 'Monke See Monke Do', item: 'Twisted Spoon', gender: 'M',
		moves: ['Hyper Voice', 'Psyshock', 'Focus Blast'],
		signatureMove: 'Monke Magic',
		evs: { hp: 252, def: 4, spa: 252 }, ivs: { spe: 0 }, nature: 'Quiet', teraType: 'Fighting',
	},
	'Rio Vidal': {
		species: 'Archaludon', ability: 'Built Different', item: 'Leftovers', gender: 'M',
		moves: ['Body Press', 'Stealth Rock', 'Rapid Spin'],
		signatureMove: 'Metal Blast',
		evs: { hp: 252, def: 252, spa: 4 }, nature: 'Bold', teraType: 'Flying',
	},
	Rissoux: {
		species: 'Arcanine-Hisui', ability: 'Hard Headed', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Head Smash', 'Flare Blitz', 'Morning Sun'],
		signatureMove: 'Call of the Wild',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Jolly', teraType: 'Grass',
	},
	RSB: {
		species: 'Growlithe', ability: 'Hot Pursuit', item: 'Eviolite', gender: 'M',
		moves: ['Fire Fang', 'Thunder Fang', 'Morning Sun'],
		signatureMove: 'Confiscate',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Grass',
	},
	Rumia: {
		species: 'Duskull', ability: 'Youkai of the Dusk', item: 'Eviolite', gender: 'N',
		moves: ['Infernal Parade', 'Strength Sap', 'Mortal Spin'],
		signatureMove: 'Midnight Bird',
		evs: { hp: 252, def: 252, spa: 4 }, nature: 'Bold', teraType: 'Poison', shiny: true,
	},
	Scotteh: {
		species: 'Suicune', ability: 'Water Absorb', item: 'Leftovers', gender: '',
		moves: ['Calm Mind', 'Scald', 'Ice Beam'],
		signatureMove: 'Purification',
		evs: { hp: 252, def: 252, spd: 4 }, nature: 'Bold', teraType: 'Water',
	},
	SexyMalasada: {
		species: 'Typhlosion', ability: 'Ancestry Ritual', item: 'Life Orb', gender: 'M',
		moves: ['Calm Mind', 'Aura Sphere', 'Flamethrower'],
		signatureMove: 'Hexadecimal Fire',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Ghost', shiny: true,
	},
	sharp_claw: {
		species: 'Sneasel', ability: 'Regenerator', item: 'Heavy-Duty Boots', gender: 'F',
		moves: ['Knock Off', 'Ice Spinner', 'Ice Shard'],
		signatureMove: 'Treacherous Traversal',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Jolly', teraType: 'Poison',
	},
	'sharp_claw-Rough': {
		species: 'Sneasel-Hisui', ability: 'Regenerator', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Combat Torque', 'Noxious Torque', 'Mach Punch'],
		signatureMove: 'Treacherous Traversal',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Jolly', teraType: 'Poison', skip: 'sharp_claw',
	},
	Siegfried: {
		species: 'Ampharos', ability: 'Static', item: 'Ampharosite', gender: 'M',
		moves: ['Calm Mind', 'Thunderclap', 'Draco Meteor'],
		signatureMove: 'BoltBeam',
		evs: { hp: 252, spa: 252, spd: 4 }, nature: 'Modest', shiny: 64,
	},
	'Sificon~': {
		species: 'Hoppip', ability: 'Perfectly Imperfect', item: 'Eviolite', gender: 'M',
		moves: ['Strength Sap', 'Spikes', 'Seismic Toss'],
		signatureMove: 'Grass Gaming',
		evs: { hp: 252, def: 4, spe: 252 }, ivs: { atk: 0 }, nature: 'Timid', teraType: 'Dragon',
	},
	skies: {
		species: 'Chespin', ability: 'Spikes of Wrath', item: 'Sitrus Berry', gender: 'F',
		moves: ['Bulk Up', 'Strength Sap', 'Body Press'],
		signatureMove: 'Like..?',
		evs: { hp: 252, atk: 4, def: 252 }, nature: 'Impish', teraType: ['Water', 'Steel'], shiny: 15,
	},
	snake: {
		species: 'Fidgit', ability: 'Persistent', item: ['Mental Herb', 'Covert Cloak', 'Leppa Berry'], gender: 'M',
		moves: ['Tailwind', 'Revival Blessing', 'Taunt'],
		signatureMove: 'Concept Relevant',
		evs: { hp: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Water',
	},
	'Soft Flex': {
		species: 'Magnezone', ability: 'Adaptive Engineering', item: 'Leftovers', gender: 'N',
		moves: ['Thunderbolt', 'Substitute', 'Parabolic Charge'],
		signatureMove: 'Adaptive Beam',
		evs: { hp: 248, def: 8, spe: 252 }, nature: 'Timid', teraType: 'Flying',
	},
	'Solaros & Lunaris': {
		species: 'Scovillain', ability: 'Ride the Sun!', item: 'Heavy-Duty Boots', gender: 'N',
		moves: ['Solar Beam', 'Growth', 'Moonlight'],
		signatureMove: 'Mind Melt',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Modest', teraType: 'Fire',
	},
	Spiderz: {
		species: 'Iron Thorns', ability: 'Poison Heal', item: 'Toxic Orb', gender: 'M',
		moves: ['Spiky Shield', 'Stone Axe', 'Thousand Arrows'],
		signatureMove: 'Shepherd of the Mafia Room',
		evs: { hp: 252, atk: 252, spe: 4 }, nature: 'Adamant', teraType: 'Steel', shiny: true,
	},
	spoo: {
		species: 'Hemogoblin', ability: 'I Can Hear The Heart Beating As One', item: 'Heavy-Duty Boots', gender: 'N',
		moves: ['Extreme Speed', 'Bitter Blade', 'Moonlight'],
		signatureMove: 'Cardio Training',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Adamant', teraType: 'Fairy', shiny: 32,
	},
	Steorra: {
		species: 'Kitsunoh', ability: 'Ghostly Hallow', item: 'Choice Band', gender: '',
		moves: ['Meteor Mash', 'Shadow Strike', 'U-turn'],
		signatureMove: 'Phantom Weapon',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Jolly', teraType: ['Steel', 'Ghost'], shiny: 2,
	},
	Struchni: {
		species: 'Aggron', ability: 'Overasked Clause', item: 'Leftovers', gender: 'M',
		moves: ['Detect', 'Encore', 'U-turn'],
		signatureMove: '~randfact',
		evs: { hp: 252, def: 16, spd: 240 }, nature: 'Careful', teraType: 'Steel',
	},
	Sulo: {
		species: 'Reuniclus', ability: 'Protection of the Gelatin', item: 'Life Orb', gender: 'M',
		moves: ['Calm Mind', 'Draining Kiss', 'Stored Power'],
		signatureMove: 'Vengeful Mood',
		evs: { hp: 252, def: 252, spd: 4 }, nature: 'Bold', teraType: 'Fairy', shiny: true,
	},
	Swiffix: {
		species: 'Piplup', ability: 'Stinky', item: 'Eviolite', gender: 'M',
		moves: ['Water Shuriken', 'Nasty Plot', 'Roost'],
		signatureMove: 'Stink Bomb',
		evs: { hp: 252, def: 4, spa: 252 }, nature: 'Modest', teraType: 'Water',
	},
	Syrinix: {
		species: 'Ceruledge', ability: 'Sword of Ruin', item: 'Life Orb', gender: 'N',
		moves: ['Poltergeist', 'Swords Dance', 'Bitter Blade'],
		signatureMove: 'A Soul for a Soul',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Adamant', teraType: 'Fire',
	},
	Teclis: {
		species: 'Gallade', ability: 'Sharpness', item: 'Life Orb', gender: 'M',
		moves: ['Sacred Sword', 'Psycho Cut', 'Leaf Blade'],
		signatureMove: 'Rising Sword',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Adamant', teraType: 'Psychic',
	},
	Tenshi: {
		species: 'Sandshrew', ability: 'Sand Sleuth', item: 'Eviolite', gender: 'M',
		moves: ['Precipice Blades', 'Dynamic Punch', 'Rapid Spin'],
		signatureMove: 'SAND EAT',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Ground', shiny: 10,
	},
	TheJesucristoOsAma: {
		species: 'Arceus', ability: 'The Grace Of Jesus Christ', gender: 'N',
		item: [
			'Draco Plate', 'Dread Plate', 'Earth Plate', 'Fist Plate', 'Flame Plate', 'Icicle Plate', 'Insect Plate', 'Iron Plate', 'Meadow Plate',
			'Mind Plate', 'Pixie Plate', 'Sky Plate', 'Splash Plate', 'Spooky Plate', 'Stone Plate', 'Toxic Plate', 'Zap Plate',
		],
		moves: ['Earthquake', 'Surf', 'Judgment'],
		signatureMove: 'The Love Of Christ',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Timid',
	},
	Tico: {
		species: 'Floette-Eternal', ability: 'Eternal Generator', item: ['Covert Cloak', 'Red Card'], gender: 'M',
		moves: ['Light of Ruin', 'Lava Plume', 'Teleport'],
		signatureMove: 'Eternal Wish',
		evs: { hp: 252, def: 16, spe: 240 }, nature: 'Timid', teraType: ['Fire', 'Steel'], shiny: false,
	},
	trace: {
		species: 'Delphox', ability: 'Eyes of Eternity', item: 'Life Orb', gender: 'F',
		moves: ['Calm Mind', 'Inferno', 'Recover'],
		signatureMove: 'Chronostasis',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Modest', teraType: 'Psychic',
	},
	Tuthur: {
		species: 'Scream Tail', ability: 'Poison Heal', item: 'Toxic Orb', gender: 'M',
		moves: ['Spikes', 'Burning Bulwark', 'Encore'],
		signatureMove: 'Symphonie du Ze\u0301ro',
		evs: { hp: 244, def: 12, spe: 252 }, nature: 'Timid', teraType: 'Water',
	},
	'Two of Roses': {
		species: 'Luxray', ability: 'As We See', item: 'Mirror Herb', gender: 'M',
		moves: ['Knock Off', 'Supercell Slam', 'Trailblaze'],
		signatureMove: 'Dilly Dally',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Jolly', teraType: 'Flying', shiny: 1024,
	},
	UT: {
		species: 'Talonflame', ability: 'Gale Guard', item: 'Leftovers', gender: 'M',
		moves: ['Brave Bird', 'Roost', 'Defog'],
		signatureMove: 'My Boys',
		evs: { hp: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Flying',
	},
	Valerian: {
		species: 'Lucario', ability: 'Full Bloom', item: 'Clear Amulet', gender: 'F',
		moves: ['Bullet Punch', 'Mach Punch', 'Parting Shot'],
		signatureMove: 'First Strike',
		evs: { hp: 252, atk: 252, def: 4 }, nature: 'Adamant', teraType: 'Fighting',
	},
	Venous: {
		species: 'Mantine', ability: 'Concrete Over Water', item: 'Leftovers', gender: '',
		moves: ['Scald', 'Roost', 'Clear Smog'],
		signatureMove: 'Your Crippling Interest',
		evs: { hp: 248, def: 244, spd: 16 }, nature: 'Calm', teraType: 'Normal', shiny: 5,
	},
	'Vio͜͡let': {
		species: 'Ogerpon', ability: 'See No Evil, Hear No Evil, Speak No Evil', item: 'Berry Juice', gender: 'F',
		moves: ['Crabhammer', 'Mighty Cleave', 'Fire Lash'],
		signatureMove: 'building character',
		evs: { atk: 252, spd: 4, spe: 252 }, nature: 'Jolly', teraType: 'Stellar',
	},
	Vistar: {
		species: 'Zeraora', ability: 'Prankster', item: 'Throat Spray', gender: 'M',
		moves: ['Encore', 'Volt Switch', 'Copycat'],
		signatureMove: 'Virtual Avatar',
		evs: { def: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Electric',
	},
	'Vistar-Idol': {
		species: 'Zeraora', ability: 'Virtual Idol', item: 'Throat Spray', gender: 'M',
		moves: ['Sparkling Aria', 'Torch Song', 'Teeter Dance'],
		signatureMove: 'Overdrive',
		evs: { def: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Electric', shiny: true, skip: 'Vistar',
	},
	vmnunes: {
		species: 'Shaymin-Sky', ability: 'Wild Growth', item: 'Big Root', gender: 'M',
		moves: ['Giga Drain', 'Oblivion Wing', 'Draining Kiss'],
		signatureMove: 'Gracidea\'s Blessing',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Timid', teraType: 'Fairy',
	},
	WarriorGallade: {
		species: 'Tropius', ability: 'Primeval Harvest', item: 'Starf Berry', gender: ['M', 'M', 'F'],
		moves: ['Sunny Day', 'Natural Gift', ['Bitter Blade', 'Sappy Seed', 'Stored Power', 'Counter']],
		signatureMove: 'Fruitful Longbow',
		// eslint-disable-next-line @stylistic/max-len
		evs: { hp: 184, atk: 112, def: 36, spd: 88, spe: 88 }, ivs: { spa: 29 }, nature: 'Impish', teraType: ['Dragon', 'Psychic', 'Fighting'], shiny: 20,
	},
	Waves: {
		species: 'Wailord', ability: 'Primordial Sea', item: 'Assault Vest', gender: 'M',
		moves: ['Water Spout', 'Hurricane', 'Thunder'],
		signatureMove: 'Torrential Drain',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Modest', teraType: 'Water',
	},
	WigglyTree: {
		species: 'Sudowoodo', ability: 'Tree Stance', item: 'Liechi Berry', gender: 'M',
		moves: ['Shell Smash', 'Wood Hammer', 'Head Smash'],
		signatureMove: 'Perfect Mimic',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Adamant', teraType: 'Grass',
	},
	'XpRienzo ☑◡☑': {
		species: 'Reshiram', ability: 'Turboblaze', item: 'Choice Scarf', gender: 'M',
		moves: ['Draco Meteor', 'Volt Switch', 'Flash Cannon'],
		signatureMove: 'Scorching Truth',
		evs: { spa: 252, spd: 4, spe: 252 }, nature: 'Modest', teraType: 'Fire',
	},
	xy01: {
		species: 'Blissey', ability: 'Panic', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Soft-Boiled', 'Seismic Toss', 'Aromatherapy'],
		signatureMove: 'Poisonous Wind',
		evs: { hp: 248, def: 252, spd: 8 }, nature: 'Bold', teraType: 'Fairy', shiny: true,
	},
	'yeet dab xd': {
		species: 'Kecleon', ability: 'Treasure Bag', item: 'Silk Scarf', gender: 'M', happiness: 0,
		moves: ['Frustration', 'Shadow Sneak', 'Fake Out'],
		signatureMove: 'top kek',
		evs: { hp: 252, atk: 4, spd: 252 }, nature: 'Careful', teraType: 'Ghost',
	},
	'Yellow Paint': {
		species: 'Rotom-Frost', ability: 'Yellow Magic', item: 'Chilan Berry', gender: 'N',
		moves: ['Thunder Cage', 'Blizzard', 'Ion Deluge'],
		signatureMove: 'Whiteout',
		evs: { hp: 252, spa: 252, spe: 4 }, nature: 'Modest', teraType: 'Steel', shiny: 2,
	},
	'yuki ♪': {
		species: 'Ninetales-Alola', ability: 'Party Up', item: 'Light Clay', gender: '',
		moves: ['Blizzard', 'Aurora Veil', ['Encore', 'Lovely Kiss']],
		signatureMove: 'Tag, You\'re It!',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Ghost',
	},
	YveltalNL: {
		species: 'Farigiraf', ability: 'Height Advantage', item: 'Leftovers', gender: 'M',
		moves: ['Freezing Glare', 'Ice Beam', 'Slack Off'],
		signatureMove: 'High Ground',
		evs: { hp: 248, spa: 252, spe: 8 }, nature: 'Modest', teraType: 'Ground',
	},
	za: {
		species: 'Greedent', ability: 'Troll', item: 'Leftovers', gender: 'M',
		moves: ['Headbutt', 'Iron Head', 'Foul Play'],
		signatureMove: 'Shitpost',
		evs: { hp: 252, def: 252, spe: 6 }, nature: 'Impish', teraType: 'Steel',
	},
	Zalm: {
		species: 'Weedle', ability: 'Water Bubble', item: 'Clear Amulet', gender: '',
		moves: ['Surging Strikes', 'Attack Order', 'Dire Claw'],
		signatureMove: 'Dud ur a fish',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Adamant', teraType: 'Water',
	},
	Zarel: {
		species: 'Meloetta', ability: 'Tempo Change', item: 'Leftovers', gender: 'M',
		moves: ['Psystrike', 'Armor Cannon', 'Obstruct'],
		signatureMove: '@ts-ignore',
		evs: { def: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Stellar',
	},
	'Zarel-Pirouette': {
		species: 'Meloetta-Pirouette', ability: 'Tempo Change', item: 'Leftovers', gender: 'M',
		moves: ['Close Combat', 'Knock Off', 'Silk Trap'],
		signatureMove: '@ts-ignore',
		evs: { atk: 252, def: 4, spe: 252 }, nature: 'Jolly', teraType: 'Stellar', skip: 'Zarel',
	},
	zee: {
		species: 'Lilligant-Hisui', ability: 'Chlorophyll', item: 'Heat Rock', gender: 'F',
		moves: ['Axe Kick', 'Solar Blade', 'Victory Dance'],
		signatureMove: 'Solar Summon',
		evs: { hp: 80, atk: 176, spe: 252 }, nature: 'Adamant', teraType: 'Fire',
	},
	zoro: {
		species: 'Umbreon', ability: 'Nine Lives', item: 'Leftovers', gender: 'M',
		moves: ['Wish', 'Protect', 'Toxic'],
		signatureMove: 'Darkest Night',
		evs: { hp: 252, def: 240, spd: 16 }, nature: 'Calm', teraType: 'Steel', shiny: true,
	},
};

export class RandomCPMTeams extends RandomTeams {
	randomCPMTeam(options: { inBattle?: boolean } = {}) {
		this.enforceNoDirectCustomBanlistChanges();

		const team: PokemonSet[] = [];
		const debug: string[] = []; // Set this to a list of CPM sets to override the normal pool for debugging.
		const ruleTable = this.dex.formats.getRuleTable(this.format);
		const monotype = this.forceMonotype || (ruleTable.has('sametypeclause') ?
			this.sample([...this.dex.types.names().filter(x => x !== 'Stellar')]) : false);

		let pool = Object.keys(cpmSets);
		if (debug.length) {
			while (debug.length < 6) {
				const fakemon = this.sampleNoReplace(pool);
				if (debug.includes(fakemon) || cpmSets[fakemon].skip) continue;
				debug.push(fakemon);
			}
			pool = debug;
		}
		if (monotype && !debug.length) {
			pool = pool.filter(x => this.dex.species.get(cpmSets[x].species).types.includes(monotype));
		}
		if (global.Config?.disabledssbsets?.length) {
			pool = pool.filter(x => !global.Config.disabledssbsets.includes(this.dex.toID(x)));
		}
		const typePool: { [k: string]: number } = {};
		let depth = 0;
		while (pool.length && team.length < this.maxTeamSize) {
			if (depth >= 200) throw new Error(`Infinite loop in CPM team generation.`);
			depth++;
			const name = this.sampleNoReplace(pool);
			const cpmSet: CPMSet = this.dex.deepClone(cpmSets[name]);
			if (cpmSet.skip) continue;

			// Enforce typing limits
			if (!(debug.length || monotype)) { // Type limits are ignored for debugging and monotype
				const species = this.dex.species.get(cpmSet.species);

				const weaknesses = [];
				for (const type of this.dex.types.names()) {
					const typeMod = this.dex.getEffectiveness(type, species.types);
					if (typeMod > 0) weaknesses.push(type);
				}
				let rejected = false;
				for (const type of weaknesses) {
					if (typePool[type] === undefined) typePool[type] = 0;
					if (typePool[type] >= 3) {
						// Reject
						rejected = true;
						break;
					}
				}
				if (cpmSet.ability === 'Wonder Guard') {
					if (!typePool['wonderguard']) {
						typePool['wonderguard'] = 1;
					} else {
						rejected = true;
					}
				}
				if (rejected) continue;
				// Update type counts
				for (const type of weaknesses) {
					typePool[type]++;
				}
			}

			let teraType: string | undefined;
			if (cpmSet.teraType) {
				teraType = cpmSet.teraType === 'Any' ?
					this.sample(this.dex.types.names()) :
					this.sampleIfArray(cpmSet.teraType);
			}
			const moves: string[] = [];
			while (moves.length < 3 && cpmSet.moves.length > 0) {
				let move = this.sampleNoReplace(cpmSet.moves);
				if (Array.isArray(move)) move = this.sampleNoReplace(move);
				moves.push(this.dex.moves.get(move).name);
			}
			moves.push(this.dex.moves.get(cpmSet.signatureMove).name);
			const ivs = { ...{ hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, ...cpmSet.ivs };
			if (!moves.map(x => this.dex.moves.get(x)).some(x => x.category === 'Physical')) {
				ivs.atk = 0;
			}

			const set: PokemonSet = {
				name,
				species: cpmSet.species,
				item: this.sampleIfArray(cpmSet.item),
				ability: this.sampleIfArray(cpmSet.ability),
				moves,
				nature: cpmSet.nature ? Array.isArray(cpmSet.nature) ? this.sampleNoReplace(cpmSet.nature) : cpmSet.nature : 'Serious',
				gender: cpmSet.gender ? this.sampleIfArray(cpmSet.gender) : this.sample(['M', 'F', 'N']),
				evs: cpmSet.evs ? { ...{ hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 }, ...cpmSet.evs } :
				{ hp: 84, atk: 84, def: 84, spa: 84, spd: 84, spe: 84 },
				ivs,
				level: this.adjustLevel || cpmSet.level || 100,
				happiness: typeof cpmSet.happiness === 'number' ? cpmSet.happiness : 255,
				shiny: typeof cpmSet.shiny === 'number' ? this.randomChance(1, cpmSet.shiny) : !!cpmSet.shiny,
			};

			// Any set specific tweaks occur here.
			/* if (set.name === "Felucia") {
				const cmIndex = set.moves.indexOf("Calm Mind");
				if (cmIndex >= 0 && set.moves.includes("Night Shade")) {
					set.moves[cmIndex] = this.sample(["Thief", "Toxic"]);
				}
			}
			if (set.name === "Frostyicelad" && set.shiny) {
				const moveIndex = Math.max(set.moves.indexOf('Dire Claw'),
					set.moves.indexOf('Meteor Mash'), set.moves.indexOf('Bitter Malice'));
				if (moveIndex >= 0) {
					set.moves[moveIndex] = 'Fishious Rend';
					teraType = 'Water';
				}
			} */

			if (teraType) set.teraType = teraType;

			team.push(set);

			// Team specific tweaks occur here
			// Swap last and second to last sets if last set has Illusion
			if (team.length === this.maxTeamSize && (set.ability === 'Illusion')) {
				team[this.maxTeamSize - 1] = team[this.maxTeamSize - 2];
				team[this.maxTeamSize - 2] = set;
			}
		}
		return team;
	}
}

export default RandomCPMTeams;
