import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Card, Grid } from "@material-ui/core";
import { useRouter } from "next/router"
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        { _id: "23123123123", name: "track 1", text: "text song 1", artist: "artist 1", listens: 0, picture: "pic1.jpg", audio: "song1.mp3", comments: [] },
        { _id: "23123123124", name: "track 2", text: "text song 2", artist: "artist 2", listens: 0, picture: "pic2.jpg", audio: "song2.mp3", comments: [] },
        { _id: "23123123125", name: "track 3", text: "text song 3", artist: "artist 3", listens: 0, picture: "pic3.jpg", audio: "song3.mp3", comments: [] },
    ];
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index;
