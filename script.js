setInterval(() => {
    let time = new Date() ;
    let hr = time.getHours() ;
    let min = time.getMinutes() ;
    let sec = time.getSeconds() ;
    let day = time.toLocaleDateString('locale', {weekday: 'long'}) ;
    let date = time.getDate() ;
    let month = time.toLocaleString('default', {month : 'long'}) ;

    if (hr < 10) {
        hr = '0' + hr ;
    }

    if (min < 10) {
        min = '0' + min ;
    }

    if (sec < 10) {
        sec = '0' + sec ;
    }
    if (date < 10) {
        date = '0' + date ;
    }

    document.getElementById("hour").innerHTML = hr ;
    document.getElementById("min").innerHTML = min ;
    document.getElementById("sec").innerHTML = sec ;
    document.getElementById("currentDay").innerHTML = day ;
    document.getElementById("currentDate").innerHTML = date ;
    document.getElementById("currentMonth").innerHTML = month ;

}, 1000) ;

let colon = document.querySelectorAll(".colon") ;
setInterval(() => {
    colon.forEach((item,index) => {
        colon[index].classList.toggle("hidden") ;
    })
    let colon1 = document.getElementsByClassName("colon")[0] ;
    if (!colon1.matches(".hidden")){
        document.getElementById("currentTime").style.display = "flex" ;
    } else {
        document.getElementById("currentTime").style.display = "" ;
    }
}, 1000) ;

// loader
