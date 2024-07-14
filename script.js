var n = 100

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const delay = ms => new Promise(res => setTimeout(res, ms));


// while (true) {

// var html = [];
// html.push("<table>");
// // html.push("<div class=\"row\">");
// //   html.push("<div class=\"col-xs-6\">A</div>");
// //   html.push("<div class=\"col-xs-6\">B</div>");
//   for (let i = 0; i < n; i++) {
//     html.push("<tr>")
//     for (let i = 0; i < n; i++) {
//         var r = getRndInteger(1, 255)
//         var g = getRndInteger(1, 255)
//         var b = getRndInteger(1, 255)
//         html.push(`<td style="background-color: rgb(${r},${g},${b});">`)
//         var s = String(getRndInteger(0, 9));
//         html.push(`<div class=\"col-xs-6\">${s}</div>`)
//         html.push("</td>")
//     }
//     html.push("</tr>")
//   }
// // html.push("</div>");
// html.push("</table>");

// document.getElementById("container").innerHTML = html.join("");

// await delay(1000)
// }

var colors = [
    [0, 255, 0], [255, 0, 0], [0, 0, 255],
    [0, 255, 255], [255, 255, 0], [255, 255, 0],
]

function update() {
var html = [];
html.push("<div>");
  for (let i = 0; i < n; i++) {
    html.push("<div>")
    for (let i = 0; i < n; i++) {
        // var r = Math.random() > 0.5 ? 1 : getRndInteger(1, 255)
        // var g = Math.random() > 0.5 ? 1 : getRndInteger(1, 255)
        // var b = Math.random() > 0.5 ? 1 : getRndInteger(1, 255)

        // var r = getRndInteger(1, 255)
        // var g = 0//getRndInteger(1, 255)
        // var b = getRndInteger(1, 128)

        // var r = getRndInteger(1, 255)
        // var g = getRndInteger(1, 255)
        // var b = getRndInteger(1, 255)

        var color = colors[getRndInteger(0, 5)]

        var variance_r = 0//getRndInteger(80, 100)/100
        var variance_g = 0//getRndInteger(80, 100)/100
        var variance_b = 0//getRndInteger(80, 100)/100

        var alpha = Math.random()

        var x = getRndInteger(0, 1000)
        var y = getRndInteger(0, 1000)
        
        // html.push(`<div style="background-color: rgb(${r},${g},${b}); position: fixed; top: ${x}px; left: ${y}px;">`)
        // html.push(`<div style="color: rgb(${r},${g},${b}); position: fixed; top: ${x}px; left: ${y}px;">`)
        html.push(`<div style="color: rgba(${color[0]*variance_r},${color[1]*variance_g},${color[2]*variance_b},${alpha}); position: fixed; top: ${x}px; left: ${y}px;">`)

        // var s = String(getRndInteger(0, 9));
        // html.push(`<div class=\"col-xs-6\">${s}</div>`)
        html.push(`<div class=\"col-xs-6\">this is a website</div>`)
        html.push("</div>")
    }
    html.push("</div>")
  }
html.push("</div>");

document.getElementById("container").innerHTML = html.join("");

return delay(1).then(update)
}

update()