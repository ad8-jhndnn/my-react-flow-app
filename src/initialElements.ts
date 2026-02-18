const edgeType = 'straight';


let inputCount = 5;
let outputCount = 0;

export function getNodes(base:string, inputCount:number, outputCount:number) : any[] {
  let nodes: any[] = [];
  for( let i = 1; i <= inputCount; i++) {
    nodes.push({
      id: `${base}in${i+100}`,
      type: 'input',
      data: { label: `input ${i}` },  
    });
  }
  for( let i = 1; i <= outputCount; i++) {
    nodes.push({
      id: `${base}out${i+100}`,
      type: 'output',
      data: { label: `output ${i}` },  
    });
  }
  return nodes;
}


export function getEdges() : any[] {
 
  let edges: any[] = [];  
  for(let i = 1; i <= inputCount; i++) {
    for(let j = 1; j <= outputCount; j++) { 
      edges.push({
        id: `e${i}${j}`,
        source: `in${i+100}`,
        target: `out${j+100}`,
        type: edgeType,
        animated: false,
      });
    }
  }
  return edges;
}
