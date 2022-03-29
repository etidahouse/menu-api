import { Item } from '../../src/items/item.interface';
import * as ItemService from '../../src/items/items.service';

let items: Item[] = [];
let newItem: Item;

beforeEach(() => {
	items.push({
		id: 1,
		name: 'Burger',
		price: 599,
		description: 'Tasty',
		image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
	});
	newItem = {
		id: 0,
		name: 'Licorne',
		price: 5562,
		description: 'Noice',
		image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
	};
});

describe('item', () => {
	test('get all items', async () => {
		var list: Item[] = await ItemService.findAll();
		expect(list[0]).toEqual(items[0]);
	});

	test('get an item', async () => {
		var item: Item = await ItemService.find(1);
		expect(item).toEqual(items[0]);
	});

	test('create an item', async () => {
		var item: Item = await ItemService.create(newItem);
		expect(item).toEqual(newItem);
	});
});
