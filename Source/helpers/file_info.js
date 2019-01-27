const storage = require('./storage.js');


/**
* Fetches fileName
* @param {String} teamId the id of the team as passed by Slack
* @param {Function} callback Callback returns error and token, null token means no team provided
*/
module.exports = function file_info(token, fileID) {

  if (!fileID) {
    return callback(null, null);
  }

  // Fetch the team details from StdLib Storage
  storage.getTeam(teamId, (err, team) => {

    if (err) {
      return callback(err);
    }

    let fileName = files.info(token, fileID);

    if (!botToken) {
      return callback(new Error('No Bot Token Specified'));
    }

    return callback(null, botToken);

  });

}