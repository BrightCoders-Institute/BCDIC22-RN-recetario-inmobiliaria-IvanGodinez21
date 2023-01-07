// Node modules
import React from 'react';
import { act, create } from 'react-test-renderer';
import { describe, expect, it } from '@jest/globals';
// Classes
import Property from '../src/classes/Property';
// Components
import Card from '../src/components/Card';
// Database
import properties from '../src/databases/properties.json';

describe('<Card />', () => {
	let parsedProperties: Property[];
	beforeAll(() => {
		parsedProperties = properties as Property[];
	});
	it('can render all the properties from the database', () => {
		jest.useFakeTimers();
		const components = [];
		for (const item of parsedProperties) {
			const component = create(<Card item={item} />).toJSON();
			if (component) {
				components.push(component);
			}
		}
		expect(components.length).toBe(properties.length);
	});
	it('has two childs', () => {
		const component = create(<Card item={parsedProperties[0]} />).toJSON();
		if (component && !(component instanceof Array)) {
			expect(component.children?.length).toBe(2);
		}
	});
	it('has an item property stored inside the props property ', () => {
		const component = create(<Card item={parsedProperties[0]} />).getInstance();
		if (component && !(component instanceof Array)) {
			expect(component.props.item).toEqual(expect.any(Object));
		}
	});
	test('button favorite can be pressed', () => {
		const component = create(<Card item={parsedProperties[0]} />);
		const favoriteButton = component.root.findByProps({ testID: 'favoriteButton' });
		expect(component.root.props.item.favorite).toBe(false || null);
		global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
		act(() => favoriteButton.props.onPress());
		expect(component.root.props.item.favorite).toBe(true);
	});
});
