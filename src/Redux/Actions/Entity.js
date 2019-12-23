import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
	register: ['key'],

	get: ['key', 'data'],
	post: ['key', 'data'],
	put: ['key', 'data'],
	delete: ['key', 'data'],

	didGet: ['key', 'data'],
	didPost: ['key', 'data'],
	didPut: ['key', 'data'],
	didDelete: ['key', 'data'],

	catchGet: ['key', 'data'],
	catchPost: ['key', 'data'],
	catchPut: ['key', 'data'],
	catchDelete: ['key', 'data'],

	resetProps: ['key', 'props'],
	removeEntity: ['key'],
}, {
	prefix: "Entity/",
});

export const EntityTypes = Types;
export default Creators;
