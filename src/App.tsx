import * as React from 'react';
import CompA from './components/CompA';

function App() {
  //  const ENV_VARS = window.__RUNTIME_CONFIG__;
  //  let showPlugin1: boolean = ENV_VARS.ENABLED_PLUGINS.includes('PLUGIN_1');
  let showPlugin1 = true;

  let PluginB: any;
  let PluginC: any;
  let FuncA: any = undefined;
  const [FuncVal, setFuncVal] = React.useState<string | undefined>();
  let TypedFunction: any = undefined;

  if (showPlugin1) {
    PluginB = React.lazy(() => import('./components/plugins/CompB'));
    PluginC = React.lazy(() => import('./exports/CompC'));

    const loader = async () => {
      ({ FuncA } = await import('./components/plugins/Functions'));
      setFuncVal(FuncA());
    };
    loader();

    // import type {TypeA} from './components/plugins/Functions';

    // TypedFunction = (testType: TypeA) => {
    //   return <div>Function Call with TypeA</div>
    // }
  }

  return (
    <React.Fragment>
      <CompA />
      <React.Suspense fallback={<div>Loading Plugins...</div>}>
        {PluginB && <PluginB />}
        {PluginC && <PluginC />}
        {FuncVal && FuncVal}
        {TypedFunction && TypedFunction()}
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
