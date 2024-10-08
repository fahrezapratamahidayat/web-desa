import { RoleGate } from "@/components/auth/role-gate";
import AdminArtikelPage from "@/components/pages/admin-artikel";
import { Role } from "@prisma/client";

export default function Page() {
  return (
    <RoleGate allowedRole={Role.Admin}>
      <AdminArtikelPage />
    </RoleGate>
  );
}
