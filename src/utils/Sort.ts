export function bubbleSort(list: number[] = []) {
  for (let i = 0; i < list.length; i++) {
    let isSorted = true;
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        const swap = list[j];
        list[j] = list[j + 1];
        list[j + 1] = swap;
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
  }
  return list;
}

// 鸡尾酒排序
export default function cocktailSort(list: number[]) {
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    // 是否有序
    let isSorted = true;
    // 向右
    for (let i = 0; i < list.length - left - 1; i++) {
      if (list[i] > list[i + 1]) {
        const swap = list[i + 1];
        list[i + 1] = list[i];
        list[i] = swap;
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
    isSorted = true;
    right--;
    // 向左
    for (let i = right; i >= left; i--) {
      if (list[i - 1] > list[i]) {
        const swap = list[i];
        list[i] = list[i - 1];
        list[i - 1] = swap;
        isSorted = false;
      }
    }
    left++;
    if (isSorted) {
      break;
    }
  }
  return list;
}
