import { useEffect } from "react";


const Labels = (props: { setTitle: (arg0: string) => void; }) => {
    
    useEffect(() => {
        props.setTitle("Labels")
    }, []);
    
    return <div><h2> Labels</h2></div>
}

export default Labels;

