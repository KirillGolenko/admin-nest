import { ResourceWithOptions } from 'admin-bro';
import {
  AdminUser,
  AdminUserSchema,
} from 'src/users/entities/adminUser.entity';

const AdminResource: ResourceWithOptions = {
  resource: AdminUserSchema,
  options: {},
};

export default AdminResource;
