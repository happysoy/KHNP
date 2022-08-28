// config
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PATH_AFTER_LOGIN } from "../../config";
// routes
import { PATH_DASHBOARD } from "../../routes/paths";

export default function Index() {
  const { pathname, replace, prefetch } = useRouter();
  useEffect(() => {
    if (pathname === PATH_DASHBOARD.root) {
      replace(PATH_AFTER_LOGIN);
    }
  }, [pathname]);

  useEffect(() => {
    prefetch(PATH_AFTER_LOGIN);
  }, []);

  return null;
}
