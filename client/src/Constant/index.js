export const SKILLS_ICON = [
	'fa-html5',
	'fa-css3-alt',
	'fa-js-square',
	'fa-react',
	'fa-vuejs',
	'fa-node-js',
	'fa-sass',
	'fa-docker',
	'fa-gulp',
	'fa-aws',
	'fa-npm'
];

export const SKILLS_SET = {
	Frontend: [
		{
			type: 'HTML5',
			val: '95'
		},
		{
			type: 'CSS3',
			subtype: 'Along with css preprocessors',
			val: '95'
		},
		{
			type: 'Javascript',
			val: '95'
		},
		{
			type: 'React',
			val: '95'
		},
		{
			type: 'Vue JS',
			val: '70'
		},
		{
			type: 'GraphQL',
			val: '80'
		},
		{
			type: 'Testing',
			subtype: 'Jest, react-testing-library',

			val: '80'
		}
	],
	Backend: [
		{
			type: 'Node Js',
			val: '85'
		},
		{
			type: 'Express',
			val: '85'
		},
		{
			type: 'MongoDB',
			val: '70'
		},
		{
			type: 'PostgreSQL',
			val: '50'
		}
	],
	Devops: [
		{
			type: 'AWS',
			val: '50'
		},
		{
			type: 'Azure',
			val: '40'
		},
		{
			type: 'CI/CD(Jenkins, Travis CI)',
			val: '60'
		},
		{
			type: 'Google Cloud',
			val: '50'
		},
		{
			type: 'Docker',
			val: '70'
		},
		{
			type: 'Kubernetes',
			val: '60'
		}
	],
	desc: {
		Frontend:
			'I have been developing client-side application since the start of my career. React, graphQL, jest and react-testing-library is the tech stack which I am using heavily to build frontend side of applications. Apart from this, had experience working with Vue js and building hybrid mobile applications.',
		Backend:
			' I have used Node JS for server side coding and as a Backed for Frontend(BFF) layer for frontend applications. Experienced in both SQL and NoSQL, and have used MongoDB, PostgreSQL, firebase, redis. Also, tried my hands on go.',
		Devops:
			'Have experience and good understanding in deployment of applications to cloud and integrating with CI/CD pipeline. Used Docker to build images and integrate with CI tools like Travis CI and Jenkins. Have experience in kubernetes also.'
	}
};

export const COLORS = ['pizelex', 'purplin', 'blush', 'brown', 'orange', 'green', 'blue'];

export const BORDER_COLORS = ['#e53935', '#6a3093', '#dcb386', '#e14949', '#FFB75E', '#76b852', '#005C97'];

export const SKILL_CATEGORY = ['Frontend', 'Backend', 'Devops', 'Misc'];
