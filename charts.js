function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
   
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var sampleArray = data.samples;

    // Create a variable that filters the samples for the object with the desired sample number.
    var sampleNumber = sampleArray.filter(sampleObj => sampleObj.id == sample);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metaData = data.metadata;
    var guageArray = metaData.filter(metaObj => metaObj.id == sample);

    // Create a variable that holds the first sample in the array.
    var sampleOne = sampleNumber[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var guageOne = guageArray[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var ids = sampleOne.otu_ids;
    console.log(ids)
    var labels = sampleOne.otu_labels;
    console.log(labels)
    var values = sampleOne.sample_values;
    console.log(values)


    // 3. Create a variable that holds the washing frequency.
   var washing = guageOne.wfreq;
    console.log(washing)
    // Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order 
    // so the otu_ids with the most bacteria are last. 
    var yticks = ids.map(sampleObj => "Otu " + sampleObj).slice(0,10).reverse();

    // Create the trace for the bar chart. 
    var barData = [{
      x: values.slice(0,10).reverse(),
      y: yticks,
      text: labels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h",
    }  
    ];
    // Create the layout for the bar chart. 
    var barLayout = {
      title: {text: "<b>Top 10 Bacteria Cultures Found</b>"}
    };

    // Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
    // Create the trace for the bubble chart.
    var bubbleData = [{
      x: ids,
      y: values,
      text: labels,
      mode: "markers",
      marker: {
        size: values,
        color: values,
        colorscale: "RdBu"
      }
    }];
    // Create the layout for the bubble chart.
    var bubbleLayout = {
      title: {text: "<b>Bacteria Cultures per Sample</b>"},
      xaxis: {title: "OTU ID"},
      hovermode: "closest"
      
    };
    // D2: 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout)
 
    
    // 4. Create the trace for the gauge chart.
   var gaugeData = [{
     value: washing,
     type: "indicator",
     mode: "gauge+number",
     title: {text: "<b>Belly Button Washing Frequency</b> <br> Srubs Per Week"},
     gauge: {
       axis: {range: [null,10], dtick: "2"},
       bar: {color: "black"},
       steps: [
         {range: [0, 2], color:"#3636ff"},
         {range: [2, 4], color:"#9999ff"},
         {range: [4, 6], color:"#4d4dff"},
         {range: [6, 8], color:"#0000b3"},
         {range: [8, 10], color:"#00080"}
       ],
       dtick: 2
     }
   }];
     
    
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     automarge: true
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout)
  });
}
