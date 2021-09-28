import classnames from 'classnames';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForceUpdate } from '../hooks/useForceUpdate';
import ConfigContext from '../contexts/ConfigContext';
import { useConfig } from '../hooks/useConfig';

interface ItemData {
  status?: 'current' | 'finished' | 'target';
  value: number;
}

const SelectionSort = () => {
  const { count, data, delay, isContinue, isSorting, useRAF } = useContext(ConfigContext);
  const history = useHistory();
  const [arr, setArr] = useState<ItemData[]>([]);
  const forceUpdate = useForceUpdate();
  const { isSortingRef, isContinueRef, useRAFRef, delayRef } = useConfig({ isContinue, isSorting, useRAF, delay });

  const arrRef = useRef<ItemData[]>([]);
  arrRef.current = arr;
  const iRef = useRef<number>(0);
  const jRef = useRef<number>(1);
  const minIndexRef = useRef(0);
  const currentCountRef = useRef(0);

  const init = useCallback(() => {
    isSortingRef.current = false;
    iRef.current = 0;
    jRef.current = 1;
    minIndexRef.current = 0;
    currentCountRef.current = 0;
  }, [isSortingRef]);
  const changeData = useCallback(() => {
    setArr(JSON.parse(JSON.stringify(data)));
    init();
  }, [data, init]);

  useEffect(() => {
    changeData();
  }, [changeData]);

  const selectionSort = useCallback((list: ItemData[]): ItemData[] => {
    if (iRef.current === 0) {
      // 首次遍历时应该设置第一个的状态
      list[minIndexRef.current].status = 'target';
    }
    if (iRef.current < list.length - 1) {
      const minIndex = minIndexRef.current;
      const j = jRef.current;
      if (j < list.length) {
        if (list[j - 1] && list[j - 1].status === 'current') {
          list[j - 1].status = undefined;
        }
        list[j].status = 'current';
        if (list[j].value < list[minIndex].value) {
          list[minIndex].status = undefined;
          minIndexRef.current = j;
          list[minIndexRef.current].status = 'target';
        }
        jRef.current++;
      } else {
        if (minIndex !== iRef.current) {
          const swap = list[minIndex].value;
          list[minIndex].value = list[iRef.current].value;
          list[iRef.current].value = swap;
          list[minIndex].status = undefined;
        }
        list[iRef.current].status = 'finished';
        list[jRef.current - 1].status = undefined;
        iRef.current++;
        minIndexRef.current = iRef.current;
        jRef.current = iRef.current + 1;
        currentCountRef.current++;
        list[minIndexRef.current].status = 'target';
      }
      return [...list];
    }
    list[iRef.current].status = 'finished';
    currentCountRef.current++;
    return [...list];
  }, []);

  const sortData = useCallback(() => {
    if (!isContinueRef.current) return;
    isSortingRef.current = true;
    const result = selectionSort(arrRef.current);
    setArr(result);
    if (currentCountRef.current !== result.length) {
      useRAFRef.current ? requestAnimationFrame(sortData) : setTimeout(sortData, delayRef.current);
    } else {
      init();
      forceUpdate();
    }
  }, [selectionSort, delayRef, forceUpdate, init, isContinueRef, isSortingRef, useRAFRef]);
  useEffect(() => {
    if (isContinue && isSortingRef.current) {
      sortData();
    }
  }, [isContinue, sortData, isSorting, isSortingRef]);

  return (
    <div>
      <p onClick={() => history.push('/selection-sort')}>选择排序</p>
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

export default SelectionSort;
