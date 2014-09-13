function showwifi(){
var wifi = navigator.mozWifiManager;

function sortNetworksByStrength(a, b) {
  return a.signalStrength > b.signalStrength ? -1 : 1;
}

var request = wifi.getNetworks();

request.onsuccess = function () {
  console.log('The following networks are available:');

  var networks = this.result;
  networks.sort(sortNetworksByStrength);
  networks.forEach(function (network) {
    console.log(network.ssid, ' (', network.relSignalStrength.toFixed(0), ')');
  })
}

request.onerror = function (err) {
  console.log('Something goes wrong: ' + err);
}
}