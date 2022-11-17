// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'
// import { displayPaintings } from './getObjectIds.js'
// import { getObjectIds } from './getObjectIds.js'
 import { displayPaintings } from './getObjectIds.js'
// import * as d3 from 'd3';


// let dataSet = [
//   {
//       "objectID": 670275,
//       "isHighlight": false,
//       "accessionNumber": "2015.89",
//       "accessionYear": "2015",
//       "isPublicDomain": true,
//       "primaryImage": "https://images.metmuseum.org/CRDImages/dp/original/DP873521.jpg",
//       "primaryImageSmall": "https://images.metmuseum.org/CRDImages/dp/web-large/DP873521.jpg",
//       "additionalImages": [],
//       "constituents": [
//           {
//               "constituentID": 166211,
//               "role": "Artist",
//               "name": "William Hamilton",
//               "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500023410",
//               "constituentWikidata_URL": "",
//               "gender": ""
//           }
//       ],
//       "department": "Drawings and Prints",
//       "objectName": "Drawing",
//       "title": "Woman Sheltering a Child in a Landscape",
//       "culture": "",
//       "period": "",
//       "dynasty": "",
//       "reign": "",
//       "portfolio": "",
//       "artistRole": "Artist",
//       "artistPrefix": "",
//       "artistDisplayName": "William Hamilton",
//       "artistDisplayBio": "British, London 1751–1801 London",
//       "artistSuffix": "",
//       "artistAlphaSort": "Hamilton, William",
//       "artistNationality": "British",
//       "artistBeginDate": "1751",
//       "artistEndDate": "1801",
//       "artistGender": "",
//       "artistWikidata_URL": "",
//       "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500023410",
//       "objectDate": "1770–80",
//       "objectBeginDate": 1770,
//       "objectEndDate": 1780,
//       "medium": "Pen and brown ink, brush and gray wash, over graphite",
//       "dimensions": "Sheet: 10 5/16 × 12 13/16 in. (26.2 × 32.5 cm)",
//       "measurements": [
//           {
//               "elementName": "Sheet",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Height": 26.2,
//                   "Width": 32.5
//               }
//           }
//       ],
//       "creditLine": "The Elisha Whittelsey Collection, The Elisha Whittelsey Fund, 2015",
//       "geographyType": "",
//       "city": "",
//       "state": "",
//       "county": "",
//       "country": "",
//       "region": "",
//       "subregion": "",
//       "locale": "",
//       "locus": "",
//       "excavation": "",
//       "river": "",
//       "classification": "Drawings",
//       "rightsAndReproduction": "",
//       "linkResource": "",
//       "metadataDate": "2021-09-03T04:35:54.313Z",
//       "repository": "Metropolitan Museum of Art, New York, NY",
//       "objectURL": "https://www.metmuseum.org/art/collection/search/670275",
//       "tags": [
//           {
//               "term": "Children",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300025945",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q7569"
//           },
//           {
//               "term": "Women",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
//           }
//       ],
//       "objectWikidata_URL": "",
//       "isTimelineWork": false,
//       "GalleryNumber": ""
//   },
//   {
//       "objectID": 670269,
//       "isHighlight": false,
//       "accessionNumber": "2015.84",
//       "accessionYear": "2015",
//       "isPublicDomain": true,
//       "primaryImage": "https://images.metmuseum.org/CRDImages/dp/original/DP857020.jpg",
//       "primaryImageSmall": "https://images.metmuseum.org/CRDImages/dp/web-large/DP857020.jpg",
//       "additionalImages": [],
//       "constituents": [
//           {
//               "constituentID": 166211,
//               "role": "Artist",
//               "name": "William Hamilton",
//               "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500023410",
//               "constituentWikidata_URL": "",
//               "gender": ""
//           }
//       ],
//       "department": "Drawings and Prints",
//       "objectName": "Drawing",
//       "title": "The Abduction of Deianira",
//       "culture": "",
//       "period": "",
//       "dynasty": "",
//       "reign": "",
//       "portfolio": "",
//       "artistRole": "Artist",
//       "artistPrefix": "",
//       "artistDisplayName": "William Hamilton",
//       "artistDisplayBio": "British, London 1751–1801 London",
//       "artistSuffix": "",
//       "artistAlphaSort": "Hamilton, William",
//       "artistNationality": "British",
//       "artistBeginDate": "1751",
//       "artistEndDate": "1801",
//       "artistGender": "",
//       "artistWikidata_URL": "",
//       "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500023410",
//       "objectDate": "1770–80",
//       "objectBeginDate": 1770,
//       "objectEndDate": 1780,
//       "medium": "Pen and black ink over graphite, with watercolor",
//       "dimensions": "Sheet: 10 9/16 × 12 15/16 in. (26.8 × 32.8 cm)",
//       "measurements": [
//           {
//               "elementName": "Sheet",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Height": 26.8,
//                   "Width": 32.8
//               }
//           }
//       ],
//       "creditLine": "The Elisha Whittelsey Collection, The Elisha Whittelsey Fund, 2015",
//       "geographyType": "",
//       "city": "",
//       "state": "",
//       "county": "",
//       "country": "",
//       "region": "",
//       "subregion": "",
//       "locale": "",
//       "locus": "",
//       "excavation": "",
//       "river": "",
//       "classification": "Drawings",
//       "rightsAndReproduction": "",
//       "linkResource": "",
//       "metadataDate": "2021-06-05T04:45:37.2Z",
//       "repository": "Metropolitan Museum of Art, New York, NY",
//       "objectURL": "https://www.metmuseum.org/art/collection/search/670269",
//       "tags": [
//           {
//               "term": "Female Nudes",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300189568",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q40446"
//           },
//           {
//               "term": "Centaurs",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300379740",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q83203"
//           }
//       ],
//       "objectWikidata_URL": "",
//       "isTimelineWork": false,
//       "GalleryNumber": ""
//   },
//   {
//       "objectID": 670270,
//       "isHighlight": false,
//       "accessionNumber": "2015.85",
//       "accessionYear": "2015",
//       "isPublicDomain": true,
//       "primaryImage": "https://images.metmuseum.org/CRDImages/dp/original/DP857021.jpg",
//       "primaryImageSmall": "https://images.metmuseum.org/CRDImages/dp/web-large/DP857021.jpg",
//       "additionalImages": [],
//       "constituents": [
//           {
//               "constituentID": 166211,
//               "role": "Artist",
//               "name": "William Hamilton",
//               "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500023410",
//               "constituentWikidata_URL": "",
//               "gender": ""
//           }
//       ],
//       "department": "Drawings and Prints",
//       "objectName": "Drawing",
//       "title": "Amymone (?) with a Lecherous Satyr",
//       "culture": "",
//       "period": "",
//       "dynasty": "",
//       "reign": "",
//       "portfolio": "",
//       "artistRole": "Artist",
//       "artistPrefix": "",
//       "artistDisplayName": "William Hamilton",
//       "artistDisplayBio": "British, London 1751–1801 London",
//       "artistSuffix": "",
//       "artistAlphaSort": "Hamilton, William",
//       "artistNationality": "British",
//       "artistBeginDate": "1751",
//       "artistEndDate": "1801",
//       "artistGender": "",
//       "artistWikidata_URL": "",
//       "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500023410",
//       "objectDate": "1770–80",
//       "objectBeginDate": 1770,
//       "objectEndDate": 1780,
//       "medium": "Pen and black ink over graphite, with watercolor",
//       "dimensions": "Sheet: 13 1/16 × 10 9/16 in. (33.2 × 26.8 cm)",
//       "measurements": [
//           {
//               "elementName": "Sheet",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Height": 33.2,
//                   "Width": 26.8
//               }
//           }
//       ],
//       "creditLine": "The Elisha Whittelsey Collection, The Elisha Whittelsey Fund, 2015",
//       "geographyType": "",
//       "city": "",
//       "state": "",
//       "county": "",
//       "country": "",
//       "region": "",
//       "subregion": "",
//       "locale": "",
//       "locus": "",
//       "excavation": "",
//       "river": "",
//       "classification": "Drawings",
//       "rightsAndReproduction": "",
//       "linkResource": "",
//       "metadataDate": "2021-06-05T04:45:37.2Z",
//       "repository": "Metropolitan Museum of Art, New York, NY",
//       "objectURL": "https://www.metmuseum.org/art/collection/search/670270",
//       "tags": [
//           {
//               "term": "Female Nudes",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300189568",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q40446"
//           },
//           {
//               "term": "Satyrs",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300379732",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q163709"
//           },
//           {
//               "term": "Trees",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300132410",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q10884"
//           }
//       ],
//       "objectWikidata_URL": "",
//       "isTimelineWork": false,
//       "GalleryNumber": ""
//   },
//   {
//       "objectID": 670273,
//       "isHighlight": false,
//       "accessionNumber": "2015.88a, b",
//       "accessionYear": "2015",
//       "isPublicDomain": true,
//       "primaryImage": "https://images.metmuseum.org/CRDImages/dp/original/DP866797.jpg",
//       "primaryImageSmall": "https://images.metmuseum.org/CRDImages/dp/web-large/DP866797.jpg",
//       "additionalImages": [
//           "https://images.metmuseum.org/CRDImages/dp/original/DP866798.jpg"
//       ],
//       "constituents": [
//           {
//               "constituentID": 166211,
//               "role": "Artist",
//               "name": "William Hamilton",
//               "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500023410",
//               "constituentWikidata_URL": "",
//               "gender": ""
//           }
//       ],
//       "department": "Drawings and Prints",
//       "objectName": "Drawing",
//       "title": "Historical Subject with Men and a Boy Near a Ship (recto); Anatomical Study of a Foot (verso)",
//       "culture": "",
//       "period": "",
//       "dynasty": "",
//       "reign": "",
//       "portfolio": "",
//       "artistRole": "Artist",
//       "artistPrefix": "",
//       "artistDisplayName": "William Hamilton",
//       "artistDisplayBio": "British, London 1751–1801 London",
//       "artistSuffix": "",
//       "artistAlphaSort": "Hamilton, William",
//       "artistNationality": "British",
//       "artistBeginDate": "1751",
//       "artistEndDate": "1801",
//       "artistGender": "",
//       "artistWikidata_URL": "",
//       "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500023410",
//       "objectDate": "1770–80",
//       "objectBeginDate": 1770,
//       "objectEndDate": 1780,
//       "medium": "Recto: pen and black ink, brush and brown wash and watercolor, over graphite\r\nVerso: pen and black ink, brush and wash, over graphite",
//       "dimensions": "Sheet: 7 3/8 × 9 7/16 in. (18.7 × 24 cm)",
//       "measurements": [
//           {
//               "elementName": "Sheet",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Height": 18.7,
//                   "Width": 24
//               }
//           }
//       ],
//       "creditLine": "The Elisha Whittelsey Collection, The Elisha Whittelsey Fund, 2015",
//       "geographyType": "",
//       "city": "",
//       "state": "",
//       "county": "",
//       "country": "",
//       "region": "",
//       "subregion": "",
//       "locale": "",
//       "locus": "",
//       "excavation": "",
//       "river": "",
//       "classification": "Drawings",
//       "rightsAndReproduction": "",
//       "linkResource": "",
//       "metadataDate": "2021-09-03T04:35:54.313Z",
//       "repository": "Metropolitan Museum of Art, New York, NY",
//       "objectURL": "https://www.metmuseum.org/art/collection/search/670273",
//       "tags": [
//           {
//               "term": "Boys",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300247598",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q3010"
//           },
//           {
//               "term": "Men",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300025928",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q8441"
//           },
//           {
//               "term": "Ships",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300082981",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q11446"
//           }
//       ],
//       "objectWikidata_URL": "",
//       "isTimelineWork": false,
//       "GalleryNumber": ""
//   },
//   {
//       "objectID": 211478,
//       "isHighlight": false,
//       "accessionNumber": "2002.399.10",
//       "accessionYear": "2002",
//       "isPublicDomain": true,
//       "primaryImage": "https://images.metmuseum.org/CRDImages/es/original/SF2002_399_10_img1.jpg",
//       "primaryImageSmall": "https://images.metmuseum.org/CRDImages/es/web-large/SF2002_399_10_img1.jpg",
//       "additionalImages": [
//           "https://images.metmuseum.org/CRDImages/es/original/SF2002_399_10_img2.jpg"
//       ],
//       "constituents": [
//           {
//               "constituentID": 165100,
//               "role": "Artist",
//               "name": "After a design by William Wyon",
//               "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500117324",
//               "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q4102532",
//               "gender": ""
//           }
//       ],
//       "department": "European Sculpture and Decorative Arts",
//       "objectName": "Postage stamps",
//       "title": "Unused block of four \"Penny Black\" postage stamps of Queen Victoria",
//       "culture": "",
//       "period": "",
//       "dynasty": "",
//       "reign": "",
//       "portfolio": "",
//       "artistRole": "Artist",
//       "artistPrefix": "After a design by",
//       "artistDisplayName": "William Wyon",
//       "artistDisplayBio": "British, Birmingham 1795–1851 Brighton",
//       "artistSuffix": "",
//       "artistAlphaSort": "Wyon, William",
//       "artistNationality": "British",
//       "artistBeginDate": "1795",
//       "artistEndDate": "1851",
//       "artistGender": "",
//       "artistWikidata_URL": "https://www.wikidata.org/wiki/Q4102532",
//       "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500117324",
//       "objectDate": "issued May 6, 1840",
//       "objectBeginDate": 1840,
//       "objectEndDate": 1840,
//       "medium": "Engraving printed in black ink on paper",
//       "dimensions": "Overall: 1 7/8 × 2 1/8 in. (4.8 × 5.4 cm)",
//       "measurements": [
//           {
//               "elementName": "Overall",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Height": 4.7625093,
//                   "Width": 5.397511
//               }
//           }
//       ],
//       "creditLine": "Gift of Assunta Sommella Peluso, Ada Peluso, and Romano I. Peluso, in memory of Ignazio Peluso, 2002",
//       "geographyType": "",
//       "city": "",
//       "state": "",
//       "county": "",
//       "country": "",
//       "region": "",
//       "subregion": "",
//       "locale": "",
//       "locus": "",
//       "excavation": "",
//       "river": "",
//       "classification": "Postage Stamps",
//       "rightsAndReproduction": "",
//       "linkResource": "",
//       "metadataDate": "2022-10-20T04:55:06.267Z",
//       "repository": "Metropolitan Museum of Art, New York, NY",
//       "objectURL": "https://www.metmuseum.org/art/collection/search/211478",
//       "tags": [
//           {
//               "term": "Women",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
//           },
//           {
//               "term": "Queen Victoria",
//               "AAT_URL": "http://vocab.getty.edu/page/ulan/500022428",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q9439"
//           },
//           {
//               "term": "Profiles",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300123319",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q4382010"
//           }
//       ],
//       "objectWikidata_URL": "",
//       "isTimelineWork": false,
//       "GalleryNumber": ""
//   },
//   {
//       "objectID": 211425,
//       "isHighlight": false,
//       "accessionNumber": "2002.236.2",
//       "accessionYear": "2002",
//       "isPublicDomain": true,
//       "primaryImage": "https://images.metmuseum.org/CRDImages/es/original/SF2002_236_2_img1.jpg",
//       "primaryImageSmall": "https://images.metmuseum.org/CRDImages/es/web-large/SF2002_236_2_img1.jpg",
//       "additionalImages": [
//           "https://images.metmuseum.org/CRDImages/es/original/SF2002_236_2_img2.jpg"
//       ],
//       "constituents": [
//           {
//               "constituentID": 165100,
//               "role": "Artist",
//               "name": "After a design by William Wyon",
//               "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500117324",
//               "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q4102532",
//               "gender": ""
//           }
//       ],
//       "department": "European Sculpture and Decorative Arts",
//       "objectName": "Postage stamps",
//       "title": "Unused block of four \"Two Penny Blue\" postage stamps of Queen Victoria",
//       "culture": "",
//       "period": "",
//       "dynasty": "",
//       "reign": "",
//       "portfolio": "",
//       "artistRole": "Artist",
//       "artistPrefix": "After a design by",
//       "artistDisplayName": "William Wyon",
//       "artistDisplayBio": "British, Birmingham 1795–1851 Brighton",
//       "artistSuffix": "",
//       "artistAlphaSort": "Wyon, William",
//       "artistNationality": "British",
//       "artistBeginDate": "1795",
//       "artistEndDate": "1851",
//       "artistGender": "",
//       "artistWikidata_URL": "https://www.wikidata.org/wiki/Q4102532",
//       "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500117324",
//       "objectDate": "issued May 8, 1840",
//       "objectBeginDate": 1840,
//       "objectEndDate": 1840,
//       "medium": "Engraving printed in blue ink on paper",
//       "dimensions": "Overall: 1 7/8 × 1 5/8 in. (4.8 × 4.1 cm)",
//       "measurements": [
//           {
//               "elementName": "Overall",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Height": 4.7625093,
//                   "Width": 4.127508
//               }
//           }
//       ],
//       "creditLine": "Gift of Assunta Sommella Peluso, Ada Peluso, and Romano I. Peluso, in memory of Ignazio Peluso, 2002",
//       "geographyType": "",
//       "city": "",
//       "state": "",
//       "county": "",
//       "country": "",
//       "region": "",
//       "subregion": "",
//       "locale": "",
//       "locus": "",
//       "excavation": "",
//       "river": "",
//       "classification": "Postage Stamps",
//       "rightsAndReproduction": "",
//       "linkResource": "",
//       "metadataDate": "2022-10-20T04:55:06.267Z",
//       "repository": "Metropolitan Museum of Art, New York, NY",
//       "objectURL": "https://www.metmuseum.org/art/collection/search/211425",
//       "tags": [
//           {
//               "term": "Women",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
//           },
//           {
//               "term": "Queen Victoria",
//               "AAT_URL": "http://vocab.getty.edu/page/ulan/500022428",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q9439"
//           },
//           {
//               "term": "Profiles",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300123319",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q4382010"
//           }
//       ],
//       "objectWikidata_URL": "",
//       "isTimelineWork": false,
//       "GalleryNumber": ""
//   },
//   {
//       "objectID": 211421,
//       "isHighlight": false,
//       "accessionNumber": "2002.236.4",
//       "accessionYear": "2002",
//       "isPublicDomain": true,
//       "primaryImage": "https://images.metmuseum.org/CRDImages/es/original/SF2002_236_4_img1.jpg",
//       "primaryImageSmall": "https://images.metmuseum.org/CRDImages/es/web-large/SF2002_236_4_img1.jpg",
//       "additionalImages": [
//           "https://images.metmuseum.org/CRDImages/es/original/SF2002_236_4_img2.jpg"
//       ],
//       "constituents": [
//           {
//               "constituentID": 165100,
//               "role": "Artist",
//               "name": "After a design by William Wyon",
//               "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500117324",
//               "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q4102532",
//               "gender": ""
//           }
//       ],
//       "department": "European Sculpture and Decorative Arts",
//       "objectName": "Postage stamps",
//       "title": "Unused block of forty-two \"Two Penny Blue\" postage stamps of Queen Victoria",
//       "culture": "",
//       "period": "",
//       "dynasty": "",
//       "reign": "",
//       "portfolio": "",
//       "artistRole": "Artist",
//       "artistPrefix": "After a design by",
//       "artistDisplayName": "William Wyon",
//       "artistDisplayBio": "British, Birmingham 1795–1851 Brighton",
//       "artistSuffix": "",
//       "artistAlphaSort": "Wyon, William",
//       "artistNationality": "British",
//       "artistBeginDate": "1795",
//       "artistEndDate": "1851",
//       "artistGender": "",
//       "artistWikidata_URL": "https://www.wikidata.org/wiki/Q4102532",
//       "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500117324",
//       "objectDate": "issued March 13, 1841",
//       "objectBeginDate": 1841,
//       "objectEndDate": 1841,
//       "medium": "Engraving printed in blue ink on paper",
//       "dimensions": "Overall: 4 11/16 × 7 1/8 in. (11.9 × 18.1 cm)",
//       "measurements": [
//           {
//               "elementName": "Overall",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Height": 11.906274,
//                   "Width": 18.097536
//               }
//           }
//       ],
//       "creditLine": "Gift of Assunta Sommella Peluso, Ada Peluso, and Romano I. Peluso, in memory of Ignazio Peluso, 2002",
//       "geographyType": "",
//       "city": "",
//       "state": "",
//       "county": "",
//       "country": "",
//       "region": "",
//       "subregion": "",
//       "locale": "",
//       "locus": "",
//       "excavation": "",
//       "river": "",
//       "classification": "Postage Stamps",
//       "rightsAndReproduction": "",
//       "linkResource": "",
//       "metadataDate": "2022-10-20T04:55:06.267Z",
//       "repository": "Metropolitan Museum of Art, New York, NY",
//       "objectURL": "https://www.metmuseum.org/art/collection/search/211421",
//       "tags": [
//           {
//               "term": "Queen Victoria",
//               "AAT_URL": "http://vocab.getty.edu/page/ulan/500022428",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q9439"
//           },
//           {
//               "term": "Profiles",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300123319",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q4382010"
//           },
//           {
//               "term": "Women",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
//           }
//       ],
//       "objectWikidata_URL": "",
//       "isTimelineWork": false,
//       "GalleryNumber": ""
//   },
//   {
//       "objectID": 211423,
//       "isHighlight": false,
//       "accessionNumber": "2002.236.3",
//       "accessionYear": "2002",
//       "isPublicDomain": true,
//       "primaryImage": "https://images.metmuseum.org/CRDImages/es/original/SF2002_236_3_img1.jpg",
//       "primaryImageSmall": "https://images.metmuseum.org/CRDImages/es/web-large/SF2002_236_3_img1.jpg",
//       "additionalImages": [
//           "https://images.metmuseum.org/CRDImages/es/original/SF2002_236_3_img2.jpg"
//       ],
//       "constituents": [
//           {
//               "constituentID": 165100,
//               "role": "Artist",
//               "name": "After a design by William Wyon",
//               "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500117324",
//               "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q4102532",
//               "gender": ""
//           }
//       ],
//       "department": "European Sculpture and Decorative Arts",
//       "objectName": "Postage stamps",
//       "title": "Unused block of twelve \"Penny Red Brown\" postage stamps of Queen Victoria",
//       "culture": "",
//       "period": "",
//       "dynasty": "",
//       "reign": "",
//       "portfolio": "",
//       "artistRole": "Artist",
//       "artistPrefix": "After a design by",
//       "artistDisplayName": "William Wyon",
//       "artistDisplayBio": "British, Birmingham 1795–1851 Brighton",
//       "artistSuffix": "",
//       "artistAlphaSort": "Wyon, William",
//       "artistNationality": "British",
//       "artistBeginDate": "1795",
//       "artistEndDate": "1851",
//       "artistGender": "",
//       "artistWikidata_URL": "https://www.wikidata.org/wiki/Q4102532",
//       "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500117324",
//       "objectDate": "issued February 10, 1841",
//       "objectBeginDate": 1841,
//       "objectEndDate": 1841,
//       "medium": "Engraving printed in red-brown ink on paper",
//       "dimensions": "Overall: 1 7/8 × 4 3/4 in. (4.8 × 12.1 cm)",
//       "measurements": [
//           {
//               "elementName": "Overall",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Height": 4.7625093,
//                   "Width": 12.065024
//               }
//           }
//       ],
//       "creditLine": "Gift of Assunta Sommella Peluso, Ada Peluso, and Romano I. Peluso, in memory of Ignazio Peluso, 2002",
//       "geographyType": "",
//       "city": "",
//       "state": "",
//       "county": "",
//       "country": "",
//       "region": "",
//       "subregion": "",
//       "locale": "",
//       "locus": "",
//       "excavation": "",
//       "river": "",
//       "classification": "Postage Stamps",
//       "rightsAndReproduction": "",
//       "linkResource": "",
//       "metadataDate": "2022-10-20T04:55:06.267Z",
//       "repository": "Metropolitan Museum of Art, New York, NY",
//       "objectURL": "https://www.metmuseum.org/art/collection/search/211423",
//       "tags": [
//           {
//               "term": "Queen Victoria",
//               "AAT_URL": "http://vocab.getty.edu/page/ulan/500022428",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q9439"
//           },
//           {
//               "term": "Profiles",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300123319",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q4382010"
//           },
//           {
//               "term": "Women",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
//           }
//       ],
//       "objectWikidata_URL": "",
//       "isTimelineWork": false,
//       "GalleryNumber": ""
//   },
//   {
//       "objectID": 436323,
//       "isHighlight": true,
//       "accessionNumber": "37.118",
//       "accessionYear": "1937",
//       "isPublicDomain": true,
//       "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DP-1019-01.jpg",
//       "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ep/web-large/DP-1019-01.jpg",
//       "additionalImages": [
//           "https://images.metmuseum.org/CRDImages/ep/original/DP-1019-03.jpg"
//       ],
//       "constituents": [
//           {
//               "constituentID": 165555,
//               "role": "Artist",
//               "name": "Jean Honoré Fragonard",
//               "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500115329",
//               "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q127171",
//               "gender": ""
//           }
//       ],
//       "department": "European Paintings",
//       "objectName": "Painting",
//       "title": "A Woman with a Dog",
//       "culture": "",
//       "period": "",
//       "dynasty": "",
//       "reign": "",
//       "portfolio": "",
//       "artistRole": "Artist",
//       "artistPrefix": "",
//       "artistDisplayName": "Jean Honoré Fragonard",
//       "artistDisplayBio": "French, Grasse 1732–1806 Paris",
//       "artistSuffix": "",
//       "artistAlphaSort": "Fragonard, Jean Honoré",
//       "artistNationality": "French",
//       "artistBeginDate": "1732",
//       "artistEndDate": "1806",
//       "artistGender": "",
//       "artistWikidata_URL": "https://www.wikidata.org/wiki/Q127171",
//       "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500115329",
//       "objectDate": "ca. 1769",
//       "objectBeginDate": 1764,
//       "objectEndDate": 1774,
//       "medium": "Oil on canvas",
//       "dimensions": "32 x 25 3/4 in. (81.3 x 65.4 cm)",
//       "measurements": [
//           {
//               "elementName": "Overall",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Height": 81.3,
//                   "Width": 65.4
//               }
//           },
//           {
//               "elementName": "Frame",
//               "elementDescription": null,
//               "elementMeasurements": {
//                   "Depth": 9.525,
//                   "Height": 106.6802,
//                   "Width": 90.1702
//               }
//           }
//       ],
//       "creditLine": "Fletcher Fund, 1937",
//       "geographyType": "",
//       "city": "",
//       "state": "",
//       "county": "",
//       "country": "",
//       "region": "",
//       "subregion": "",
//       "locale": "",
//       "locus": "",
//       "excavation": "",
//       "river": "",
//       "classification": "Paintings",
//       "rightsAndReproduction": "",
//       "linkResource": "",
//       "metadataDate": "2022-06-02T12:28:57.13Z",
//       "repository": "Metropolitan Museum of Art, New York, NY",
//       "objectURL": "https://www.metmuseum.org/art/collection/search/436323",
//       "tags": [
//           {
//               "term": "Portraits",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300015637",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q134307"
//           },
//           {
//               "term": "Women",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
//           },
//           {
//               "term": "Dogs",
//               "AAT_URL": "http://vocab.getty.edu/page/aat/300265714",
//               "Wikidata_URL": "https://www.wikidata.org/wiki/Q144"
//           }
//       ],
//       "objectWikidata_URL": "https://www.wikidata.org/wiki/Q19911872",
//       "isTimelineWork": true,
//       "GalleryNumber": "605"
//   }
// ]


displayPaintings();
// let dataSet = displayPaintings();
// console.log(dataSet)







// const pointScale = d3
//   .scalePoint()
//   .domain(d3.map(dataSet, (d) => d.artistBeginDate))
//   .range([0, 2020]);

//   const sqrtScale = d3
//   .scaleSqrt()
//   .domain([0, d3.max(dataSet, (d) => d.artistBeginDate)])
//   .range([0, 40]);

//   const colorScaleLinear = d3
//   .scaleLinear()
//   .domain([0, d3.max(dataSet, (d) => d.artistBeginDate)])
//   .range(["green", "darkgreen"]);

//   d3.select("#scale1")
//   .selectAll("circle")
//   .data(dataSet)
//   .join("circle")
//   .attr("r", (d) => sqrtScale(d.artistBeginDate))
//   .attr("cx", (d) => pointScale(d.artistBeginDate))
//   .attr("fill", (d) => colorScaleLinear(d.artistBeginDate))

//   .on("mouseover touchstart", (e, d) =>
//   d3
//     .select("#tooltip")
//     .transition()
//     .duration(175)
//     .style("opacity", 1)
//     .text(`${d.day}: ${d.cars} cars`)
//     .attr("xlink:href", (d) => attr(d.primaryImage))
// )


//   const axisBottom = d3.axisBottom(pointScale);

// d3.select("#axis1").call(axisBottom);