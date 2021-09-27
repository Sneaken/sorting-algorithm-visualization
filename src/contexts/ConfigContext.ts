import React from 'react';

export const defaultConfig = {
  // 数据数量
  count: 100,
  data: [],
  // 延迟 单位 ms
  delay: 100,
  useRAF: false,
  // 是否继续
  isContinue: true,
  // 是否在排序
  isSorting: false,
} as any;
const ConfigContext = React.createContext(defaultConfig);

export default ConfigContext;
