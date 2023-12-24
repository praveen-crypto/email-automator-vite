import { useEffect, useState } from "react";
import './dashboard.css';

import LabelDetail from "../../components/LabelDetail/LabelDetail";
import GraphDetail from "../../components/GraphDetail/GraphDetail";
import RuleUsage from "./RuleUsage/RuleUsage";
import { getDataFromStorage } from "../../storage";
import { getRndInteger } from '../../util';

const Dashboard = (props: { setTitle: (arg0: string) => void; }) => {
    const [storageData, setStorageData] = useState([]);
    
    useEffect(() => {
        props.setTitle("Dashboard")
    }, []);
    
    // Function to fetch data from storage on component mount
    useEffect(() => {
        const storedData = getDataFromStorage('myData');
        if (storedData) {
            setStorageData(storedData);
            
            //setData(storedData);
            // console.log(getItems(2));
            console.log(storedData);
        }
    }, []);
    
    return (
        <div className="dashboard">
            <div className="labelDetailContainer">
                <LabelDetail labelIcon={<i className="far fa-inbox"></i>} title="Inbox" value={getRndInteger(700,1500)} />
                
                <LabelDetail labelIcon={<i className="fa-regular fa-arrow-down-arrow-up"></i>} title="Sorted" value={getRndInteger(700,1500)}/>
                
                <LabelDetail labelIcon={<i className="fa-regular fa-box-archive"></i>} title="Archived" value={getRndInteger(700,2000)}/>
                
                <LabelDetail labelIcon={<i className="fa-sharp fa-regular fa-trash-can"></i>} title="Deleted" value={getRndInteger(700,1100)}/>
            </div>
            
            <div className="graphDetailContainer">
                <GraphDetail Title='Categories' graphIcon={<i className="far fa-folder"></i>} />

                <GraphDetail Title='Labels' graphIcon={<i className="far fa-tag"></i>} />
            </div>
            
            <RuleUsage rows={storageData}/>
            
        </div>
        
    )
}

export default Dashboard;