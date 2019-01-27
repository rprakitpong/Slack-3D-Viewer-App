const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const slack = require('slack');
// const file_info = require('../../helpers/file_info.js');
/**
* file_created event
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports =  (channel, text = '', event = {}, botToken = null, callback) => {

  if (event.type.match('file_created')) {
    slack.files.list({token: 'xoxp-535549565462-535190443911-535561377078-044a85afb5df341e4146e4cbae47b74b'}, (err, results) => { 
         console.log('files info')
      if (err) {
        return callback(err);
      }
      let fileName = "No file name given"
      let fileList = results.files;
      console.log('test test: ' + JSON.stringify(fileList[80]))
      console.log('test test 2: ' + JSON.stringify(fileList[80].name));
      console.log('test test 3: ' + JSON.stringify(fileList[80].id));
      console.log('test test 4: ' + JSON.stringify(event.file_id));
      // for (let entry of fileList) {
      //   if (entry.id == event.file_id) {
      //     console.log("true! " + results.files[i].name)
      //     fileName = entry.name;
      //   }
      // }
      console.log('file name: ' + fileName);
      
      let i = fileList.length - 1;
      fileName = fileList[i].name;
      let fileURL = 'URL not found'
      if (fileName == 'Model1.stl') {
        fileURL = "https://tinyurl.com/y7p72mq8";
      } else if (fileName == 'Model2.stl') {
        fileURL = "https://tinyurl.com/ycxl3gb2";
      } else if (fileName == 'Model3.stl') {
        fileURL = "https://tinyurl.com/y8cgdzo6";
      }
     callback(null, {
       text: `File Shared! ` + fileURL,
       attachments: []
     });
    });
    // slack.files.info({token: botToken, 'file': event.file_id}, (err, results) => {
    //   console.log('files info')
    //   if (err) {
    //     return callback(err);
    //   }
    //   console.log(results);
    //  callback(null, {
    //    text: `File Shared!`,
    //    attachments: []
    //  });
    // });
  } else {
    callback(null, {
     text: `Hello, welcome to <#${channel}>! :relaxed:`
   });
  }
};