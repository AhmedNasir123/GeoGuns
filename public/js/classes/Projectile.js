class Projectile {
<<<<<<< HEAD
  constructor({ x, y, radius, color, velocity }) {
=======
  constructor({ x, y, radius, color = 'white', velocity }) {
>>>>>>> 3f0bfaa9f925e8bb81a3155298e6443ff59edc3e
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }

  update() {
    this.draw()
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
  }
}
