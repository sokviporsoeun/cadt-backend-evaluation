/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */

//  TODO - You need to export your class to use it

export class Duration {
  /**
   * Total duration in seconds.
   * @type {number}
   * @private
   */
  _totalSeconds;

  /**
   * Creates a new Duration object.
   * @param {number} [seconds=0] - The number of seconds.
   */
  constructor(seconds = 0) {
     // YOUR CODE
     this._totalSeconds = seconds;
  }

  /**
   * Creates a new Duration from a number of minutes and seconds.
   * @param {number} [minutes=0] - The number of minutes.
   * @param {number} [seconds=0] - The number of seconds.
   * @returns {Duration} A new Duration instance.
   */
  static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
     // YOUR CODE
     seconds = seconds + minutes*60;
     return new Duration(seconds);
     
  }

  /**
   * Returns a new Duration by adding another duration.
   * @param {Duration} other - Another duration to add.
   * @returns {Duration} A new Duration representing the sum.
   */
  plus = (other) => {
         // YOUR CODE
         return new Duration(this._totalSeconds + other._totalSeconds);
  };

  // YOUR COMMENT
  /**
    * Returns a new Duration by subtracting another duration.
    * @param {Duration} other - Another duration to add.
    * @returns {Duration} A new Duration representing the subtraction.
    */
  minus = (other) => {
         // YOUR CODE
         return new Duration(this._totalSeconds - other._totalSeconds);
  };

  /**
   * Converts the duration into a human-readable string, e.g., "2m 30s".
   * @returns {string} The formatted duration string.
   */
  toString = () => {
        // YOUR CODE
        let minutes = Math.floor(this._totalSeconds / 60);
        let seconds = this._totalSeconds % 60;
        let str = minutes + "m " + seconds + "s";  
        return str;
  };
}
