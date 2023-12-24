import React, { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow, } from "@mui/material";

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
}));


// A helper function to reorder the data array

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    
    return result;
  };

// The main component
const Table = () => {
    // Use state to store the data  
    const [data, setData] = useState(getItems(8));
    
    // Handle the drag and drop event  
    const onDragEnd = (result) => {

        console.log(result);

        // If the destination is null, do nothing    
        if (!result.destination) {
            return;
        }
        
        // Reorder the data and update the state    
        const newData = reorder(
            data,
            result.source.index,
            result.destination.index
        );

        setData(newData);
    };

    // Render the table
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {data.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <span>{item.content}</span>
                                        {/* <TableCell>{item.email}</TableCell> */}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Table;