import { NextRequest, NextResponse } from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient({ req, res })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.redirect(new URL('/auth', req.url))
  }
}

export const config = {
  matcher: '/auth/todo_crud/:path*'
}
