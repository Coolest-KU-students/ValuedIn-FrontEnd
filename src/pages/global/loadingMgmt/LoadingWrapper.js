import React, { useEffect } from 'react'
import { ToastWrapper } from '../notifications/ToastWrapper';

export const LoadingWrapper = ({loaded, children}) => {
    return loaded
        ? (<> {children} </>)
        :( 
        <div>
            Loading...
        </div>
        )
}
