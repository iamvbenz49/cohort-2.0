

export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request.headers);
		console.log(request.body);

		if(request.method === "GET") {
			return new Response('Hello World!');
		} else {
			return new Response('Bye World!');
		}
		
	},
} satisfies ExportedHandler<Env>;
