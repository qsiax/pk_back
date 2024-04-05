// @ts-nocheck
/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals }) {
    const records = await locals.pb.collection('schedule').getFullList(200, {
        sort: '-created'
    })
    return {
        records
    }
}