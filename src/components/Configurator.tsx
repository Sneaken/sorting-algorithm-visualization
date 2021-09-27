import React, { useCallback, useContext, useEffect } from 'react';
import ConfigContext from '../contexts/ConfigContext';
import { generateOutOfOrderArray } from '../utils/GenerateData';

const Configurator = () => {
  const { count, delay, useRAF, isSorting, isContinue, dispatch } = useContext(ConfigContext);

  const handleCountChange = useCallback(
    (event) => {
      dispatch({ type: 'changeCount', payload: Number(event.target.value) });
    },
    [dispatch],
  );

  const handleDelayChange = useCallback(
    (event) => {
      dispatch({ type: 'changeDelay', payload: Number(event.target.value) });
    },
    [dispatch],
  );

  const handleDataChange = useCallback(() => {
    dispatch({ type: 'changeData', payload: generateOutOfOrderArray(count).map((i) => ({ value: i })) });
  }, [dispatch, count]);

  const handleDataSort = useCallback(() => {
    dispatch({ type: 'toggleSorting' });
  }, [dispatch]);

  const handleSortContinue = useCallback(() => {
    dispatch({ type: 'toggleContinue' });
  }, [dispatch]);

  const handleRequestAnimationFrameChange = useCallback(() => {
    dispatch({ type: 'toggleUseRAF' });
  }, [dispatch]);

  useEffect(() => {
    handleDataChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='m-10'>
      <div className='flex'>
        <label className='flex-1'>
          数据数量：
          <input type='number' value={count || ''} onChange={handleCountChange} />
        </label>
        <label className='flex-1'>
          延迟：
          <input className='disabled:opacity-50' type='number' value={delay || ''} disabled={useRAF} onChange={handleDelayChange} />
        </label>
        <label className='flex-1 mr-1'>
          <input type='checkbox' value={useRAF} onChange={handleRequestAnimationFrameChange} />
          启用requestAnimationFrame
        </label>
      </div>
      <button className='rounded-md p-1 bg-blue-400 text-white mr-1 disabled:opacity-50' onClick={handleDataChange} disabled={isSorting}>
        更换数据
      </button>
      <button className='rounded-md p-1 bg-blue-400 text-white mr-1 disabled:opacity-50' onClick={handleDataSort} disabled={isSorting}>
        开始
      </button>
      <button className='rounded-md p-1 bg-blue-400 text-white mr-1 disabled:opacity-50' onClick={handleSortContinue}>
        {isContinue ? '暂停' : '继续'}
      </button>
    </div>
  );
};

export default Configurator;
