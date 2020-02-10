Cookies.set('gg', 'ggg');
Cookies.set('tests', 'testtest');
window.onload = function getall() {

    var cookies = Cookies.get();
    var array = new Array();

    for(var prop in cookies)
    {
        if(prop == '_fbp'){array.push('Facebook'); continue;} //facebook
        if(prop == '_gid'){array.push('Google'); continue;} //Google
        if(prop == 'gg'){array.push('Test'); continue;} //Test
        if(prop == 'tests'){array.push('Wat'); continue;} //TestV2
        console.log(prop)
    }


    console.log(array);

    if(Array.isArray(array) && array.length)
    {
        for(var html in array)
        {
            var output = array[html]
            $('#output').append(`<p class="trackers">This organisation is tracking you: ${output}</p>`);
        }
    }
    else
    {
        $('#output').append(`<p class="trackers">No organisation is tracking you!</p>`);
    }

    
}

