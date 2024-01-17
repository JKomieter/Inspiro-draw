const { getDocs, collection, where, query } = require("firebase/firestore");
const { db } = require("../firebase/config");

const boards = {};

const boardHandler = (socket, io) => {
    const drawHandler = ({ boardId, path }) => {
        // send the path to all users in the room
        console.log('draw', boardId, path);
        io.to(boardId).emit('draw-broadcast', { path });
    };

    const joinBoard = async ({ boardId, username }) => {
        console.log(boards[boardId], 'boards', boardId, username);
        if (boards[boardId] && boards[boardId].sessionOpen) {
            socket.join(boardId);
            boards[boardId].users.push({ username, socketId: socket.id });

            io.to(boardId).emit('user-joined-broadcast', { board: boards[boardId] });
            io.emit('user-joined', { username, board: boards[boardId] });
        } else {
            console.log('Board not found');
        }
    };

    const generateBoardId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };

    const createBoard = async ({ boardName, username }) => {
        console.log('create board', boardName, username);
        const boardId = generateBoardId();
        const socketId = socket.id;

        boards[boardId] = { users: [{ username, socketId }], boardName, sessionOpen: true, initiator: username, boardId };
        socket.join(boardId);

        socket.emit('board-created', { board: boards[boardId] });
        socket.broadcast.emit('board-created', { board: boards[boardId] });
    };

    const addCircle = ({ boardId, circle }) => {
        try {
            console.log('add circle', boardId, circle);
            socket.to(boardId).emit('add-circle-broadcast', { circle });
        } catch (error) {
            console.log('Failed to add circle:', error);
        }
    };

    socket.on('draw', drawHandler);
    socket.on('create-board', createBoard);
    socket.on('join-board', joinBoard);
    socket.on('add-circle', addCircle);
};

module.exports = boardHandler;
