//const fs = require('fs');

class AnimalKingdom {
    constructor() {
        this.root = { _weight: 10, children: {} };
    }

    addNode(path) {
        let node = this.root;
        for (let segment of path) {
            if (!node.children[segment]) {
                node.children[segment] = { _weight: 10, children: {} };
            }
            node = node.children[segment];
        }
    }

    addNodes(path) {
        let node = this.root;
        for (let segment of path) {
            if (!node.children[segment]) {
                node.children[segment] = { _weight: 10, children: {} };
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

    animalKingdom.setWeight(['Mammalia', 'Monotremata'], 2);
    animalKingdom.setWeight(['Mammalia', 'Monotremata', 'Duck-billed Platypus'], 7);

    //Marsupials
    //Order: Didelphimorphia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'American Opossums', 'Linnaues Mouse Opossum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'American Opossums', 'Water Opossum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'American Opossums', 'Black Shouldered Opossum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'American Opossums', 'Virginia Opossum']);

    //Order: Dasyuromorphia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Long-Clawed Marsupial Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Inland Ningaui']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Fat-Tailed Dunnart']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Kultarr']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Fat-Tailed False Antechius']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Dibbler']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Kowari']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Crest-Tailed Mulgara']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Eastern Quoll']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Tasmanian Devil']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Australian Carnivores', 'Numbat']);


    //Order: Peramelemorphia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Bandicoots', 'Eastern Barred Bandicoot']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Bandicoots', 'Common Echymipera']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Bandicoots', 'Greater Bilby']);

    //Order: Notoryctemorphia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Southern Marsupial Mole']);

    animalKingdom.setWeight(['Mammalia', 'Marsupiallia', 'Southern Marsupial Mole'], 2);

    //Order: Diprotodontia
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Koala']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Wombats', 'Common Wombat']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Wombats', 'Southern Hairy-Nosed Wombat']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Possums', 'Common Brush-Tailed Possum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Northern Common Cuscus']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Possums', 'Leadbeater\'s Possum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Gliders', 'Squirrel Glider']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Possums', 'Striped Possum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Possums', 'Lemuroid Ring-Tailed Possum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Possums', 'Common Ringtail Possum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Gliders', 'Southern Great Glider']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Possums', 'Little Pygmy Possum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Gliders', 'Pygmy Glider']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Possums', 'Feather-Tailed Possum']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Musky Rat-Kangaroo']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Long-Footed Potoroo']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Kangaroos', 'Red Kangaroo']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Bettongs', 'Brush-Tailed Bettong']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Bettongs', 'Rufous Bettong']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Wallabys', 'Spectacled Hare Wallaby']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Quokka']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Red-Legged Pademelon']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Wallabys', 'Brush-Tailed Rock Wallaby']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Wallabys', 'Little Rock Wallaby']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Doria\'s Tree Kangaroo']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Kangaroos', 'Western Gray Kangaroo']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Wallabys', 'Parma Wallaby']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Kangaroos', 'Common Wallaroo']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Wallabys', 'Swamp Wallaby']);
    animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Kangaroos and Relatives', 'Possums', 'Honey Possum']);

    //Order:Paucituberculata
    //animalKingdom.addNodes(['Mammalia', 'Marsupiallia', 'Shrew Opossums']);

    //Sengis
    //Order: Macroscelidea
    animalKingdom.addNodes(['Mammalia', 'Macroscelidea', 'Rufous Sengi']);
    animalKingdom.addNodes(['Mammalia', 'Macroscelidea', 'Golden-Rumped Sengi']);
    animalKingdom.addNodes(['Mammalia', 'Macroscelidea', 'Karoo Rock Sengi']);
    animalKingdom.addNodes(['Mammalia', 'Macroscelidea', 'Gray-Faced Sengi']);
    animalKingdom.addNodes(['Mammalia', 'Macroscelidea', 'Black and Rufous Sengi']);

    animalKingdom.setWeight(['Mammalia', 'Macroscelidea'], 2);

    //Tenrecs, Golden Moles, and Otter Shrews
    //Order: Afrosoricida
    animalKingdom.addNodes(['Mammalia', 'Afrosoricida', 'Tenrecs', 'Common Tenrec']);
    animalKingdom.addNodes(['Mammalia', 'Afrosoricida', 'Tenrecs', 'Web-Footed Tenrec']);
    animalKingdom.addNodes(['Mammalia', 'Afrosoricida', 'Tenrecs', 'Greater Hedgehog-Tenrec']);
    animalKingdom.addNodes(['Mammalia', 'Afrosoricida', 'Tenrecs', 'Lowland Streaked Tenrec']);
    animalKingdom.addNodes(['Mammalia', 'Afrosoricida', 'Otter Shrews', 'Giant Otter Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Afrosoricida', 'Otter Shrews', 'Nimba Otter Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Afrosoricida', 'Golden Moles', 'Cape Golden Mole']);
    animalKingdom.addNodes(['Mammalia', 'Afrosoricida', 'Golden Moles', 'Grant\'s Golden Mole']);

    animalKingdom.setWeight(['Mammalia', 'Afrosoricida'], 2);

    //Aardvark
    //Order: Tubulidentata
    animalKingdom.addNodes(['Mammalia', 'Tubulidentata', 'Aardvark']);

    animalKingdom.setWeight(['Mammalia', 'Tubulidentata'], 2);

    //Dugong and Manatees
    //Order: Sirenia
    //animalKingdom.addNodes(['Mammalia', 'Sirenia', 'Dugong']);
    //animalKingdom.addNodes(['Mammalia', 'Sirenia', 'West Indian Manatee']);

    //Elephants
    //Order: Proboscidea
    animalKingdom.addNodes(['Mammalia', 'Proboscidea', 'African Savanna Elephant']);
    animalKingdom.addNodes(['Mammalia', 'Proboscidea', 'African Forest Elephant']);
    animalKingdom.addNodes(['Mammalia', 'Proboscidea', 'Asian Elephant']);

    animalKingdom.setWeight(['Mammalia', 'Proboscidea'], 5);

    //Hyraxes
    //Order: Hyracoidea
    animalKingdom.addNodes(['Mammalia', 'Hyracoidea', 'Rock Hyrax']);
    animalKingdom.addNodes(['Mammalia', 'Hyracoidea', 'Southern Tree Hyrax']);

    animalKingdom.setWeight(['Mammalia', 'Hyracoidea'], 2);

    //Armadillos
    //Order: Cingulata
    animalKingdom.addNodes(['Mammalia', 'Cingulata', 'Giant Armadillo']);
    animalKingdom.addNodes(['Mammalia', 'Cingulata', 'Big Hairy Armadillo']);
    animalKingdom.addNodes(['Mammalia', 'Cingulata', 'Pichi']);
    animalKingdom.addNodes(['Mammalia', 'Cingulata', 'Northern Naked-Tailed Armadillo']);
    animalKingdom.addNodes(['Mammalia', 'Cingulata', 'Nine-Banded Armadillo']);

    animalKingdom.setWeight(['Mammalia', 'Cingulata'], 4);

    //Sloths and Anteaters
    //Order: Pilosa
    animalKingdom.addNodes(['Mammalia', 'Pilosa', 'Sloths', 'Maned Sloth']);
    animalKingdom.addNodes(['Mammalia', 'Pilosa', 'Sloths', 'Pygmy Three-Toed Sloth']);
    animalKingdom.addNodes(['Mammalia', 'Pilosa', 'Sloths', 'Linnaeus\' Two-Toed Sloth']);
    animalKingdom.addNodes(['Mammalia', 'Pilosa', 'Southern Tamandua']);
    animalKingdom.addNodes(['Mammalia', 'Pilosa', 'Anteaters', 'Common Silky Anteater']);
    animalKingdom.addNodes(['Mammalia', 'Pilosa', 'Anteaters', 'Giant Anteater']);

    animalKingdom.setWeight(['Mammalia', 'Pilosa'], 5);

    //Rabbits, Hares, and Pikas
    //Order: Lagomorpha
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Pikas', 'American Pika']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Pikas', 'Black-Lipped Pika']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Rabbits', 'Volcano Rabbit']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Rabbits', 'Amami Rabbit']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Rabbits', 'Pygmy Rabbit']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Rabbits', 'Swamp Rabbit']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Rabbits', 'Eastern Cottontail Rabbit']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Rabbits', 'European Rabbit']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Hares', 'Hispid Hare']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Hares', 'Brown Hare']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Hares', 'Black-Tailed Jackrabbit']);
    animalKingdom.addNodes(['Mammalia', 'Lagomorpha', 'Hares', 'Arctic Hare']);

    animalKingdom.setWeight(['Mammalia', 'Lagomorpha'], 5);
    animalKingdom.setWeight(['Mammalia', 'Lagomorpha', 'Pikas'], 5);

    //Rodents
    //Order: Rodentia
    //Squirrel Like Rodents
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Prairie Likes', 'Mountain Beaver']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Prairie Likes', 'Woodchuck']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Prairie Likes', 'Yellow-Bellied Marmot']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Eastern Chipmunk']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Prairie Likes', 'Columbian Ground Squirrel']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Prairie Likes', 'Black-Tailed Prairie Dog']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Squirrels', 'South African Ground Squirrel']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Squirrels', 'Gambian Sun Squirrel']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Squirrels', 'Indian Giant Squirrel']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Squirrels', 'Prevost\'s Squirrel']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Squirrels', 'Eastern Gray Squirrel']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Squirrels', 'Eurasian Red Squirrel']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Spotted Giant Flying Squirrel']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Dormouse', 'Hazel Dormouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Squirrel Like Rodents', 'Dormouse', 'Edible Dormouse']);

    //Beaver Like Rodents
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Beaver Like Rodents', 'Gophers', 'Giant Pocket Gopher']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Beaver Like Rodents', 'Gophers', 'Merriam\'s Pocket Gopher']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Beaver Like Rodents', 'Gophers', 'Gotta\'s Pocket Gopher']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Beaver Like Rodents', 'Mice?', 'Overlook Spiny Pocket Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Beaver Like Rodents', 'Mice?', 'Dark Kangaroo Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Beaver Like Rodents', 'Beavers', 'American Beaver']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Beaver Like Rodents', 'Mice?', 'Merriam\'s Kangaroo Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Beaver Like Rodents', 'Beavers', 'Eurasian Beaver']);

    //Mouse Like Rodents
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Chinese Bamboo Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Ethiopian African Mole-Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Long-Nosed Hocicudo']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Saltmarsh Harvest Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'White-Footed Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Northern Pygmy Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Small Vesper Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Hispid Cotton Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Woolly Giant Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Hamsters', 'Roborovski\'s Desert Hamster']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Hamsters', 'Golden Hamster']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Hamsters', 'Common Hamster']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Voles', 'Common Vole']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Muskrat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Voles', 'Bank Vole']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Voles', 'Eurasian Water Vole']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Siberian Brown Lemming']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Voles', 'Steppe Vole']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Sumichrast\'s Vesper Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Brant\'s Whistling Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Jirds', 'Fat-Tailed Jird']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Jirds', 'Mongolian Jird']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'House Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Spinifex Hopping mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Common Water Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Crete Spiny Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Yellow-Necked Field Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Long-Tailed Field Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Harvest Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Mice', 'Typical Striped Grass Mouse']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Roof Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Smooth-Tailed Giant Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Brown Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Greater Stick-Nest Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Malagasy Giant Jumping Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Rats', 'Northern Giant Pouched Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Jerboas', 'Lesser Egyptian Jerboa']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Mouse Like Rodents', 'Jerboas', 'Four-Toed Jerboa']);

    //Cavy Like Rodents
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Porcupines', 'Northern American Porcupine']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Porcupines', 'Cape Porcupine']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Porcupines', 'Brazilian Porcupine']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Brazilian Guinea Pig']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Greater Capybara']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Patagonian Mara']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Azara\'s Agouti']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Lowland Paca']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Argentina Plains Vischacha']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Chilean Chinchilla']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Desmarest\'s Hutia']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Mole-Rats', 'Naked Mole-Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Common Degu']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Copyu']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Mole-Rats', 'Hottentot Mole-Rat']);
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Cavy Like Rodents', 'Mole-Rats', 'Namaque Dune Mole-Rat']);

    //Springhares and Relatives
    animalKingdom.addNodes(['Mammalia', 'Rodentia', 'Springhares and Relatives', 'Southern African Springhare']);

    animalKingdom.setWeight(['Mammalia', 'Rodentia', 'Springhares and Relatives'], 1);

    //Colugos
    //Order: Dermoptera
    animalKingdom.addNodes(['Mammalia', 'Dermoptera', 'Malayan Colugo']);

    animalKingdom.setWeight(['Mammalia', 'Dermoptera'], 2);

    //Tree Shrews
    //Order: Scandentia
    animalKingdom.addNodes(['Mammalia', 'Scandentia', 'Pen-Tailed Tree Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Scandentia', 'Indian Tree Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Scandentia', 'Bornean Smooth-Tailed Tree Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Scandentia', 'Lesser Tree Shrew']);

    animalKingdom.setWeight(['Mammalia', 'Scandentia'], 2);

    //Primates
    //Order: Primates

    //Lemurs, Galagos, Lorises, and Pottos
    //Suborder: Strepsirrhini
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Calabar Angwantibo']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lorises', 'Gray Slender Loris']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lorises', 'Sunda Slow Loris']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'West African Potto']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Galagos', 'Brown Greate Galago']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Galagos', 'Western Needle-Clawed Galago']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Galagos', 'Moholi Bush Baby']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lemurs', 'Fat-Tailed Dwarf Lemur']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lemurs', 'Black and White Ruffed Lemur']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lemurs', 'Black Lemur']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lemurs', 'Gray Gentle Lemur']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lemurs', 'Ring-Tailed Lemur']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lemurs', 'Madame Berthe\'s Mouse Lemur']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lemurs', 'Indri']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Aye-Aye']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lemurs', 'Verreaux\'s Sifaka']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Strepsirrhini', 'Lemurs', 'Betsileo Sportive Lemur']);

    //Monkeys, Apes, and Tarsiers
    //Suborder: Haplorrhini
    //Monkeys
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Gray Woolly Monkey']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Black Spider Monkey']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Southern Muriqui']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Geoffroy\'s Spider Monkey']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Howlers', 'Guatemalan Black Howler']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Howlers', 'Colombian Red Howler']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Sakis', 'Isabel\'s Saki']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Sakis', 'White-Faced Saki']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Sakis', 'Black-Bearded Saki']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Bald Uakari']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Red-Bellied Titi']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Lemurine Night Monkey']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Golden Palace Monkey']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Capuchins', 'Brown Capuchin']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Capuchins', 'Guianan Weeper Capuchin']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Tamarins', 'Emperor Tamarin']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Black-Capped Squirrel Monkey']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Marmosets', 'Goeldi\'s Marmoset']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Tamarins', 'Cotton-Top Tamarin']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Marmosets', 'Silvery Marmoset']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Marmosets', 'Eastern Pygmy Marmoset']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Marmosets', 'Geoffroy\'s Tufted-Ear Marmoset']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Tamarins', 'Golden Lion Tamarin']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Mandrill']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Common Patas Monkey']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'De Brazza\'s Monkey']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Kipunji']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Macaques', 'Arunachal Macaque']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Macaques', 'Celebes Crested Macaque']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Baboons', 'Olive Baboon']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Baboons', 'Chacma Baboon']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Baboons', 'Gelada']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Proboscis Monkey']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Langurs', 'Popa Langur']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Langurs', 'Northern Plains Gray Langur']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Guereza']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Monkeys', 'Myanmar Snub-Nosed Monkey']);

    //Apes
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Gibbons', 'Siamang']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Gibbons', 'Black-Crested Gibbon']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Gibbons', 'Skywalker Hoolock Gibbon']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Gibbons', 'Lar Gibbon']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Gibbons', 'Moloch Gibbon']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Bonobo']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Chimpanzee']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Gorillas', 'Western Gorilla']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Gorillas', 'Eastern Gorilla']);
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Apes', 'Orangutan']);

    //Tarsiers
    animalKingdom.addNodes(['Mammalia', 'Primate', 'Haplorrhini', 'Tarsiers', 'Western Tarsier']);

    animalKingdom.setWeight(['Mammalia', 'Primate', 'Haplorrhini', 'Tarsiers'], 2);

    //Bats
    //Order: Chiroptera
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Fruit Bats', 'Egyptian Rousette']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Fruit Bats', 'Franquet\'s Epauletted Fruit Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Fruit Bats', 'Wahlberg\'s Epauletted Fruit Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Fruit Bats', 'Mindoro Stripe-Faced Fruit Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Fruit Bats', 'Rodrigues Flying Fox']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Proboscis Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Mauritian Tomb Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Ghost Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Spix\'s Disk-Winged Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Lesser Horseshoe Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Lesser Mouse-Tailed Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Davy\'s Naked-Backed Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Schneider\'s Leaf-Nosed Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Large Slit-Faced Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Greater Bulldog Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Fringe-Lipped Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Geoffroy\'s Tailless Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Common Vampire Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Common Tent-Building Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'False Vampire Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Common Pipistrelle']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Noctule']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Common Black Mastiff Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Angolan Free-Tailed Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Lesser Antilles Funnel-Eared Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Brown Long-Eared Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Pallid Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Parti-Colored Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Hemprich\'s Long-Eared Bat']);
    animalKingdom.addNodes(['Mammalia', 'Chiroptera', 'Carnivore Bats', 'Daubenton\'s Bat']);

    //Hedgehogs and Relatives, Shrews, and Moles
    //Order: Eulypotyphla
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Moonrats', 'Moonrat']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Moonrats', 'Mindanao Moonrat']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Hedgehogs', 'European Hedgehog']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Hedgehogs', 'Indian Hedgehog']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Hedgehogs', 'Long-Eared Hedgehog']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Solenodon', 'Hispaniolan Solenodon']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Solenodon', 'Cuban Solenodon']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Eurasian Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Giant Mexican Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Northern Short-Tailed Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Eurasian Water Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Etruscan Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Climbing Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Tibetan Water Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Piebald Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Armored Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Shrews', 'Bicolored White-Toothed Shrew']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Desmans', 'Pyrenean Desman']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Desmans', 'Russian Desman']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Moles', 'European Mole']);
    animalKingdom.addNodes(['Mammalia', 'Eulypotyphla', 'Moles', 'Star-Nosed Mole']);

    //Pangolins
    //Order: Pholidota
    animalKingdom.addNodes(['Mammalia', 'Pholidota', 'Chinese Pangolin']);
    animalKingdom.addNodes(['Mammalia', 'Pholidota', 'Ground Pangolin']);

    animalKingdom.setWeight(['Mammalia', 'Pholidota'], 2);

    //Carnivores
    //Order: Carnivora

    //Canines
    //Family: Canidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Red Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Blanford\'s Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Kit Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Swift Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Fennec Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Ruppell\'s Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Arctic Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Northern Gray Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Culpeo']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Crab-Eating Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Foxes', 'Bat-Eared Fox']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Short-Eared Dog']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Raccoon Dog']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Fox-Likes', 'Bush Dog']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'Maned Wolf']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'Jackals', 'Side-Striped Jackal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'Jackals', 'Black-Backed Jackal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'Jackals', 'Golden Jackal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'Coyote']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'Wolves', 'Red Wolf']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'Wolves', 'Gray Wolf']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'African Wild Dog']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'Dhole']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Canidae', 'Wolf-Likes', 'Dogs', 'Dingo']);

    //Bears
    //Family: Ursidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Ursidae', 'Polar Bear']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Ursidae', 'American Black Bear']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Ursidae', 'Asiatic Black Bear']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Ursidae', 'Sun Bear']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Ursidae', 'Sloth Bear']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Ursidae', 'Spectacled Bear']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Ursidae', 'Giant Panda']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Ursidae', 'Brown Bear']);

    //Sea Lions and Fur Seals
    //Family: Otariidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Otariidae', 'Fur Seals', 'Northern Fur Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Otariidae', 'Fur Seals', 'Brown Fur Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Otariidae', 'Fur Seals', 'Antarctic Fur Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Otariidae', 'Sea Lions', 'New Zealand Sea Lion']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Otariidae', 'Sea Lions', 'South American Sea Lion']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Otariidae', 'Sea Lions', 'Stellar\'s Sea Lion']);

    //Walrus
    //Family: Odobenidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Odobenidae', 'Walrus']);

    //Earless Seals
    //Family: Phocidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Mediterranean Monk Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Crabeater Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Leopard Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Weddell Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Ross Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Southern Elephant Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Hooded Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Gray Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Harp Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Baikal Seal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Phocidae', 'Common Seal']);

    //Skunks
    //Family: Mephitidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mephitidae', 'Palawan Stink Badger']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mephitidae', 'Skunks', 'Molina\'s Hog-Nosed Skunk']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mephitidae', 'Skunks', 'Eastern Spotted Skunk']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mephitidae', 'Skunks', 'Striped Skunk']);


    //Raccoons and Relatives
    //Family: Procyonidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Procyonidae', 'South American Coati']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Procyonidae', 'Ringtail']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Procyonidae', 'Northern Olingo']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Procyonidae', 'Olinguito']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Procyonidae', 'Northern Raccoons']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Procyonidae', 'Crab-Eating Raccoon']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Procyonidae', 'Kinkajou']);

    //Red Pandas
    //Family: Ailuridae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Ailuridae', 'Styan\'s Red Panda']);

    //Mustelids
    //Family: Mustelidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'Stoat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'Least Weasel']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'European Mink']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'European Polecat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'Black-Footed Ferret']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'American Mink']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'Beech Marten']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'Yellow-Throated Marten']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'Fisher']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'European Pine Marten']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'Sable']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'Marbled Polecat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'African Striped Weasel']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'Greater Grison']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Smalls', 'African Zorilla']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Bigs', 'Wolverine']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Bigs', 'Honey Badger']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Bigs', 'European Badger']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Bigs', 'American Badger']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Bigs', 'Greater Hog Badger']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Otters', 'Sea Otter']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Otters', 'North American River Otter']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Otters', 'African Clawless Otter']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Otters', 'Asian Small-Clawed Otter']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Otters', 'Eurasian Otter']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Mustelidae', 'Otters', 'Giant Otter']);

    //Malagasy Carnivores
    //Family: Eupleridae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Eupleridae', 'Falanouc']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Eupleridae', 'Spotted Fanaloka']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Eupleridae', 'Brown-Tailed Vontsira']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Eupleridae', 'Fossa']);

    //Civets and Relatives
    //Family: Viverridae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Viverridae', 'Philippine Palm Civet']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Viverridae', 'Malay Civet']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Viverridae', 'Common Genet']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Viverridae', 'Binturong']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Viverridae', 'Masked Palm Civet']);

    //Mongooses
    //Family: Herpestidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Herpestidae', 'Yellow Mongoose']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Herpestidae', 'Dwarf Mongoose']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Herpestidae', 'Meerkat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Herpestidae', 'Banded Mongoose']);

    //Linsangs
    //Family: Prionodontidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Prionodontidae', 'West African Linsang']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Prionodontidae', 'Central African Linsang']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Prionodontidae', 'Banded Linsang']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Prionodontidae', 'Spotted Linsang']);

    //Cats
    //Family: Felidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Flat-Headed Cat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Fishing Cat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Bobcat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Iberian Lynx']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Eurasian Lynx']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'African Golden Cat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Caracal']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Serval']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Marbled Cat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Jungle Cat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Sand Cat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Black-Footed Cat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Andean Cat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Ocelot']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Kodkod']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Geoffroy\'s Cat']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Margay']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Smaller Cats', 'Domestic Cat', '']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Bigger Cats', 'Tiger']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Bigger Cats', 'Jaguarundi']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Bigger Cats', 'Puma']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Bigger Cats', 'Leopards', 'Diard\'s Clouded Leopard']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Bigger Cats', 'Leopards', 'Leopard']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Bigger Cats', 'Leopards', 'Snow Leopard']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Bigger Cats', 'Jaguar']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Bigger Cats', 'Cheetah']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Felidae', 'Bigger Cats', 'Lion']);

    //Hyenas and Aardwolf
    //Family: Hyaenidae
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Hyaenidae', 'Aardwolf']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Hyaenidae', 'Hyenas', 'Brown Hyena']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Hyaenidae', 'Hyenas', 'Spotted Hyena']);
    animalKingdom.addNodes(['Mammalia', 'Carnivora', 'Hyaenidae', 'Hyenas', 'Striped Hyena']);

    animalKingdom.setWeight(['Mammalia', 'Carnivora'], 20);

    //Odd Toed Hoofed Mammals
    //Order: Perissodactyla

    //Horses and Relatives
    //Family: Equidae
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Equidae', 'Donkey']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Equidae', 'Horse']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Equidae', 'Mule']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Equidae', 'Zebra']);

    //Rhinoceroses
    //Family: Rhinocerotidae
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Rhinocerotidae', 'Sumatran Rhinoceros']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Rhinocerotidae', 'Javan Rhinoceros']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Rhinocerotidae', 'Indian Rhinoceros']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Rhinocerotidae', 'Black Rhinoceros']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Rhinocerotidae', 'White Rhinoceros']);

    //Tapirs
    //Family: Tapiridae
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Tapiridae', 'Lowland Tapir']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Tapiridae', 'Mountain Tapir']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Tapiridae', 'Baird\'s Tapir']);
    animalKingdom.addNodes(['Mammalia', 'Perissodactyla', 'Tapiridae', 'Malayan Tapir']);

    //Even Toed Hoofed Mammals
    //Order: Artiodactyla

    //Pigs
    //Family: Suidae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Suidae', 'Giant Forest Hog']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Suidae', 'Pygmy Hog']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Suidae', 'Wild Boar']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Suidae', 'Red River Hog']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Suidae', 'Sulawesi Babirusa']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Suidae', 'Common Warthog']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Suidae', 'Domestic Pig']);

    //Peccaries
    //Family: Tayassuidae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Tayassuidae', 'Collared Peccary']);

    //Hippopotamuses
    //Family: Hippopotamidae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Hippopotamidae', 'Common Hippopotamus']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Hippopotamidae', 'Pygmy Hippopotamus']);

    //Camels and Relatives
    //Family: Camelidae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Camelidae', 'Guanaco']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Camelidae', 'Llama']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Camelidae', 'Vicuna']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Camelidae', 'Alpaca']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Camelidae', 'Wild Bactrian Camel']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Camelidae', 'Dromedary']);

    //Deer
    //Family: Cervidae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Leaf Muntjac']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Muntjac']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Common Fallow Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Axis Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Sambar']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Western Red Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Sika']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Pere David\'s Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Mule Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'White Tailed Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Marsh Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'Southern Pudu']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Deers', 'European Roe Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Big Deers', 'Reindeer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Cervidae', 'Big Deers', 'Moose']);

    //Chevrotains
    //Family: Traguilidae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Traguilidae', 'Water Chevrotain']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Traguilidae', 'White-Spotted Chevrotain']);

    animalKingdom.setWeight(['Mammalia', 'Artiodactyla', 'Traguilidae'], 4);

    //Musk Deer
    //Family: Moschidae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Moschidae', 'Alpine Musk Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Moschidae', 'Siberian Musk Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Moschidae', 'Anhui Musk Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Moschidae', 'Dwarf Musk Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Moschidae', 'Black Musk Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Moschidae', 'Kashmir Musk Deer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Moschidae', 'White-Bellied Musk Deer']);

    //Pronghorn
    //Family: Antilocapridae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Antilocapridae', 'Pronghorn']);

    //Giraffe and Okapi
    //Family: Giraffidae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Giraffidae', 'Okapi']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Giraffidae', 'Northern Giraffe']);

    //Cattle and Relatives
    //Family: Bovidae
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', '']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Deer-Likes', 'Western Sitatunga']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Deer-Likes', 'Bongo']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Deer-Likes', 'Nyala']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Deer-Likes', 'Ethiopian Bushbuck']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Deer-Likes', 'Zambesi Kudu']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Deer-Likes', 'Common Eland']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Deer-Likes', 'Chousingha']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Deer-Likes', 'Anoa']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Cow-Likes', 'Nilgai']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Cow-Likes', 'Asian Wild Buffalo']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Cow-Likes', 'Cape Buffalo']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Cow-Likes', 'Banteng']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Cow-Likes', 'Kouprey']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Cow-Likes', 'Yak']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Cow-Likes', 'European Bison']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Cow-Likes', 'Gaur']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Cow-Likes', 'Domestic Cattle']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Walter\'s Duiker']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Common Duiker']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Defassa Waterbuck']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Kafue Flats Lechwe']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Puku']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Ugandan Kob']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Bohor Reedbuck']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Roan Antelope']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Southern Sable Antelope']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Scimitar-Horned Oryx']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Gemsbok']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Addax']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Bontebok']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Western Tsessebe']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Red Hartebeest']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Blue Wildebeest']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Cape Klipspringer']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Southern Oribi']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Steenbok']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Kirk\'s Dik-Dik']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Blackbuck']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Impala']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Southern Gerenuk']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Kalahari Springbok']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Eastern Thomson\'s Gazelle']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Antelopes', 'Mongolian Saiga']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Mountain Goat']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Himalaya Tahr']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Alpine Chamois']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Alpine Ibex']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Muskox']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Wild Goat']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Markhor']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Greater Blue Sheep']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Barbary Sheep']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Altai Argali']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Anatolian Sheep']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Bighorn Sheep']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Domestic Sheep']);
    animalKingdom.addNodes(['Mammalia', 'Artiodactyla', 'Bovidae', 'Goats', 'Fairy Goat']);


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