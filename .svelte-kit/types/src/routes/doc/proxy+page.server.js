// @ts-nocheck
import {error} from '@sveltejs/kit'
import { redirect } from "@sveltejs/kit";

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals, cookies }) {
    const access = cookies.get("access") === "true"

    if (!access) {
        throw redirect(302, "/login")
    }
    const records = await locals.pb.collection('documents').getFullList(200, {
        sort: '-created'
    })
    return {
        records
    }
}

export const actions={
    delete: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')

        await locals.pb.collection('documents').delete(id)
    },
    add: async({request, locals}) => {
        let data = await request.formData()
        let file = data.get('file')
        let type = data.get('category')

        if (type === '0') {
            return {
                message: 'Тип документа не выбран',
                uploadMenu: true
            }
        } else {
            if (file.size === 0) {
                return {
                    message: 'Файл не выбран',
                    uploadMenu: true
                }
            } else {
                try {
                    await locals.pb.collection('documents').create(data)
                } catch (err) {
                    console.log('Error: ', err);
                    throw error(400, 'Не удалось загрузить файл')
                }
            }
        }
    },
    update: async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')
        let title = form.get('title')
        let category = form.get('category')

        let newRecord = {
            title,
            category
        }

        await locals.pb.collection('documents').update(id,newRecord)
    },
}