import { createActionCreator } from 'deox';

import { UIActions } from './constants';

const uiActions = {
  resetActionStatus: createActionCreator(UIActions.RESET_ACTION_STATUS, (resolve) => (actionName: string) =>
    resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
};

export default uiActions;
