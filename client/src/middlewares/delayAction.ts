interface ActionProps {
  isDelay?: boolean;
  delayedAction?: any;
}

export const delayAction = (store: any) => (next: any) => (
  action: ActionProps
) => {
  if (action.isDelay) {
    setTimeout(() => {
      return next(action.delayedAction);
    }, 3000);
  } else {
    return next(action); // go to reducer
  }
};
