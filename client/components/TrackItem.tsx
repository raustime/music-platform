import { Card, Grid, IconButton } from "@material-ui/core";
import { ITrack } from "../types/track";
import { useRouter } from "next/router"

import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@material-ui/icons";

interface TrackItemProps {
    track: ITrack,
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    const router = useRouter();
    return (
        <div>
            <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
                <IconButton onClick={(e) => e.stopPropagation()}>
                    {active ? <Pause /> : <PlayArrow />}
                </IconButton>
                <img width={70} height={70} src={track.picture} />
                <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                    <div>{track.name}</div>
                    <div style={{ fontSize: '12px', color: 'gray' }}>{track.artist}</div>
                </Grid>
                {active && <div>02:42 / 03:22</div>}
                <IconButton style={{ marginLeft: 'auto' }} onClick={(e) => e.stopPropagation()}>
                    <Delete />
                </IconButton>
            </Card>
        </div>
    )
}

export default TrackItem;
