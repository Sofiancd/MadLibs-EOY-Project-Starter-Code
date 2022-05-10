let counter=0;
$("button").click(function() {
    let name = $(".persons-name").val();
    console.log(name);
    let transportation = $(".type-of-transport").val();
    console.log(transportation);
    let adjective = $(".adjective").val();
    console.log(adjective);
    let number = $(".number").val();
    console.log(number);
    $(".story").append("One day my friend "+name+" and I decided to take a trip to the beach, so we packed our bags and took the "+transportation+"over.It was a "+adjective+" day at the beach! We ended up staying for "+number+" hours!");
    counter= counter + 1;
     $(".counter-display").text("Counter: "+ counter);
});