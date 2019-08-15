//OBJECT

//A container that holds data.

let netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"}
          ]
        }
      },
      season2: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Secret Shopper"},
            { episode: 2, episodeName: "Color Wars"},
            { episode: 3, episodeName: "Wedding Day Sale"},
            { episode: 4, episodeName: "All-Nighter"},
            { episode: 5, episodeName: "Demotion"},
            { episode: 6, episodeName: "Labor"}
          ]
        }
      },
      season3: {}
    };


//DOT NOTATION

// console.log("All data: ", netflix);
// console.log("Just season info: ", netflix.season2.seasonInfo);
// console.log(netflix.season2.seasonInfo.episodeInfo[0].episodeName);
console.log(netflix.season2.seasonInfo.episodeInfo[1].episode, netflix.season2.seasonInfo.episodeInfo[1].episodeName);

// JSON
// data comes back as a long string. Why do we JSONify?
// var json = {
//     "workbench.colorTheme": "One Dark+ (Sublime)",
//     "window.zoomLevel": 3,
//     "files.exclude": {
//       "**/.git": true,
//       "**/.DS_Store": true,
//       "**/*.js": {
//         "when": "$(basename).ts"
//       },
//       "**/*.js.map": {
//         "when": "$(basename)"
//       }
//     },
//     "editor.fontFamily": "Monaco, 'Courier New', monospace",
//     "editor.detectIndentation": false,
//     "editor.letterSpacing": 0,
//     "editor.tabSize": 2,
//     "files.autoSave": "off",
//     "editor.wordWrap": "on",
//     "extensions.ignoreRecommendations": true,
//     "[html]": {},
//     "files.associations": {
//       "*.html": "html",
//       "*.js": "javascriptreact"
//     },
//     "html.format.indentInnerHtml": true,
//     "editor.fontSize": 11,
//     "liveServer.settings.donotShowInfoMsg": true,
//     "liveServer.settings.port": 3500,
//     "[javascriptreact]": {}
//   }