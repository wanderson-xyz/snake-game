const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const size = 30
const snake = [
    { x: 300, y: 330 },
    { x: 300, y: 300 }
]

let direction, loopId

const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    snake.forEach((position, index) => {

        if (index == snake.length - 1) {
            ctx.fillStyle = "#F0FFF0"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}

const moveSnack = () => {
    if(!direction) return 

    const head = snake[snake.length - 1]


    if (direction == "right") {
        snake.push({ x: head.x + size, y: head.y })
    }

    if (direction == "left") {
        snake.push({ x: head.x - size, y: head.y })
    }

    if (direction == "down") {
        snake.push({ x: head.x, y: head.y +  size })
    }

    if (direction == "up") {
        snake.push({ x: head.x, y: head.y - size })
    }

    snake.shift()
}

    const gameLoop = () => {
        clearInterval(loopId)
    ctx.clearRect(0, 0, 600, 600)

    moveSnack()
    drawSnake()
    

    loopId = setTimeout(() => {
        gameLoop()
    }, 200)
}

gameLoop()

document.addEventListener("keydown", ({key}) => {
    if(key == "ArrowRight" && direction != "left") {
        direction = "right"
    }

    else if(key == "ArrowLeft" && direction != "right") {
        direction = "left"
    }

    else if(key == "ArrowUp" && direction != "down") {
        direction = "up"
    }

    else if(key == "ArrowDown" && direction != "up") {
        direction = "down"
    }
})





