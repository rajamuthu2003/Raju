

function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padero(dateTime.getMinutes());
    let sec = padero(dateTime.getSeconds());
    // Date function //
    // let date = padZero(dateTime.getDate());
    // let month = padZero(dateTime.getMonth());
    // let year = padZero(dateTime.getUTCFullYear());

    if (hr > 12) {
        hr = hr - 12
        ampm.innerHTML = "PM"
    }
    else ampm.innerHTML = "AM"

    document.getElementById("hour").innerHTML = hr
    document.getElementById("mins").innerHTML = min
    document.getElementById("sec").innerHTML = sec
    // document.getElementById("date").innerHTML = date
    // document.getElementById("month").innerHTML = month
    // document.getElementById("year").innerHTML=year

}
function padero(num) {
    return num < 10 ? "0" + num : num
}


setInterval(displayTime, 1000)