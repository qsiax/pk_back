// @ts-nocheck
import { redirect } from "@sveltejs/kit";
import {error} from '@sveltejs/kit'

/** @param {Parameters<import('../../ras/$types').PageServerLoad>[0]} event */
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

/** */
export const actions = {
    add:/** @param {import('./$types').RequestEvent} event */  async ({ request, locals }) => {
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
    delete:/** @param {import('./$types').RequestEvent} event */  async({request, locals}) => {
        let form = await request.formData()

        let id = form.get('id')

        await locals.pb.collection('course').delete(id)
    },
    update:/** @param {import('./$types').RequestEvent} event */  async({request, locals}) => {
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
