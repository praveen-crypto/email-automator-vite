import { useEffect } from "react";

const Folder = (props: { setTitle: (arg0: string) => void; }) => {


    useEffect(() => {
        props.setTitle("Folder")
    }, []);

    return (
    
        <div><h2> Inbox</h2></div>
    )
}

export default Folder;




