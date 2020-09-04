/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) {
        return []
    }

    let visited = {}
    let direction = 'right'
    
    const getNextDirection = direction => {
        switch (direction) {
            case 'right': return 'down'
            case 'down': return 'left'
            case 'left': return 'up'
            case 'up': return 'right'
        }
    }
    
    const getNextPair = (i, j, direction) => {
        switch (direction) {
            case 'right': return [i, j+1]
            case 'down': return [i+1, j]
            case 'left': return [i, j-1]
            case 'up': return [i-1, j]
        }
    }

    const hasVisited = (i, j) => visited[i] && visited[i][j]
    
    const isOutOfBounds = (i, j) => i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length
    
    
    let output = []
    for (let i = 0, j = 0;;) {
        if (hasVisited(i, j) || isOutOfBounds(i, j)) {
            break
        }
        
        output.push(matrix[i][j])
        visited[i] = visited[i] || {}
        visited[i][j] = 1
        
        let nextPair = getNextPair(i, j, direction)
        if (isOutOfBounds(nextPair[0], nextPair[1]) || hasVisited(nextPair[0], nextPair[1])) {
            direction = getNextDirection(direction)
            nextPair = getNextPair(i, j, direction)
        }
        i = nextPair[0]
        j = nextPair[1]
    }
  
    return output
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1]]))