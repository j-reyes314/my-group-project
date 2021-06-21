import { Grid } from "@material-ui/core";
import React from "react";

function FormRow({arr}) {
    console.log(arr);
    return (
        <React.Fragment>
            <Grid item xs={4} wrap="nowrap">
                {arr[0]}
            </Grid>
            <Grid item xs={4}>
                {arr[1]}
            </Grid>
            <Grid item xs={4}>
                {arr[2]}
            </Grid>
            <Grid item xs={4}>
                {arr[3]}
            </Grid>
        </React.Fragment>
    );
}

export default FormRow;