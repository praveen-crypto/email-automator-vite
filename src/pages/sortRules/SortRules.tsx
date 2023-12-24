import { useEffect, useState, useRef } from "react";
import { Switch, Checkbox, MenuItem, Modal, Box, FormControl, Select, InputLabel, InputAdornment, TextField, Button, IconButton  } from '@mui/material'

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from "dayjs";
import {getDataFromStorage, setDataToStorage} from "../../storage";

import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import './SortRules.css'
import { getRndInteger } from "../../util";

const RowItem = (props: any) => {
    return (
        <div className="row-item">
            <div className="visible-component">
                <i className="fad fa-equals"></i>
                <Switch defaultChecked size="small" />
                <div className="content">{props.ruleName}</div>
                <div className="button-group">
                    <button className="circle-button"><i className="far fa-pencil"></i></button>
                    <button className="circle-button"><i className="far fa-trash"></i></button>
                </div>
            </div>
            <div className="hidden-component">
                <Button variant="contained" onClick={() => props.handleOpen()} startIcon={<i className="far fa-plus"></i>} >
                    Create a new rule
                </Button>
            </div>
        </div>
    )
}

const getItems = (count: any) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
}));

function ChildModal(props: any) {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 5,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const handleOpen = () => {
        props.setOpenModal(true);
    };

    const handleClose = () => {
        props.setOpenModal(false);
    };

    const checkRuleConflictError = () => {

        if(parseInt(props.archiveDate) <= parseInt(props.deleteDate)){
            handleClose();  props.setSlide(1);
        }
        
    }

    return (
        <>
            {/* <Button onClick={handleOpen}>Open Child Modal</Button> */}
            <Modal
                open={props.openModal}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                // style={{backgroundColor:'#FFFFFF',height:"100%",width:"100%"}}
            >
                
                <Box sx={{ ...style, width: 400, height: 'auto'}} className="sorting-rules-section" >
                    <h2 id="child-modal-title">Rule Conflict</h2>
                    <p id="child-modal-description">
                        Period for archive should be lesser than period for delete
                    </p>
                    <div className="container" style={{ border: "1px solid lightgrey", padding: 10 }}>
                        <div className="form-group">
                            <Checkbox defaultChecked size="small" />
                            <label htmlFor="" style={{ width: "60%" }} className="lightText" >Archive if not read within</label>
                            <select style={{ width: '40%' }} value={props.archiveDate} onChange={(e)=>props.setArchiveDate(e.target.value)} >
                                <option value="1">1 month</option>
                                <option value="2">2 month</option>
                                <option value="3">3 month</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Checkbox defaultChecked size="small" />
                            <label htmlFor="" style={{ width: "60%" }} className="lightText" > Delete if not read within</label>
                            <select style={{ width: '40%' }}  value={props.deleteDate} onChange={(e)=>props.setDeleteDate(e.target.value)}>
                                <option value="1">1 month</option>
                                <option value="2">2 month</option>
                                <option value="3">3 month</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-row">
                        <button className="button inverse" onClick={handleClose}>Cancel</button>
                        <button className="button" onClick={checkRuleConflictError}>Apply changes</button>
                    </div>
                </Box>
                
            </Modal>
        </>
    );
}

const SortRules = (props: { setTitle: (arg0: string) => void; }) => {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [slide, setSlide] = useState(0);

    const [tagList, setTagList] = useState('');
    const tagArea = useRef();
    const inputArea = useRef();

    const [data, setData] = useState([]);

    const [archiveDate, setArchiveDate] = useState('1');
    const [deleteDate, setDeleteDate] = useState('1');

    const [isArchiveCheckboxActive, setIsArchiveCheckboxActive] = useState(false);
    const [isDeleteCheckboxActive, setIsDeleteCheckboxActive] = useState(false);

    const [ruleName, setRuleName] = useState('');

    const [storageData, setStorageData] = useState([]);

    // Function to fetch data from storage on component mount
    useEffect(() => {
        const storedData = getDataFromStorage('myData');
        if (storedData) {
            setStorageData(storedData);
                        
            setData(storedData);

            console.log(storedData);
        }
    }, []);

    const updateData = newData => {
        setDataToStorage('myData', newData);
        setData(newData);
    };

    const addItem =(newItem) => {
        const newData = [...storageData, newItem];
        updateData(newData);
    };

    const removeItem = (index) => {
        const newData = [...storageData];
        newData.splice(index, 1);
        updateData(newData);
    };

    useEffect(() => {
        props.setTitle("Sorting Rules")
    }, []);
    
    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
        setSlide(0)
        window.location.reload();
    }

    const deleteTag = (e: any) => {
        e.target.parentElement.parentElement.remove()
        if (tagArea.current.children.length === 0) {
            inputArea.current.placeholder = "You can enter multiple words"
        }
    }
    
    const addTag = (text: string) => {
        let tag_area = tagArea.current;

        let tag = document.createElement('div');
        tag.classList.add('tag')

        let span = document.createElement('span');
        span.textContent = text

        let button = document.createElement('button');
        button.onclick = deleteTag

        let i = document.createElement('i');
        i.classList.add('far', 'fa-close')
        button.appendChild(i)
        
        tag.appendChild(span);
        tag.appendChild(button);
        
        tag_area.appendChild(tag)
    }

    const checkForSpace = (e: any) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            addTag(e.target.value);
            let tag = tagList;
            
            if (tag.toString().length === 0){
                tag = String(e.target.value).trim();
            }
            else {
                tag = tag +', '+ e.target.value;
            }
            
            setTagList(tag);

            e.target.value = "";
            
            console.log({tag});
        }

        e.target.placeholder = ""
    }

    const checkForErrors = () => {
        console.log({ruleName, tagList});
        if(ruleName.length < 2 || tagList.length < 2 ) {
            return
        }
        else {
            if( (parseInt(archiveDate) > parseInt(deleteDate)) && (isArchiveCheckboxActive && isDeleteCheckboxActive)  ) {
                setOpenModal(true)
            }
            else {
                setSlide(1)
            }
        }

    }

    const reorder = (list : any, startIndex:any, endIndex:any) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        
        return result;
    };

    const onDragEnd = (result:any) => {

        console.log(result);

        // If the destination is null, do nothing    
        if (!result.destination) {
            return;
        }
        
        // Reorder the data and update the state    
        let newData = reorder(
            data,
            result.source.index,
            result.destination.index
        );
        
        setData(newData);
    };

    const createRule = () => {

        console.log(ruleName, tagList, archiveDate, deleteDate);
        
        let rule = {'id': String(storageData.length) , 'ruleName': ruleName, 'tagList': tagList, 'triggerNum': getRndInteger(3,20), 'emailImpacted': getRndInteger(1,30), 'lastTriggeredOn': '21-12-2023'  }
        
        addItem(rule);
        handleClose();

    }

    return (
        <section className="sorting-rules-section">
            
            {/* Header */}
            <div className="flex-row">

                {/* <div className="search-box">
                    <input type="text" name="search" placeholder="Search..." />
                    <i className="far fa-search"></i>
                </div> */}

                <TextField
                    className="search-box"
                    size="small"
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <i className="far fa-search"></i>
                        </InputAdornment>
                    ),
                    }}
                    
                />

                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                    <InputLabel id="filter-by-label">Filter by</InputLabel>
                    <Select
                        labelId="filter-by-label"
                        id="demo-select-small"
                        value=''
                        label="Filter by"
                        onChange={(e) => {console.log(e.target.value)} }
                    >
                        <MenuItem value={10}>Filter by</MenuItem>
                    </Select>
                </FormControl>
            </div>
            
            {/* Draggable List */}
            { storageData.length > 0 ? 
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div className="item-list" 
                            ref={provided.innerRef} 
                            {...provided.droppableProps}>
                                {data.map((item, index) => (
                                    <Draggable
                                        key={item['id']}
                                        draggableId={item['id']}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                <RowItem handleOpen={handleOpen} ruleName={item['ruleName']} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                :
                <Button variant="contained" onClick={() => handleOpen()} startIcon={<i className="far fa-plus"></i>} >
                    Create a new rule
                </Button>
            }
            
            <div className={`outerModal ${open ? "" : "hide"}`}>
                <div className={`modal ${open ? "" : "hide"}`}>
                    <IconButton onClick={() => handleClose()}><HighlightOffOutlinedIcon/></IconButton>

                    <div className="modal__inner">
                        {
                            slide === 0 ?
                                <div className="createRuleModal">
                                    <strong>Step 1: Name your rule</strong>
                                    <div className="form-group mb">
                                        <InputLabel id="rule-name">Rule name</InputLabel>
                                        <TextField sx={{ width: '100%' }} value={ruleName} onChange={(e) => {setRuleName(e.target.value); } } id="outlined-basic" size="small" label="" placeholder="Enter a name for your rule" variant="outlined" />
                                    </div>
                                    <strong>Step 2: Choose your criteria <small className="light">(*Minimum one field should be entered)</small></strong>
                                    <div className="form-group mb">
                                        <InputLabel id="subject">Subject contains</InputLabel>
                                        <div className="input">
                                            <div className="tag-area" ref={tagArea}></div>
                                            {/* <input type="text" className="edgeless" placeholder="You can enter multiple words" onKeyUp={checkForSpace} ref={inputArea} /> */}
                                            
                                            <TextField sx={{ "& fieldset": { border: 'none' }, width: '100%' }} className="edgeless" onKeyUp={checkForSpace} size="small" ref={inputArea} placeholder="You can enter multiple words" variant="outlined" 
                                            // InputProps={{ disableUnderline: true }} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb">
                                        <InputLabel id="subject">Period</InputLabel>

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <MobileDatePicker  defaultValue={dayjs()}  slotProps={{ textField: { size: 'small' } }} /> - 
                                            <MobileDatePicker defaultValue={dayjs()} slotProps={{ textField: { size: 'small' } }} />
                                        </LocalizationProvider>
                                    </div>
                                    <strong>Step 3: Choose actions to be done <small className="light">(*Minimum one field should be entered)</small></strong>
                                    <div className="step-3">
                                        <FormControl  size="small" className="archiveSelector">
                                            <Checkbox checked={isArchiveCheckboxActive} onClick={() => { setIsArchiveCheckboxActive(!isArchiveCheckboxActive) }} size="small" />
                                            <span id="archive-label">Archive if not read within</span>
                                            <Select labelId="archive-label"
                                                className="ruleMonthSelector"
                                                // id="demo-select-small"
                                                value={archiveDate}
                                                // label="Filter by"
                                                onChange={(e)=>setArchiveDate(e.target.value)}
                                                disabled={!isArchiveCheckboxActive}
                                            >
                                                <MenuItem value={1}>1 Month</MenuItem>
                                                <MenuItem value={2}>2 Month</MenuItem>
                                                <MenuItem value={3}>3 Month</MenuItem>
                                                <MenuItem value={4}>4 Month</MenuItem>
                                                <MenuItem value={5}>5 Month</MenuItem>
                                                <MenuItem value={6}>6 Month</MenuItem>
                                                <MenuItem value={12}>12 Month</MenuItem>
                                            </Select>
                                        </FormControl>
                                        
                                        <FormControl  size="small" className="deleteSelector">
                                            <Checkbox checked={isDeleteCheckboxActive} onClick={() => { setIsDeleteCheckboxActive(!isDeleteCheckboxActive) }} size="small" />
                                            <span id="delete-label">Delete if not read within</span>
                                            <Select
                                                labelId="delete-label"
                                                // id="demo-select-small"
                                                value={deleteDate}
                                                className="ruleMonthSelector"
                                                onChange={(e)=>setDeleteDate(e.target.value)}
                                                // label="Filter by"
                                                disabled={!isDeleteCheckboxActive}
                                            >
                                                <MenuItem value={1}>1 Month</MenuItem>
                                                <MenuItem value={2}>2 Month</MenuItem>
                                                <MenuItem value={3}>3 Month</MenuItem>
                                                <MenuItem value={4}>4 Month</MenuItem>
                                                <MenuItem value={5}>5 Month</MenuItem>
                                                <MenuItem value={6}>6 Month</MenuItem>
                                                <MenuItem value={12}>12 Month</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div className="flex-row">
                                        <button onClick={checkForErrors}>Preview Rule</button>
                                    </div>
                                </div>
                                :
                                <>
                                    <div className="flex-row" style={{ justifyContent: 'left' }}>
                                        <button className="circle-button" onClick={() => setSlide(0)}><i className="far fa-chevron-left"></i></button>
                                        <strong>Rule preview</strong>
                                    </div>
                                    <div className="container blue-bg">
                                        <ul>
                                            <li>Subject contains {tagList} as keywords</li>
                                            {/* <li>Period to apply rule is 12 May 2023 - 13 May 2023</li> */}
                                            <li>Archive if not read within {archiveDate} month</li>
                                            <li>Delete if not read within {deleteDate} months</li>
                                            <li>Apply this rule on existing emails</li>
                                        </ul>
                                    </div>
                                    <div className="flex-row">
                                        <button className="inverse" onClick={() => setSlide(0)}>Back</button>
                                        <button onClick={createRule}>Create Rule</button>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
            
            <ChildModal openModal={openModal} setOpenModal={setOpenModal} setSlide={setSlide} archiveDate={archiveDate} setArchiveDate={setArchiveDate} deleteDate={deleteDate} setDeleteDate={setDeleteDate} />
        </section>
    )
}

export default SortRules;



