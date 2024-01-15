'use client';
import { BoardContext } from "@/context/BoardContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";


const JoinBoardPage = () => {
    const { username, boardId, setUsername, setBoardId, joinBoard } = useContext(BoardContext);
    const router = useRouter();

    return (
        <div className="">
            <h1>Join Board</h1>
            Username
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  />
            Board ID
            <input type="text" value={boardId} onChange={(e) => setBoardId(e.target.value)}  />
            <button
                onClick={() => {
                    joinBoard();
                    router.push(`/board/session/123456`);
                }}
            >
                Join
            </button>
        </div>
    )
}

export default JoinBoardPage