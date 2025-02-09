var hungary = ee.FeatureCollection("FAO/GAUL/2015/level0")
                                  .filter(ee.Filter.eq('ADM0_NAME', 'Hungary'));

var  col = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR")
                            .filterDate('2023-01-01', '2023-12-31')
                            .filterBounds(hungary)
                            .map(function(image)
                            {return image.select('temperature_2m')
                            .subtract(273.15)});
print(col);

var colImage = col.mean().clip(hungary);


Map.centerObject(hungary, 7);
Map.addLayer(colImage,
        {min:2, 
        max:24, 
        palette: ['blue','white', 'red']},
        'Annual Temp');
                            
var stat = colImage.reduce(ee.Reducer.minMax());
// Map.addLayer(stat);

var chart = ui.Chart.image.series({
  imageCollection: col, 
  region: hungary,
  reducer: ee.Reducer.minMax(),
  scale: 10000,
  xProperty: 'system:index'
})

//print(chart);

chart.setOptions ({
  title: 'Annual Temperature',
  hAxis: {title: 'Month'},
  vAxis: {title: 'Mean Temperature in Celcius Degree'},
  // legend: {position: 'none'}
});


var title = ui.Label(
  {value: 'Temperature Analysis',
  style: {}
})

var panel = ui.Panel({
  widgets: [title],
  style: {}
});

Map.add(panel);


var chartPanel = ui.Panel({
  widgets: [chart],
  style: {
    position: 'bottom-right',
    width: '400px',
    backgroundColor: 'white'
  }
})

Map.add(chartPanel);






Export.image.toDrive({
  image: colImage,
  description: 'hungary_annual_temp',
  //assetID: 'users/nurmdju45/hungary_annual_temp',
  region: hungary.geometry().bounds(),
  scale: 10000
  
});