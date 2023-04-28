import { Issue } from '@linear/sdk';

export type IssueState = Omit<Issue, '_state'> & {
  _state: { id: string };
};
