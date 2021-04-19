
import { NestFactory } from "@nestjs/core";
import { appModule } from "./app.module";

const start = async ()=>{
    try {
        const PORT= process.env.PROT||5000;
        const app=await NestFactory.create(appModule);
        app.enableCors();
        await app.listen(PORT, ()=>console.log(`server started on port ${PORT}`))
    } catch(e) {

    }
}

start();
