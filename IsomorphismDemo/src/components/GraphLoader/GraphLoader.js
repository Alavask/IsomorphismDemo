import {Graph} from "../../../node_modules/graphlabs.core.graphs/build/main/Graph"
import {Vertex} from "../../../node_modules/graphlabs.core.graphs/build/main/Vertex"
import {Edge} from "../../../node_modules/graphlabs.core.graphs/build/main/Edge"

export class GraphLoader {

    static lala(){

        var graph = new Graph();
        var vertexOne = new Vertex("a", graph);
        var vertexTwo = new Vertex("b", graph);
        graph.addVertex(vertexOne);
        graph.addVertex(vertexTwo);

        graph.addEdge(new Edge(vertexOne,vertexTwo));

        return graph;

    };

    static parseStr(str, id){

        var graph = new Graph();

        var a=JSON.parse(str);

        a.id[id].vertex.forEach(function(item,i,arr){
            graph.addVertex(new Vertex(a.id[id].vertex[i], graph));
        });


        a.id[id].edge.forEach(function(item,i,arr){
            if (i % 2 == 0) graph.addEdge(new Edge(graph.getVertex(a.id[id].edge[i])[0],graph.getVertex(a.id[id].edge[i+1])[0]));
        });

        return graph;
    };


}

