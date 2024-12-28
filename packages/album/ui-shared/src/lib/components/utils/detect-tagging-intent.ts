import { Vector2Like } from '@devmx/shared-util-data';

export const detectTaggingIntent = (element: HTMLElement) => {
  const subscribe = (callback: (position: Vector2Like) => void) => {
    const emit = (start: number, { clientX, clientY }: MouseEvent | Touch) => {
      const end = new Date().getTime();

      if (end - start > 600) {
        const { left, top, width, height } = element.getBoundingClientRect();
        callback({ x: (clientX - left) / width, y: (clientY - top) / height });
      }
    };

    element.onmousedown = () => {
      const start = new Date().getTime();
      element.onmouseup = (event) => {
        event.preventDefault();
        emit(start, event);
      };
    };

    element.ontouchstart = () => {
      const start = new Date().getTime();
      element.ontouchend = (event) => {
        event.preventDefault();
        const { changedTouches } = event;
        emit(start, changedTouches[0]);
      };
    };
  };

  return { subscribe };
};
