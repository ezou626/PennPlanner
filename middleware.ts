export { default } from "next-auth/middleware";

// specify on which routes you want to run the middleware
export const config = {
  matcher: ["/plan"],
};