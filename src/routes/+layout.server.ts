import { type Data, getData } from '@/data';

const prerender = true;

let data: Data | null = null;

async function load() {
	if (!data) {
		data = await getData();
	}
	return data;
}

export { load, prerender };
