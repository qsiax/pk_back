export async function load({ params }) {
    const { id } = params;
    const data = await fetch(`http://localhost:3001/posts/${id}`).then((res) => res.json());
    return data;
}