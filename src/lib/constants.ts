const BASE_URL = 'https://netbiblio.github.io/kldabt';

const PROJECT_NAME = 'Сказки о деде Андрее и бабке Тане';

const CONTENTS = [
	'/skazka-o-korole-andree-i-koroleve-tane',
	'/skazka-2',
	'/skazka-3',
	'/skazka-4',
	'/skazka-o-byke',
	'/skazka-o-porosyonke',
	'/nesostoyavshayasya-svadba',
	'/semejnaya-ssora',
	'/vodka-i-eyo-posledstviya',
	'/kasha',
	'/v-orkestre',
	'/kozlodoev',
	'/v-shkole'
];

const ALL_PAGES = ['', '/soderzhanie', ...CONTENTS];

const TITLES: { [routeId: string]: string } = {
	'/kasha': 'Каша',
	'/kozlodoev': 'Козлодоев',
	'/nesostoyavshayasya-svadba': 'Несостояв­шаяся свадьба',
	'/semejnaya-ssora': 'Семейная ссора',
	'/skazka-2': 'Сказка № 2',
	'/skazka-3': 'Сказка № 3',
	'/skazka-4': 'Сказка № 4',
	'/skazka-o-byke': 'Сказка о быке',
	'/skazka-o-korole-andree-i-koroleve-tane':
		'Сказка о короле Андрее и королеве Тане',
	'/skazka-o-porosyonke': 'Сказка о поросёнке',
	'/soderzhanie': 'Содержание',
	'/v-orkestre': 'В оркестре',
	'/v-shkole': 'В школе',
	'/vodka-i-eyo-posledstviya': 'Водка и её послед­ствия'
};

const DESCRIPTIONS: typeof TITLES = {
	'/': 'Юмор. Современные бытовые сказки о деде Андрее и бабке Тане.',
	'/soderzhanie': 'Содержание сборника «Сказки о деде Андрее и бабке Тане».'
};

export { ALL_PAGES, BASE_URL, CONTENTS, DESCRIPTIONS, PROJECT_NAME, TITLES };
