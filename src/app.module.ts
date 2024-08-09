import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitesController } from './sites/sites.controller';
import { ContentTypesController } from './content-types/content-types.controller';
import { ContentController } from './content/content.controller';

@Module({
  imports: [],
  controllers: [AppController, SitesController, ContentTypesController, ContentController],
  providers: [AppService],
})
export class AppModule {}
