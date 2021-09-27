import classnames from 'classnames';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForceUpdate } from '../hooks/useForceUpdate';
import ConfigContext from '../contexts/ConfigContext';

interface ItemData {
  status?: 'current' | 'finished' | 'target';
  value: number;
}

const CocktailSort = () => {
  const { count, data, delay, isContinue, isSorting, useRAF } = useContext(ConfigContext);
  const history = useHistory();
  const [arr, setArr] = useState<ItemData[]>([]);
  const forceUpdate = useForceUpdate();
  const isSortingRef = useRef(false);
  const isContinueRef = useRef<boolean>(true);
  const useRAFRef = useRef<boolean>(false);
  const delayRef = useRef(100);
  isContinueRef.current = isContinue;
  isSortingRef.current = isSorting;
  useRAFRef.current = useRAF;
  delayRef.current = delay;

  const arrRef = useRef<ItemData[]>([]);
  arrRef.current = arr;
  const leftRef = useRef(0);
  const rightRef = useRef(0);
  const iRef = useRef(0);
  const jRef = useRef<number>(0);
  const directionRef = useRef('toRight');
  const shouldLeftSwapRef = useRef(false);
  const shouldRightSwapRef = useRef(false);
  const currentCountRef = useRef(0);
  // 表示向左是否有序
  const isSortedToLeftRef = useRef(true);
  // 表示向右是否有序
  const isSortedToRightRef = useRef(true);

  const changeData = useCallback(() => {
    setArr(JSON.parse(JSON.stringify(data)));
    init(data.length)
  }, [data]);
  const init = (dataLength: number) => {
    leftRef.current = 0;
    rightRef.current = dataLength - 1;
    iRef.current = 0;
    jRef.current = 0;
    currentCountRef.current = 0;
    isSortedToLeftRef.current = true;
    isSortedToRightRef.current = true;
    directionRef.current = 'toRight';

    shouldLeftSwapRef.current = false;
    shouldRightSwapRef.current = false;
  }
  useEffect(() => {
    changeData();
  }, [changeData]);

  const cocktailSort = useCallback((list: ItemData[]): ItemData[] => {
    let left = leftRef.current;
    let right = rightRef.current;

    if (left < right) {
      // 向右
      if (directionRef.current === 'toRight') {
        let i = iRef.current;
        if (i < list.length - left - 1) {
          if (list[i - 1] && list[i - 1].status !== 'finished') {
            list[i - 1].status = undefined;
          }
          list[i].status = 'current';
          list[i + 1].status = 'target';
          iRef.current++;
          if (list[i].value > list[i + 1].value) {
            if (shouldLeftSwapRef.current) {
              list[i].status = 'target';
              list[i + 1].status = 'current';
              const swap = list[i + 1].value;
              list[i + 1].value = list[i].value;
              list[i].value = swap;
              shouldLeftSwapRef.current = false;
              isSortedToRightRef.current = false;
            } else {
              iRef.current--;
              shouldLeftSwapRef.current = true;
              isSortedToRightRef.current = true;
            }
          }
          directionRef.current = 'toRight';
          return [...list];
        }
        directionRef.current = 'toLeftStart';
      }

      if (directionRef.current === 'toLeftStart') {
        list[iRef.current].status = 'finished';
        directionRef.current = 'toLeft';
        isSortedToLeftRef.current = true;
        rightRef.current--;
        jRef.current = rightRef.current;
        currentCountRef.current++;
        return [...list];
      }
      if (isSortedToRightRef.current) {
        currentCountRef.current = list.length;
        return list.map((i) => ({ ...i, status: 'finished' }));
      }

      if (directionRef.current === 'toLeft') {
        // 向左
        let j = jRef.current;
        if (j > left) {
          if (list[j + 1] && list[j + 1].status !== 'finished') {
            list[j + 1].status = undefined;
          }
          list[j].status = 'current';
          list[j - 1].status = 'target';
          jRef.current--;
          if (list[j - 1].value > list[j].value) {
            list[j].status = 'target';
            list[j - 1].status = 'current';
            if (shouldRightSwapRef.current) {
              const swap = list[j].value;
              list[j].value = list[j - 1].value;
              list[j - 1].value = swap;
              shouldRightSwapRef.current = false;
              isSortedToLeftRef.current = false;
            } else {
              jRef.current++;
              shouldRightSwapRef.current = true;
              isSortedToLeftRef.current = true;
            }
          }
          directionRef.current = 'toLeft';
          return [...list];
        }
        directionRef.current = 'toRightStart';
      }

      if (directionRef.current === 'toRightStart') {
        list[jRef.current].status = 'finished';
        directionRef.current = 'toRight';
        isSortedToRightRef.current = true;
        leftRef.current++;
        iRef.current = leftRef.current;
        jRef.current = rightRef.current;
        currentCountRef.current++;
        return [...list];
      }
      if (isSortedToLeftRef.current) {
        currentCountRef.current = list.length;
        return list.map((i) => ({ ...i, status: 'finished' }));
      }

      return [...list];
    }
    list[left].status = 'finished';
    return [...list];
  }, []);

  const sortData = useCallback(() => {
    if (!isContinueRef.current) return;
    isSortingRef.current = true;
    const result = cocktailSort(arrRef.current);
    setArr(result);
    if (currentCountRef.current !== result.length) {
      useRAFRef.current ? requestAnimationFrame(sortData) : setTimeout(sortData, delayRef.current);
    } else {
      init(result.length)
      forceUpdate();
    }
  }, [cocktailSort, forceUpdate]);
  useEffect(() => {
    if (isContinue && isSortingRef.current) {
      sortData();
    }
  }, [isContinue, sortData, isSorting]);

  return (
    <div>
      <p onClick={() => history.push('/cocktail-sort')}>鸡尾酒排序</p>
      <div>
        <div className='flex items-center justify-center'>
          <div className='current w-6 h-6' />
          当前
          <div className='target w-6 h-6 ml-2' />
          正在比较
          <div className='finished w-6 h-6 ml-2' />
          结束比较
        </div>
      </div>
      <div className='m-20'>
        {arr.map((i) => {
          return (
            <div
              className={classnames('bg-black inline-block ml-px', i.status)}
              key={i.value}
              style={{
                width: `calc(${100 / count}% - 1px)`,
                height: `${i.value}px`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CocktailSort;
