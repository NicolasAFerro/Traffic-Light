function changeLight() {
  if (document.getElementById("yellow").className === "light yellow-on") {
    document.getElementById("red").className = "light red-on";
    document.getElementById("yellow").className = "light light-off";
  } else if (document.getElementById("red").className === "light red-on") {
    document.getElementById("red").className = "light light-off";
    document.getElementById("green").className = "light green-on";
  } else {
    document.getElementById("green").className = "light light-off";
    document.getElementById("yellow").className = "light yellow-on";
  }
}
