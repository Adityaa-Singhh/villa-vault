import { Request, Response } from "express";

import config from "../common/config";
import { createServerClient, parseCookieHeader, serializeCookieHeader } from "@supabase/ssr";

export const handleCodeExchange = async (req: Request, res: Response) => {
    try {
        const code = req.query.code as string;
        const next = req.query.next ?? "/" as string;

        if (code) {
            const supabase = createServerClient(
                config.SUPABASE_URL,
                config.SUPABASE_ANON_KEY, {
                cookies: {
                    getAll() {
                        return parseCookieHeader(req.headers.cookie ?? '')
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            res.appendHeader('Set-Cookie', serializeCookieHeader(name, value, options))
                        )
                    },
                },
            })
            await supabase.auth.exchangeCodeForSession(code);
        }

        res.redirect(303, `/${(next as string).slice(1)}`)
    } catch (error) {
        
    }
}
