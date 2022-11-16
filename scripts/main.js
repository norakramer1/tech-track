// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'
import { displayPaintings } from './getObjectIds.js'
import * as d3 from 'd3';

let dataSet = [
  {
      "objectID": 452655,
      "isHighlight": false,
      "accessionNumber": "1974.290.30",
      "accessionYear": "1974",
      "isPublicDomain": true,
      "primaryImage": "https://images.metmuseum.org/CRDImages/is/original/sf1974-290-30a.jpg",
      "primaryImageSmall": "https://images.metmuseum.org/CRDImages/is/web-large/sf1974-290-30a.jpg",
      "additionalImages": [
          "https://images.metmuseum.org/CRDImages/is/original/DP112109.jpg"
      ],
      "constituents": [{
          "constituentID": 130357,
          "role": "Author",
          "name": "Abu&#39;l Qasim Firdausi",
          "constituentULAN_URL": "",
          "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q43459",
          "gender": ""
      }],
      "department": "Islamic Art",
      "objectName": "Folio fro290.30m an illustrated manuscript",
      "title": "\"Rustam Falls in the Spear-Lined Pit\", Folio from a Shahnama (Book of Kings)",
      "culture": "",
      "period": "",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "Author",
      "artistPrefix": "",
      "artistDisplayName": "Abu'l Qasim Firdausi",
      "artistDisplayBio": "Iranian, Paj ca. 940/41–1020 Tus",
      "artistSuffix": "",
      "artistAlphaSort": "Abu'l Qasim Firdausi",
      "artistNationality": "Iranian",
      "artistBeginDate": "0935",
      "artistEndDate": "1020",
      "artistGender": "",
      "artistWikidata_URL": "https://www.wikidata.org/wiki/Q43459",
      "artistULAN_URL": "",
      "objectDate": "ca. 1330–40",
      "objectBeginDate": 1305,
      "objectEndDate": 1365,
      "medium": "Ink, opaque watercolor, gold, and silver on paper",
      "dimensions": "Page: \r\n        H. 8 in. (20.3 cm)\r\n        W. 5 3/16 in. (13.2 cm)\r\nPainting: \r\n        H. 1 7/8 in. (4.8 cm)\r\n        W. 4 1/4 in. (10.8 cm)",
      "measurements": [{
              "elementName": "Overall",
              "elementDescription": "Page",
              "elementMeasurements": {
                  "Height": 20.3,
                  "Width": 13.2
              }
          },
          {
              "elementName": "Overall",
              "elementDescription": "Painting",
              "elementMeasurements": {
                  "Height": 4.8,
                  "Width": 10.8
              }
          }
      ],
      "creditLine": "Bequest of Monroe C. Gutman, 1974",
      "geographyType": "Attributed to",
      "city": "probably Isfahan",
      "state": "",
      "county": "",
      "country": "Iran",
      "region": "",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Codices",
      "rightsAndReproduction": "",
      "linkResource": "",
      "metadataDate": "2022-10-20T04:55:06.267Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/452655",
      "tags": [{
              "term": "Animals",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300249525",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q729"
          },
          {
              "term": "Men",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300025928",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q8441"
          }
      ],
      "objectWikidata_URL": "",
      "isTimelineWork": false,
      "GalleryNumber": ""
  },

  {
      "objectID": 452641,
      "isHighlight": false,
      "accessionNumber": "1974.290.16",
      "accessionYear": "1974",
      "isPublicDomain": true,
      "primaryImage": "https://images.metmuseum.org/CRDImages/is/original/DP108565.jpg",
      "primaryImageSmall": "https://images.metmuseum.org/CRDImages/is/web-large/DP108565.jpg",
      "additionalImages": [
          "https://images.metmuseum.org/CRDImages/is/original/sf1974-290-16a.jpg"
      ],
      "constituents": [{
          "constituentID": 130357,
          "role": "Author",
          "name": "Abu&#39;l Qasim Firdausi",
          "constituentULAN_URL": "",
          "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q43459",
          "gender": ""
      }],
      "department": "Islamic Art",
      "objectName": "Folio from an illustrated manuscript",
      "title": "\"Kai Khusrau Wrestles with Shida\", Folio from a Shahnama (Book of Kings)",
      "culture": "",
      "period": "",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "Author",
      "artistPrefix": "",
      "artistDisplayName": "Abu'l Qasim Firdausi",
      "artistDisplayBio": "Iranian, Paj ca. 940/41–1020 Tus",
      "artistSuffix": "",
      "artistAlphaSort": "Abu'l Qasim Firdausi",
      "artistNationality": "Iranian",
      "artistBeginDate": "0935",
      "artistEndDate": "1020",
      "artistGender": "",
      "artistWikidata_URL": "https://www.wikidata.org/wiki/Q43459",
      "artistULAN_URL": "",
      "objectDate": "ca. 1330–40",
      "objectBeginDate": 1305,
      "objectEndDate": 1365,
      "medium": "Ink, opaque watercolor, gold, and silver on paper",
      "dimensions": "Page: \r\n        H. 8 in. (20.3 cm)\r\n        W. 5 1/4 in. (13.3 cm)\r\nPainting: \r\n        H. 1 7/8 in. (4.8 cm)\r\n        W. 4 1/4 in. (10.8 cm)",
      "measurements": [{
              "elementName": "Other",
              "elementDescription": "Painting",
              "elementMeasurements": {
                  "Height": 4.8,
                  "Width": 10.8
              }
          },
          {
              "elementName": "Overall",
              "elementDescription": "Page",
              "elementMeasurements": {
                  "Height": 20.3,
                  "Width": 13.3
              }
          }
      ],
      "creditLine": "Bequest of Monroe C. Gutman, 1974",
      "geographyType": "Attributed to",
      "city": "probably Isfahan",
      "state": "",
      "county": "",
      "country": "Iran",
      "region": "",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Codices",
      "rightsAndReproduction": "",
      "linkResource": "",
      "metadataDate": "2022-10-20T04:55:06.267Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/452641",
      "tags": [{
              "term": "Poetry",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300055931",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q482"
          },
          {
              "term": "Men",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300025928",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q8441"
          },
          {
              "term": "Horses",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300250148",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q726"
          }
      ],
      "objectWikidata_URL": "",
      "isTimelineWork": false,
      "GalleryNumber": ""
  },
  {
      "objectID": 203933,
      "isHighlight": false,
      "accessionNumber": "64.101.1444",
      "accessionYear": "1964",
      "isPublicDomain": true,
      "primaryImage": "https://images.metmuseum.org/CRDImages/es/original/DP-732-001.jpg",
      "primaryImageSmall": "https://images.metmuseum.org/CRDImages/es/web-large/DP-732-001.jpg",
      "additionalImages": [
          "https://images.metmuseum.org/CRDImages/es/original/DP-732-002.jpg",
          "https://images.metmuseum.org/CRDImages/es/original/DP-732-003.jpg",
          "https://images.metmuseum.org/CRDImages/es/original/DP-732-004.jpg"
      ],
      "constituents": [{
          "constituentID": 162124,
          "role": "Artist",
          "name": "After a model by Michelangelo Buonarroti",
          "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500010654",
          "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q5592",
          "gender": ""
      }],
      "department": "European Sculpture and Decorative Arts",
      "objectName": "Statuette group",
      "title": "Samson and the Philistines",
      "culture": "",
      "period": "",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "Artist",
      "artistPrefix": "After a model by",
      "artistDisplayName": "Michelangelo Buonarroti",
      "artistDisplayBio": "Italian, Caprese 1475–1564 Rome",
      "artistSuffix": "",
      "artistAlphaSort": "Michelangelo Buonarroti",
      "artistNationality": "Italian",
      "artistBeginDate": "1475",
      "artistEndDate": "1564",
      "artistGender": "",
      "artistWikidata_URL": "https://www.wikidata.org/wiki/Q5592",
      "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500010654",
      "objectDate": "ca. 1550",
      "objectBeginDate": 1545,
      "objectEndDate": 1555,
      "medium": "Bronze",
      "dimensions": "Overall (confirmed): 14 7/8 × 7 1/8 × 6 1/4 in. (37.8 × 18.1 × 15.9 cm)",
      "measurements": [{
              "elementName": "Height",
              "elementDescription": "historic dimension, superceded",
              "elementMeasurements": {
                  "Height": 39.37008
              }
          },
          {
              "elementName": "Overall",
              "elementDescription": "confirmed",
              "elementMeasurements": {
                  "Depth": 15.875031,
                  "Height": 37.782574,
                  "Width": 18.097536
              }
          }
      ],
      "creditLine": "Gift of Irwin Untermyer, 1964",
      "geographyType": "",
      "city": "",
      "state": "",
      "county": "",
      "country": "",
      "region": "",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Sculpture-Bronze",
      "rightsAndReproduction": "",
      "linkResource": "",
      "metadataDate": "2022-10-15T04:54:56.9Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/203933",
      "tags": [{
              "term": "Male Nudes",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300189568",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q40446"
          },
          {
              "term": "Samson",
              "AAT_URL": "http://vocab.getty.edu/page/ia/901000362",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q214648"
          }
      ],
      "objectWikidata_URL": "",
      "isTimelineWork": false,
      "GalleryNumber": ""
  },
  {
      "objectID": 436286,
      "isHighlight": false,
      "accessionNumber": "12.75",
      "accessionYear": "1912",
      "isPublicDomain": true,
      "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DP280792.jpg",
      "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ep/web-large/DP280792.jpg",
      "additionalImages": [
          "https://images.metmuseum.org/CRDImages/ep/original/GermanCat26_Xraynocap1.jpg"
      ],
      "constituents": [{
          "constituentID": 163580,
          "role": "Artist",
          "name": "Conrad Faber von Creuznach",
          "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500007968",
          "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q1126773",
          "gender": ""
      }],
      "department": "European Paintings",
      "objectName": "Painting",
      "title": "Portrait of a Man with a Moor's Head on His Signet Ring",
      "culture": "",
      "period": "",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "Artist",
      "artistPrefix": "",
      "artistDisplayName": "Conrad Faber von Creuznach",
      "artistDisplayBio": "German, Kreuznach, active by 1524–died 1552/53 Frankfurt",
      "artistSuffix": "",
      "artistAlphaSort": "Faber von Creuznach, Conrad",
      "artistNationality": "German",
      "artistBeginDate": "1524",
      "artistEndDate": "1553",
      "artistGender": "",
      "artistWikidata_URL": "https://www.wikidata.org/wiki/Q1126773",
      "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500007968",
      "objectDate": "",
      "objectBeginDate": 1524,
      "objectEndDate": 1553,
      "medium": "Oil, gold, and white metal on linden",
      "dimensions": "20 7/8 x 14 1/8 in. (53 x 35.9 cm)",
      "measurements": [{
          "elementName": "Overall",
          "elementDescription": null,
          "elementMeasurements": {
              "Height": 53,
              "Width": 35.9
          }
      }],
      "creditLine": "John Stewart Kennedy Fund, 1912",
      "geographyType": "",
      "city": "",
      "state": "",
      "county": "",
      "country": "",
      "region": "",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Paintings",
      "rightsAndReproduction": "",
      "linkResource": "",
      "metadataDate": "2021-01-27T04:38:26.323Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/436286",
      "tags": [{
              "term": "Rings",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300046012",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q46847"
          },
          {
              "term": "Men",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300025928",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q8441"
          },
          {
              "term": "Portraits",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300015637",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q134307"
          }
      ],
      "objectWikidata_URL": "https://www.wikidata.org/wiki/Q19911704",
      "isTimelineWork": false,
      "GalleryNumber": ""
  },
  {
      "objectID": 843269,
      "isHighlight": false,
      "accessionNumber": "2020.397a, b",
      "accessionYear": "2020",
      "isPublicDomain": false,
      "primaryImage": "",
      "primaryImageSmall": "",
      "additionalImages": [],
      "constituents": [{
          "constituentID": 211948,
          "role": "Artist",
          "name": "Yamada Shinzan 山田真山",
          "constituentULAN_URL": "",
          "constituentWikidata_URL": "",
          "gender": ""
      }],
      "department": "Asian Art",
      "objectName": "Hanging scrolls",
      "title": "Monk Ippen Giving a Warrior the Tonsure and His Wife as a Lay Buddhist Nun",
      "culture": "Japan",
      "period": "Shōwa period (1926–89)",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "Artist",
      "artistPrefix": "",
      "artistDisplayName": "Yamada Shinzan 山田真山",
      "artistDisplayBio": "Japanese, 1887–1977",
      "artistSuffix": "",
      "artistAlphaSort": "Yamada Shinzan",
      "artistNationality": "Japanese",
      "artistBeginDate": "1887",
      "artistEndDate": "1977",
      "artistGender": "",
      "artistWikidata_URL": "",
      "artistULAN_URL": "",
      "objectDate": "mid-20th century",
      "objectBeginDate": 1934,
      "objectEndDate": 1966,
      "medium": "Pair of hanging scrolls; ink, color, and gold on silk",
      "dimensions": "Image (each): 71 1/8 × 30 7/8 in. (180.7 × 78.4 cm)\r\nOverall with mounting (each): 92 1/2 × 36 1/2 in. (235 × 92.7 cm)\r\nOverall with knobs (each): 91 1/2 × 39 in. (232.4 × 99.1 cm)",
      "measurements": [{
              "elementName": "Overall with mounting",
              "elementDescription": "left",
              "elementMeasurements": {
                  "Height": 234.95047,
                  "Width": 92.71018
              }
          },
          {
              "elementName": "Overall with mounting",
              "elementDescription": "right",
              "elementMeasurements": {
                  "Height": 232.41046,
                  "Width": 92.71018
              }
          },
          {
              "elementName": "Overall with mounting",
              "elementDescription": "each",
              "elementMeasurements": {
                  "Height": 234.95047,
                  "Width": 92.71018
              }
          },
          {
              "elementName": "Image",
              "elementDescription": "right",
              "elementMeasurements": {
                  "Height": 180.34036,
                  "Width": 78.42265
              }
          },
          {
              "elementName": "Overall with knobs",
              "elementDescription": "left",
              "elementMeasurements": {
                  "Height": 234.95047,
                  "Width": 99.060196
              }
          },
          {
              "elementName": "Image",
              "elementDescription": "left",
              "elementMeasurements": {
                  "Height": 180.65787,
                  "Width": 78.42265
              }
          },
          {
              "elementName": "Overall with knobs",
              "elementDescription": "right",
              "elementMeasurements": {
                  "Height": 234.95047,
                  "Width": 99.060196
              }
          },
          {
              "elementName": "Overall with knobs",
              "elementDescription": "each",
              "elementMeasurements": {
                  "Height": 232.41046,
                  "Width": 99.060196
              }
          },
          {
              "elementName": "Image",
              "elementDescription": "each",
              "elementMeasurements": {
                  "Height": 180.65787,
                  "Width": 78.42265
              }
          }
      ],
      "creditLine": "Purchase, Friends of Asian Art Gifts, 2020",
      "geographyType": "",
      "city": "",
      "state": "",
      "county": "",
      "country": "",
      "region": "",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Paintings",
      "rightsAndReproduction": "",
      "linkResource": "",
      "metadataDate": "2022-11-15T04:46:05.987Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/843269",
      "tags": null,
      "objectWikidata_URL": "",
      "isTimelineWork": false,
      "GalleryNumber": ""
  },
  {
      "objectID": 309529,
      "isHighlight": false,
      "accessionNumber": "68.128",
      "accessionYear": "1968",
      "isPublicDomain": true,
      "primaryImage": "https://images.metmuseum.org/CRDImages/ao/original/68.128_a.JPG",
      "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ao/web-large/68.128_a.JPG",
      "additionalImages": [
          "https://images.metmuseum.org/CRDImages/ao/original/hz68_128B.jpg",
          "https://images.metmuseum.org/CRDImages/ao/original/68.128_b.JPG"
      ],
      "constituents": null,
      "department": "The Michael C. Rockefeller Wing",
      "objectName": "Icon",
      "title": "Pendant Icon: St. George, Virgin and Child Enthroned",
      "culture": "Ethiopian",
      "period": "",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "",
      "artistPrefix": "",
      "artistDisplayName": "",
      "artistDisplayBio": "",
      "artistSuffix": "",
      "artistAlphaSort": "",
      "artistNationality": "",
      "artistBeginDate": "",
      "artistEndDate": "",
      "artistGender": "",
      "artistWikidata_URL": "",
      "artistULAN_URL": "",
      "objectDate": "18th century",
      "objectBeginDate": 1700,
      "objectEndDate": 1800,
      "medium": "Wood, pigment, metal hinge",
      "dimensions": "H. 4 3/4 x W. 3 1/8in. (12.1 x 7.9cm)",
      "measurements": [{
          "elementName": "Overall",
          "elementDescription": null,
          "elementMeasurements": {
              "Height": 12.065,
              "Width": 7.92
          }
      }],
      "creditLine": "Gift of Mrs. DeWitt Wallace, 1968",
      "geographyType": "",
      "city": "",
      "state": "",
      "county": "",
      "country": "Ethiopia",
      "region": "",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Wood-Paintings",
      "rightsAndReproduction": "",
      "linkResource": "",
      "metadataDate": "2022-04-23T05:14:13.54Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/309529",
      "tags": [{
              "term": "Horses",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300250148",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q726"
          },
          {
              "term": "Spears",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300037038",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q44475"
          },
          {
              "term": "Madonna and Child",
              "AAT_URL": "http://vocab.getty.edu/page/ia/901000052",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q9309699"
          },
          {
              "term": "Saint George",
              "AAT_URL": "http://vocab.getty.edu/page/ia/901000509",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q48438"
          }
      ],
      "objectWikidata_URL": "",
      "isTimelineWork": false,
      "GalleryNumber": ""
  },
  {
      "objectID": 460863,
      "isHighlight": false,
      "accessionNumber": "1975.1.1341",
      "accessionYear": "1975",
      "isPublicDomain": true,
      "primaryImage": "https://images.metmuseum.org/CRDImages/rl/original/SF-1975-1-1341.jpg",
      "primaryImageSmall": "https://images.metmuseum.org/CRDImages/rl/web-large/SF-1975-1-1341.jpg",
      "additionalImages": [
          "https://images.metmuseum.org/CRDImages/rl/original/SLP1341-1.jpg"
      ],
      "constituents": [{
          "constituentID": 161722,
          "role": "Artist",
          "name": "Attributed to Andrea Briosco, called Riccio",
          "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500025246",
          "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q283580",
          "gender": ""
      }],
      "department": "Robert Lehman Collection",
      "objectName": "Plaquette",
      "title": "Allegory of Triumph and Sacrifice",
      "culture": "",
      "period": "",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "Artist",
      "artistPrefix": "Attributed to",
      "artistDisplayName": "Andrea Briosco, called Riccio",
      "artistDisplayBio": "Italian, Trent 1470–1532 Padua",
      "artistSuffix": "",
      "artistAlphaSort": "Briosco, Andrea, called Riccio",
      "artistNationality": "Italian",
      "artistBeginDate": "1470",
      "artistEndDate": "1532",
      "artistGender": "",
      "artistWikidata_URL": "https://www.wikidata.org/wiki/Q283580",
      "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500025246",
      "objectDate": "ca. 1520",
      "objectBeginDate": 1517,
      "objectEndDate": 1523,
      "medium": "Copper alloy with reddish brown natural patina under a worn black lacquer or wax.",
      "dimensions": "7.6 x 10.3 cm, wt. 188.24 g.",
      "measurements": null,
      "creditLine": "Robert Lehman Collection, 1975",
      "geographyType": "",
      "city": "",
      "state": "",
      "county": "",
      "country": "",
      "region": "",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Plaquettes",
      "rightsAndReproduction": "",
      "linkResource": "",
      "metadataDate": "2021-04-27T04:42:00.93Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/460863",
      "tags": [{
              "term": "Animals",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300249525",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q729"
          },
          {
              "term": "Male Nudes",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300189568",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q40446"
          },
          {
              "term": "Female Nudes",
              "AAT_URL": "http://vocab.getty.edu/page/aat/300189568",
              "Wikidata_URL": "https://www.wikidata.org/wiki/Q40446"
          }
      ],
      "objectWikidata_URL": "",
      "isTimelineWork": false,
      "GalleryNumber": ""
  },
  {
      "objectID": 454811,
      "isHighlight": false,
      "accessionNumber": "2022.199",
      "accessionYear": "2022",
      "isPublicDomain": false,
      "primaryImage": "",
      "primaryImageSmall": "",
      "additionalImages": [],
      "constituents": [{
          "constituentID": 181268,
          "role": "Artist",
          "name": "Attributed to the Bombay Painter",
          "constituentULAN_URL": "",
          "constituentWikidata_URL": "",
          "gender": ""
      }],
      "department": "Islamic Art",
      "objectName": "Illustrated album leaf",
      "title": "Sultan ‘Ali ‘Adil Shah II Slays a Tiger",
      "culture": "",
      "period": "",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "Artist",
      "artistPrefix": "Attributed to the",
      "artistDisplayName": "Bombay Painter",
      "artistDisplayBio": "",
      "artistSuffix": "(probably Abdul Hamid Naqqash)",
      "artistAlphaSort": "Bombay Painter",
      "artistNationality": "",
      "artistBeginDate": "",
      "artistEndDate": "",
      "artistGender": "",
      "artistWikidata_URL": "",
      "artistULAN_URL": "",
      "objectDate": "ca. 1660",
      "objectBeginDate": 1635,
      "objectEndDate": 1685,
      "medium": "Ink, opaque watercolor, gold, and probably lapis-lazuli pigment on paper",
      "dimensions": "Frame: 17 3/8 × 20 11/16 × 7/8 in. (44.1 × 52.5 × 2.2 cm)\r\nImage: 8 7/16 × 12 3/8 in. (21.5 × 31.5 cm)",
      "measurements": [{
              "elementName": "Overall",
              "elementDescription": "Frame",
              "elementMeasurements": {
                  "Depth": 2.2,
                  "Height": 44.1,
                  "Width": 52.5
              }
          },
          {
              "elementName": "Image",
              "elementDescription": null,
              "elementMeasurements": {
                  "Height": 21.5,
                  "Width": 31.5
              }
          }
      ],
      "creditLine": "Howard Hodgkin Collection, Purchase, Florence and Herbert Irving Acquisitions and 2020 Benefit Funds; Howard S. and Nancy Marks Gift; Louis V. Bell, Harris Brisbane Dick, Fletcher, and Rogers Funds and Joseph Pulitzer Bequest; The Mossavar-Rahmani Fund for Iranian Art and funds from various donors, 2022",
      "geographyType": "Made in",
      "city": "Bijapur",
      "state": "",
      "county": "",
      "country": "India",
      "region": "Deccan",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Codices",
      "rightsAndReproduction": "",
      "linkResource": "",
      "metadataDate": "2022-10-20T04:55:06.267Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/454811",
      "tags": null,
      "objectWikidata_URL": "",
      "isTimelineWork": false,
      "GalleryNumber": ""
  },
  {
      "objectID": 198799,
      "isHighlight": false,
      "accessionNumber": "41.100.310",
      "accessionYear": "1941",
      "isPublicDomain": true,
      "primaryImage": "https://images.metmuseum.org/CRDImages/es/original/DP-736-001.jpg",
      "primaryImageSmall": "https://images.metmuseum.org/CRDImages/es/web-large/DP-736-001.jpg",
      "additionalImages": [
          "https://images.metmuseum.org/CRDImages/es/original/DP-736-002.jpg"
      ],
      "constituents": [{
          "constituentID": 105692,
          "role": "Artist",
          "name": "After Willem Danielsz van Tetrode",
          "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500017784",
          "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q2086704",
          "gender": ""
      }],
      "department": "European Sculpture and Decorative Arts",
      "objectName": "Statuette group",
      "title": "Hercules and Cacus (?)",
      "culture": "",
      "period": "",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "",
      "artistPrefix": "",
      "artistDisplayName": "",
      "artistDisplayBio": "",
      "artistSuffix": "",
      "artistAlphaSort": "",
      "artistNationality": "",
      "artistBeginDate": "",
      "artistEndDate": "",
      "artistGender": "",
      "artistWikidata_URL": "",
      "artistULAN_URL": "",
      "objectDate": "early 17th century or later copy",
      "objectBeginDate": 1600,
      "objectEndDate": 1625,
      "medium": "Bronze",
      "dimensions": "Overall (confirmed): 14 1/8 × 10 × 8 in. (35.9 × 25.4 × 20.3 cm)",
      "measurements": [{
              "elementName": "Height",
              "elementDescription": "historic dimension, superceded",
              "elementMeasurements": {
                  "Height": 36.195072
              }
          },
          {
              "elementName": "Overall",
              "elementDescription": "confirmed",
              "elementMeasurements": {
                  "Depth": 20.32004,
                  "Height": 35.87757,
                  "Width": 25.400051
              }
          }
      ],
      "creditLine": "Gift of George Blumenthal, 1941",
      "geographyType": "",
      "city": "",
      "state": "",
      "county": "",
      "country": "",
      "region": "",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Sculpture-Bronze",
      "rightsAndReproduction": "",
      "linkResource": "",
      "metadataDate": "2022-10-15T04:54:56.9Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/198799",
      "tags": [{
          "term": "Hercules",
          "AAT_URL": "http://vocab.getty.edu/page/ia/901000042",
          "Wikidata_URL": "https://www.wikidata.org/wiki/Q122248"
      }],
      "objectWikidata_URL": "",
      "isTimelineWork": false,
      "GalleryNumber": ""
  },
  {
      "objectID": 485938,
      "isHighlight": false,
      "accessionNumber": "1992.179.1",
      "accessionYear": "1992",
      "isPublicDomain": false,
      "primaryImage": "",
      "primaryImageSmall": "",
      "additionalImages": [],
      "constituents": [{
          "constituentID": 162161,
          "role": "Artist",
          "name": "Barnett Newman",
          "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500000960",
          "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q374504",
          "gender": ""
      }],
      "department": "Modern and Contemporary Art",
      "objectName": "Drawing",
      "title": "The Song of Orpheus",
      "culture": "",
      "period": "",
      "dynasty": "",
      "reign": "",
      "portfolio": "",
      "artistRole": "Artist",
      "artistPrefix": "",
      "artistDisplayName": "Barnett Newman",
      "artistDisplayBio": "American, New York 1905–1970 New York",
      "artistSuffix": "",
      "artistAlphaSort": "Newman, Barnett",
      "artistNationality": "American",
      "artistBeginDate": "1905",
      "artistEndDate": "1970",
      "artistGender": "",
      "artistWikidata_URL": "https://www.wikidata.org/wiki/Q374504",
      "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500000960",
      "objectDate": "1944–45",
      "objectBeginDate": 1944,
      "objectEndDate": 1945,
      "medium": "Oil pastel on paper",
      "dimensions": "20 x 14 7/8 in. (50.8 x 37.8 cm)",
      "measurements": [{
              "elementName": "Other",
              "elementDescription": "Depth",
              "elementMeasurements": {
                  "Diameter": 2.5
              }
          },
          {
              "elementName": "Other",
              "elementDescription": "Width",
              "elementMeasurements": {
                  "Diameter": 73.7
              }
          },
          {
              "elementName": "Other",
              "elementDescription": "Height",
              "elementMeasurements": {
                  "Diameter": 58.4
              }
          },
          {
              "elementName": "Overall",
              "elementDescription": null,
              "elementMeasurements": {
                  "Height": 50.8,
                  "Width": 37.8
              }
          }
      ],
      "creditLine": "Gift of Annalee Newman, 1992",
      "geographyType": "",
      "city": "",
      "state": "",
      "county": "",
      "country": "",
      "region": "",
      "subregion": "",
      "locale": "",
      "locus": "",
      "excavation": "",
      "river": "",
      "classification": "Drawings",
      "rightsAndReproduction": "© 2022 Artists Rights Society (ARS), New York",
      "linkResource": "",
      "metadataDate": "2022-01-04T04:40:20.79Z",
      "repository": "Metropolitan Museum of Art, New York, NY",
      "objectURL": "https://www.metmuseum.org/art/collection/search/485938",
      "tags": [{
          "term": "Abstraction",
          "AAT_URL": "http://vocab.getty.edu/page/aat/300056508",
          "Wikidata_URL": "https://www.wikidata.org/wiki/Q162150"
      }],
      "objectWikidata_URL": "https://www.wikidata.org/wiki/Q19917914",
      "isTimelineWork": false,
      "GalleryNumber": ""
  }
]

// displayPaintings();

// console.log(paintings)

// // https://collectionapi.metmuseum.org/public/collection/v1/objects
// let dataSet = await getData.getObjectIds();

// console.log(dataSet.objectID)


dataSet.forEach(element => console.log(element.artistBeginDate));

const pointScale = d3
  .scalePoint()
  .domain(d3.map(dataSet, (d) => d.artistBeginDate))
  .range([0, 2020]);

  const sqrtScale = d3
  .scaleSqrt()
  .domain([0, d3.max(dataSet, (d) => d.artistBeginDate)])
  .range([0, 40]);

  const colorScaleLinear = d3
  .scaleLinear()
  .domain([0, d3.max(dataSet, (d) => d.artistBeginDate)])
  .range(["red", "darkred"]);

  d3.select("#scale1")
  .selectAll("circle")
  .data(dataSet)
  .join("circle")
  .attr("r", (d) => sqrtScale(d.artistBeginDate))
  .attr("cx", (d) => pointScale(d.artistBeginDate))
  .attr("fill", (d) => colorScaleLinear(d.artistBeginDate))

  .on("mouseover touchstart", (e, d) =>
  d3
    .select("#tooltip")
    .transition()
    .duration(175)
    .style("opacity", 1)
    .text(`${d.day}: ${d.cars} cars`)
    .attr("xlink:href", (d) => attr(d.primaryImage))
)


  const axisBottom = d3.axisBottom(pointScale).tickFormat((s) => s.slice(0, 20));

d3.select("#axis1").call(axisBottom);