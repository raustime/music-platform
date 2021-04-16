
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";


@Module({
    imports: [
                MongooseModule.forRoot('mongodb+srv://admin2:333333@ochvaldclaster.wffwt.mongodb.net/music-platform?retryWrites=true&w=majority'),
                TrackModule,
                FileModule
            ],
    controllers: [],
    providers: []
})
export class appModule {

}