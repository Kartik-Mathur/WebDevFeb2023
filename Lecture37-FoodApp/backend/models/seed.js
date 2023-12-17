const Food = require('./foodModel');
const foodDetails = [
    {
        name: 'Papita',
        price: 40, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQZJutAjEFDRASj7gNf14L6IcbTykl8Zwog&usqp=CAU',
        description: 'Best fruit in market'
    },
    {
        name: 'Paneer Tikka',
        price: 140, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7RVCPPD7xzM0BJGTS04SAi9qReHqQb3I3tA&usqp=CAU',
        description: 'Best tikka in town'
    },
    {
        name: 'Karela ki sabzi',
        price: 150, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRl-Yo2SNah6g6wua5BGOUktG5-x4G7UiFww&usqp=CAU',
        description: 'Ekdum Kadva hai'
    },
    {
        name: 'Pizza',
        price: 400, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGl1W2ddSzjYQ7C5y96GuL9Dq0IoyLp-wD-w&usqp=CAU',
        description: 'Best fruit in market'
    },
    {
        name: 'Papita',
        price: 40, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQZJutAjEFDRASj7gNf14L6IcbTykl8Zwog&usqp=CAU',
        description: 'Best fruit in market'
    }
]

Food.insertMany(foodDetails);