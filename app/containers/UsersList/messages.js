/*
 * UsersList Messages
 *
 * This contains all the text for the UsersList component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.UsersList.header',
    defaultMessage: 'This is UsersList container !',
  },
  deleteUserError: {
    id: 'app.containers.UsersList.deleteUserError',
    defaultMessage: 'Cannot delete user {user}.',
  },
  deleteUserSuccess: {
    id: 'app.containers.UsersList.deleteUserSuccess',
    defaultMessage: 'User {user} has been deleted.',
  },
});
