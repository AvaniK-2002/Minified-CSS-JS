document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".card button");
e.forEach(function(e){e.addEventListener("click",function(e){let t=e.target.closest(".card"),a=t.querySelector("h4").textContent;
alert("Profile clicked for "+a)})})});
var progressData={labels:["Web Development","Wordpress","Graphic Design","IOS Dev"],datasets:[{label:"Progress",data:[90,75,80,60],backgroundColor:"rgba(75, 192, 192, 0.6)"}]},chartConfig={type:"bar",data:progressData,options:{responsive:!0,scales:{y:{beginAtZero:!0,max:100,ticks:{stepSize:10}}}}};
const xValues=["IHTML","CSS","JAVASCRIPT","PHP"],yValues=[60,40,35,30,0,100],barColors=["Red","green","blue","orange"];
new Chart("myChart",{type:"bar",data:{labels:xValues,datasets:[{backgroundColor:barColors,data:yValues}]},options:{legend:{display:!1},title:{display:!0,text:"MY Course Completion Perecentage"}}});