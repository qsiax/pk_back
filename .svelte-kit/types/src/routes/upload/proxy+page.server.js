// @ts-nocheck
import {error} from '@sveltejs/kit'
/** */
export const actions = {
    default:/** @param {import('./$types').RequestEvent} event */  async ({ request, locals }) => {
        let data = await request.formData()
        let file = data.get('file')
        if (file.size === 0) {
            return {
                message: 'Файл не выбран'
            }
        } else {
            try {
                await locals.pb.collection('documents').create(data)
            } catch (err) {
                console.log('Error: ', err);
                throw error(400, 'Не удалось загрузить файл')
            }
        }
        return {
            succes: true
        }
    }
}