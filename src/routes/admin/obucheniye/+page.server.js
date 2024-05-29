import {error} from '@sveltejs/kit'
import { redirect } from "@sveltejs/kit";

/** @type {import('../../doc/$types').PageServerLoad} */
export async function load({ locals, cookies }) {
    const access = cookies.get("access") === "true"

    if (!access) {
        throw redirect(302, "/login")
    }

    const diploms = await locals.pb.collection('diplom').getFullList(200, {
        sort: '-created'
    })

    const sessias = await locals.pb.collection('sessia').getFullList(200, {
        sort: '-created'
    })

    const templatesp = await locals.pb.collection('templateP').getFullList(200, {
        sort: '-created'
    })

    const groups = await locals.pb.collection('group').getFullList(200, {
        sort: '-created'
    })

    const groupdocs = await locals.pb.collection('group_doc').getFullList(200, {
        sort: '-created'
    })

    return {
        diploms,
        sessias,
        templatesp,
        groups,
        groupdocs
    }
}
export const actions={
    addD: async({request, locals}) => {
        let data = await request.formData()

        try {
            await locals.pb.collection('diplom').create(data)
        } catch (err) {
            console.log('Error: ', err);
            throw error(400, 'Не удалось загрузить файл')
        }
    },
    addS: async({request, locals}) => {
        let data = await request.formData()

        try {
            await locals.pb.collection('sessia').create(data)
        } catch (err) {
            console.log('Error: ', err);
            throw error(400, 'Не удалось загрузить файл')
        }
    },
    addG: async({request, locals}) => {
        let data = await request.formData()

        try {
            await locals.pb.collection('group').create(data)
        } catch (err) {
            console.log('Error: ', err);
            throw error(400, 'Не удалось загрузить файл')
        }
    },
    addP: async({request, locals}) => {
        let data = await request.formData()

        try {
            await locals.pb.collection('templateP').create(data)
        } catch (err) {
            console.log('Error: ', err);
            throw error(400, 'Не удалось загрузить файл')
        }
    },
    addGD: async({request, locals}) => {
        let data = await request.formData()

        try {
            await locals.pb.collection('group_doc').create(data)
        } catch (err) {
            console.log('Error: ', err);
            throw error(400, 'Не удалось загрузить файл')
        }
    },
    deleteD: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')

        await locals.pb.collection('diplom').delete(id)
    },
    deleteS: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')

        await locals.pb.collection('sessia').delete(id)
    },
    deleteP: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')

        await locals.pb.collection('templateP').delete(id)
    },
    deleteG: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')

        await locals.pb.collection('group').delete(id)
    },
    deleteGD: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')

        await locals.pb.collection('group_doc').delete(id)
    },
    updateS: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')
        let title = form.get('title')

        let newRecord = {
            title
        }

        await locals.pb.collection('sessia').update(id,newRecord)
    },
    updateD: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')
        let title = form.get('title')

        let newRecord = {
            title
        }

        await locals.pb.collection('diplom').update(id,newRecord)
    },
    updateP: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')
        let title = form.get('title')

        let newRecord = {
            title
        }

        await locals.pb.collection('templateP').update(id,newRecord)
    },
    updateGD: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')
        let title = form.get('title')

        let newRecord = {
            title
        }

        await locals.pb.collection('group_doc').update(id,newRecord)
    },
    updateG: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')
        let title = form.get('title')

        let newRecord = {
            title
        }

        await locals.pb.collection('group').update(id,newRecord)
    },
}