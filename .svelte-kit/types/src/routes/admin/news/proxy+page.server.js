// @ts-nocheck
import { redirect } from "@sveltejs/kit";

/** @param {Parameters<import('../$types').PageServerLoad>[0]} event */
export const load = ({cookies}) => {
    const access = cookies.get("access") === "true"

    if (!access) {
        throw redirect(302, "/login")
    }
}