//const fs = require('fs');

class AnimalKingdom {
    constructor() {
        this.root = { _weight: 1, children: {} };
    }

    addNode(path) {
        let node = this.root;
        for (let segment of path) {
            if (!node.children[segment]) {
                node.children[segment] = { _weight: 1, children: {} };
            }
            node = node.children[segment];
        }
    }

    addNodes(path) {
        let node = this.root;
        for (let segment of path) {
            if (!node.children[segment]) {
                node.children[segment] = { _weight: 1, children: {} };
            }
            node = node.children[segment];
        }
    }

    setWeight(path, weight) {
        let node = this.root;
        for (let segment of path) {
            if (!node.children[segment]) {
                console.error(`${segment} not found!`);
                return;
            }
            node = node.children[segment];
        }
        node._weight = weight;
    }

    getRandomNode() {
        let node = this.root;
        let path = [];
        while (node.children && Object.keys(node.children).length > 0) {
            let keys = Object.keys(node.children);
            let totalWeight = keys.reduce((sum, key) => sum + node.children[key]._weight, 0);
            let randomValue = Math.random() * totalWeight;
            let accumulatedWeight = 0;
            for (let key of keys) {
                accumulatedWeight += node.children[key]._weight;
                if (randomValue < accumulatedWeight) {
                    path.push(key);
                    node = node.children[key];
                    break;
                }
            }
        }
        return path.join(' -> ');
    }
/*
    exportToJson(filePath) {
        fs.writeFileSync(filePath, JSON.stringify(this.root, null, 2));
    }

    importFromJson(filePath) {
        const data = fs.readFileSync(filePath);
        this.root = JSON.parse(data);
    }
*/
    printNodes() {
        const printNode = (node, path = []) => {
            if (!node.children || Object.keys(node.children).length === 0) {
                console.log(`Path: ${path.join(' -> ')}, Weight: ${node._weight}`);
            }
            if (node.children) {
                for (const key in node.children) {
                    printNode(node.children[key], path.concat(`${key} (${node.children[key]._weight})`));
                }
            }
        };

        printNode(this.root);
    }
}


function createAnimalKingdom(){
    let animalKingdom = new AnimalKingdom();

    //Mammalia

    //Monotremata, Egg Laying Mammals
    animalKingdom.addNodes(['Mammalia', 'Monotremata', 'Duck-billed Platypus']);
    animalKingdom.addNodes(['Mammalia', 'Monotremata', 'Echidna', 'Short-beaked Echidna']);
    animalKingdom.addNodes(['Mammalia', 'Monotremata', 'Echidna', 'Long-beaked Echidna']);

    //Marsupials
    //Order: Didelphimorphia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'American Opossums', 'Linnaues Mouse Opossum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'American Opossums', 'Water Opossum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'American Opossums', 'Black Shouldered Opossum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'American Opossums', 'Virginia Opossum']);

    //Order: Dasyuromorphia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores']);

    //Order: Peramelemorphia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Bandicoots']);

    //Order: Notoryctemorphia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Moles']);

    //Order: Diprotodontia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives']);

    //Order:Paucituberculata
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Shrew Opossums']);


    return animalKingdom;
}



/*
// Example usage:
const animalKingdom = new AnimalKingdom();

// Adding a lion using addNodes
animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Panthera', 'leo']);

// Adding a monarch butterfly using addNodes
animalKingdom.addNodes(['Insecta', 'Lepidoptera', 'Nymphalidae', 'Danaus', 'plexippus']);

// Setting weights
animalKingdom.setWeight(['Mammalia', 'Carnivora', 'Felidae', 'Panthera'], 2);

console.log(animalKingdom.getRandomNode());

animalKingdom.exportToJson('animalKingdom.json');

const newAnimalKingdom = new AnimalKingdom();
newAnimalKingdom.importFromJson('animalKingdom.json');
console.log(newAnimalKingdom.getRandomNode());

animalKingdom.printNodes();*/