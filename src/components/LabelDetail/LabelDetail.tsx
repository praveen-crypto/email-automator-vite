
// import { useEffect } from "react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './LabelDetail.css';
import { IconButton } from "@mui/material";

const LabelDetail = (props: { labelIcon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    return (
        <div className="labelDetail">
            <div className="top">
                <div className="labelIcon">
                    {props.labelIcon}
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