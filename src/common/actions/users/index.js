// @flow
import {resultOK} from 'api/utils'
import {getUsersAPI} from 'api/UsersSvc'
import type {UserItem} from 'types'
// Define action types
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAIL = 'GET_USERS_FAIL'
export const GET_USERS_PENDING = 'GET_USERS_PENDING'

export type GET_USERS_SUCCESS_TYPE = {
	type: 'GET_USERS_SUCCESS',
	payload: Array<UserItem>
}
export type GET_USERS_FAIL_TYPE = {
	type: 'GET_USERS_FAIL',
	payload: {
		errors?: void | Object
	}
}
export type GET_USERS_PENDING_TYPE = {
	type: 'GET_USERS_PENDING'
}

export const GET_USERS = id => async (dispatch: Dispatch) => {
	dispatch({type: GET_USERS_PENDING})
	const result = await getUsersAPI({id})
	if (resultOK(result)) {
		dispatch({type: GET_USERS_SUCCESS, payload: result.data})
	} else {
		dispatch({type: GET_USERS_FAIL, payload: result.data})
	}
}
