import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { DespesaModule } from './despesa/despesa.module';
import { CategoriaDespesaModule } from './categoria-despesa/categoria-despesa.module';


@Module({
  imports: [UsuarioModule, DespesaModule, CategoriaDespesaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
