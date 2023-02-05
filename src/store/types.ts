import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

export type ReduxErrorType = FetchBaseQueryError | SerializedError | undefined
