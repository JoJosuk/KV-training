export const getNestedPpty = (obj, str) => {
  if (str.includes(",")) {
    let arr = str.split(",");
    arr = arr.map((a) => {
      let amap = a.split(".");
      return amap.reduce((acc, key) => acc && acc[key], obj);
    });
    return arr.reduce((acc, cv) => {
      if (acc === "") {
        return cv;
      } else {
        return acc + ", " + cv;
      }
    });
  }
  const arr = str.split(".");
  return arr.reduce((acc, key) => acc && acc[key], obj);
};
