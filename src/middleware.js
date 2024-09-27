import { NextResponse } from 'next/server'

import { auth } from '../lib/firebase'


export function middleware(request) {

    
// const {user} = useAuth() // cant use hooks coz middleware are on server side
// const user = null

// console.log('Is user logged out? ', auth.currentUser === null);

    if(auth.currentUser == null){        
        return NextResponse.redirect(
          new URL('/', request.url)
        )
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/admin','/admin/form']
}
