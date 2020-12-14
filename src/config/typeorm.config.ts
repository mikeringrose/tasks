import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_URL,
  port: 5432,
  username: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  database: 'tasks_management',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
