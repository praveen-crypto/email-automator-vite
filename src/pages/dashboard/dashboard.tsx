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
                <LabelDetail labelIcon={<i className="far fa-inbox"></i>} />

                <LabelDetail labelIcon={<i className="fa-regular fa-arrow-down-arrow-up"></i>} />
                
                <LabelDetail labelIcon={<i className="fa-regular fa-box-archive"></i>} />
                
                <LabelDetail labelIcon={<i className="fa-sharp fa-regular fa-trash-can"></i>} />
            </div>
            
            <div className="graphDetailContainer">
                <LabelDetail labelIcon={<i className="far fa-inbox"></i>} />
                
                <LabelDetail labelIcon={<i className="fa-regular fa-arrow-down-arrow-up"></i>} />
            </div>
            
            <h3>Dashboard</h3>
        </div>
        
    )
}

export default Dashboard;