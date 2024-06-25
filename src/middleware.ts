import withAuth from "./middlewares/withAuth"; 
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function mainMiddleware(request: NextRequest){
    // const isLogin = true;
    // if(!isLogin){
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }
    const res = NextResponse.next();
    return res;
}

// export const config = {
//     matcher: ["/dashboard/:path*", "/about/:path*"],
// }

export default withAuth(mainMiddleware, ["/dashboard", "/profile"]);