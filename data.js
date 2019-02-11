var trainingData = [
  { input: [0], output: [0] },
  { input: [0], output: [0] },
  { input: [0], output: [1] },
  { input: [1], output: [0] },
  { input: [0], output: [0] },
  { input: [0], output: [0] },
  { input: [0], output: [1] },
];

$.get('data/F1s.csv', function (csv) {
  var lines = csv.split("\r")
  trainingData = []
  for (var i = 1; i < lines.length; i++) {
    var fields = lines[i].split(",")
    fields = fields.map((item) => {
      return parseInt(item, 10)
    })
    
    trainingData.push({
      //input: [fields[1], fields[2], fields[3], fields[4], fields[5]],
      input: [fields[1], fields[2]],
      output: [fields[6]]
    })
  }
  
  console.log(trainingData[0])
  //console.log(csv.split("\r").length)
  run(trainingData)
})

//run(trainingData)