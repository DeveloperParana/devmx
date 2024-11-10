import { LearnDatabaseModule } from './learn-database.module';
import { SkillsController } from './controllers';
import { Module } from '@nestjs/common';

@Module({
  imports: [LearnDatabaseModule],
  controllers: [SkillsController],
})
export class LearnResourceModule {}
