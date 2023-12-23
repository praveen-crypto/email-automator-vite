import { useEffect } from "react";

const Inbox = (props: { setTitle: (arg0: string) => void; }) => {
    
    useEffect(() => {
        props.setTitle("Inbox")
    }, []);
    
    return <div><h2> Inbox</h2></div>
}

export default Inbox;

