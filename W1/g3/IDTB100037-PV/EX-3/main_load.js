import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

// Print the resuts
console.log(raceResultService.raceResults);
console.log(raceResultService.getTotalTimeForParticipant('participant1').toString());
