import * as posts from '$lib/services/posts'

export const load = async ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age-0, s-maxage=${60 * 60}',
		X: 'Gon give it to ya',
	})

	return { posts: posts.getPublishedPosts() }
}
