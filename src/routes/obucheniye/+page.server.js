export async function load({ locals }) {
    const diploms = await locals.pb.collection('diplom').getFullList(200, {
        sort: '-created'
    })
    const sessias = await locals.pb.collection('sessia').getFullList(200, {
        sort: '-created'
    })
    const templates = await locals.pb.collection('templateP').getFullList(200, {
        sort: '-created'
    })
    const groups = await locals.pb.collection('group').getFullList(200, {
        sort: '-created'
    })
    const group_docs = await locals.pb.collection('group_doc').getFullList(200, {
        sort: '-created'
    })
    return {
        diploms,
        sessias,
        templates,
        groups,
        group_docs
    }
}