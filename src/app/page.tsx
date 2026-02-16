"use client";

import { UserButton } from "@/features/auth/components/user-button";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { use, useEffect, useMemo } from "react";
import { useRouter } from "next/dist/client/components/navigation";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useCreateWorkspaceModal();
  const { data, isLoading } = useGetWorkspaces();
  const workspacesId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;
    if (workspacesId) {
      router.replace(`/workspace/${workspacesId}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [isLoading, workspacesId, open, setOpen, router]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
