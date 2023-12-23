
// import { useEffect } from "react";
import './LabelDetail.css';
import { IconButton } from "@mui/material";

const LabelDetail = (props) => {
    return (
        <div className="labelDetail">
            <div className="top">
                <div className="labelIcon">
                    {props.labelIcon}
                    {/* <i className="far fa-inbox"></i> */}
                </div>
                <IconButton className='moreButtonIcon'>
                    <i className="far fa-ellipsis"></i>
                </IconButton>                
            </div>
            <div className="bottom">
                <div className="title">Inbox</div>
                <div className="value">1,236</div>
            </div>
        </div>
    )
}

export default LabelDetail;