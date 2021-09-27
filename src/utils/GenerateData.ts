// 生成常规数组
export function generateArray(length: number, seed = false): number[] {
  return new Array(length).fill(0).map((item, index) => index + (seed ? 0 : Math.random() * 200));
}

// 生成乱序数组
export function generateOutOfOrderArray(length: number, seed = false): number[] {
  return shuffle(generateArray(length, seed));
}

// 洗牌算法
export function shuffle(array: number[]): number[] {
  let arrayLength = array.length,
    randomIndex, //随机数
    tempItem; //临时存储元素
  for (let i = arrayLength - 1; i >= 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    tempItem = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = tempItem;
  }
  return array;
}
