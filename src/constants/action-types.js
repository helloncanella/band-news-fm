/**
 * Constants are important - they describe what type of action is performed
 * within your app. Combined with the DevTools/logger, you can see how state and subsequently
 * your UI is being affected.
 */
export const SELECT_COLUMNIST = 'SELECT_COLUMNIST';
export const FETCHED_PODCASTS='FETCHED_PODCASTS';
export const ANOUNCE_ERROR_IN_PODCAST_REQUEST = 'ANOUNCE_ERROR_IN_PODCAST_REQUEST';
export const SELECT_PODCAST = 'SELECT_PODCAST';
export const PODCAST_REQUEST_TIME_OUT = 'PODCAST_REQUEST_TIME_OUT';

// Audio Actions
export const PLAY_PODCAST = 'PLAY_PODCAST';
export const PAUSE_PODCAST = 'PAUSE_PODCAST';
export const SET_AUDIO_IS_READY = 'SET_AUDIO_IS_READY';
export const ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD = 'ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD';
export const SET_AUDIO_DURATION = 'SET_AUDIO_DURATION';
export const CHANGE_CURRENT_TIME = 'CHANGE_CURRENT_TIME';

//Tab Actions
export const CHANGE_TAB = 'CHANGE_TAB';