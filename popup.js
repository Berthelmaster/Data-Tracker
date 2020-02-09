Cookies.set('gg', 'ggg');
Cookies.set('tests', 'testtest');
function getall() {

    var renderId = document.getElementById("output");
    var cookies = Cookies.get();
    var array = new Array();
    var iterate;

    for(var prop in cookies)
    {
        iterate = prop;
        if(iterate == '_fbp'){array.push('Facebook')} //facebook
        if(iterate == '_gid'){array.push('Google')} //Google
        if(iterate == 'gg'){array.push('Test')} //Test
        if(iterate == 'tests'){array.push('Wat')} //TestV2
        console.log(iterate)
    }


    console.log(array);

    for(var html in array)
    {
        var output = array[html]
        $('#output').append(`<div>${array[html]}</div>`);
    }
}