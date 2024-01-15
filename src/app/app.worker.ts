let intervalId:  ReturnType<typeof setInterval>;

addEventListener('message', ({data}) => {
  const {arraySize, timer, customIds} = data;
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    const dataArray = [];
    for (let i = 0; i < arraySize; i++) {
      dataArray.push(generateDataObject());
    }
    for (let i = 0; i < customIds.length; i++) {
      const replaceIndex = arraySize - customIds.length + i;
      dataArray[replaceIndex].id = customIds[i];
      if (dataArray[replaceIndex].child) {
        dataArray[replaceIndex].child.id = customIds[i];
      }
    }
    // console.log(dataArray)
    postMessage(dataArray);
  }, timer);
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
// // Optimization: Calculate starting index for replacing IDs
// const startIndex = Math.max(arraySize - customIds.length, 0);
//
// // Replace IDs of the last elements with customIds
// for (let i = startIndex, j = 0; i < arraySize; i++, j++) {
//   const customId = customIds[j];
//   if (customId) {
//     dataArray[i].id = customId;
//     if (dataArray[i].child) {
//       dataArray[i].child.id = customId;
//     }
//   }
// }
