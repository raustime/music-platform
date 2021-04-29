import { useEffect } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from "@material-ui/icons";

import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';


const Player = () => {
    const track: ITrack = { _id: "23123123123", name: "track 1", text: "text song 1", artist: "artist 1", listens: 0, picture: "pic1.jpg", audio: "song1.mp3", comments: [] };
    const active = false;



    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {!active
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={0} right={100} onChange={() => ({})} />
        </div>
    );
};

export default Player;
