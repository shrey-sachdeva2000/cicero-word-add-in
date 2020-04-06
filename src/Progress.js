import React from 'react';
import Logo from './assets/logo-filled.png';
import { MuiThemeProvider } from 'material-ui/styles';
import { withTheme } from 'material-ui/styles'
import {Grid, CircularProgress} from '@material-ui/core/';
import { ReactComponent as AccordLogo } from './assets/accord-project.svg';
import {ReactComponent as CiceroLogo} from './assets/Cicero-black.svg';

const Progress = (props) => {
        return (
              <MuiThemeProvider theme={props.theme}>
                  <Grid container direction="row" justify="center" alignItems="center">
                        <div>
                            <h1 style={{align:"center", textAlign: 'center'}}><CiceroLogo className="cicero-logo"/> Word Add-in</h1>
                            <div className="accord-project-logo"><AccordLogo /></div>
                            <h2>Please <a href="https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins">sideload your add-in</a> in Ms-word to see app body.</h2>
                            <CircularProgress style={{ marginLeft:"40%"}} color="primary" />
                        </div>
                  </Grid>
              </MuiThemeProvider>
        );
    }


export default withTheme()(Progress);
