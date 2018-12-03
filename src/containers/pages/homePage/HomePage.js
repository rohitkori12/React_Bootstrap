import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SideBar from '../../../components/sideBar/SideBar';
import SmartDataTable from 'react-smart-data-table';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableContent: {
        records: 3,
        recordsData: [
          {
            Region: 'East',
            Disease_Name: '',
            Check_Baseline: true,
            Preset_Threshold: '',
            Severity: '',
            Alert_Medium: 'SMS',
            Turn_Off: false,
            actions: null
          },
          {
            Region: 'West',
            Disease_Name: '',
            Check_Baseline: true,
            Preset_Threshold: '',
            Severity: '',
            Alert_Medium: 'SMS',
            Turn_Off: false,
            actions: null
          },
          {
            Region: 'North',
            Disease_Name: '',
            Check_Baseline: true,
            Preset_Threshold: '',
            Severity: '',
            Alert_Medium: 'SMS',
            Turn_Off: false,
            actions: null
          }
        ]
      }
    };
  }

  handleDelete(event, idx) {
    alert('Are you sure you want to delete row :' + idx + '?');
    console.log(event, idx);
    event.preventDefault();
    event.stopPropagation();
  }

  onRowClick(event, { rowData, rowIndex, tableData }) {
    alert('Row ' + rowIndex + ' is clicked');
    console.log(rowData, tableData[rowIndex]);
  }

  getHeaders() {
    return {
      region: {
        text: 'Region',
        sortable: false,
        filterable: false
      },
      diseaseName: {
        text: 'Disease_Name',
        sortable: false,
        filterable: false
      },
      checkBaseline: {
        text: 'Check_Baseline',
        sortable: false,
        filterable: false
      },
      presetThreshold: {
        text: 'Preset_Threshold',
        sortable: false,
        filterable: false
      },
      severity: {
        text: 'Severity',
        sortable: false,
        filterable: false
      },
      alertMedium: {
        text: 'Alert_Medium',
        sortable: false,
        filterable: false
      },
      turnOff: {
        text: 'Turn_Off',
        sortable: false,
        filterable: false
      },
      actions: {
        text: 'Actions',
        sortable: false,
        filterable: false,
        transform: (value, idx) => (
          <Button color="danger" onClick={e => this.handleDelete(e, idx)} onKeyDown={e => this.handleDelete(e, idx)}>
            Delete
          </Button>
        )
      }
    };
  }

  render() {
    const headers = this.getHeaders();
    return (
      <div className="row">
        <div className="col-md-2">
          <SideBar />
          <hr />
        </div>
        <div className="col-md-10">
          <p className="text-center">React Smart Data Table</p>

          {/* Using normal table below */}
          {/* <Table size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Region</th>
                <th>Disease_Name</th>
                <th>Check_Baseline</th>
                <th>Preset_Threshold</th>
                <th>Severity</th>
                <th>Alert_Medium</th>
                <th>Turn_Off</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableContent.recordsData.map(function(player, i) {
                return (
                  <tr>
                    <td>{i}</td>
                    {Object.values(player).map(function(item) {
                      return <td>{item}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table> */}

          {/* React Smart Table Implementation */}
          <SmartDataTable
            data={this.state.tableContent.recordsData}
            name="test-table"
            className="ui compact selectable table"
            headers={headers}
            onRowClick={this.onRowClick}
            sortable
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
