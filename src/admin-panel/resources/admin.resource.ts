import { ResourceWithOptions } from 'adminjs';
import { AdminUserSchema } from 'src/users/entities/adminUser.entity';

const AdminResource: ResourceWithOptions = {
  resource: AdminUserSchema,
  options: {},
};

export default AdminResource;
