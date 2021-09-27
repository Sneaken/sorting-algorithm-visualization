import classnames from 'classnames';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForceUpdate } from '../hooks/useForceUpdate';
import ConfigContext from '../contexts/ConfigContext';

interface ItemData {
  status?: 'current' | 'finished' | 'target';
  value: number;
}

const BubbleSort = () => {
  const { count, data, delay, isContinue, isSorting, useRAF } = useContext(ConfigContext);
  const history = useHistory();
  const [arr, setArr] = useState<ItemData[]>([]);
  const forceUpdate = useForceUpdate();
  const isSortingRef = useRef(false);
  const isContinueRef = useRef<boolean>(true);
  const useRAFRef = useRef<boolean>(false);
  isContinueRef.current = isContinue;
  isSortingRef.current = isSorting;
  useRAFRef.current = useRAF;

  const arrRef = useRef<ItemData[]>([]);
  arrRef.current = arr;
  const iRef = useRef<number>(0);
  const jRef = useRef<number>(0);

  const shouldSwapRef = useRef(false);

  const changeData = useCallback(() => {
    setArr(JSON.parse(JSON.stringify(data)));
  }, [data]);
  useEffect(() => {
    changeData();
  }, [changeData]);

  const bubbleSort = useCallback((list: ItemData[]): ItemData[] => {
    const i = iRef.current;
    if (i < list.length) {
      const j = jRef.current;
      if (j < list.length - i - 1) {
        if (list[j - 1]) {
          list[j - 1].status = undefined;
        }
        list[j].status = 'current';
        list[j + 1].status = 'target';
        jRef.current++;
        if (list[j].value > list[j + 1].value) {
          if (shouldSwapRef.current) {
            list[j].status = 'target';
            list[j + 1].status = 'current';
            const swap = list[j].value;
            list[j].value = list[j + 1].value;
            list[j + 1].value = swap;
            shouldSwapRef.current = false;
          } else {
            jRef.current--;
            shouldSwapRef.current = true;
          }
        }
      } else {
        iRef.current++;
        jRef.current = 0;
        if (list[j - 1]) {
          list[j - 1].status = undefined;
        }
        list[j].status = 'finished';
      }
      return [...list];
    }
    return list.map((i) => ({ status: 'finished', value: i.value }));
  }, []);

  const sortData = useCallback(() => {
    if (!isContinueRef.current) return;
    isSortingRef.current = true;
    const result = bubbleSort(arrRef.current);
    setArr(result);
    if (result.filter((i) => i.status === 'finished').length !== result.length) {
      useRAFRef.current ? requestAnimationFrame(sortData) : setTimeout(sortData, delay);
    } else {
      isSortingRef.current = false;
      iRef.current = 0;
      jRef.current = 0;
      forceUpdate();
    }
  }, [bubbleSort, delay, forceUpdate]);
  useEffect(() => {
    if (isContinue && isSortingRef.current) {
      sortData();
    }
  }, [isContinue, sortData, isSorting]);

  return (
    <div>
      <p onClick={() => history.push('/bubble-sort')}>冒泡排序</p>
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

export default BubbleSort;
