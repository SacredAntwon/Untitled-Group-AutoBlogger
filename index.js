window.onload = function(){
    //We use window.onload to check the window has loaded so we can target DOM elements
    var namesArray = ["lars", "bo", "ib", "peter", "jan", "frederik"];
    var list = namesArray.map(name=>"<li>"+name+"</li>");
    var listAsStr ="<ul>" + list.join("") + "<ul>";
    var test = "I'm heading back to Colorado tomorrow after being down in Santa Barbara over the weekend for the festival there. I will be making October plans once there and will try to arrange so I'm back here for the birthday if possible. I'll let you know as soon as I know the doctor's appointment schedule and my flight plans.";
    document.getElementById("test").innerHTML = test;
    document.getElementById("list").innerHTML = listAsStr;
}
