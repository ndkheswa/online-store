import { animate, style, transition, trigger } from "@angular/animations";

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-20px)' }),
        animate(2000)
    ])
])

export let fadeIn = trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate(2000)
    ])
])