
import {  Button, Stack, Switch } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';

import './RuleUsage.css';

const columns: GridColDef[] = [
  { field: 'status', headerName: 'Status', width: 150, flex: 0.4, sortable: false, renderCell: (params: { row: any; }) => {
      // const onClick = (e) => {
      //   const currentRow = params.row;
      //   return alert(JSON.stringify(currentRow, null, 4));
      // };
      
      return (
        <Stack direction="row" spacing={2}>
          <Switch />
        </Stack>
      );
    } },
  { field: 'ruleName', headerName: 'Rule Name', width: 100, flex: 1 },
  { field: 'triggerNum', headerName: 'Trigger Num', width: 100, flex: 1 },
  { field: 'emailImpacted', headerName: '% of Email Impacted', width: 100, flex: 1 },
  { field: 'lastTriggeredOn', headerName: 'Last Triggered ON',  width: 100, flex: 1 },
  { field: 'tagList', headerName: 'Actions', width: 100, flex: 1, },
];

const RuleUsage = (props) => {

  function DataTable() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={props.rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          // pageSizeOptions={[50, 100]}
        />
      </div>
    );
  }

  return (
    <div className="ruleUsage">
      <div className="header">
        <div className="left">
          <div className="ruleIcon">
            <RuleOutlinedIcon />
          </div>
          <span className="ruleTitle">
            Rule Usage
          </span>
        </div>

        <Button className='viewMoreButton' endIcon={<KeyboardArrowRightOutlinedIcon />}>
          View all Rules
          {/* <i className="fa-sharp fa-regular fa-chevron-right"></i> */}
        </Button>
      </div>
      <div className="table">
        <DataTable />
      </div>
    </div>
  )
}

export default RuleUsage;



