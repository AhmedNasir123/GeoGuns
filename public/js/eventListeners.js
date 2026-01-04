addEventListener('click', (event) => {

    const playerPosition = {
        x: frontEndPlayers[socket.id].x,
        y: frontEndPlayers[socket.id].y
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 3f0bfaa9f925e8bb81a3155298e6443ff59edc3e
    const angle = Math.atan2(
        event.clientY * window.devicePixelRatio - playerPosition.y,
        event.clientX * window.devicePixelRatio - playerPosition.x
    );
    // const velocity = {
    //     x: Math.cos(angle) * 5,
    //     y: Math.sin(angle) * 5
    // };

<<<<<<< HEAD
    socke.emit('shoot', {
=======
    socket.emit('shoot', {
>>>>>>> 3f0bfaa9f925e8bb81a3155298e6443ff59edc3e
        x: playerPosition.x,
        y: playerPosition.y,
        angle
    })
    // frontEndProjectiles.push(
    //     new Projectile({
    //         x: playerPosition.x,
    //         y: playerPosition.y,
    //         radius: 5,
    //         color: 'white',
    //         velocity
    //     })
    // );
<<<<<<< HEAD
=======

    console.log(frontEndProjectiles);
>>>>>>> 3f0bfaa9f925e8bb81a3155298e6443ff59edc3e
});
