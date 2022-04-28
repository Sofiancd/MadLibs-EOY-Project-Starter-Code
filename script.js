let storiesCreated;
$("button").click(function() {
    let name = $(".persons-name").val();
    console.log(name);
    let transport = $(".type-of-transport").val();
    console.log(transport);
    let adjective = $(".adjective").val();
    console.log(adjective);
    let time = $(".number").val();
    console.log(time);
    $(".story").append("One day my friend "+name+" and I decided to take a trip to the beach, so we packed our bags and took the "+transport+"over.It was a"+adjective+"day at the beach! We ended up staying for"+time+"hours!");
});