let intervalId: number | null = null;

addEventListener('message', ({data}) => {
  const {arraySize, timer,command} = data;
  if (intervalId) {
    clearInterval(intervalId);
  } else if (command === 'stop') {
    return;
  }
  intervalId = setInterval(() => {
    const dataArray = [];
    for (let i = 0; i < arraySize; i++) {
      dataArray.push(generateDataObject());
    }
    postMessage(dataArray);
  }, timer);
  console.log(intervalId)
});

function generateDataObject() {
  return {
    id: generateId(),
    int: Math.floor(Math.random() * 1000),
    float: parseFloat(Math.random().toFixed(18)),
    color: getRandomColor(),
    child: {
      id: generateId(),
      color: getRandomColor(),
    },
  };
}

function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
