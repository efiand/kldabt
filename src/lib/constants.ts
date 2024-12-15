const baseUrl = 'https://kldabt.efiand.ru';

const projectName = 'Сказки о деде Андрее и бабке Тане';

const contents = [
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

const allPages = ['/', '/soderzhanie', ...contents];

const titles: { [routeId: string]: string } = {
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

export { allPages, baseUrl, contents, projectName, titles };
