'use strict';

$(function(){

    $('#users').submit(function(event) {
        event.preventDefault();


        var newUser = {
            0: $('#userName').val(),
            1: $('#day').val(),
            2: $('#times').val(),
            3: $('#gym').val(),
            4: $('#muscle').val(),
        };
        users.push(newUser);
        // $('.properties').val('');
        geolocate();



        // $.ajax({
        //     type: 'POST',
        //     data: {
        //         name: $('#userName').val(),
        //         day: $('#day').val(),
        //         times: $('#times').val(),
        //         gym: $('#gym').val(),
        //         muscleGroup: $('#muscle').val(),
        //     } //data
        // }); //ajax
    }); //event

    $('#matchMaker').click(function(event) {
        event.preventDefault();
        console.log(matchMaker(users));
    });
}); //jquery
