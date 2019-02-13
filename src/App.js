import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import CSVReader from 'react-csv-reader'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//  IMPORT COMPONENTS
import CustomHeadTable from './components/HeadTable/'
import CustomizedTable from './components/BodyTable/';
import CustomButton from './components/CustomButton/';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: []
    }
  }
  componentDidMount() {
    // axios.get('http://localhost:4000/time-entries').then(e =>console.log('axios defecto',e)).catch(console.error)
  }
  handleForce = (e) =>{
    console.log('recibiendo: ');
    this.setState({ data: e })
    console.log( e );
  }
  render() {
    const { head, data } = this.state;
    return (
      <div className="App">
        <Paper >
          <Table >
            <TableHead>
              <TableRow>
                {
                  Array.isArray(data) && data.length >0 &&
                  data.map((item, index)=>{
                    if(index == 0){
                    return  item.map((p, q, r)=>{
                        return(
                            <CustomHeadTable
                              key={q}
                              title={p}
                            />
                        )
                      })
                  }
                  })
                }
              </TableRow>
            </TableHead>
            <CustomizedTable/>
          </Table>
        </Paper>
        <section>
          <CSVReader
            cssClass="csv-reader-input"
            onFileLoaded={this.handleForce}
            onError={this.handleDarkSideForce}
            inputId="ObiWan"
          />

        </section>
      </div>
    );
  }
}

export default App;
