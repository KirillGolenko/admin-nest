import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { User } from './users/entities/user.entity';

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'lolilop9090',
  database: 'postgres',
  entities: [User],
  synchronize: true,
};

export = ormconfig;
