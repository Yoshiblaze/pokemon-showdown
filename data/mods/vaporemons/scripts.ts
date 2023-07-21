export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	pokemon: {
		ignoringAbility() {
			let neutralizinggas = false;
			for (const pokemon of this.battle.getAllActive()) {
				if (pokemon.ability === ('neutralizinggas' as ID) ||
					(
						pokemon.ability === ('powerofalchemyweezing' as ID) &&
						!pokemon.volatiles['gastroacid'] &&
						!pokemon.volatiles['counteract'] &&
						!pokemon.abilityState.ending
					)
				) {
					neutralizinggas = true;
					break;
				}
			}
			return !!(
				(this.battle.gen >= 5 && !this.isActive) ||
				((this.volatiles['gastroacid'] || this.volatiles['counteract'] || (neutralizinggas && this.ability !== ('neutralizinggas' as ID)))
				&& !this.getAbility().isPermanent)
			);
		},
	},
	init() {
		this.modData("Learnsets", "screamtail").learnset.dracometeor = ["9L1"];
		this.modData("Learnsets", "screamtail").learnset.dragonpulse = ["9L1"];
		this.modData("Learnsets", "screamtail").learnset.knockoff = ["9L1"];
		this.modData("Learnsets", "screamtail").learnset.nastyplot = ["9L1"];
		this.modData("Learnsets", "screamtail").learnset.outrage = ["9L1"];
		this.modData("Learnsets", "screamtail").learnset.superfang = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.jetpunch = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.bulletpunch = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.machpunch = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.hammerarm = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.knockoff = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.slackoff = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.swordsdance = ["9L1"];
		this.modData("Learnsets", "revavroom").learnset.magicaltorque = ["9L1"];
		this.modData("Learnsets", "revavroom").learnset.wickedtorque = ["9L1"];
		this.modData("Learnsets", "revavroom").learnset.blazingtorque = ["9L1"];
		this.modData("Learnsets", "revavroom").learnset.combattorque = ["9L1"];
		this.modData("Learnsets", "revavroom").learnset.noxioustorque = ["9L1"];
		this.modData("Learnsets", "revavroom").learnset.highhorsepower = ["9L1"];
		this.modData("Learnsets", "toxapex").learnset.bodypress = ["9L1"];
		this.modData("Learnsets", "toxapex").learnset.darkpulse = ["9L1"];
		this.modData("Learnsets", "toxapex").learnset.crunch = ["9L1"];
		this.modData("Learnsets", "toxapex").learnset.knockoff = ["9L1"];
		this.modData("Learnsets", "toxapex").learnset.nastyplot = ["9L1"];
		this.modData("Learnsets", "toxapex").learnset.superfang = ["9L1"];
		this.modData("Learnsets", "toxapex").learnset.taunt = ["9L1"];
		this.modData('Learnsets', 'sneasler').learnset.direclaw = ['9L1'];
		this.modData('Learnsets', 'skuntank').learnset.direclaw = ['9L1'];
		this.modData('Learnsets', 'salazzle').learnset.direclaw = ['9L1'];
		this.modData('Learnsets', 'eternatus').learnset.direclaw = ['9L1'];
		this.modData('Learnsets', 'grafaiai').learnset.direclaw = ['9L1'];
		this.modData('Learnsets', 'magnemite').learnset.electroweb = ['9L1'];
		this.modData('Learnsets', 'mareep').learnset.electroweb = ['9L1'];
		this.modData('Learnsets', 'spidops').learnset.electroweb = ['9L1'];
		this.modData('Learnsets', 'surskit').learnset.electroweb = ['9L1'];
		this.modData('Learnsets', 'pichu').learnset.electroweb = ['9L1'];
		this.modData('Learnsets', 'raichualola').learnset.electroweb = ['9L1'];
		this.modData('Learnsets', 'samurotthisui').learnset.ceaselessedge = ['9L1'];
		this.modData('Learnsets', 'cacturne').learnset.ceaselessedge = ['9L1'];
		this.modData('Learnsets', 'houndoom').learnset.ceaselessedge = ['9L1'];
		this.modData('Learnsets', 'weavile').learnset.ceaselessedge = ['9L1'];
		this.modData('Learnsets', 'lokix').learnset.ceaselessedge = ['9L1'];
		this.modData('Learnsets', 'carbink').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'delphox').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'diancie').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'glimmora').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'sandyshocks').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'coalossal').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'stonjourner').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'mismagius').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'espeon').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'rabsca').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'bronzong').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'grumpig').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'rayquaza').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'eternatus').learnset.meteorbeam = ['9L1'];
		this.modData('Learnsets', 'corviknight').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'irontreads').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'forretress').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'orthworm').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'cufant').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'varoom').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'perrserker').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'sudowoodo').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'chewtle').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'hawlucha').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'tauros').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'taurospaldeacombat').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'taurospaldeablaze').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'taurospaldeaaqua').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'sandaconda').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'bergmite').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'dugtrioalola').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'dialga').learnset.skullbash = ['9L1'];
		this.modData('Learnsets', 'sliggoohisui').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'chewtle').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'shellder').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'samurott').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'klawf').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'torkoal').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'chesnaught').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'pineco').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'slowbro').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'slowbrogalar').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'sinistea').learnset.shelter = ['9L1'];
		this.modData('Learnsets', 'kleavor').learnset.stoneaxe = ['9L1'];
		this.modData('Learnsets', 'klawf').learnset.stoneaxe = ['9L1'];
		this.modData('Learnsets', 'avalugghisui').learnset.stoneaxe = ['9L1'];
		this.modData('Learnsets', 'drednaw').learnset.stoneaxe = ['9L1'];
    	delete this.modData('Learnsets', 'regieleki').learnset.electroweb;
    	delete this.modData('Learnsets', 'meloetta').learnset.sing;
		this.modData("Learnsets", "bellibolt").learnset.surf = ["9L1"];
		this.modData("Learnsets", "bellibolt").learnset.hydropump = ["9L1"];
		this.modData("Learnsets", "bellibolt").learnset.liquidation = ["9L1"];
		this.modData("Learnsets", "bellibolt").learnset.flipturn = ["9L1"];
		this.modData("Learnsets", "bellibolt").learnset.icebeam = ["9L1"];
		this.modData("Learnsets", "bellibolt").learnset.earthpower = ["9L1"];
		this.modData("Learnsets", "decidueye").learnset.poltergeist = ["9L1"];
		this.modData("Learnsets", "decidueyehisui").learnset.poltergeist = ["9L1"];
		this.modData("Learnsets", "magnemite").learnset.rapidspin = ["9L1"];
		this.modData('Learnsets', 'azelf').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'mesprit').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'uxie').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'carbink').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'diancie').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'mew').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'dunsparce').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'hatenna').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'gardevoir').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'sylveon').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'espeon').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'bronzor').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'spoink').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'rabsca').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'sableye').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'misdreavus').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'golduck').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'vespiquen').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'stonjourner').learnset.healingstones = ['9L1'];
		this.modData('Learnsets', 'forretress').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'heatran').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'ironthorns').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'irontreads').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'corviknight').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'glimmora').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'magnezone').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'coalossal').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'klefki').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'heracross').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'shellder').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'scizor').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'cufant').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'varoom').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'magearna').learnset.shrapnelshot = ['9L1'];
		this.modData('Learnsets', 'finizen').learnset.lifedew = ['9L1'];
		this.modData('Learnsets', 'vaporeon').learnset.lifedew = ['9L1'];
		this.modData('Learnsets', 'veluza').learnset.lifedew = ['9L1'];
		this.modData('Learnsets', 'azurill').learnset.lifedew = ['9L1'];
		this.modData('Learnsets', 'wochien').learnset.junglehealing = ['9L1'];
		this.modData('Learnsets', 'tsareena').learnset.junglehealing = ['9L1'];
		this.modData('Learnsets', 'rillaboom').learnset.junglehealing = ['9L1'];
		this.modData('Learnsets', 'brutebonnet').learnset.junglehealing = ['9L1'];
		this.modData('Learnsets', 'lurantis').learnset.junglehealing = ['9L1'];
		this.modData('Learnsets', 'tropius').learnset.junglehealing = ['9L1'];
		this.modData('Learnsets', 'spidops').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'pawmot').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'gallade').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'gengar').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'tsareena').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'breloom').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'hariyama').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'drifblim').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'primeape').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'medicham').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'ceruledge').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'lucario').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'goodra').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'toxicroak').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'dunsparce').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'muk').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'mukalola').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'seviper').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'zoroarkhisui').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'mimikyu').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'brambleghast').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'toedscool').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'heracross').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'silicobra').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'wiglett').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'sableye').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'banette').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'hawlucha').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'spiritomb').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'houndstone').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'passimian').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'eelektross').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'wochien').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'chesnaught').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'basculegion').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'gholdengo').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'hoopa').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'sandygast').learnset.choke = ['9L1'];
		this.modData('Learnsets', 'crabrawler').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'hariyama').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'spidops').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'passimian').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'hawlucha').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'pawmot').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'medicham').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'chesnaught').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'tornadus').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'thundurus').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'landorus').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'enamorus').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'stonjourner').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'kubfu').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'lilliganthisui').learnset.stormthrow = ['9L1'];
		this.modData('Learnsets', 'glaceon').learnset.frostbreath = ['9L1'];
		this.modData('Learnsets', 'shellder').learnset.frostbreath = ['9L1'];
		this.modData('Learnsets', 'delibird').learnset.frostbreath = ['9L1'];
		this.modData('Learnsets', 'ironbundle').learnset.frostbreath = ['9L1'];
		this.modData('Learnsets', 'chienpao').learnset.frostbreath = ['9L1'];
		this.modData('Learnsets', 'clawitzer').learnset.snipeshot = ['9L1'];
		this.modData('Learnsets', 'sneasel').learnset.falsesurrender = ['9L1'];
		this.modData('Learnsets', 'stunky').learnset.falsesurrender = ['9L1'];
		this.modData('Learnsets', 'maschiff').learnset.falsesurrender = ['9L1'];
		this.modData('Learnsets', 'murkrow').learnset.falsesurrender = ['9L1'];
		this.modData('Learnsets', 'zarude').learnset.falsesurrender = ['9L1'];
		this.modData('Learnsets', 'zoroark').learnset.falsesurrender = ['9L1'];
		this.modData('Learnsets', 'greninja').learnset.falsesurrender = ['9L1'];
		this.modData('Learnsets', 'greninjabond').learnset.falsesurrender = ['9L1'];
		this.modData('Learnsets', 'kricketune').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'gallade').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'squawkabilly').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'meditite').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'toxtricity').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'zangoose').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'scyther').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'veluza').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'ironleaves').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'hoopa').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'calyrex').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'meloetta').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'articunogalar').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'azelf').learnset.cuttingremark = ['9L1'];
		this.modData('Learnsets', 'toxtricitylowkey').learnset.cuttingremark = ['9L1'];
		this.modData("Learnsets", "gengar").learnset.fakeout = ["9L1"];
		this.modData("Learnsets", "gengar").learnset.knockoff = ["9L1"];
		this.modData("Learnsets", "gengar").learnset.moonblast = ["9L1"];
		this.modData("Learnsets", "gengar").learnset.moonlight = ["9L1"];
		this.modData("Learnsets", "gengar").learnset.shadowsneak = ["9L1"];
		this.modData("Learnsets", "gengar").learnset.sludgewave = ["9L1"];
		this.modData("Learnsets", "meloetta").learnset.aurasphere = ["9L1"];
		this.modData("Learnsets", "meloetta").learnset.axekick = ["9L1"];
		this.modData("Learnsets", "meloetta").learnset.blazekick = ["9L1"];
		this.modData("Learnsets", "meloetta").learnset.healbell = ["9L1"];
		this.modData("Learnsets", "meloetta").learnset.megakick = ["9L1"];
		this.modData("Learnsets", "meloetta").learnset.rapidspin = ["9L1"];
		this.modData("Learnsets", "meloetta").learnset.recover = ["9L1"];
		this.modData("Learnsets", "meloetta").learnset.vacuumwave = ["9L1"];
		this.modData("Learnsets", "pyroar").learnset.scorchingsands = ["9L1"];
		this.modData("Learnsets", "pyroar").learnset.earthpower = ["9L1"];
		this.modData("Learnsets", "pyroar").learnset.morningsun = ["9L1"];
		this.modData("Learnsets", "pyroar").learnset.grassknot = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.gunkshot = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.poisonjab = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.barbbarrage = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.poisonfang = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.sludgewave = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.acidarmor = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.bodypress = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.dualwingbeat = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.defog = ["9L1"];
		this.modData("Learnsets", "vespiquen").learnset.whirlwind = ["9L1"];
		this.modData('Learnsets', 'tropius').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'vivillon').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'articuno').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'articunogalar').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'moltres').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'moltresgalar').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'thundurus').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'gyarados').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'salamence').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'florges').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'kilowattrel').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'dudunsparce').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'espathra').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'tinkatink').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'arceus').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'squawkabilly').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'bombirdier').learnset.defog = ['9L1'];
		this.modData('Learnsets', 'pawmi').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'pichu').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'raichualola').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'shinx').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'toxtricity').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'toxtricitylowkey').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'eelektrik').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'ironhands').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'ironthorns').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'thundurus').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'jolteon').learnset.chainlightning = ['9L1'];
		this.modData('Learnsets', 'grimer').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'grimeralola').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'glimmet').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'gengar').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'slowbrogalar').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'skrelp').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'stunky').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'shroodle').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'gulpin').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'croagunk').learnset.hazardouswaste = ['9L1'];
		this.modData('Learnsets', 'fletchling').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'starly').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'squawkabilly').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'murkrow').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'eiscue').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'flamigo').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'rufflet').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'wingull').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'delibird').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'arrokuda').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'toedscruel').learnset.pluck = ['9L1'];
		this.modData('Learnsets', 'tornadus').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'moltres').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'moltresgalar').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'articuno').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'articunogalar').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'ironjugulis').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'oricorio').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'noibat').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'wattrel').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'fletchling').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'drifloon').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'vivillon').learnset.windbreaker = ['9L1'];
		// this.modData('Learnsets', 'rotomfan').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'murkrow').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'hawlucha').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'hoppip').learnset.windbreaker = ['9L1'];
		this.modData('Learnsets', 'sneasel').learnset.throatchop = ['9L1'];
		this.modData('Learnsets', 'mankey').learnset.throatchop = ['9L1'];
		this.modData('Learnsets', 'cacturne').learnset.throatchop = ['9L1'];
		this.modData('Learnsets', 'zapdosgalar').learnset.throatchop = ['9L1'];
		this.modData('Learnsets', 'urshifu').learnset.throatchop = ['9L1'];
		this.modData('Learnsets', 'slitherwing').learnset.throatchop = ['9L1'];
		this.modData('Learnsets', 'toxtricity').learnset.throatchop = ['9L1'];
		this.modData('Learnsets', 'toxtricitylowkey').learnset.throatchop = ['9L1'];
		this.modData('Learnsets', 'falinks').learnset.throatchop = ['9L1'];
		this.modData("Learnsets", "mew").learnset.recover = ["9L1"];
		this.modData("Learnsets", "mew").learnset.defog = ["9L1"];
		this.modData("Learnsets", "mew").learnset.moonlight = ["9L1"];
		this.modData("Learnsets", "tinkaton").learnset.earthpower = ["9L1"];
		this.modData("Learnsets", "tinkaton").learnset.discharge = ["9L1"];
  },
	hitStepAccuracy(targets, pokemon, move) {
		const hitResults = [];
		for (const [i, target] of targets.entries()) {
			this.activeTarget = target;
			// calculate true accuracy
			let accuracy = move.accuracy;
			if (move.ohko) { // bypasses accuracy modifiers
				if (!target.isSemiInvulnerable()) {
					accuracy = 30;
					if (move.ohko === 'Ice' && this.gen >= 7 && !pokemon.hasType('Ice')) {
						accuracy = 20;
					}
					if (!target.volatiles['dynamax'] && pokemon.level >= target.level &&
						(move.ohko === true || !target.hasType(move.ohko))) {
						accuracy += (pokemon.level - target.level);
					} else {
						this.add('-immune', target, '[ohko]');
						hitResults[i] = false;
						continue;
					}
				}
			} else {
				const boostTable = [1, 4 / 3, 5 / 3, 2, 7 / 3, 8 / 3, 3];

				let boosts;
				let boost!: number;
				if (accuracy !== true) {
					if (!move.ignoreAccuracy) {
						boosts = this.runEvent('ModifyBoost', pokemon, null, null, {...pokemon.boosts});
						boost = this.clampIntRange(boosts['accuracy'], -6, 6);
						if (boost > 0) {
							accuracy *= boostTable[boost];
						} else {
							accuracy /= boostTable[-boost];
						}
					}
					if (!move.ignoreEvasion) {
						boosts = this.runEvent('ModifyBoost', target, null, null, {...target.boosts});
						boost = this.clampIntRange(boosts['evasion'], -6, 6);
						if (boost > 0) {
							accuracy /= boostTable[boost];
						} else if (boost < 0) {
							accuracy *= boostTable[-boost];
						}
					}
				}
				accuracy = this.runEvent('ModifyAccuracy', target, pokemon, move, accuracy);
			}
			if (move.alwaysHit || (move.id === 'toxic' && this.gen >= 6 && pokemon.hasType('Poison'))) {
				accuracy = true; // bypasses ohko accuracy modifiers
			} else {
				accuracy = this.runEvent('Accuracy', target, pokemon, move, accuracy);
			}
			if (accuracy !== true && !this.randomChance(accuracy, 100)) {
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					if (!move.spreadHit) this.attrLastMove('[miss]');
					this.add('-miss', pokemon, target);
					if (!move.ohko && pokemon.hasItem('blunderpolicy') && pokemon.useItem()) {
						this.boost({accuracy: 2, spe: 2}, pokemon);
					}
				}
				hitResults[i] = false;
				continue;
			}
			hitResults[i] = true;
		}
		return hitResults;
	},
};
