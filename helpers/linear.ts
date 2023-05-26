import { IssueConnection } from '@linear/sdk';
import { IssueState } from '@/types';

export const isIssueValid = (issue: unknown): issue is IssueState => {
  return (
    typeof issue === 'object' &&
    issue !== null &&
    '_state' in issue &&
    issue._state !== null &&
    typeof issue._state === 'object' &&
    'id' in issue._state &&
    issue._state.id !== null
  );
};

export const getIssuesForState = (issues: IssueConnection, stateId: string) =>
  issues.nodes.reduce((acc: any, issue: unknown) => {
    if (!isIssueValid(issue)) {
      return acc;
    }

    if (stateId !== issue._state.id) {
      return acc;
    }

    return [
      ...acc,
      {
        title: issue.title,
        id: issue.id,
        identifier: issue.identifier,
        createdAt: issue.createdAt,
        description: issue.description,
      },
    ];
  }, []);
