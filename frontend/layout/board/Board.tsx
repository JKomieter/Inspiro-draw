"use client";
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { Suspense, useContext, useEffect, useState } from 'react';
import FabricHeader from './FabricHeader';
import FabricSidebar from './FabricSidebar';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { Skeleton } from '@mui/material';
import { BoardContext } from '@/context/BoardContext';
import { socket } from '@/socket';
import { fabric } from 'fabric';


const Board = () => {
    const { editor, onReady } = useFabricJSEditor();
    const pathname = usePathname();
    const { setBoardName, newJoin, boardId, setEditor } = useContext(BoardContext);
    const [boardCreated, setBoardCreated] = useState<boolean>(false);

    useEffect(() => {
        const setEditorInstance = async () => {
            if (editor) {
                editor.canvas.allowTouchScrolling = true;
                editor.canvas.renderOnAddRemove = true;
                editor.canvas.setBackgroundColor('#dee0e2', () => {
                    editor.canvas.requestRenderAll();
                });
                setEditor(editor);
            }
        };

        setEditorInstance();

        return () => {
            setEditor(undefined);
        }
    }, [editor?.canvas]);


    useEffect(() => {
        if (!editor) return;
        
        const grid = 20;
        const gridOptions = {
            color: 'rgba(0,0,0,0.5)',
            borderWidth: 1
        };

        editor.canvas.on('after:render', () => {
            const ctx = editor.canvas.getContext();

            ctx.beginPath();

            const width = editor.canvas.width || 0;
            const height = editor.canvas.height || 0;

            for (let i = 0; i <= width / grid; i++) {
                const pos = i * grid;
                ctx.moveTo(pos, 0);
                ctx.lineTo(pos, height);
            }

            for (let i = 0; i <= height / grid; i++) {
                const pos = i * grid;
                ctx.moveTo(0, pos);
                ctx.lineTo(width, pos);
            }

            ctx.closePath();
            ctx.strokeStyle = gridOptions.color;
            ctx.lineWidth = gridOptions.borderWidth;
            ctx.stroke();
        });

        return () => {
            if (editor && editor.canvas) {
                editor.canvas.off('after:render'); // Remove event listener on component unmount
            }
        };
    }, [editor, editor?.canvas]);

    useEffect(() => {
        if (newJoin) console.log('new join', newJoin);
        // send draw event from editor
        editor?.canvas.on('path:created', (e: any) => {
            socket.emit('draw', { boardId, path: e });
        });

        // listen to add circle event from server
        socket.on('add-circle-broadcast', (data: { circle: fabric.ICircleOptions | undefined; }) => {
            try {
                console.log('add circle broadcast', data);
                const circle = new fabric.Circle(data.circle);
                editor?.canvas.add(circle);
            } catch (error) {
                console.error('Error adding to canvas:', error);
            }
        });

        // listen to draw event from server
        socket.on('draw-broadcast', (data: { path: { path: Partial<fabric.Path>; }; }) => {
            try {
                console.log('draw broadcast', data);
                const path = new fabric.Path(data.path.path.path);
                path.set({ ...data.path.path });
                editor?.canvas.add(path);
            } catch (error) {
                console.error('Error adding to canvas:', error);
            }
        });

        // cleeaup
        return () => {
            socket.off('draw-broadcast');
            socket.off('add-circle-broadcast');
            editor?.canvas.off('path:created');
        }
    }, [newJoin, editor]);


    useEffect(() => {
        const boardName = pathname.split('/')[2];
        setBoardName(boardName);
        const sendBoardName = async () => {
            const board = {
                boardName,
                users: ['test'],
            }
            await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/create-board`, board);
            setBoardCreated(true);
        };
        // return () => {
        //     !boardCreated && sendBoardName()
        // };
    }, []);

    return (
        <div className="w-full h-full">
            <FabricHeader />
            <Suspense fallback={<Skeleton className='w-full h-full absolute -z-20' />}>
                <FabricJSCanvas onReady={onReady} className='w-full h-full absolute overflow-scroll' />
            </Suspense>
            <FabricSidebar editor={editor} />
        </div>
    )
}


export default Board;