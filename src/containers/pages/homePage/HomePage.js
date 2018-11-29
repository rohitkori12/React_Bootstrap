import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableContent: {
        records: 3,
        recordsData: [
          {
            Region: '',
            Disease_Name: '',
            Check_Baseline: true,
            Preset_Threshold: '',
            Severity: '',
            Alert_Medium: 'SMS',
            Turn_Off: false
          },
          {
            Region: '',
            Disease_Name: '',
            Check_Baseline: true,
            Preset_Threshold: '',
            Severity: '',
            Alert_Medium: 'SMS',
            Turn_Off: false
          },
          {
            Region: '',
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
      <div>
        <h1>{this.state.tableContent.records}</h1>
      </div>
    );
  }
}

export default HomePage;
