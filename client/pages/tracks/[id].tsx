import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";


function TrackPage() {
    const router = useRouter();
    const track: ITrack = { _id: "23123123123", name: "track 1", text: "text song 1", artist: "artist 1", listens: 0, picture: "pic1.jpg", audio: "song1.mp3", comments: [] };
    return (
        <MainLayout>
            <Button onClick={() => router.push('/tracks')}>
                К списку
           </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={track.picture} width={200} height={200} />
                <div style={{ marginLeft: 30 }}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>

                <TextField
                    label="Ваше имя"
                    fullWidth

                />
                <TextField
                    label="Комментарий"

                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    )
}

export default TrackPage;
