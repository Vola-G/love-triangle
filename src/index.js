/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = 
function getLoveTrianglesCount(preferences = []) {
  let loveTriangles = 0;
  for ( i = 0; i < preferences.length; i++){
      let firstLove = preferences[i];
      let secondLove = preferences[firstLove - 1];
      let thirdLove = preferences[secondLove - 1];
      if (thirdLove === (i+1)) {
        loveTriangles++;
      }
  }
  return Math.floor(loveTriangles/3);
};

// console.log(getLoveTrianglesCount([2, 3, 1, 5, 6, 4, 8, 9, 7, 11, 12, 10, 13, 9, 13, 2, 15, 13, 12, 11]));
