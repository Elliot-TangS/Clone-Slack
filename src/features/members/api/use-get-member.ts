import { useQuery } from "convex/react";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface UseGetMembersProps {
  workspaceId: Id<"workspaces">;
}

export const useGetMembers = ({ workspaceId }: UseGetMembersProps) => {
  const data = useQuery(api.members.get, { workspaceId });
  const isLoading = data === undefined;

  return { data, isLoading };
};

interface UseGetMemberProps {
  id: Id<"members">;
}

export const useGetMember = ({ id }: UseGetMemberProps) => {
  const data = useQuery(api.members.getById, { id });
  const isLoading = data === undefined;

  return { data, isLoading };
};