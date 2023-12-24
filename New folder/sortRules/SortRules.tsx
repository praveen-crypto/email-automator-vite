import { useEffect, useState, useRef } from "react";
import { Switch, Checkbox, Button, Modal, Box } from '@mui/material'
import './SortRules.css'

const RowItem = (props: any) => {
    return (
        <div className="row-item">
            <div className="visible-component">
                <i className="fad fa-equals"></i>
                <Switch defaultChecked size="small" />
                <div className="content">News letter set as high priority</div>
                <div className="button-group">
                    <button className="circle-button"><i className="far fa-pencil"></i></button>
                    <button className="circle-button"><i className="far fa-trash"></i></button>
                </div>
            </div>
            <div className="hidden-component">
                <button onClick={()=>props.handleOpen()}> 
                    <i className="far fa-plus"></i> 
                    Create a new rule
                </button>
            </div>
        </div>
    )
}

function ChildModal(props:any) {
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
  
    return (
      <>
        <Button onClick={handleOpen}>Open Child Modal</Button>
        <Modal
          open={props.openModal}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 500 }}>
            <h2 id="child-modal-title">Rule Conflict</h2>
            <p id="child-modal-description">
              Period for archive should be lesser than period for delete
            </p>
            <div className="container" style={{border: "1px solid lightgrey", padding: 10}}>
                <div className="form-group">
                    <Checkbox defaultChecked size="small"/>
                    <label htmlFor="" style={{width: "60%"}}>Archive if not read within</label>
                    <select style={{width: '40%'}}>
                        <option value="1">1 month</option>
                        <option value="2" selected>2 month</option>
                        <option value="3">3 month</option>
                    </select>
                </div>
                <div className="form-group">
                    <Checkbox defaultChecked size="small"/>
                    <label htmlFor="" style={{width: "60%"}}>Delete if not read within</label>
                    <select style={{width: '40%'}}>
                        <option value="1" selected>1 month</option>
                        <option value="2">2 month</option>
                        <option value="3">3 month</option>
                    </select>
                </div>
            </div>
            <div className="flex-row">
                <button className="inverse" onClick={handleClose}>Cancel</button>
                <button onClick={() => {handleClose();props.setSlide(1)}}>Apply changes</button>
            </div>
          </Box>
        </Modal>
      </>
    );
  }

const SortRules = (props: { setTitle: (arg0: string) => void; }) => {
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [slide, setSlide] = useState(0)
    const tagArea = useRef()
    const inputArea = useRef()

    useEffect(() => {
        props.setTitle("Sorting Rules")
    }, []);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setSlide(0)
    }
    const deleteTag = (e:any) => {
        e.target.parentElement.parentElement.remove()
        if(tagArea.current.children.length === 0) {
            inputArea.current.placeholder = "You can enter multiple words"
        }
    }
    const addTag = (text:string) => {
        let tag_area = tagArea.current;

        let tag = document.createElement('div')
        tag.classList.add('tag')

        let span = document.createElement('span')
        span.textContent = text

        let button = document.createElement('button')
        button.onclick = deleteTag

        let i = document.createElement('i')
        i.classList.add('far','fa-close')
        button.appendChild(i)

        tag.appendChild(span)
        tag.appendChild(button)
        
        tag_area.appendChild(tag)
    }
    const checkForSpace = (e:any) => {
        if(e.keyCode === 32 || e.keyCode === 13) {
            addTag(e.target.value)
            e.target.value = ""
        }
        e.target.placeholder = ""
    }
    const checkForErrors = () => {
        // setSlide(1)
        setOpenModal(true)
    }
    return (
        <section className="sorting-rules-section">
            <div className="flex-row">
                <div className="search-box">
                    <input type="text" name="search" placeholder="Search..."/>
                    <i className="far fa-search"></i>
                </div>
                <select name="" id="">
                    <option value="">Filter by</option>
                </select>
            </div>
            <div className="item-list">
                <RowItem handleOpen={handleOpen}/>
                <RowItem handleOpen={handleOpen}/>
                <RowItem handleOpen={handleOpen}/>
                <RowItem handleOpen={handleOpen}/>
            </div>
            <div className={`modal ${open?"":"hide"}`}>
                <button onClick={() => handleClose()}><i className="far fa-close"></i></button>
                <div className="modal__inner">
                    {
                        slide === 0 ?
                        <>
                            <strong>Step 1: Name your rule</strong>
                            <div className="form-group mb">
                                <label htmlFor="">Rule Name</label>
                                <input type="text" placeholder="Enter a name for your rule"/>
                            </div>
                            <strong>Step 2: Choose your criteria <small>(*Minimum one field should be entered)</small></strong>
                            <div className="form-group">
                                <label htmlFor="">Subject contains</label>
                                <div className="input">
                                    <div className="tag-area" ref={tagArea}></div>
                                    <input type="text" className="edgeless" placeholder="You can enter multiple words" onKeyUp={checkForSpace} ref={inputArea}/>
                                </div>
                            </div>
                            <div className="form-group mb">
                                <label htmlFor="">Period</label>
                                <input type="text" defaultValue="12 May 2023 - 13 May 2023"/>
                            </div>
                            <strong>Step 3: Choose actions to be done</strong>
                            <div className="form-group">
                                <Checkbox defaultChecked size="small"/>
                                <label htmlFor="">Archive if not read within</label>
                                <select>
                                    <option value="1">1 month</option>
                                    <option value="2">2 month</option>
                                    <option value="3">3 month</option>
                                </select>
                            </div>
                            <div className="form-group mb">
                                <Checkbox defaultChecked size="small"/>
                                <label htmlFor="">Delete if not read within</label>
                                <select>
                                    <option value="1">1 month</option>
                                    <option value="2">2 month</option>
                                    <option value="3">3 month</option>
                                </select>
                            </div>
                            <div className="flex-row">
                                <button onClick={checkForErrors}>Preview Rule</button>
                            </div>
                        </>
                        :
                        <>
                        <div className="flex-row" style={{justifyContent: 'left'}}>
                            <button className="circle-button" onClick={()=> setSlide(0)}><i className="far fa-chevron-left"></i></button>
                            <strong>Rule preview</strong>
                        </div>
                        <div className="container blue-bg">
                            <ul>
                                <li>Subject contains Frontend, Task as keywords</li>
                                <li>Period to apply rule is 12 May 2023 - 13 May 2023</li>
                                <li>Archive if not read within 1 month</li>
                                <li>Delete if not read within 2 months</li>
                                <li>Apply this rule on existing emails</li>
                            </ul>
                        </div>
                        <div className="flex-row">
                            <button className="inverse" onClick={() => handleClose()}>Back</button>
                            <button onClick={() => handleClose()}>Create Rule</button>
                        </div>
                        </>
                    }
                </div>
            </div>
            <ChildModal openModal={openModal} setOpenModal={setOpenModal} setSlide={setSlide}/>
        </section>
    )
}

export default SortRules;



