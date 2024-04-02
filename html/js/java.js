PrviGotov = false;
DrugiGotov = false;
TreciGotov = false;
CetvrtiGotov = false;
PetiGotov = false;
muzikapustena = true;

window.addEventListener("load", pocetak, false);

function pocetak() {
    var slika = document.getElementById("slikamuz");
    slika.style.cssText = "background-image: url(img/Non-Stop-Pop_FM_29.png); background-size: cover;"

    var x = document.getElementById("LoadMuzika");
    x.volume = 0.5
}

function SetLoadingBar(broj) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", broj)
    document.getElementById("Punjenje-Bar").style.width = broj + "%";
    document.getElementById("Punjenje-tekst").innerHTML = broj + "%";
}

const funkcije = {
    startInitFunctionOrder(data)
    {
        if (PrviGotov) return;
        PrviGotov = true
    },

    initFunctionInvoking(data)
    {
        if (DrugiGotov) return;
        DrugiGotov = true;
        SetLoadingBar(25);
    },

    startDataFileEntries(data)
    {
        if (TreciGotov) return;
        TreciGotov = true
        SetLoadingBar(50)
    },

    performMapLoadFunction(data)
    {
        if (CetvrtiGotov) return;
        CetvrtiGotov = true
        SetLoadingBar(75)
    },

    onLogLine(data)
    {
        if (PetiGotov) return;
        PetiGotov = true
        SetLoadingBar(100)
    }

}


document.addEventListener('keydown', function(event) {

    var x = document.getElementById("LoadMuzika");

    if (event.keyCode == 32 && !muzikapustena) {
        x.play();

        muzikapustena = true;
    } else if (event.keyCode == 32 && muzikapustena) {
        x.pause();

        muzikapustena = false;
    } else if (event.keyCode == 38 && x.volume < 0.9) {
        x.volume = x.volume + 0.1;

        muzikapustena = false;
    } else if (event.keyCode == 40 && x.volume > 0.1) {
        x.volume = x.volume - 0.1;
    }
});

window.addEventListener('message', function(e)
{
    (funkcije[e.data.eventName] || function() {})(e.data);

});
