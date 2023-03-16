import { Typography,  Card, CardContent, CardMedia, CssBaseline, Grid, Container, CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import Services from '../Services/Services';
const LandingPage = () => {

    return (
        <>
            <CssBaseline />
            <main>
                <div>
                    <Container maxWidth='lg'>
                        <Typography variant="h2" align='center' gutterBottom mt={18} mb={2}>Free Consulting</Typography>
                        <Typography variant="p" color='text.primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad sapiente vel necessitatibus blanditiis modi, quam impedit ipsa ab nihil ex earum iure, tempore numquam velit. Aut minima molestiae inventore. Lorem ipsum dolor.</Typography> <br />
                        <Stack direction="row" spacing={3} align='center' mb={15} mt={5}>
                            <Button variant='contained' color='primary' size='large' >Get Started Now</Button>
                            <Button variant='outlined' color='primary' size='large'>Explore Our Services!</Button>
                        </Stack>
                        <div>
                            < Grid container spacing={2} justify='center'>
                                <Grid item xs={4}>
                                    <Card sx={{ maxWidth: 300 }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="232"
                                                image="/static/images/cards/contemplative-reptile.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{ maxWidth: 300 }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="232"
                                                image="/static/images/cards/contemplative-reptile.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{ maxWidth: 300 }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="232"
                                                image="/static/images/cards/contemplative-reptile.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                         <Services/>
                    </Container>

                </div>
            </main>


        </>

    )
}
export default LandingPage;