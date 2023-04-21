import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Card, CardContent, Toolbar } from "@mui/material";

const theme = createTheme();

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color="primary"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              ExecuTrack
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card variant="outlined" sx={{ mt: 1, minWidth: "70%" }}>
              <CardContent>Hello World!</CardContent>
            </Card>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}
