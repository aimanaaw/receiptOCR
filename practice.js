const ocrSpaceApi = require('ocr-space-api');
 
var options =  { 
    apikey: 'f70d43463088957',
    language: 'eng', // English
    imageFormat: 'image/png', // Image Type (Only png ou gif is acceptable at the moment i wrote this)
    OCREngine: 1,
    isTable: true,
    isOverlayRequired: true
  };
 
// Image file to upload
const imageFilePath = "../../../Downloads/20191119_124820.png";
 
// Run and wait the result
ocrSpaceApi.parseImageFromLocalFile(imageFilePath, options)
  .then(function (parsedResult) {
    console.log('parsedText: \n', parsedResult.parsedText);
    console.log('ocrParsedResult: \n', parsedResult.ocrParsedResult);
    console.log('Coordinates: \n', parsedResult.ocrParsedResult.ParsedResults[0].TextOverlay.Lines);
  }).catch(function (err) {
    console.log('ERROR:', err);
  });