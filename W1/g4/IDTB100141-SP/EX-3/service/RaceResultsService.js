
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "node:fs";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this._raceResults.push(result);
    // console.log(result);
    // console.log(this._raceResults);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    fs.writeFileSync(filePath, JSON.stringify(this._raceResults));
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const parsed = JSON.parse(data);
      this._raceResults = parsed.map(obj =>
        new RaceResult(
          obj.participantId,
          obj.sport,
          new Duration(obj.duration._totalSeconds)
        )
      );
      return true;
    } catch (error) {
      console.error("Error loading race results:", error.message);
      return false;
    }
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
       // TODO
       let particicpant = this._raceResults.find ((Element) => Element.participantId == participantId && Element.sport == sport);
       return particicpant ? particicpant.duration : null;
       
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        let particicpant = this._raceResults.filter ((Element) => Element.participantId == participantId);
        let totalDur = new Duration(0);
        particicpant.forEach(element => {
        totalDur = totalDur.plus(element.duration);
        });
        return totalDur;
  }
}
