export { auth as middleware } from "@/auth";


export const config = {
    runtime: 'experimental-edge', // for Edge API Routes only
    unstable_allowDynamic: [
      // allows a single file
      './src/lib/actions.js',
      './src/lib/authUser.js',
      './src/auth.js',
      // use a glob to allow anything in the function-bind 3rd party module
      '/node_modules/function-bind/**',
    ],
  }
