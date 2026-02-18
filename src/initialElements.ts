import { type Node, type Edge } from '@xyflow/react';

const edgeType = 'straight';

export type ElkNodeData = {
  label: string;
  sourceHandles: { id: string }[];
  targetHandles: { id: string }[];
};

export type ElkNode = Node<ElkNodeData, 'elk'>;

export function getSomeNodes(base:string, inputCount:number, outputCount:number) : ElkNode[] {
  let nodes: any[] = [];
  for( let i = 1; i <= inputCount; i++) {
    nodes.push({
      id: `${base}in${i+100}`,
      type: 'input',
      data: { label: `input ${i}` },  
      position: { x: 0, y: 0 },

    });
  }
  for( let i = 1; i <= outputCount; i++) {
    nodes.push({
      id: `${base}out${i+100}`,
      type: 'output',
      data: { label: `output ${i}` },  
      position: { x: 0, y: 0 },
    });
  }
  return nodes;
}


export function getSomeEdges(base:string, inputCount:number, outputCount:number) : Edge[] {
  let edges: any[] = [];  
  for(let i = 1; i <= inputCount; i++) {
    for(let j = 1; j <= outputCount; j++) { 
      edges.push({
        id: `e${i}${j}`,
        source: `${base}in${i+100}`,
        target: `${base}out${j+100}`,
        type: edgeType,
        animated: true,
      });
    }
  }
  return edges;
}
