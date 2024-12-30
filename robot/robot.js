const roads = [ "Casa de Alice-Casa de Bob" ,    "Casa de Alice-Cabaña" ,
    "Casa de Alice-Oficina de Correos" ,    "Casa de Bob-Ayuntamiento" ,
    "Casa de Daria-Casa de Ernie" , "Casa de Daria-Ayuntamiento" ,
    "Casa de Ernie-Casa de Grete" , "Casa de Grete-Granja" ,
    "Casa de Grete-Tienda" ,           "Mercado-Granja" ,
    "Mercado-Oficina de Correos" ,      "Mercado-Tienda " ,
    "Mercado- Ayuntamiento" ,        "Tienda-Ayuntamiento" 
 ];

function buildGraph(edges){
    let graph = Object.create(null);
    function addEdge(from, to){
        if (from in graph){
            graph[from].push(to);
        }else{
            graph[from] = [to];
        }
    }
for (let [from, to] of edges.map(r => r.split(" "))){
    addEdge(from, to);
    addEdge(to, from);

    }
    return graph;

}
let roadGraph = buildGraph(roads);


class VillageState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)) {
            return this;
        }else{
            let parcels = this.parcels.map(p => {
                if (p.place != this.place)return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place !=p.address);
            return new VillageState(destination, parcels)
        }
    }
}


let first = new VillageState ("Post Ofice",
    [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parcels);
console.log(first.place);

let object = Object.freeze({value: 5});
object.value = 10;
console.log(object.value);

function runRobot (state, robot, memory){
    for (let turn = 0;; turn++){
        if(state.parcels.length == 0){
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}


function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for (let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
    }while (place == address);
    return new VillageState ("Post Office", parcels);
};



