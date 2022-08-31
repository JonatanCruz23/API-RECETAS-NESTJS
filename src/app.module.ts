import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RecetaModule } from './receta/receta.module';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { ConfigModule } from '@nestjs/config'
@Module({
  imports: [UsuarioModule, ConfigModule.forRoot(), RecetaModule, IngredienteModule,
    MongooseModule.forRoot(process.env.MONGO_DB)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
