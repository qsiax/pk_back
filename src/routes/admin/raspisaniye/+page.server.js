import { redirect } from "@sveltejs/kit";
import {error} from '@sveltejs/kit'

/** @type {import('../../ras/$types').PageServerLoad} */
export async function load({cookies, locals}) {
    const access = cookies.get("access") === "true"

    if (!access) {
        throw redirect(302, "/login")
    }
    const records = await locals.pb.collection('schedule').getFullList(200, {
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
        let title = data.get('title')
        let file = data.get('file')

        if (file.size === 0) {
            return {
                message: 'Файл не выбран',
                title
            }
        } else {
            try {
                await locals.pb.collection('schedule').create(data)
            } catch (err) {
                console.log('Error: ', err);
                throw error(400, 'Не удалось загрузить файл')
            }
            return {
                succes: true
            }
        }
    }
}