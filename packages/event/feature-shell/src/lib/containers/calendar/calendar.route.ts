import { CalendarContainer } from './calendar.container';
import { CalendarLeftOutlet } from '../../outlets';
import { CalendarScope } from './calendar.scope';
import { Route } from '@angular/router';

export const calendarRoute: Route = {
  path: 'calendario',
  component: CalendarScope,
  children: [
    {
      path: '',
      component: CalendarLeftOutlet,
      outlet: 'left',
    },
    {
      path: '',
      component: CalendarContainer,
    },
  ],
};
