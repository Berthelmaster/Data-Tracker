function begin() {
  getUrl()
}

function getUrl() {
    
    chrome.tabs.query({ active: true, currentWindow: true }, function onload(tabs) {
      var tab = tabs[0];
      var url = new URL(tab.url)
      var hostDomain = url.hostname.toString();
      var host = String(hostDomain).replace(/^www\./,'')

      $('#website').append(`<p class="trackers">${host}</p>`);

      loadCookies(host);
    })
  }

  function loadCookies(host) {
    var counter = 0;
    chrome.cookies.getAll({domain: host},function(cookies) {
    
      for (var i in cookies) {

        if(cookies[i].name == '_fbp'){++counter; callOut("Facebook"); continue;} //facebook
        if(cookies[i].name == '_gid'){++counter; callOut("Google"); continue;} //Google
        
      }

      if(counter === 0)
        noTrackers()
      
    });
  }

  function callOut(tag){
    $('#output').append(`<p class="trackers">Third-party data sharing to: ${tag}</p>`);
  }

  function noTrackers()
  {
    $('#output').append(`<p class="trackers">No direct Third-party data sharing on this website</p>`);
  }


  document.addEventListener('DOMContentLoaded', function() {
    begin()
  });
