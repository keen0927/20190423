// 액션
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREEMNT = 'counter/DECREMENT';

// 액션 생성 함수
export const changeColor = (color) => ({
    type: CHANGE_COLOR,
    color
});
export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREEMNT});

// 초기값
const initialState = {
    color: 'red',
    number: 0
};

// 리듀서
export default function counter(state = initialState, action) {
    switch(action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.color
            }
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
        case DECREEMNT:
            return {
                ...state,
                number: state.number - 1
            }
        default: return state;
    }
}