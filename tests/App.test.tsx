// Node modules
import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';
import { describe, expect, it } from '@jest/globals';
// Navigation
import Navigation from '../src/navigation/Index';
// Root
import App from '../App';

describe('<App />', () => {
	let app: ReactTestRenderer;
	let home: ReactTestInstance;
	let propertyDetails: ReactTestInstance;
	beforeAll(() => {
		jest.useFakeTimers();
		app = create(<App />);
	});
	describe('<Navigation />', () => {
		it('has an attached navigation', () => {
			jest.useFakeTimers();
			const appChildren = app.root.children;
			if (appChildren.length > 0) {
				const navigation = appChildren[0];
				if (typeof navigation !== 'string') {
					expect(navigation.type).toBe(Navigation);
				}
			}
		});
	});
	describe('<Home />', () => {
		test('navigate to <PropertyDetails />', () => {
			home = app.root.findByProps({ testID: 'home' });
			const card = home.parent?.findByProps({ testID: 'cardTouchable-0' });
			expect(home.parent?.props.navigation.isFocused()).toBe(true);
			global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
			act(() => {
				card?.props.onPress();
			});
			expect(home.parent?.props.navigation.isFocused()).toBe(false);
		});
	});
	describe('<PropertyDetails />', () => {
		test('press favorite share', () => {
			propertyDetails = app.root.findByProps({ testID: 'propertyDetails' });
			const shareButton = propertyDetails.parent?.findByProps({ testID: 'shareButton' });
			global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
			act(async () => {
				await shareButton?.props.onPress();
			});
		});
		test('press share button', () => {
			const favoriteButton = propertyDetails.parent?.findByProps({ testID: 'favoriteButton' });
			expect(propertyDetails.parent?.props.route.params.data.property.favorite).toBe(false || null);
			global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
			act(() => {
				favoriteButton?.props.onPress();
			});
			expect(propertyDetails.parent?.props.route.params.data.property.favorite).toBe(true);
		});
		test('navigate to <Home />', () => {
			const closeButton = propertyDetails.parent?.findByProps({ testID: 'closeButton' });
			expect(propertyDetails.parent?.props.navigation.isFocused()).toBe(true);
			global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
			act(() => {
				closeButton?.props.onPress();
			});
			expect(propertyDetails.parent).toBeNull();
		});
	});
});
