import React from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { DrawerHeader } from "../components/DrawerHeader";
import { Grid } from "@mui/material";
import { GridItem } from "../components/Item";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../../src/Dash.css';
import CollapsibleTable from "../components/CollapsibleTable";

export default function Home() {

  return (
    <>
      <div className="bgcolor">

        <Navbar />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Stack spacing={2} direction={"row-reverse"}>
                  <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                  <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4}>
                <Stack spacing={2} direction={"column"}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <div className="paddingall">
                        <span>$203K</span>
                        <span>Total Income</span>
                      </div>
                    </CardContent>

                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>

                    </CardContent>

                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={30} />
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Card sx={{ height: 160 + 'vh' }}>
                  <CardContent>

                  <CollapsibleTable />
                  </CardContent>

                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>


                  </CardContent>

                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
