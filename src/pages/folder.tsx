import { useEffect } from "react";
import Table from "./test";

const Folder = (props: { setTitle: (arg0: string) => void; }) => {


    useEffect(() => {
        props.setTitle("Folder")
    }, []);

    return (
    
        <Table />
    )
}

export default Folder;




