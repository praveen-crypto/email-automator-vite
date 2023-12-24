
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import {  Button } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import './GraphDetail.css';
import MuiDoughnutChart from '../Graph/MuiDoughnutChart';
import { getRndInteger } from '../../util';



const GraphDetail = (props: { graphIcon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; Title: string }) => {
    
    let total = getRndInteger(200,2000);

    let minPart = Math.floor(total * 0.1);
    let remaining = total - minPart * 4;

    let extra1 = Math.floor(Math.random() * remaining);
    let extra2 = Math.floor(Math.random() * (remaining - extra1));
    let extra3 = Math.floor(Math.random() * (remaining - extra1 - extra2));
    let extra4 = remaining - extra1 - extra2 - extra3;

    let part1 = minPart + extra1;
    let part2 = minPart + extra2;
    let part3 = minPart + extra3;
    let part4 = minPart + extra4;

    // console.log({part1, part2, part3, part4, total});
    // console.log([Math.floor(part1/total*100),Math.floor(part2/total*100),Math.floor(part3/total*100),Math.floor(part4/total*100)]);

    return (
        <div className="graphDetail">
            <div className="header">
                <div className="left">
                    <div className="graphIcon">
                        {props.graphIcon} 
                    </div>
                    <span className="graphDetailTitle">
                        {props.Title}
                    </span>
                </div>

                <Button className='viewMoreButton' endIcon={<KeyboardArrowRightOutlinedIcon />}>
                    View all Categories 
                    {/* <i className="fa-sharp fa-regular fa-chevron-right"></i> */}
                </Button>
            </div>
            <div className="graph">
                <div className="left">
                    {/* <span className="graphText">
                        <span className='light'>Catergorised</span>
                        <span className='dark'>1,236</span>
                        <span className='light'>of 2,000</span>
                    </span> */}
                    <MuiDoughnutChart data={[Math.floor(part1 / total * 100), Math.floor(part2 / total * 100), Math.floor(part3 / total * 100), Math.floor(part4 / total * 100)]} />
                </div>
                <div className="right">
                    <div className="container">
                        <div className="category">
                            <div className="category-name newsletter">Newsletter</div>
                            <div className="value">{part1}</div>
                        </div>
                        <div className="category ">
                            <div className="category-name spam">Spam</div>
                            <div className="value">{part2}</div>
                        </div>
                        <div className="category ">
                            <div className="category-name other">Other Categories(10)</div>
                            <div className="value">{part3}</div>
                        </div>
                        <div className="category ">
                            <div className="category-name uncategorized">Uncategorized</div>
                            <div className="value">{part4}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphDetail;