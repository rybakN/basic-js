const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let message = 'Unable to determine the time of year!';
  if (date instanceof Date && !date.hasOwnProperty('getMonth')) {
    let month = date.getMonth();
    switch (month) {
      case 0:
        month = 'winter';
        break;
      case 1:
        month = 'winter';
        break;
      case 11:
        month = 'winter';
        break;
      case 2:
        month = 'spring';
        break;
      case 3:
        month = 'spring';
        break;
      case 4:
        month = 'spring';
        break;
      case 5:
        month = 'summer';
        break;
      case 6:
        month = 'summer'
        break;
      case 7:
        month = 'summer'
        break;
      case 8:
        month = 'autumn'
        break;
      case 9:
        month = 'autumn'
        break;
      case 10:
        month = 'autumn'
        break;
    }
    return month;
  } else if (arguments.length === 0) {
    return message;
  } else { throw new Error("Invalid date!"); }
}

module.exports = {
  getSeason
};
