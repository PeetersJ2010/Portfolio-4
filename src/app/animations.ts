import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    //Alleen animatie van home naar login en back, vul hier aan voor meerdere slides * = wildcard
    transition('Home => Projects', slideTo('right') ),
    transition('Projects => Home', slideTo('left') ),
  ]);

function slideTo(direction: any) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        [direction]: 0,
        width: '100%',
        height: '100%',
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('400ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('400ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
