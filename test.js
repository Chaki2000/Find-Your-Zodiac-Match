

function fadeIn() {
    document.getElementById("signs").style.opacity = "1";
}

 function findMatch(e) {

    var id = e.target.id;
    var main = document.getElementById("main");
    switch(id){
        case "0":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/leo.png" alt="" width="300px"><h3>Leo!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Aries</li> <li>Sagittarius</li><li>Gemini</li></ul></div>';
            break;
        case "1":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/cancer.png" alt="" width="300px"><h3>Cancer!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Capricorn</li> <li>Pisces</li><li>Scorpio</li></ul></div>';
            break;
        case "2":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/libra.png" alt="" width="300px"><h3>Libra!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Aquarius</li> <li>Aries</li><li>Gemini</li></ul></div>';
            break;
        case "3":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/taurus.png" alt="" width="300px"><h3>Taurus!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Scorpio</li> <li>Virgo</li><li>Cancer</li></ul></div>';
            break;
        case "4":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/sagitarius.png" alt="" width="300px"><h3>Sagittarius!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Aries</li> <li>Leo</li><li>Gemini</li></ul></div>';
            break;
        case "5":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/taurus.png" alt="" width="300px"><h3>Taurus!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Cancer</li> <li>Capricorn</li><li>Pisces</li></ul></div>';
            break;
        case "6":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/aquarius.png" alt="" width="300px"><h3>Aquarius!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Libra</li> <li>Sagittarius</li><li>Gemini</li></ul></div>';
            break;
        case "7":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/cancer.png" alt="" width="300px"><h3>Cancer!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Capricorn</li> <li>Pisces</li><li>Scorpio</li></ul></div>';
            break;
        case "8":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/aries.png" alt="" width="300px"><h3>Aries!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Aquarius</li> <li>Leo</li><li>Gemini</li></ul></div>';
            break;
        case "9":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/taurus.png" alt="" width="300px"><h3>Taurus!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Pisces</li> <li>Virgo</li><li>Capricorn</li></ul></div>';
            break;
        case "10":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/sagitarius.png" alt="" width="300px"><h3>Sagittarius!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Libra</li> <li>Leo</li><li>Gemini</li></ul></div>';
            break;
        case "11":
            main.innerHTML = '<div id="leftmatch" class="inline"><h3>Your Perfect Match Is...</h3><img src="img/scorpio.png" alt="" width="300px"><h3>Scorpio!</h3></div><div id="rightmatch" class="inline"><h3>You Also Go Along Well With:</h3><ul><li>Cancer</li> <li>Capricorn</li><li>Virgo</li></ul></div>';
            break;
    }
    
    main.scrollIntoView({behavior:"smooth"});

 }