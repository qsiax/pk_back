export async function load({ locals }) {
    const records = await locals.pb.collection('course').getFullList(200, {
        sort: '-created'
    })
    return {
        records
    }
}