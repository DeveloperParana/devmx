import { GithubContributor } from './github-contributor';

export interface GithubIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: GithubContributor;
  labels: GithubIssueLabel[];
  state: GithubIssueState;
  locked: boolean;
  assignee: GithubContributor | null;
  assignees: GithubContributor[];
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  author_association: 'MEMBER';
  active_lock_reason: null;
  body: null | string;
  closed_by: null;
  reactions: GithubIssueReactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
}

export interface GithubIssueLabel {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

export interface GithubIssueReactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export enum GithubIssueState {
  Open = 'open',
  Closed = 'closed',
}
