import { Role } from "@prisma/client";

export const roleHierarchy: Record<Role, number> = {
  ADMIN: 3,
  OPERATOR: 2,
  VIEWER: 1
};

export function hasRole(userRole: Role, required: Role) {
  return roleHierarchy[userRole] >= roleHierarchy[required];
}
