/* @flow */
import { ROUTER_TRANSITION_ACTIONS, ON_DEVICE_READY, CATEGORY_ACTIONS } from './constants';
import { push } from 'react-router-redux';

export const addCategory = category => ({
  type: CATEGORY_ACTIONS.ADD_CATEGORY,
  payload: {
    category,
  },
});

export const sagaTake = () => ({ type: 'SAGA_TAKE' });

export const deviceReady = () => ({ type: ON_DEVICE_READY });

export const setRouterTransition = (type: string) => ({ type });

// 画面遷移用のアクションを発行します
// どんなアニメーションで遷移するかと、どのURLに遷移するかを指示する２つのアクションを発行する関数です。
export const transition = (transitionType: string, path: string) => (
  (dispatch: Function) => {
    // どのアニメーションで遷移するかを決定するアクションを発行
    dispatch(setRouterTransition(transitionType));
    // どの画面に遷移するかを指示するアクションを発行
    dispatch(push(path));
  }
  // return func;
);

// popアニメーションで画面遷移するアクションを発行します
export const transitionPop = (path: string): void => {
  transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_POP, path);
};

// fadeアニメーションで画面遷移するアクションを発行します
export const transitionFade = (path: string): void => {
  transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_FADE, path);
};

// slideLeftアニメーションで画面遷移するアクションを発行します
export const transitionSlideLeft = (path: string): void => {
  transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT, path);
};

// slideRightアニメーションで画面遷移するアクションを発行します
export const transitionSlideRight = (path: string): void => {
  transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_RIGHT, path);
};

// アニメーションなしで画面遷移するアクションを発行します
export const transitionNoAnimation = (path: string): void => {
  transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_NO_ANIMATION, path);
};
