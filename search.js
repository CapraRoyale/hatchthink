$("#idea_search").on("click", function (event) {
    // Contain the form entry in a variable
    query = $("#description_input").val();
    // Put search query in a variable
    var queryURL =
        "https://developer.uspto.gov/ipmarketplace-api/search/query?searchText=" +
        query;
    // jQuery's AJAX function handles the RESTful API call
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var results = response.results;

        console.log(results);

        for (var i = 0; i < results.length; i++) {
            //
            id = results[i].recordIdentifier;
            //
            nameTxt = results[i].assigneeNameText;
            //
            text = results[i].inventionAbstractText;
            //
            result =
                '<div class="col"><div class="card h-100 bg-dark text-light"><div class="card-header bg-secondary text-light"> ID: ' +
                id +
                " - By: " +
                nameTxt +
                "</div>" +
                '<div class="card-body"><div class="col truncate">' +
                text +
                "</div></div><div><a href='collab.html#" + id + "' type='button' id='collaborate-" +
                id +
                "' class='btn btn-sm btn-secondary text-light'>Collaborate</a><a href='invest.html#" + id + "' type='button' id='invest-" +
                id +
                "' class='btn btn-sm btn-light'>Invest</a></div></div></div><br><br>";

            //
            $("#results_text").append(result);


        }
    });
});