import { createAuth } from "@test-t-stack-2/backend/convex/auth";
import { getToken as getTokenNextjs } from "@convex-dev/better-auth/nextjs";

export const getToken = () => {
	return getTokenNextjs(createAuth);
};
