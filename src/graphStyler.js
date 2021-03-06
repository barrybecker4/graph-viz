export default function(data) {

    const nodes = data.nodes;
    const edges = data.edges;

    nodes.forEach(node => {
        if (!node.style) {
            node.style = {};
        }
        node.style.lineWidth = 1;
        node.style.stroke = '#333';
        node.style.fill = node.color;
        if (node.size) {
             node.size = node.size / 4;
        }

        switch (node.class) {
            case 'c0': {
                node.shape = 'circle';
                //node.style.fill = 'orange';
                break;
            }
            case 'c1': {
                node.shape = 'rect';
                node.size = [ 35, 20 ];
                break;
            }
            case 'c2': {
               node.shape = 'ellipse';
               node.size = [ 35, 20 ];
               break;
            }
            default: {}
        }
    });
    edges.forEach(edge => {
        if (!edge.style) {
            edge.style = {};
        }
        edge.shape = 'quadratic'; // or 'cubic' etc
        edge.style.endArrow = edge.directed;
        edge.style.lineWidth = edge.weight;
        edge.style.opacity = 0.4;
        edge.style.stroke = edge.directed ? 'orange' : 'gray';

        if (edge.directed) {
           edge.shape = 'running-polyline';
           edge.size = 6;
           edge.style.opacity = 0.6;
           //edge.style.lineAppendWidth = 3;
        }
    });
}