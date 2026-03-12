import RandomTeams from '../gen9/teams';

export class RandomC25Teams extends RandomTeams {
	override randomSets: { [species: string]: RandomTeamsTypes.RandomSpeciesData } = require('./sets.json');
}

export default RandomC25Teams;
