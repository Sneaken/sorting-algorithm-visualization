function swap(list: number[], from: number, to: number) {
  const temp = list[from];
  list[from] = list[to];
  list[to] = temp;
}

export function bubbleSort(list: number[] = []) {
  for (let i = 0; i < list.length; i++) {
    let isSorted = true;
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1);
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
export function cocktailSort(list: number[]) {
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    // 是否有序
    let isSorted = true;
    // 向右
    for (let i = 0; i < list.length - left - 1; i++) {
      if (list[i] > list[i + 1]) {
        swap(list, i + 1, i);
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
        swap(list, i, i - 1);
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

// 选择排序
export function selectionSort(list: number[]) {
  let minIndex;
  for (let i = 0; i < list.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < list.length - 1 - i; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    swap(list, minIndex, i);
  }
  return list;
}
