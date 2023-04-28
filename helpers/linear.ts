import { WorkflowState, WorkflowStateConnection } from '@linear/sdk';
import { IssueState } from '@/types';

export const isIssueValid = (issue: unknown): issue is IssueState => {
  return !!(
    typeof issue === 'object' &&
    issue &&
    '_state' in issue &&
    issue._state &&
    typeof issue._state === 'object' &&
    'id' in issue._state
  );
};

export const getWorkflowStateByIssue = (
  issue: unknown,
  states: WorkflowStateConnection
): WorkflowState | undefined => {
  if (!isIssueValid(issue)) {
    return undefined;
  }

  return states.nodes.find((state) => state.id === issue._state.id);
};
