// with Nextjs 12.2.2 the below eslint rule no longer applies.
// https://nextjs.org/docs/messages/nested-middleware
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from 'next/server';
import fetchLoginStatus from './lib/fetchLoginStatus';
import routerConfig from './lib/routerConfig';

/**
 *
 * @param req - Any req that hits the API paths covered by this middleware
 *              (any folders and files at or below this file's level in the folder structure)
 * @returns - 401 error code if customer header and origin not valid
 */
const middleware = async (req: NextRequest) => {
  NextResponse.next();
  /*
  if (req.nextUrl.pathname.startsWith('/app/test')) {
    const res = await fetchLoginStatus();
    if (res.status === 200) {
      NextResponse.next();
    } else {
      return NextResponse.redirect(routerConfig());
    }
  }
  */
};

export default middleware;
