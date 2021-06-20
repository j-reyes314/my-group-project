import { Grid } from "@material-ui/core";
import React from "react";

function FormRow({arr}) {
    return (
        <React.Fragment>
        <Grid item xs={4}>
            {arr[0]}
        </Grid>
        <Grid item xs={4}>
            {arr[1]}
        </Grid>
        <Grid item xs={4}>
            {arr[2]}
        </Grid>
        </React.Fragment>
    );
}

export default FormRow;