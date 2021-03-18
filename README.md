<h1>Improbable Beef</h1>
<h2>Overview of Project</h2>
<p>Improbable Beef is looking to synthesize micro-organisms to tast like beef.  Of particular interest is the bacteria found in human belly buttons.
As part of their research they analyzed bacteria from a number of volunteers.  With the analysis complete they have partially completed a web based dashboard
that allows volunteers to choose thier ID from a dropdown to see their results.  Improbable Beef has requested
that the dashboard be enhanced to provide the top 10 bacterial species in their belly buttons so that volunteers will be able to identify whether a speciies is found in
their navel should Improbable Beef identify a species as a candidate.</p>
<h2>Features</h2>
<p>The first addition is a bar chart.  The bar chart shows the top ten bacteria cultures found in a particular volunteers naval. The information updates 
based on the ID entered in "Test Subject ID No" field.  Although the legend provides "OTU ##" as the bacterial species the user will see the full bacteria
name when hovering over a bar on the chart.<p>
<br>
<img src="https://github.com/bedwardssmith/plotly_deployment_new/blob/main/static/images/bar_chart.png" alt="bar chart">
<br>
<p>The second addition is a gauge.  The gauge displays the weekly washing frequency's value as well as the range from 0-10 on the progress bar.  
Similiar to the bar chart this information updates based on the ID entered in "Test Subject ID No" field.<p>
<br>
<img src="https://github.com/bedwardssmith/plotly_deployment_new/blob/main/static/images/guage.png" alt="guage">
<br>
<p>The final addition is a bubble chart.  This displays all of the bacteria cultures found per sample with the size of each bubble being based on the particular value.  
As the user hovers over a particual bubble the specific bacteria as well as the count appear.  As in the bar chart and gauge the bubble chart updates 
based on the ID entered in "Test Subject ID No." field.</p>
<br>
<img src="https://github.com/bedwardssmith/plotly_deployment_new/blob/main/static/images/bubble_chart.png" alt=bubble chart">
<br>
<h2>Enhancements</h2>
<p>As part of the requirements the following additional enhancements were made to both the partially completed dashboard as well as the basic charts noted above:</p>
<ul>
<li>A background image was added to the jumbotron thereby setting the color scheme of the webpage.</li>
<li>The background of the "Test Subject ID No" field was changed to match the coloring of the "Demographic Info" border.</li>
<li>Text color was changed to white in both the jumbotron and "Test Subject ID No" to enhance the aesthetics of the page.</li>
<li>Layout of the page was changed to improve flow; all stacked rather than having the bubble chart larger than the other charts.</li>
<li>The color of the titles were changed to match the blue color theme of the webpage.</li>
