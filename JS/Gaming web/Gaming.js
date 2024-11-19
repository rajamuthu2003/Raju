// Random number generate //

let r = Math.floor((Math.random() * 20) + 1);

document.querySelector('#check').addEventListener('click', () => {
    let e =Number(document.getElementById("emptybox").value);
    console.log(e)

    if (isNaN(e) || e < 1 || e > 20) {
        document.getElementById("fix").innerText = "Invalid data. Please enter number between 1 and 20.";
        return;
    }

    if (e < r) {
        console.log(r);
        document.getElementById("fix").innerText = "To Low";


    } else if (e > r) {
        document.getElementById("fix").innerText = "To High";

    } else if (e == r) {
        document.getElementById("fix").innerText = "Correct number";


        document.body.style.backgroundColor = "green";
    }


    // Score //

    let s = Number(document.getElementById("score").innerText);
    console.log(s);
    s -= 1;

    document.getElementById("score").innerText = s;

    if (isNaN(s) || s <= 0 ) {
        document.getElementById("fix").innerText = "Game over!";
        return;
    }
    

    let h = Number(document.getElementById("score-H").innerText);
    console.log(h);

    if (r == e) {
        h += s;
        document.getElementById("score-H").innerText = h;

    }
    let t = Number(document.getElementById('mark').innerText);

    if (r == e) {
        t = e;
        (document.getElementById('mark').innerText) = t;

    }

})

console.log(r);

let button = document.querySelector("#again").addEventListener("click", () => {

    location.reload();

}
)


