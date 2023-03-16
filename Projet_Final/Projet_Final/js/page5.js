var data = [{
    values: [1, 7, 3, 7, 0, 0, 7, 4, 4, 11, 15, 1, 1, 1, 22, 12, 1, 3, 1],
    labels: ['20in Monitor', '27in 4K Gaming Monitor', '27in FHD Monitor', '34in Ultrawide Monitor', 'AA Batteries (4-pack)', 'AAA Batteries (4-pack)', 'Apple Airpods Headphones', 'Bose SoundSport Headphones', 'Flatscreen TV', 'Google Phone', 'iPhone', 'LG Dryer', 'LG Washing Machine', 'Lightning Charging Cable', 'Macbook Pro Laptop', 'ThinkPad Laptop', 'USB-C Charging Cable', 'Vareebadd Phone', 'Wired Headphones' ],
    type: 'pie'
  }];
  
  var layout = {
    height: 800,
    width: 800
  };
  
  Plotly.newPlot('myDiv2', data, layout);
