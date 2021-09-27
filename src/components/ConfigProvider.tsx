import React, { FC, useReducer } from 'react';
import ConfigContext, { defaultConfig } from '../contexts/ConfigContext';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'init':
      return { ...defaultConfig };
    case 'changeData':
      return { ...state, data: action.payload };
    case 'changeCount':
      return { ...state, count: action.payload };
    case 'changeDelay':
      return { ...state, delay: action.payload };
    case 'toggleContinue':
      return { ...state, isContinue: !state.isContinue };
    case 'toggleSorting':
      return { ...state, isSorting: !state.isSorting };
    case 'toggleUseRAF':
      return { ...state, useRAF: !state.useRAF };
    default:
      return { ...state, ...action };
  }
}
const ConfigProvider: FC = ({ children }) => {
  const [config, dispatch] = useReducer(reducer, defaultConfig);
  return <ConfigContext.Provider value={{ ...config, dispatch }}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
