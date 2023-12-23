import { useEffect } from "react";

const SortRules = (props: { setTitle: (arg0: string) => void; }) => {
    
    useEffect(() => {
        props.setTitle("Sort Rules")
    }, []);
    
    return <div><h2> Sort Rules</h2></div>
}

export default SortRules;



