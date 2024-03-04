import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
        const data  = await request.formData()
        const email = data.get("email")
		const pass = data.get("password")
		if (email === "admin@mail.ru" && pass === "12345") {
			cookies.set("access", "true", {path: "/", samSite: "strict"})
			throw redirect(302, "/admin")
		}

		return {
			email,
			message: "Пароль или почта не подходят"
		}
	}
}