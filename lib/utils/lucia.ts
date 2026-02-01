import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "../db/db";
import { cookies } from "next/headers";

const adapter = new BetterSqlite3Adapter(db , {
    user: 'users',
    session: 'sessions',
});

const lucia = new Lucia(adapter , {
    sessionCookie:{
        expires: false,
        attributes:{
            secure: process.env.NODE_ENV === 'production'
        }
    }
});

const setSessionCookie = async (sessionId?: string) => {
    const sessionCookie = sessionId ?  lucia.createSessionCookie(sessionId) : lucia.createBlankSessionCookie() ;
    
    const cookieStore = await cookies();
    cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}

export const createAuthSession = async (userId: string) => {
    const session = await lucia.createSession(userId, {});

    const sessionCookie =  lucia.createSessionCookie(session.id);
    const cookieStore = await cookies();
    cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}

export const verifyUser = async () => {
    const cookieStore = await cookies();

   const sessionCookie = cookieStore.get(lucia.sessionCookieName);

   if (!sessionCookie) {
    return {
     user:null,
     session:null,
    }
   }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return {
      user:null,
      session:null,
    }
  }

  const result = await lucia.validateSession(sessionId);

  try {

    if (!result.session) {
        setSessionCookie();
    }

    if (result.session && result.session.fresh) {
     setSessionCookie(result.session.id);
    }
    
  } catch (_error: unknown) {
    // nothing to do here
  }


  return result;
}