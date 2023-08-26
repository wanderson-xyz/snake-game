const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const size = 30
const snake = [
    {x: 200, y: 200},
    {x: 230, y: 200},
    {x: 260, y: 200}
]

const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    snake.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size)
    })
}

drawSnake()

// ctx.fillStyle = "red"
// ctx.fillRect(300, 300, 50, 100)