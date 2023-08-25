import { format } from 'date-fns';

export const getCurrentTime = () => format(Date.now(), 'kk:mm');
