import { CONTENTS } from '@/lib/constants';
import { readFile } from 'node:fs/promises';

type Data = {
	[page: string]: string;
};

const CWD = process.cwd();

async function getData(): Promise<Data> {
	const texts = await Promise.all(
		CONTENTS.map(function (page: string) {
			return readFile(`${CWD}/src/data/${page}.html`, 'utf-8');
		})
	);
	return CONTENTS.reduce(function (acc: Data, page, i) {
		return {
			...acc,
			[page]: texts[i]
		};
	}, {});
}

export { type Data, getData };
