import { trigger, state, style, transition,
	animate, group, query, stagger, keyframes
} from '@angular/animations';

export const ClickAnimation = [
	trigger('animeAction', [
		state('click', style({
			'opacity': '1', 'visibility': 'visible', 'transform': 'scale(1.3) rotate(10deg)'
		})),
		state('unClick', style({
			'opacity': '1', 'visibility': 'visible', 'transform': 'scale(1) rotate(0deg)'
		})),
		transition('click => unClick', [group([
				animate('100ms ease-in-out', style({
          'transform': 'scale(1) rotate(0deg)'
				})),
			]
		)]),
	]),
]
