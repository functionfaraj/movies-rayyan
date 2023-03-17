import { useRouter } from "next/router";
import { useCallback } from "react";

const useRayyanRouter = () => {
  const router = useRouter();
  const navigate = useCallback(
    (route: string, data?: any) => {
      router?.push(route, data);
    },
    [router]
  );

  return { navigate, router };
};

export { useRayyanRouter };
