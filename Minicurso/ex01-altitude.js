let altitude = 76;

if (altitude <= 20) {
  console.log("TROPOSFERA");
}
if (altitude > 20 && altitude <= 50) {
  console.log("ESTRATOSFERA");
}
if (altitude > 50 && altitude <= 80) {
  console.log("MESOSFERA");
}
if (altitude > 80 && altitude <= 450) {
  console.log("TERMOSFERA");
}
if (altitude > 450) {
  console.log("EXOSFERA");
}
