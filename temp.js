const Display = (value) => {
  console.log(`${value.id} ${value.name} ${value.description}  `);
};
function processValue(value) {
  if (value.isValid) {
    Dislay(value);
  }
}

function processTypeA(item) {
  item.values.forEach((value) => processValue(value));
}

function processData(data) {
  data.forEach((item) => {
    if (item.type === "A") processTypeA(item);
    else if (item.type === "B") () => {};
  });
}
