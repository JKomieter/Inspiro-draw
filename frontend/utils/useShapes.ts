import { fabric } from "fabric";
import { FabricJSEditor } from "fabricjs-react";
import { socket } from "@/socket";


export const useShapes = (editor: FabricJSEditor | undefined, boardId: string | undefined) => {
    const addCircle = () => {
        const circle = new fabric.Circle({
            radius: 50,
            borderColor: 'black',
            left: 500,
            top: 500,
        });
        editor?.canvas.add(circle);
        socket.emit('add-circle', { boardId, circle });
    }


    const addRectangle = () => {
        const rect = new fabric.Rect({
            width: 200,
            height: 200,
            left: 300,
            top: 300,
            fill: 'transparent',
            borderColor: 'black',
            stroke: 'black',
            strokeWidth: 2,
        });
        editor?.canvas.add(rect);
    }

    const addTriangle = () => {
        const triangle = new fabric.Triangle({
            width: 150,
            height: 150,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            left: 400,
            top: 400,            
        });
        editor?.canvas.add(triangle);
    }

    const addStraightLine = () => {
        const line = new fabric.Line([50, 100, 200, 200], {
            stroke: 'black',
            strokeWidth: 2,
            left: 500,
            top: 500
        });
        editor?.canvas.add(line);
    };

    const addPolygon = () => {
        const polygon = new fabric.Polygon([
            { x: 0, y: 0 },
            { x: 200, y: 0 },
            { x: 100, y: 200 },
            { x: 0, y: 100 }
        ], {
            fill: 'transparent',
            left: 600,
            top: 600,
            stroke: 'black',
            strokeWidth: 2,
        });
        editor?.canvas.add(polygon);
    }


    const addText = () => {
        const text = new fabric.IText('Hello world', {
            left: 500,
            top: 500,
            fontFamily: 'arial black',
            fill: '#333',
            fontSize: 30
        });
        console.log(editor);
        editor?.canvas.add(text);
    }


    const addTextbox = (color: string) => {
        const textbox = new fabric.Textbox('Hello world', {
            left: 500,
            top: 500,
            width: 200,
            height: 600,
            fontSize: 30,
            backgroundColor: color,
        });
        editor?.canvas.add(textbox);
    }

    const addPen = () => {
        if (!editor) return;
        // make pen drawing active
        editor.canvas.isDrawingMode = true;
        editor.canvas.freeDrawingBrush.width = 5;
        editor.canvas.freeDrawingBrush.color = 'red';
    }

    return {
        addCircle,
        addRectangle,
        addTriangle,
        addStraightLine,
        addPolygon,
        addText,
        addTextbox,
        addPen
    }

}