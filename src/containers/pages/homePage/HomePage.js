import React, { Component } from 'react';
import { Table } from 'reactstrap';
import SideBar from '../../../components/sideBar/SideBar';

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
            Turn_Off: false
          },
          {
            Region: 'West',
            Disease_Name: '',
            Check_Baseline: true,
            Preset_Threshold: '',
            Severity: '',
            Alert_Medium: 'SMS',
            Turn_Off: false
          },
          {
            Region: 'North',
            Disease_Name: '',
            Check_Baseline: true,
            Preset_Threshold: '',
            Severity: '',
            Alert_Medium: 'SMS',
            Turn_Off: false
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <SideBar />
          <hr />
        </div>
        <div className="col-md-10">
          <p>Main Content</p>
          <Table size="sm">
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
          </Table>
        </div>
      </div>
    );
  }
}

export default HomePage;
