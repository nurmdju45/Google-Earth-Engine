/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var landsat = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2"),
    geometry = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[20.204698921545265, 47.43495628086351],
          [20.204698921545265, 47.17421268372708],
          [20.693590523107765, 47.17421268372708],
          [20.693590523107765, 47.43495628086351]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// var number = 2024;
// print(number);

// var string = 'Hungary';
// var string1 = "Hungary";

// print(string);

// var list = ['Debrecen', 'Budapest', 'Eger'];
// print(list);
// print (list[1]);


// var dictionary = {
//   captial: 'Budapest',
//   population: 1700000,
//   location: [19.04, 47.49]
// };

// print(dictionary);
// print(dictionary.location);


// var budapest = ee.Geometry.Point([19.04, 47.49]);
// Map.addLayer(budapest);
// Map.centerObject(budapest, 10);


// var point = ee.Feature(
//   ee.Geometry.Point([19.04, 47.49]),
//   {name: 'Budapest',
//   population: 1700000
//   }
//   );
  
// print(point);

// var pointsCollection = [
//   ee.Feature(
//   ee.Geometry.Point([19.04, 47.49]),
//   {name: 'Budapest',
//   population: 1700000
//   }
//   ),
  
//   ee.Feature ( ee.Geometry.Point([21.6, 47.5]),
//                                 {name: 'Debrecen',
//                                 population: 300000
//                                   }),
            
//     ee.Feature(ee.Geometry.LineString([[19.04, 47.49], [21.6, 47.5]]),
//                                       {Name: 'Budapest to Debrecen'}),
  
//     ee.Feature(ee.Geometry.Polygon([
      
//           [18.87383178710937,47.397865838174],
//           [19.235007324218746,47.397865838174],
//           [19.235007324218746,47.57326460266318],
//           [18.87383178710937,47.57326460266318],
//           [18.87383178710937,47.397865838174]
//       ]),
//       {name:'Budapest'}
      
//       )
// ];
  
// print (pointsCollection);

// Map.addLayer (ee.FeatureCollection(pointsCollection));












var collection = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
                              .filterDate('2020-09-01', '2020-10-01')
                              .filterBounds(geometry)
                              .select('SR_B4', 'SR_B3', 'SR_B2');
                              
print(collection)
                          
// var image = collection.mean();

// var scaledImage = image.multiply(0.0000275).add(-0.2);

// Map.centerObject(geometry, 10);
// Map.addLayer(scaledImage, {min: 0, max: 0.5, 
//                             bands: ['SR_B4', 'SR_B3', 'SR_B2']}, 
//                             'True color');



// var image = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_186027_20200913')
// Map.addLayer(image)


// var ndvi = image.normalizedDifference(['SR_B5', 'SR_B4']).rename('ndvi');

// Map.addLayer(ndvi,{min: 0, max: 1, 
//               palette: ['blue', 'green', 'green']}, 
//               'NDVI')