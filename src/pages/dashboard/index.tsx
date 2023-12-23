import { useEffect } from "react";


const Dashboard = (props: { setTitle: (arg0: string) => void; }) => {
    
    useEffect(() => {
        props.setTitle("Sort Rules")
    }, []);
    
    return <div>Dashboard</div>
}

export default Dashboard;