
function md5Updated() {
  md5val = md5.val().toLowerCase();
  if (!md5val.match(/^[a-f0-9]*$/i)) {
    strres.html('md5 sum should be a hex string, meaning, composed only from 0-9 and a-f.');
  } else if (md5val.length != 32) {
    strres.html(md5val.length + "/32 characters, " + (32 - md5val.length) + " to go.");
  } else if (md5val == 'd41d8cd98f00b204e9800998ecf8427e') {
    strres.html("''");
  } else {
    strres.html("Searching...");
    $.post('php/ajax.php', { md5 : md5val }, function(data) {
      strres.html(data == '' ? "Sorry, not found." : "'" + data.replace(/ /g,'&nbsp;') + "'");
    });
  }
}

function strUpdated() {
  strval = str.val();
  md5val = hex_md5(strval);
  md5res.text("'" + md5val + "'");
  $.post("php/ajax.php", { str : strval });
}

function start() {
  window.md5 = $('#md5');
  window.str = $('#str');
  window.md5res = $('#md5res');
  window.strres = $('#strres');
  md5.keyup(md5Updated).keyup(); 
  str.keyup(strUpdated).keyup(); 
} 

$(start);
