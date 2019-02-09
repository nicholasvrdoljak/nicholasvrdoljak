module.exports = (socket) => {
    socket.on('disconnect', () => {
        console.log('The user disconnected', socket.id);
    });

}