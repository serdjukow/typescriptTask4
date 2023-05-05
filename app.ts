const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

interface DataInterface {
	id: number
	email: string
}
const getData = async (url: string): Promise<Response> => {
	const response = await fetch(url)
	return response
}

getData(COMMENTS_URL)
	.then(data => data.json())
	.then((data: DataInterface[]) => {
		data.map(({ id, email }: DataInterface) => {
			console.log(`ID: ${id}, Email: ${email}`)
		})
	})