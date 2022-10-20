// config
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PATH_BEFORE_LOGIN } from '../config';
// routes
import { PATH_ROOT } from '../routes/paths';

export default function Index() {
  const { pathname, replace, prefetch } = useRouter();

  useEffect(() => {
    if (pathname === PATH_ROOT.root) {
      replace(PATH_BEFORE_LOGIN);
    }
  }, [[pathname]]);

  useEffect(() => {
    prefetch(PATH_BEFORE_LOGIN);
  }, []);

  return null;
}
