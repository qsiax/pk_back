export async function load({ locals }) {
    const records = await locals.pb.collection('documents').getFullList(200, {
        sort: '-created'
    })
    return {
        records
    }
}