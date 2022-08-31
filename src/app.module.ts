import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RecetaModule } from './receta/receta.module';
import { IngredienteModule } from './ingrediente/ingrediente.module';

@Module({
  imports: [UsuarioModule, RecetaModule, IngredienteModule,
     MongooseModule.forRoot('mongodb://localhost/recetas2')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
