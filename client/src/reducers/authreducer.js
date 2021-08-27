// là nơi luôn lưu trữ trạng thái của app liên quan đến việc xác thực người dùng
export const authReducer = (state, action) => {
    const { type, payload: { isAuthenticated, user } } = action

    switch (type) {
        case 'SET_AUTH':
            return {
                ...state,
                authLoading: false,
                isAuthenticated,
                user
            }
        default:
            return state
    }
}