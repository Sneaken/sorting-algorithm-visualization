import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BubbleSort from './pages/BubbleSort';
import AllSort from './pages/AllSort';
import ConfigProvider from './components/ConfigProvider';
import Configurator from './components/Configurator';

function App() {
  return (
    <>
      <header>
        <h1 className='m-0 text-center text-2xl'>排序算法可视化</h1>
      </header>
      <main className=''>
        <ConfigProvider>
          <Configurator />
          <HashRouter>
            <Switch>
              <Route path='/' exact component={AllSort} />
              <Route path='/bubble-sort' exact component={BubbleSort} />
            </Switch>
          </HashRouter>
        </ConfigProvider>
      </main>
    </>
  );
}

export default App;
