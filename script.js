
function run (trainingData) {
  
var inputLength = trainingData[0].input.length
var outputLength = trainingData[0].output.length
var squenceLength = 6
var network = new neataptic.Architect.LSTM(2, 4, 4, 4, 1);

network.train(trainingData, {
  log: 500,
  iterations: 6000,
  error: 0.03,
  clear: true,
  rate: 0.05,
});

for(var i in trainingData){
  var input = trainingData[i].input;
  var output = Math.round(network.activate([input]));
  $('#output').append('<p>Input: ' + input[0] + ', output: ' + output + '</p>');
}

for(var i = 0; i < 10; i++){
  var input = output;
  var output = Math.round(network.activate([input]))
  $('#output').append('<p>Next prediction:' + output + '</p>');
}

}