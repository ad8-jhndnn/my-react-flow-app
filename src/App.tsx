import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  Panel,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { getSomeNodes, getSomeEdges } from './initialElements';

let initNodes = getSomeNodes("bob", 0, 0);
let initEdges = getSomeEdges("bob", 0, 0);

import useLayoutNodes from './useLayoutNodes';

declare const window: Window &
typeof globalThis & {
 test: (arg:any, arg2:any) => void;
};
 
let layoutOptions = {
    'elk.algorithm': 'layered',
    'elk.direction': 'DOWN',
    'elk.layered.spacing.edgeNodeBetweenLayers': '40',
    'elk.spacing.nodeNode': '40',
    'elk.layered.nodePlacement.strategy': 'SIMPLE',
  };

function App() {


  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

// function argle() {
//   setNodes(getSomeNodes("bob", 10, 5));
//   setEdges(getSomeEdges("bob", 10, 5));
// }

// elk layouting options can be found here:
// https://www.eclipse.org/elk/reference/algorithms/org-eclipse-elk-layered.html
function onLayout(direction: 'TB' | 'LR') {
  layoutOptions = {
    'elk.algorithm': 'layered',
    'elk.direction': direction == 'TB' ? 'DOWN' : 'RIGHT',
    'elk.layered.spacing.edgeNodeBetweenLayers': '40',
    'elk.spacing.nodeNode': '40',
    'elk.layered.nodePlacement.strategy': 'SIMPLE',
  }
  setNodes(initNodes);
  setEdges(initEdges);
}

  window.test = function(n: any, e: any) {    
    initNodes = n;
    initEdges = e;
    setNodes(n);
    setEdges(e);
  }

  useLayoutNodes(layoutOptions);

  return (
        <div style={{ width: '100vw', height: '100vh' }}>

    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      fitView
//      nodeTypes={nodeTypes}
    >
            <Panel position="top-right">
        <button className="xy-theme__button" onClick={() => onLayout('TB')}>
          vertical layout
        </button>
        <button className="xy-theme__button" onClick={() => onLayout('LR')}>
          horizontal layout
        </button>
        {/* <button className="xy-theme__button" onClick={() => argle()}>
          sdafdsfds
        </button> */}
      </Panel>

      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
    </div>
  );
}

export default () => (
  <ReactFlowProvider>
    <App />
  </ReactFlowProvider>
);
