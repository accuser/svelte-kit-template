import { sequence } from '@sveltejs/kit/hooks';
import log_request from './log_request';

export const handle = sequence(log_request);
