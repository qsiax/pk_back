import { redirect } from "@sveltejs/kit";
import {error} from '@sveltejs/kit'

/** @type {import('../../ras/$types').PageServerLoad} */
export async function load({cookies, locals}) {
    const access = cookies.get("access") === "true"

    if (!access) {
        throw redirect(302, "/login")
    }
    const records = await locals.pb.collection('course').getFullList(200, {
        sort: '-created'
    })
    return {
        records
    }
}

/** @type {import('../../ras/$types').Actions} */
export const actions = {
    add: async ({ request, locals }) => {
        let data = await request.formData()

        try {
            await locals.pb.collection('course').create(data)
        } catch (err) {
            console.log('Error: ', err);
            throw error(400, 'Не удалось загрузить')
        }
        return {
            succes: true
        }
    },
    delete: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')

        await locals.pb.collection('course').delete(id)
    },
    update: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')
        let name = form.get('name')
        let price = form.get('price')
        let deadline = form.get('deadline')

        let newRecord = {
            name,
            price,
            deadline
        }

        await locals.pb.collection('course').update(id,newRecord)
    }
}
