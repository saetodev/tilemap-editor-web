const tilemap = new Set()

function addTile(x, y) {
    tilemap.add(`${x},${y}`)
}

function renderTileMap(context) {
    for (const pos of tilemap) {
        parts = pos.split(",")

        x = parseInt(parts[0])
        y = parseInt(parts[1])

        rx = x * TILE_SIZE
        ry = y * TILE_SIZE
        rw = TILE_SIZE
        rh = TILE_SIZE

        context.fillStyle = "black"
        context.fillRect(rx, ry, rw, rh)
    }
}
