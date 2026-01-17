import { Role } from "@prisma/client";
import { hasRole } from "@/lib/auth/rbac";
import { SessionUser } from "@/types/auth";

export default function RequireRole({
  user,
  role,
  children
}: {
  user: SessionUser;
  role: Role;
  children: React.ReactNode;
}) {
  if (!hasRole(user.role, role)) {
    return <p className="text-sm text-red-600">Akses dibatasi.</p>;
  }

  return <>{children}</>;
}
