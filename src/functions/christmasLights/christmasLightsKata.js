//https://kata-log.rocks/christmas-lights-kata

const result = grid => grid.reduce((total, num) => total + num.reduce((total, num) =>total + num), 0, 0);

/*
//First Part
const turnOff = (coordinates, grid) => {
    for(let i = coordinates[0]; coordinates[2] > i; ++i) {
        grid[i].fill(0, coordinates[1], coordinates[3])
    }
}
const turnOn = (coordinates, grid) => {
    for(let i = coordinates[0]; coordinates[2] > i; ++i) {
        grid[i].fill(1, coordinates[1], coordinates[3])
    }
}
const toggle = (coordinates, grid) => {
    for(let i = coordinates[0]; coordinates[2] > i; ++i) {
        
        for(let j = coordinates[1]; coordinates[3] > j; ++j) {
            grid[i][j] === 0 ? grid[i][j] = 1: grid[i][j] = 0;
        }
    }
}
*/

//Second Part
const turnOff = (coordinates, grid) => {
    for(let i = coordinates[0]; coordinates[2] > i; ++i) {
        for(let j = coordinates[1]; coordinates[3] > j; ++j) {
            grid[i][j] === 0 ? null: grid[i][j] -= 1;
        }
    }
}
const turnOn = (coordinates, grid) => {
    for(let i = coordinates[0]; coordinates[2] > i; ++i) {
        for(let j = coordinates[1]; coordinates[3] > j; ++j) {
            grid[i][j] += 1;
        }
    }
}
const toggle = (coordinates, grid) => {
    for(let i = coordinates[0]; coordinates[2] > i; ++i) {
        for(let j = coordinates[1]; coordinates[3] > j; ++j) {
            grid[i][j] += 2;
        }
    }
}

const
    pattern = 0,
    times = 1000,
    column = Array(times).fill(pattern).flat(),
    grid = [];

for(let i = times; i > 0; --i) {
    grid.push([...column])
}

turnOn([887, 9, 959, 629], grid)
turnOn([454, 398, 844, 448], grid)
turnOff([539, 243, 559, 965], grid)
turnOff([370, 819, 676, 868], grid)
turnOff([145, 40, 370, 997], grid)
turnOff([301, 3, 808, 453], grid)
turnOn([351, 678, 951, 908], grid)
toggle([720, 196, 897, 994], grid)
toggle([831, 394, 904, 860], grid)

console.log(result(grid))