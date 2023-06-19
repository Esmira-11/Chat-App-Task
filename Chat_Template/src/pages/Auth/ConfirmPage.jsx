import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    Alert,
  } from "@mui/material";
  import { useFormik } from "formik";
  import { paperStyle } from "./AuthStyles";
  import { singInValidations } from "./validations";

function ConfirmPage() {

    const { handleSubmit, handleChange, touched, values, errors } = useFormik({
        initialValues: {
          email: "",
          code: "",
        },
        validationSchema: singInValidations,
        onSubmit: ({ email, code }, bag) => {
        },
      });

  return (
    <>
     <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid textAlign="center" marginBottom={2}>
            <Typography variant="h5" fontWeight="bold">
              Confirm Page
            </Typography>
            <Typography variant="caption">
              Please fill this from !
            </Typography>
          </Grid>
          <Grid>
            {errors.general && <Alert severity="error">{errors.general}</Alert>}
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              variant="standard"
              placeholder="Enter you email"
              onChange={handleChange}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              fullWidth
              type="number"
              name="number"
              label="Code"
              variant="standard"
              placeholder="Enter the code sent to your email"
              onChange={handleChange}
              value={values.code}
              error={touched.code && Boolean(errors.code)}
              helperText={touched.code && errors.code}
            />
            <Grid marginTop={3}>
              <Button
                fullWidth
                textAlign="center"
                type="submit"
                variant="contained"
                color="primary"
              >
                 Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  )
}

export default ConfirmPage