// Your JavaScript code here
Qualtrics.SurveyEngine.addOnload(function() {
   define(['pipAPI', 'https://your-raw-github-url-here'], function(APIConstructor, iatExtension) {
      var API = new APIConstructor();
      var iat = new iatExtension({
         category1: {
            name: 'Male',
            title: {
               media: { word: 'Male' },
               css: { color: '#31b404', 'font-size': '2em' },
               height: 4
            },
            stimulusMedia: [
               { word: 'Man' },
               { word: 'Son' },
               { word: 'Father' },
               { word: 'Boy' },
               { word: 'Uncle' },
               { word: 'Grandpa' },
               { word: 'Husband' },
               { word: 'Male' }
            ],
            stimulusCss: { color: '#31b404', 'font-size': '1.8em' }
         },
         category2: {
            name: 'Female',
            title: {
               media: { word: 'Female' },
               css: { color: '#31b404', 'font-size': '2em' },
               height: 4
            },
            stimulusMedia: [
               { word: 'Mother' },
               { word: 'Wife' },
               { word: 'Aunt' },
               { word: 'Woman' },
               { word: 'Girl' },
               { word: 'Female' },
               { word: 'Grandma' },
               { word: 'Daughter' }
            ],
            stimulusCss: { color: '#31b404', 'font-size': '1.8em' }
         },
         attribute1: {
            name: 'Science',
            title: {
               media: { word: 'Science' },
               css: { color: '#0000FF', 'font-size': '1.8em' },
               height: 4
            },
            stimulusMedia: [
               { word: 'Astronomy' },
               { word: 'Math' },
               { word: 'Chemistry' },
               { word: 'Physics' },
               { word: 'Biology' },
               { word: 'Geology' },
               { word: 'Engineering' }
            ],
            stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
         },
         attribute2: {
            name: 'Liberal Arts',
            title: {
               media: { word: 'Liberal Arts' },
               css: { color: '#0000FF', 'font-size': '1.8em' },
               height: 4
            },
            stimulusMedia: [
               { word: 'History' },
               { word: 'Arts' },
               { word: 'Humanities' },
               { word: 'English' },
               { word: 'Philosophy' },
               { word: 'Music' },
               { word: 'Literature' }
            ],
            stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
         }
      });
      return iat;
   });
});
