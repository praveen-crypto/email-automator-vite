
// import { useEffect } from "react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './LabelDetail.css';
import { IconButton } from "@mui/material";
import { getRndInteger } from '../../util';


const LabelDetail = (props: { labelIcon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; value:number;title:string}) => {
    let upDown = getRndInteger(1,10)%3!=0;
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
            <div className="lowerGroup">
                <div className="middle">
                    <div className="title">{props.title}</div>
                    <div className="value">{props.value}</div>
                </div>
                <div className="bottom">
                    <span className={(upDown?"percentageValueGreen":"percentageValueRed")}>
                        <i className={upDown?"fa-sharp fa-regular fa-chart-line-up":"fa-sharp fa-regular fa-chart-line-down"}></i> {getRndInteger(5,20)}%
                    </span>
                    <span className="title">from previous month</span>
                </div>
            </div>
        </div>
    )
}

export default LabelDetail;