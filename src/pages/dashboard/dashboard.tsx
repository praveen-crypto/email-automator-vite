import { useEffect } from "react";
import LabelDetail from "../../components/LabelDetail/LabelDetail";
import './dashboard.css';

const Dashboard = (props: { setTitle: (arg0: string) => void; }) => {
    
    useEffect(() => {
        props.setTitle("Dashboard")
    }, []);
    
    return (
        

        <div className="dashboard">
            <div className="labelDetailContainer">
                <LabelDetail labelIcon='<i className="far fa-inbox"></i>' />
            </div>
            
            
            <h3>Dashboard</h3>
        </div>
        
    )
}

export default Dashboard;